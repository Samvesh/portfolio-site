import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const routeMeta = {
  "/": { label: "system_status: online", title: "HOME", className: "home" },
  "/projects": { label: "project_index: loaded", title: "PROJECTS", className: "projects" },
  "/experience": { label: "career_log: synced", title: "EXPERIENCE", className: "experience" },
  "/certifications": { label: "credentials: validated", title: "CERTIFICATIONS", className: "certifications" },
  "/about": { label: "stack_map: ready", title: "ABOUT", className: "about" },
  "/contact": { label: "channel_open: true", title: "CONTACT", className: "contact" },
};

export function Page({ children }) {
  const location = useLocation();
  const meta = routeMeta[location.pathname] || routeMeta["/"];

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          className={`route-loader ${meta.className}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, delay: 2.15 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.88, 1, 1.02, 1.08], y: [16, 0, 0, -10] }}
            transition={{ duration: 2.35, times: [0, 0.22, 0.78, 1] }}
            className="mono relative z-10 border-l-2 border-cyan-100 bg-[#111111] px-8 py-5 text-center text-xl font-bold tracking-[0.18em] text-cyan-50 shadow-[0_0_50px_rgba(0,212,255,0.16)]"
          >
            <span className="block text-xs uppercase text-[#00D4FF]">{meta.label}</span>
            <span className="display mt-2 block text-4xl tracking-wide">{meta.title}</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="mb-12 max-w-5xl">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 2.25 }}
        className="mono mb-4 text-sm font-bold uppercase tracking-[0.26em] text-[#00D4FF]"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 2.32 }}
        className="display text-4xl font-black leading-tight text-slate-100 sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 2.42 }}
          className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
