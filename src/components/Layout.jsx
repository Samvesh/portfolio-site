import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { contact } from "../data/portfolio.js";
import { GeometricLogo } from "./GeometricLogo.jsx";
import { trackPageView } from "../analytics.js";

const navItems = [
  { label: "Home", to: "/", id: "home" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "Experience", to: "/experience", id: "experience" },
  { label: "Certifications", to: "/certifications", id: "certifications" },
  { label: "About", to: "/about", id: "about" },
  { label: "Contact", to: "/contact", id: "contact" },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingToRef = useRef(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track initial page view on first mount
  useEffect(() => {
    trackPageView(window.location.pathname || "/");
  }, []);

  // Sync URL and tracker with current active scroll section
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const visibleRatios = {};

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToRef.current) return;

        entries.forEach((entry) => {
          visibleRatios[entry.target.id] = entry.intersectionRatio;
        });

        let maxRatio = 0;
        let activeId = "";
        for (const [id, ratio] of Object.entries(visibleRatios)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            activeId = id;
          }
        }

        if (activeId && maxRatio > 0.15) {
          const item = navItems.find((n) => n.id === activeId);
          if (item && window.location.pathname !== item.to) {
            navigate(item.to, { replace: true });
            trackPageView(item.to);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-68px 0px 0px 0px", // offset by header height
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [navigate]);

  // Support deep linking on initial page load
  useEffect(() => {
    const path = window.location.pathname;
    if (path && path !== "/") {
      const item = navItems.find((n) => n.to === path);
      if (item) {
        isScrollingToRef.current = true;
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "instant" });
          }
          isScrollingToRef.current = false;
        }, 150);
      }
    }
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const element = document.getElementById(item.id);
    if (element) {
      isScrollingToRef.current = true;
      element.scrollIntoView({ behavior: "smooth" });
      navigate(item.to, { replace: true });
      trackPageView(item.to);
      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 800); // release spy lock after scroll finishes
    }
    setMobileOpen(false);
  };

  return (
    <div className="site-canvas">
      <div className="grain" />

      {/* ── Navbar ── */}
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Geometric Logo */}
          <NavLink
            to="/"
            aria-label="Home"
            onClick={(e) => handleNavClick(e, navItems[0])}
          >
            <GeometricLogo />
          </NavLink>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={(e) => handleNavClick(e, item)}
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
              onClick={(e) => handleNavClick(e, item)}
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
          <p className="footer-copy">Samvesh Saini</p>
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
