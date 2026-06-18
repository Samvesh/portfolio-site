import { Page, PageHeader } from "../components/Page.jsx";
import { experiences } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Page>
      <PageHeader eyebrow="Experience" number="03" title="Where I have worked.">
        Internship work across CRM-assisted outreach, communication campaigns, web page design,
        responsive improvements, and UI/UX review.
      </PageHeader>

      <div style={{ display: "grid", gap: "2rem", maxWidth: "860px" }}>
        {experiences.map((exp, index) => (
          <div key={exp.company} className="timeline-entry">
            <div
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "2rem",
                transition: "border-color 0.22s, box-shadow 0.22s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(26,26,24,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  {(exp.duration || exp.location) && (
                    <div className="timeline-meta">
                      {exp.duration || exp.location}
                    </div>
                  )}
                </div>

                {/* Index number */}
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "var(--cream-dark)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Details grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.65rem",
                }}
              >
                {exp.details.map((detail) => (
                  <div key={detail} className="timeline-detail">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* ── CTA block ── */}
        <div
          style={{
            padding: "2rem",
            background: "var(--cream)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.4rem",
              }}
            >
              Open to opportunities
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Available for full-time roles & freelance work
            </p>
          </div>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </Page>
  );
}
