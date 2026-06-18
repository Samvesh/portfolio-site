import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Page } from "../components/Page.jsx";
import { contact, profile, projects, skills } from "../data/portfolio.js";

const stats = [
  { value: "8+", label: "Projects", sub: "Production builds" },
  { value: "12+", label: "Certifications", sub: "Coursera · NPTEL" },
  { value: "2+", label: "Internships", sub: "Web & CRM" },
  { value: "B.Tech", label: "Computer Science", sub: "Chandigarh University" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  const featured = projects[0];
  const secondaryProjects = projects.slice(1, 4);

  return (
    <Page>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
          minHeight: "calc(100vh - 68px - 8rem)",
          paddingBottom: "3rem",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          {/* Status badge */}
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: "1.75rem" }}>
            <span className="status-badge">
              <span className="status-dot" />
              Available for work
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.12)} className="hero-eyebrow">
            Samvesh | Full Stack Developer
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.18)} className="hero-h1">
            Crafting digital
            <br />
            solutions with
            <br />
            <span className="hero-h1-italic">purpose.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.26)} className="hero-sub">
            {profile.tagline}
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.34)}
            style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
          >
            <Link to="/projects" className="btn-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href={contact.resume} download className="btn-secondary">
              Download Resume
            </a>
          </motion.div>

          {/* Italic script — like reference image */}
          <motion.p
            {...fadeUp(0.44)}
            style={{
              marginTop: "2.5rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "0.82rem",
              lineHeight: "2",
              color: "var(--muted)",
            }}
          >
            Clean code.
            <br />
            Thoughtful design.
            <br />
            Impactful solutions.
          </motion.p>
        </div>

        {/* ── Geometric Art ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="hero-geo-wrap"
        >
          <HeroGeo />
        </motion.div>
      </section>

      {/* ── Stats Row ─────────────────────────────────── */}
      <motion.div
        {...fadeUp(0.42)}
        className="stats-row"
        style={{ marginBottom: "5rem" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-cell">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </motion.div>

      {/* ── About Teaser ──────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          marginBottom: "5rem",
        }}
      >
        <div>
          <div className="section-eyebrow">
            <span className="section-number">01</span>
            <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block" }} />
            <span className="section-label">About Me</span>
          </div>
          <h2 className="section-h2">
            Turning ideas into
            <br />
            real <span className="accent">digital</span> products.
          </h2>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.9rem",
              lineHeight: "1.85",
              color: "var(--muted)",
              maxWidth: "44ch",
            }}
          >
            {profile.intro}
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <Link to="/about" className="btn-ghost">
              More About Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Skill tags preview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
      </section>

      {/* ── Featured Projects ──────────────────────────── */}
      <section style={{ marginBottom: "5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div>
            <div className="section-eyebrow">
              <span className="section-number">02</span>
              <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block" }} />
              <span className="section-label">Selected Work</span>
            </div>
            <h2 className="section-h2">Featured projects</h2>
          </div>
          <Link to="/projects" className="btn-ghost" style={{ marginBottom: "0.25rem" }}>
            All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Featured card */}
        <div className="project-card" style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div className="project-img-wrap" style={{ minHeight: "280px" }}>
              <img
                src={featured.image}
                alt={featured.name}
                className="project-img"
                style={{ height: "100%", minHeight: "280px" }}
              />
            </div>
            <div className="project-body">
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <span className="featured-badge">Featured</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.5rem" }}>
                {featured.tech.slice(0, 5).map((t) => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>
              <h3 className="project-name">{featured.name}</h3>
              <p className="project-subtitle">{featured.subtitle}</p>
              <p className="project-desc">{featured.problem}</p>
              <div className="project-links-row">
                {featured.live && !featured.live.includes("github") && (
                  <a href={featured.live} target="_blank" rel="noreferrer" className="project-link-btn">
                    Live Link
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </a>
                )}
                {featured.live && featured.live.includes("github") && (
                  <a href={featured.live} target="_blank" rel="noreferrer" className="project-link-btn github-btn">
                    GitHub Link
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {secondaryProjects.map((project) => (
            <div key={project.name} className="project-card">
              {project.image && (
                <div className="project-img-wrap" style={{ height: "160px" }}>
                  {project.image.endsWith(".svg") ? (
                    <div style={{ height: "100%", display: "grid", placeItems: "center", background: "var(--cream-dark)" }}>
                      <img src={project.image} alt={project.name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                    </div>
                  ) : (
                    <img src={project.image} alt={project.name} className="project-img" style={{ height: "160px" }} />
                  )}
                </div>
              )}
              <div className="project-body">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.5rem" }}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-name" style={{ fontSize: "1.05rem" }}>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-links-row">
                  {project.live && !project.live.includes("github") && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn">
                      Live Link
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </a>
                  )}
                  {project.live && project.live.includes("github") && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn github-btn">
                      GitHub Link
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 9L9 2M9 2H5M9 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* ── Hero Geometric Composition ── */
function HeroGeo() {
  return (
    <div
      className="float-geo"
      style={{
        position: "relative",
        width: "360px",
        height: "380px",
        flexShrink: 0,
      }}
    >
      {/* Dot grid top-right */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          right: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 8px)",
          gap: "7px",
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#a8a49c",
              display: "block",
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Large cream circle */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          right: "10%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "#e8e0d0",
          border: "1px solid rgba(26,26,24,0.1)",
        }}
      />

      {/* Dark half-moon at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "8%",
          width: "200px",
          height: "100px",
          borderRadius: "0 0 100px 100px",
          background: "#1a1a18",
          transform: "rotate(0deg)",
        }}
      />

      {/* Horizontal rule */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "4%",
          right: "4%",
          height: "1px",
          background: "#1a1a18",
          opacity: 0.35,
        }}
      />

      {/* Vertical rule */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "4%",
          bottom: "4%",
          width: "1px",
          background: "#1a1a18",
          opacity: 0.35,
        }}
      />

      {/* Gold dot at intersection */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#c9a84c",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 0 4px rgba(201,168,76,0.18)",
        }}
      />

      {/* Small decorative ring */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          right: "8%",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "1px solid rgba(26,26,24,0.18)",
          background: "transparent",
        }}
      />

      {/* Italic caption */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "2%",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "0.6rem",
          lineHeight: "2.1",
          color: "#7a7870",
          textAlign: "right",
          opacity: 0.8,
        }}
      >
        Clean code.
        <br />
        Thoughtful design.
        <br />
        Impactful solutions.
      </div>
    </div>
  );
}
