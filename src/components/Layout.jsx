import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/portfolio.js";
import { GeometricLogo } from "./GeometricLogo.jsx";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Certifications", to: "/certifications" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    setMobileOpen(false);
    prevPath.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-canvas">
      <ScrollToTop />
      <div className="grain" />

      {/* ── Navbar ── */}
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Geometric Logo */}
          <NavLink to="/" aria-label="Home">
            <GeometricLogo />
          </NavLink>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={contact.resume}
            download
            className="nav-resume-btn"
            aria-label="Download Resume"
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}
            />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span
              style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={contact.resume}
            download
            className="btn-primary"
            style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          >
            Download Resume
          </a>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main>{children}</main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">© 2025 Samvesh Saini. All rights reserved.</p>
          <div className="footer-links">
            <a href={contact.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={`mailto:${contact.email}`} className="footer-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
