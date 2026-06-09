import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/portfolio.js";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Certifications", to: "/certifications" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 42, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 42, damping: 18 });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateMouse = (event) => {
      mx.set((event.clientX / window.innerWidth - 0.5) * 24);
      my.set((event.clientY / window.innerHeight - 0.5) * 24);
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [mx, my]);

  return (
    <div className="min-h-screen text-slate-100">
      <div className="site-bg" />
      <div className="noise" />
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.14),transparent_38rem)]"
        style={{ x: smoothX, y: smoothY }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07090b]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:h-[102px] lg:px-10 xl:px-20">
          <NavLink to="/" className="display text-2xl font-black tracking-wide text-glow lg:text-4xl">
            SAMVESH
          </NavLink>

          <div className="mono hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative py-2 text-sm font-bold tracking-[0.18em] transition",
                    isActive
                      ? "text-cyan-50 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-100"
                      : "text-slate-400 hover:text-cyan-50",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a
            href={contact.resume}
            download
            className="mono hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#4FACFE] to-[#00D4FF] px-6 py-3 text-sm font-bold tracking-[0.18em] text-[#0A0A0A] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(0,212,255,0.34)] lg:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="mono inline-flex h-11 items-center justify-center rounded-full border border-cyan-100/20 bg-white/5 px-4 text-xs font-bold tracking-[0.16em] text-cyan-100 lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-cyan-100/10 bg-[#07090b]/98 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "mono rounded-lg px-4 py-3 text-sm font-bold tracking-[0.16em] transition",
                        isActive ? "bg-cyan-100 text-[#0A0A0A]" : "text-slate-300 hover:bg-white/5",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  href={contact.resume}
                  download
                  className="mono mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-100 px-4 py-3 text-sm font-bold tracking-[0.16em] text-[#0A0A0A]"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 mx-auto min-h-screen max-w-[1440px] px-5 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-44 xl:px-20">
        {children}
      </main>
    </div>
  );
}
