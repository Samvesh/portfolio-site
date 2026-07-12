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
  ALLOWED_ORIGIN,
  PORT = 3000,
} = process.env;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SHEET_ID) {
  console.error(
    "❌  Missing required env vars: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, SHEET_ID"
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

const jwtClient = new google.auth.JWT(
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth: jwtClient });

// ─── In-Memory Rate Limiter ─────────────────────────────────────────────────────

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 30; // max requests per IP per window
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
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:M",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });
  } catch (err) {
    const status = err?.response?.status || err?.code || "unknown";
    console.error(
      `⚠️  Sheets API error (attempt ${attempt}): status=${status}, message=${err.message}`
    );

    if (attempt < 2) {
      console.log("↻  Retrying Sheets API call…");
      return appendRowWithRetry(row, attempt + 1);
    }

    // Log enough detail to debug without leaking the private key
    console.error("❌  Sheets API call failed after retry.", {
      spreadsheetId: SHEET_ID,
      serviceAccountEmail: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      errorStatus: status,
      errorMessage: err.message,
    });
    throw err;
  }
}

// ─── Express App ────────────────────────────────────────────────────────────────

const app = express();

// CORS — restricted to the allowed origin
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse JSON bodies (application/json)
app.use(express.json());

// Parse text/plain bodies (navigator.sendBeacon quirk)
app.use(express.text({ type: "text/plain" }));

// ─── Health Check ───────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ─── Track Endpoint ─────────────────────────────────────────────────────────────

app.post("/api/ev", async (req, res) => {
  // 1. Rate limiting
  const ip = getVisitorIP(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Rate limit exceeded. Try again later." });
  }

  // 2. Parse body — handle both JSON and text/plain (sendBeacon sends text/plain)
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
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
  } = body || {};

  if (!eventType) {
    return res.status(400).json({ error: "Missing required field: eventType" });
  }

  if (!VALID_EVENT_TYPES.has(eventType)) {
    return res.status(400).json({
      error: `Invalid eventType "${eventType}". Must be one of: ${[...VALID_EVENT_TYPES].join(", ")}`,
    });
  }

  if (!sessionId) {
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

  // 5. Build row in exact column order:
  //    Timestamp | Session ID | Event Type | IP | Device | Browser | OS |
  //    Screen Res | Language | Timezone | Referrer | Visitor Type | Detail
  const row = [
    timestamp,
    sessionId,
    eventType,
    ip,
    deviceType,
    browser,
    os,
    screenResolution,
    language,
    timezone,
    categorizedReferrer,
    visitorType,
    typeof detail === "object" ? JSON.stringify(detail) : String(detail),
  ];

  // 6. Append to Google Sheet
  try {
    await appendRowWithRetry(row);
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to log event. Please try again." });
  }
});

// ─── Start Server ───────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`🚀  Analytics server running on port ${PORT}`);
  console.log(`🔒  CORS origin: ${ALLOWED_ORIGIN}`);
  console.log(`📊  Sheet ID: ${SHEET_ID}`);
});
