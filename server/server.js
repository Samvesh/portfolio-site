import "dotenv/config";
import express from "express";
import cors from "cors";
import { google } from "googleapis";
import UAParser from "ua-parser-js";

// ─── Config ─────────────────────────────────────────────────────────────────────

const {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  SHEET_ID,
  ALLOWED_ORIGIN = "",
  PORT = 3000,
} = process.env;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SHEET_ID) {
  console.error(
    "❌ Missing required env vars: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, SHEET_ID"
  );
  process.exit(1);
}

const VALID_EVENT_TYPES = new Set([
  "page_view",
  "session_end",
  "project_click",
  "resume_download",
  "contact_click",
]);

// ─── Google Sheets Auth ─────────────────────────────────────────────────────────

// Clean private key: remove wrapping quotes if pasted with them and replace escaped newlines
const cleanedPrivateKey = (GOOGLE_PRIVATE_KEY || "")
  .trim()
  .replace(/^["']|["']$/g, "")
  .replace(/\\n/g, "\n");

const cleanedEmail = (GOOGLE_SERVICE_ACCOUNT_EMAIL || "").trim();
const cleanedSheetId = (SHEET_ID || "").trim();

const jwtClient = new google.auth.JWT(
  cleanedEmail,
  null,
  cleanedPrivateKey,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth: jwtClient });

// ─── In-Memory Rate Limiter ─────────────────────────────────────────────────────

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 60; // max requests per IP per window (allows smooth section navigation)
const rateLimitMap = new Map(); // ip -> { count, resetAt }

/** Cleans up expired entries every 5 minutes to prevent unbounded memory growth */
setInterval(() => {
  const now = Date.now();
  for (const [ip, bucket] of rateLimitMap) {
    if (now > bucket.resetAt) rateLimitMap.delete(ip);
  }
}, 5 * 60_000);

function isRateLimited(ip) {
  const now = Date.now();
  let bucket = rateLimitMap.get(ip);

  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, bucket);
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function getVisitorIP(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function parseDevice(userAgent) {
  const parser = new UAParser(userAgent);
  const device = parser.getDevice();
  const browser = parser.getBrowser();
  const os = parser.getOS();

  let deviceType = "Desktop";
  if (device.type === "mobile") deviceType = "Mobile";
  else if (device.type === "tablet") deviceType = "Tablet";

  const browserStr = [browser.name, browser.version].filter(Boolean).join(" ");
  const osStr = [os.name, os.version].filter(Boolean).join(" ");

  return { deviceType, browser: browserStr || "Unknown", os: osStr || "Unknown" };
}

/** Geolocate IP via free ip-api.com — no API key required, 45 req/min limit */
async function geolocateIP(ip) {
  const fallback = { location: "Unknown", isp: "Unknown" };
  // Skip private / loopback IPs
  if (!ip || ip === "unknown" || ip.startsWith("127.") || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
    return fallback;
  }
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000); // 3s timeout
    const res = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,city,regionName,country,isp`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    const data = await res.json();
    if (data.status === "success") {
      const parts = [data.city, data.regionName, data.country].filter(Boolean);
      return {
        location: parts.join(", ") || "Unknown",
        isp: data.isp || "Unknown",
      };
    }
  } catch {
    // Geolocation is best-effort — never block analytics
  }
  return fallback;
}

function categorizeReferrer(referrer) {
  if (!referrer || referrer === "" || referrer === "direct") return "Direct";

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    if (hostname.includes("linkedin.com")) return "LinkedIn";
    if (hostname.includes("github.com") || hostname.includes("github.io"))
      return "GitHub";
    if (
      hostname.includes("google.com") ||
      hostname.includes("google.co") ||
      hostname.includes("googleapis.com")
    )
      return "Google";
    return hostname; // raw domain for anything else
  } catch {
    return referrer; // if URL parsing fails, return raw string
  }
}

/** Append a row to Google Sheets with 1 retry on transient failure */
async function appendRowWithRetry(row, attempt = 1) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: cleanedSheetId,
      range: "Sheet1!A:T",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });
  } catch (err) {
    const status = err?.response?.status || err?.code || "unknown";
    console.error(
      `⚠️ Sheets API error (attempt ${attempt}): status=${status}, message=${err.message}`
    );

    if (attempt < 2) {
      console.log("↻ Retrying Sheets API call…");
      return appendRowWithRetry(row, attempt + 1);
    }

    // Log enough detail to debug without leaking the private key
    console.error("❌ Sheets API call failed after retry.", {
      spreadsheetId: cleanedSheetId,
      serviceAccountEmail: cleanedEmail,
      errorStatus: status,
      errorMessage: err.message,
    });
    throw err;
  }
}

// ─── Express App ────────────────────────────────────────────────────────────────

const app = express();

// Sanitize ALLOWED_ORIGIN: remove newlines, carriage returns, trailing slashes, quotes, and whitespace
const allowedOrigins = (ALLOWED_ORIGIN || "")
  .split(/[\r\n,]+/)
  .map((o) => o.trim().replace(/^["']|["']$/g, "").replace(/\/+$/, ""))
  .filter(Boolean);

// CORS middleware using dynamic origin function to avoid header formatting errors
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, server-to-server, health pings)
      if (!origin) return callback(null, true);

      const cleanOrigin = origin.trim().replace(/[\r\n]/g, "").replace(/\/+$/, "");

      if (
        allowedOrigins.length === 0 ||
        allowedOrigins.includes(cleanOrigin) ||
        allowedOrigins.includes("*") ||
        cleanOrigin.endsWith(".vercel.app") ||
        cleanOrigin.includes("github.io") ||
        cleanOrigin.startsWith("http://localhost:") ||
        cleanOrigin.startsWith("http://127.0.0.1:")
      ) {
        return callback(null, true);
      }

      console.warn(`⚠️ CORS blocked origin: "${origin}". Allowed: [${allowedOrigins.join(", ")}]`);
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse JSON bodies (application/json)
app.use(express.json({ limit: "1mb" }));

// Parse text/plain bodies (navigator.sendBeacon quirk)
app.use(express.text({ type: ["text/plain", "text/*"], limit: "1mb" }));

// ─── Health Check ───────────────────────────────────────────────────────────────

app.get(["/", "/health"], (req, res) => {
  const ip = getVisitorIP(req);
  console.log(`🩺 [Health Check] Pinged from ${ip} at ${new Date().toISOString()}`);
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Track Endpoint (Accepts POST /, /api/ev, and /api/track) ────────────────────

app.post(["/", "/api/ev", "/api/track"], async (req, res) => {
  // 1. Rate limiting
  const ip = getVisitorIP(req);
  if (isRateLimited(ip)) {
    console.warn(`⚠️ [Rate Limited] IP: ${ip}`);
    return res.status(429).json({ error: "Rate limit exceeded. Try again later." });
  }

  // 2. Parse body — handle both JSON and text/plain (sendBeacon sends text/plain)
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      console.warn(`⚠️ [Bad Request] Invalid JSON from IP: ${ip}`);
      return res.status(400).json({ error: "Invalid JSON in request body." });
    }
  }

  // 3. Input validation
  const {
    sessionId,
    eventType,
    detail = "",
    screenResolution = "",
    language = "",
    timezone = "",
    referrer = "",
    visitorType = "",
    // ── New auto-fetched client fields (no permission required) ──
    connectionType = "",
    pageLoadTime = "",
    touchSupport = "",
    colorDepth = "",
    platform = "",
  } = body || {};

  if (!eventType) {
    console.warn(`⚠️ [Validation] Missing eventType from IP: ${ip}`);
    return res.status(400).json({ error: "Missing required field: eventType" });
  }

  if (!VALID_EVENT_TYPES.has(eventType)) {
    console.warn(`⚠️ [Validation] Invalid eventType "${eventType}" from IP: ${ip}`);
    return res.status(400).json({
      error: `Invalid eventType "${eventType}". Must be one of: ${[...VALID_EVENT_TYPES].join(", ")}`,
    });
  }

  if (!sessionId) {
    console.warn(`⚠️ [Validation] Missing sessionId from IP: ${ip}`);
    return res.status(400).json({ error: "Missing required field: sessionId" });
  }

  // 4. Derive server-side info from request
  const userAgent = req.headers["user-agent"] || "";
  const { deviceType, browser, os } = parseDevice(userAgent);
  const categorizedReferrer = categorizeReferrer(referrer);
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // 4b. Geolocate visitor IP (best-effort, non-blocking on failure)
  const { location, isp } = await geolocateIP(ip);

  console.log(
    `📥 [Event] "${eventType}" | Session: ${sessionId.slice(0, 8)}... | IP: ${ip} | Device: ${deviceType} | Detail: ${typeof detail === "object" ? JSON.stringify(detail) : detail}`
  );

  // 5. Build row in exact column order (19 columns A–T, minus one):
  //    Timestamp | Session ID | Event Type | IP | Location | ISP | Device |
  //    Browser | OS | Screen Res | Language | Timezone | Referrer |
  //    Visitor Type | Connection Type | Page Load Time | Touch Support |
  //    Color Depth | Platform | Detail
  const row = [
    timestamp,
    sessionId,
    eventType,
    ip,
    location,
    isp,
    deviceType,
    browser,
    os,
    screenResolution,
    language,
    timezone,
    categorizedReferrer,
    visitorType,
    connectionType,
    pageLoadTime,
    touchSupport,
    colorDepth,
    platform,
    typeof detail === "object" ? JSON.stringify(detail) : String(detail),
  ];

  // 6. Append to Google Sheet
  try {
    await appendRowWithRetry(row);
    console.log(`✅ [Logged] "${eventType}" successfully written to Google Sheet`);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(`❌ [Failed] Could not record event "${eventType}": ${err.message}`);
    res.status(500).json({ error: "Failed to log event. Please try again." });
  }
});

// ─── Start Server ───────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`🚀 Analytics server running on port ${PORT}`);
  console.log(`🔒 Allowed CORS origins: [${allowedOrigins.join(", ") || "*"}]`);
  console.log(`📊 Target Google Sheet ID: ${cleanedSheetId}`);
});

