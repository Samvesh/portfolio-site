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

          {/* Quote card with mountain landscape */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.75rem 1.75rem 1.5rem",
              background: "linear-gradient(135deg, #f5f0e8 0%, #ece5d8 100%)",
              borderRadius: "12px",
              color: "var(--ink)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(26,26,24,0.06)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {/* Mountain landscape SVG background */}
            <svg
              viewBox="0 0 400 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "65%",
                height: "auto",
                opacity: 0.45,
                pointerEvents: "none",
              }}
            >
              {/* Sun */}
              <circle cx="320" cy="32" r="16" fill="#c9a84c" opacity="0.7" />
              <circle cx="320" cy="32" r="22" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />

              {/* Far mountains */}
              <path d="M0 180 L60 70 L100 110 L140 55 L180 95 L220 40 L270 80 L310 50 L350 75 L400 60 L400 180 Z" fill="#d4c9b5" opacity="0.5" />

              {/* Mid mountains */}
              <path d="M0 180 L40 100 L80 130 L120 85 L160 120 L200 75 L240 110 L280 70 L330 100 L370 80 L400 95 L400 180 Z" fill="#c4b89e" opacity="0.55" />

              {/* Near mountains */}
              <path d="M0 180 L30 120 L70 145 L110 110 L150 135 L190 100 L230 130 L260 105 L300 125 L340 100 L380 120 L400 110 L400 180 Z" fill="#b5a88e" opacity="0.5" />

              {/* Snow caps on peaks */}
              <path d="M218 40 L225 52 L211 52 Z" fill="white" opacity="0.6" />
              <path d="M138 55 L146 68 L130 68 Z" fill="white" opacity="0.5" />
              <path d="M308 50 L316 64 L300 64 Z" fill="white" opacity="0.5" />

              {/* Trees - right cluster */}
              <path d="M340 180 L340 140 L335 140 L340 130 L333 130 L340 118 L347 130 L340 130 L345 140 L340 140 Z" fill="#8a7e6a" opacity="0.6" />
              <path d="M360 180 L360 148 L355 148 L360 138 L354 138 L360 128 L366 138 L360 138 L365 148 L360 148 Z" fill="#7d7263" opacity="0.55" />
              <path d="M380 180 L380 145 L375 145 L380 135 L374 135 L380 124 L386 135 L380 135 L385 145 L380 145 Z" fill="#8a7e6a" opacity="0.5" />
              <path d="M350 180 L350 152 L346 152 L350 144 L344 144 L350 134 L356 144 L350 144 L354 152 L350 152 Z" fill="#928672" opacity="0.5" />

              {/* Trees - mid cluster */}
              <path d="M290 180 L290 155 L286 155 L290 147 L285 147 L290 138 L295 147 L290 147 L294 155 L290 155 Z" fill="#8a7e6a" opacity="0.45" />
              <path d="M305 180 L305 150 L301 150 L305 142 L300 142 L305 133 L310 142 L305 142 L309 150 L305 150 Z" fill="#7d7263" opacity="0.4" />

              {/* Ground with slight gradient */}
              <path d="M200 180 L400 180 L400 165 Q350 155 300 160 Q250 165 200 160 Z" fill="#a89b84" opacity="0.25" />
            </svg>

            {/* Large quote mark */}
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "3.5rem",
                lineHeight: 1,
                color: "var(--gold)",
                marginBottom: "0.25rem",
                opacity: 0.85,
                fontWeight: 700,
              }}
            >
              {"\u201C\u201C"}
            </div>

            {/* Quote text */}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "0.92rem",
                lineHeight: "1.8",
                margin: 0,
                position: "relative",
                zIndex: 1,
                color: "var(--ink)",
                maxWidth: "70%",
              }}
            >
              Building things that work beautifully, not just things that work.
            </p>

            {/* Separator line */}
            <div
              style={{
                width: "36px",
                height: "2px",
                background: "var(--gold)",
                marginTop: "1.1rem",
                marginBottom: "0.7rem",
                opacity: 0.7,
                position: "relative",
                zIndex: 1,
              }}
            />

            {/* Name */}
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                margin: 0,
                fontWeight: 500,
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
