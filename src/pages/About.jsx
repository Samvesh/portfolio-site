import { Page, PageHeader } from "../components/Page.jsx";
import { education, profile, skills } from "../data/portfolio.js";

export default function About() {
  return (
    <Page>
      <PageHeader eyebrow="About Me" number="01" title="Skills, education &amp; engineering base.">
        {profile.intro}
      </PageHeader>

      {/* ── Two-col layout: Skills + Education ── */}
      <div
        className="about-page-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* ── Skills ── */}
        <div>
          <div className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>
            <span className="section-number">01</span>
            <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block" }} />
            <span className="section-label">Core Tech Stack</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <div className="skill-group-name">{group.group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div>
          <div className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>
            <span className="section-number">02</span>
            <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block" }} />
            <span className="section-label">Education</span>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1.75rem",
            }}
          >
            {education.items.map((item, i) => (
              <div key={`${item.institute}-${item.year}`} className="edu-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div className="edu-institute">{item.institute}</div>
                    <div className="edu-degree">{item.degree}</div>
                    <div className="edu-result">{item.result}</div>
                  </div>
                  <span className="edu-year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote card — user's exact image as background */}
          <div
            style={{
              marginTop: "1.5rem",
              backgroundImage: "url('/quote-bg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
              overflow: "hidden",
              padding: "1.25rem 1.5rem 1.25rem 1rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "3.5rem",
                lineHeight: 0.85,
                color: "#c9a84c",
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              “
            </div>

            {/* Text */}
            <div style={{ maxWidth: "55%" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  lineHeight: "1.6",
                  margin: 0,
                  color: "#2c2a26",
                }}
              >
                Building things that work
                <br />
                beautifully,
                <br />
                not just things that work.
              </p>
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#c9a84c",
                  marginTop: "1.4rem",
                  marginBottom: "0.7rem",
                }}
              />
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Samvesh Saini
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
