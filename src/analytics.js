/**
 * Portfolio Analytics – lightweight tracker
 *
 * Sends events to the analytics backend via sendBeacon (fire-and-forget)
 * with a fetch fallback. Zero impact on page performance.
 */

const ANALYTICS_URL =
  import.meta.env.VITE_ANALYTICS_URL ||
  "https://portfolio-site-mgc4.onrender.com/api/track";

/* ── Session & Visitor ─────────────────────────────────────────────── */

function getSessionId() {
  let id = sessionStorage.getItem("_sid");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("_sid", id);
  }
  return id;
}

function getVisitorType() {
  const key = "_visited";
  if (localStorage.getItem(key)) return "returning";
  localStorage.setItem(key, "1");
  return "new";
}

/* ── Shared payload builder ────────────────────────────────────────── */

function buildPayload(eventType, detail = "") {
  return JSON.stringify({
    sessionId: getSessionId(),
    eventType,
    detail: typeof detail === "object" ? JSON.stringify(detail) : detail,
    screenResolution: `${screen.width}x${screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || "direct",
    visitorType: getVisitorType(),
  });
}

/* ── Send helper (sendBeacon → fetch fallback) ─────────────────────── */

function send(eventType, detail) {
  const payload = buildPayload(eventType, detail);

  // sendBeacon is fire-and-forget — ideal for analytics, works on page unload
  if (navigator.sendBeacon) {
    const queued = navigator.sendBeacon(ANALYTICS_URL, payload);
    if (queued) return;
  }

  // Fallback to fetch (keepalive ensures it survives page unload)
  fetch(ANALYTICS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {
    /* analytics should never break the site */
  });
}

/* ── Public API ────────────────────────────────────────────────────── */

/** Track a page view — call once per route navigation */
export function trackPageView(pagePath) {
  send("page_view", pagePath || window.location.pathname);
}

/** Track a project link click */
export function trackProjectClick(projectName) {
  send("project_click", projectName);
}

/** Track resume download */
export function trackResumeDownload() {
  send("resume_download", "");
}

/** Track a contact link click (email, github, linkedin, etc.) */
export function trackContactClick(channel) {
  send("contact_click", channel);
}

/** Track session end — bind to beforeunload */
export function trackSessionEnd() {
  send("session_end", "");
}

/* ── Auto-bind session end ─────────────────────────────────────────── */

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", trackSessionEnd);
}
