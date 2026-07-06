import { Page, PageHeader } from "../components/Page.jsx";
import { education, profile, skills } from "../data/portfolio.js";

export default function About() {
  return (
    <Page>
      <PageHeader eyebrow="About Me" number="01" title="Skills, education & engineering base.">
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

          {/* Decorative geometric block */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "var(--ink)",
              borderRadius: "4px",
              color: "var(--cream)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* background geo */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "40%",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: "1.75",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              "Building things that work beautifully, not just things that work."
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginTop: "1rem",
                marginBottom: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              Samvesh Saini
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
