import { Page, PageHeader } from "../components/Page.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Page>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <PageHeader
          eyebrow="Selected Work"
          number="02"
          title="Production builds, not template demos."
        >
          Real projects spanning AI video auditing, full-stack nutrition platforms, REST task
          management, data science analysis, trading bots, and desktop simulations.
        </PageHeader>
        <a
          href="https://github.com/Samvesh"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ alignSelf: "flex-start", marginTop: "1rem", whiteSpace: "nowrap" }}
        >
          View GitHub
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H6M10 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      {/* ── Featured Project (large) ── */}
      <div className="project-card" style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
          }}
        >
          <div
            className="project-img-wrap"
            style={{ minHeight: "320px", borderBottom: "none", borderRight: "1px solid var(--border)" }}
          >
            <img
              src={featured.image}
              alt={`${featured.name} screenshot`}
              className="project-img"
              style={{ height: "100%", minHeight: "320px" }}
            />
          </div>

          <div className="project-body" style={{ padding: "2.5rem" }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}
            >
              <span className="featured-badge">Featured</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
              {featured.tech.slice(0, 7).map((t) => (
                <span key={t} className="project-tech-tag">{t}</span>
              ))}
            </div>

            <h2 className="project-name" style={{ fontSize: "1.65rem" }}>{featured.name}</h2>
            <p className="project-subtitle">{featured.subtitle}</p>

            <p className="project-desc" style={{ marginTop: "1.25rem" }}>{featured.problem}</p>
            <p style={{ fontSize: "0.83rem", lineHeight: "1.75", color: "var(--muted-light)" }}>
              {featured.how}
            </p>

            <div className="project-links-row">
              {featured.live && !featured.live.includes("github") && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Live Link
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Rest of Projects Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Page>
  );
}

function ProjectCard({ project }) {
  const isGithubLink = project.live?.includes("github");
  const hasImage = !!project.image;
  const isSvg = project.image?.endsWith(".svg");

  return (
    <div className="project-card">
      {hasImage && (
        <div className="project-img-wrap" style={{ height: "175px" }}>
          {isSvg ? (
            <div
              style={{
                height: "175px",
                display: "grid",
                placeItems: "center",
                background: "var(--cream-dark)",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="project-img"
              style={{ height: "175px" }}
            />
          )}
        </div>
      )}


      <div className="project-body">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.6rem" }}>
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="project-tech-tag">{t}</span>
          ))}
        </div>

        <h2 className="project-name" style={{ fontSize: "1.15rem" }}>{project.name}</h2>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-desc">{project.problem}</p>

        {project.features && project.features.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            {project.features.slice(0, 3).map((f) => (
              <li
                key={f}
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="project-links-row">
          {project.live && !isGithubLink && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
            >
              Live Link
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          )}
          {project.live && isGithubLink && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn github-btn"
            >
              GitHub Link
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

