import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageView } from "../analytics.js";

export function Page({ children }) {
  return (
    <div className="page-wrap">
      {children}
    </div>
  );
}


export function PageHeader({ eyebrow, number = "01", title, children }) {
  return (
    <section style={{ marginBottom: "3.5rem", maxWidth: "720px" }}>
      <div className="section-eyebrow">
        <span className="section-number">{number}</span>
        <span
          style={{
            width: "28px",
            height: "1px",
            background: "var(--gold)",
            display: "block",
          }}
        />
        <span className="section-label">{eyebrow}</span>
      </div>
      <h1 className="section-h2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
        {title}
      </h1>
      {children && (
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "var(--muted)",
            maxWidth: "58ch",
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
}
