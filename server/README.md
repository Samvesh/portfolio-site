# Portfolio Analytics Server

A lightweight Node.js/Express backend that tracks portfolio visitor analytics and logs events to a Google Sheet via the Sheets API.

## Features

- **Single POST endpoint** (`/api/track`) for event tracking
- **Health check** (`GET /health`) for uptime monitoring
- Accepts both `application/json` and `text/plain` bodies (supports `navigator.sendBeacon`)
- Server-side device/browser/OS detection via `ua-parser-js`
- Referrer categorization (LinkedIn / GitHub / Google / Direct / raw domain)
- In-memory rate limiting (30 req/IP/min) — no Redis needed
- Input validation for allowed event types
- Google Sheets append with 1-retry on transient errors
- CORS locked to a single allowed origin

## Event Types

| Event              | Description                  |
| ------------------ | ---------------------------- |
| `page_view`        | User navigated to a page     |
| `session_end`      | Browser tab closed / left    |
| `project_click`    | Clicked a project card/link  |
| `resume_download`  | Downloaded the resume        |
| `contact_click`    | Clicked a contact link       |

## Google Sheet Columns (A–M)

| Timestamp | Session ID | Event Type | IP | Device | Browser | OS | Screen Res | Language | Timezone | Referrer | Visitor Type | Detail |
| --------- | ---------- | ---------- | -- | ------ | ------- | -- | ---------- | -------- | -------- | -------- | ------------ | ------ |

---

## Local Setup

### 1. Prerequisites

- Node.js ≥ 18
- A Google Cloud project with the Sheets API enabled
- A service account with Editor access to your Google Sheet

### 2. Install dependencies

```bash
cd server
npm install
```

### 3. Configure environment

Copy the example and fill in real values:

```bash
cp .env.example .env
```

| Variable                        | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`  | `client_email` from your service account JSON key        |
| `GOOGLE_PRIVATE_KEY`            | `private_key` from the JSON key (keep the `\n` escapes)  |
| `SHEET_ID`                      | The ID from your Google Sheet URL                        |
| `ALLOWED_ORIGIN`                | Your portfolio's origin, e.g. `https://you.github.io`   |
| `PORT`                          | Server port (default `3000`, Render sets automatically)  |

> **Important:** Make sure the service account email has **Editor** access on the Google Sheet (Share → add the email).

### 4. Run locally

```bash
npm run dev     # uses --watch for auto-restart
# or
npm start       # production mode
```

### 5. Test it

```bash
# Health check
curl http://localhost:3000/health

# Track an event
curl -X POST http://localhost:3000/api/track \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "test-123",
    "eventType": "page_view",
    "screenResolution": "1920x1080",
    "language": "en-US",
    "timezone": "America/New_York",
    "referrer": "https://linkedin.com/in/someone",
    "visitorType": "new"
  }'
```

---

## Deploy to Render

### 1. Push to GitHub

```bash
git add server/
git commit -m "Add analytics backend"
git push
```

### 2. Create a new Web Service on Render

1. Go to [render.com](https://render.com) → **New** → **Web Service**
2. Connect your GitHub repo
3. Configure:
   | Setting          | Value              |
   | ---------------- | ------------------ |
   | **Root Directory** | `server`          |
   | **Runtime**        | Node              |
   | **Build Command**  | `npm install`     |
   | **Start Command**  | `npm start`       |

4. Add **Environment Variables** in the Render dashboard:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`  (paste the full key including `-----BEGIN/END-----`)
   - `SHEET_ID`
   - `ALLOWED_ORIGIN`

5. Deploy! Render will assign a URL like `https://your-service.onrender.com`.

### 3. Verify

```bash
curl https://your-service.onrender.com/health
# → { "status": "ok" }
```

### 4. Update your frontend

Point your frontend analytics calls to the Render URL:

```js
const ANALYTICS_URL = "https://your-service.onrender.com/api/track";
```

---

## Frontend Integration Example

```js
// Fire-and-forget with sendBeacon (works on page unload)
navigator.sendBeacon(
  "https://your-service.onrender.com/api/track",
  JSON.stringify({
    sessionId: crypto.randomUUID(),
    eventType: "page_view",
    screenResolution: `${screen.width}x${screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || "direct",
    visitorType: "new",
  })
);
```

---

## Security Notes

- The `.gitignore` excludes `.env` and `*.json` service account key files
- CORS is restricted to `ALLOWED_ORIGIN` only
- Private key is never logged — only the email and error details on failure
- Rate limiting prevents abuse without external dependencies
