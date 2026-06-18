import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Page, PageHeader } from "../components/Page.jsx";
import { certificationFilters, certifications } from "../data/portfolio.js";

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible = useMemo(() => {
    if (activeFilter === "All") return certifications;
    return certifications.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <Page>
      <PageHeader
        eyebrow="Credentials"
        number="04"
        title="Certifications that strengthen the stack."
      >
        Coursera, NPTEL, and LinkedIn Learning certifications grouped by practical engineering
        direction.
      </PageHeader>

      {/* Filter row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {certificationFilters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn${activeFilter === f ? " active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.1rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((cert, i) => (
            <motion.div
              key={cert.name}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <div className="cert-card">
                {/* Org + result row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span className="cert-org">{cert.organization}</span>
                  {cert.result && (
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        color: "var(--gold)",
                        fontWeight: 500,
                      }}
                    >
                      {cert.result}
                    </span>
                  )}
                </div>

                <h2 className="cert-name">{cert.name}</h2>

                <span className="cert-category" style={{ marginBottom: "0.75rem" }}>
                  {cert.category}
                </span>

                <p className="cert-desc">{cert.description}</p>

                {/* Decorative bottom line */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    height: "1px",
                    background: "linear-gradient(to right, var(--gold), transparent)",
                    opacity: 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Page>
  );
}
