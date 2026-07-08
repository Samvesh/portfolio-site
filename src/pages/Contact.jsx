import { Page, PageHeader } from "../components/Page.jsx";
import { contact } from "../data/portfolio.js";
import { trackContactClick, trackResumeDownload } from "../analytics.js";

const contactItems = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: EmailIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Samvesh",
    href: contact.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: PhoneIcon,
  },
  {
    label: "Location",
    value: contact.location,
    href: null,
    icon: LocationIcon,
  },
];

export default function Contact() {
  return (
    <Page>
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* ── Left: copy + CTA ── */}
        <div>
          <PageHeader eyebrow="Contact" number="05" title="Let's work together." />

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.85",
              color: "var(--muted)",
              maxWidth: "44ch",
              marginBottom: "2rem",
            }}
          >
            Open to full-time roles, freelance projects, and interesting collaborations. Drop a
            message and I'll get back within 24 hours.
          </p>

          <a href={`mailto:${contact.email}`} className="btn-primary" onClick={() => trackContactClick("email")}>
            Send an Email
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Geo decoration */}
          <div
            style={{
              marginTop: "3rem",
              position: "relative",
              width: "160px",
              height: "160px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid var(--border)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "20%",
                right: "20%",
                bottom: "20%",
                borderRadius: "50%",
                border: "1px solid var(--border-gold)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: "1px",
                background: "var(--border)",
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "var(--border)",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--gold)",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>

        {/* ── Right: contact cards ── */}
        <div style={{ display: "grid", gap: "0.85rem" }}>
          {contactItems.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  ...(item.external ? { target: "_blank", rel: "noreferrer" } : {}),
                }
              : {};

            return (
              <Wrapper key={item.label} {...wrapperProps} className="contact-item" onClick={() => item.href && trackContactClick(item.label.toLowerCase())}>
                <div className="contact-icon">
                  <Icon />
                </div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </Wrapper>
            );
          })}

          {/* Resume download */}
          <a
            href={contact.resume}
            download
            className="contact-item"
            onClick={() => trackResumeDownload()}
            style={{ borderColor: "var(--border-gold)", background: "rgba(201,168,76,0.04)" }}
          >
            <div
              className="contact-icon"
              style={{ borderColor: "var(--border-gold)", background: "rgba(201,168,76,0.08)", color: "var(--gold)" }}
            >
              <ResumeIcon />
            </div>
            <div>
              <div className="contact-label">Resume</div>
              <div className="contact-value" style={{ color: "var(--gold)" }}>
                Download PDF
              </div>
            </div>
          </a>
        </div>
      </div>
    </Page>
  );
}

/* ── Icon Components ── */
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="3.5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 5.5l8 5 8-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 1C4.58 1 1 4.58 1 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.013 8.013 0 0017 9c0-4.42-3.58-8-8-8z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 7v7M4 4.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14v-4c0-1.1.9-2 2-2s2 .9 2 2v4M8 7v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 2h3l1.5 3.5-1.75 1.25c.74 1.56 2 2.82 3.56 3.56L11.5 8.5 15 10v3c0 .83-.67 1.5-1.5 1.5C6.27 14.5 3.5 7.73 3.5 3.5 3.5 2.67 4.17 2 5 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="1" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 5h6M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
