import { AnimatePresence, motion } from "framer-motion";
import { Award, Filter, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { Page, PageHeader } from "../components/Page.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { certificationFilters, certifications } from "../data/portfolio.js";

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCertifications = useMemo(() => {
    if (activeFilter === "All") return certifications;
    return certifications.filter((certification) => certification.category === activeFilter);
  }, [activeFilter]);

  return (
    <Page>
      <PageHeader eyebrow="Certifications" title="Credentials that strengthen the stack.">
        <p>
          Coursera, NPTEL, and LinkedIn Learning certifications grouped by practical engineering
          direction. Issue dates were not present in the provided information, so the cards avoid
          inventing dates.
        </p>
      </PageHeader>

      <section className="mb-10 flex flex-wrap gap-3">
        {certificationFilters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "mono inline-flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold tracking-[0.08em] transition",
                active
                  ? "border-cyan-100 bg-cyan-100 text-[#0A0A0A] shadow-[0_0_30px_rgba(0,212,255,0.22)]"
                  : "border-cyan-100/25 bg-white/5 text-cyan-50 hover:-translate-y-0.5 hover:bg-white/10",
              ].join(" ")}
            >
              <Filter size={15} />
              {filter}
            </button>
          );
        })}
      </section>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleCertifications.map((certification, index) => (
            <motion.div
              key={certification.name}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.35, delay: index * 0.025 }}
            >
              <TiltCard className={index === 0 ? "panel-hot h-full p-7" : "h-full p-7"}>
                <div className="flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
                      <Award size={22} />
                    </div>
                    {certification.result && (
                      <span className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#00D4FF]">
                        {certification.result}
                      </span>
                    )}
                  </div>

                  <h2 className="display text-2xl font-black leading-tight text-white">{certification.name}</h2>

                  <div className="mono mt-5 grid gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Layers3 size={16} className="text-cyan-100" />
                      <span className="font-bold text-cyan-50">{certification.organization}</span>
                    </div>
                    <div className="w-fit rounded-full border border-cyan-100/25 bg-white/10 px-3 py-1 text-xs font-bold text-[#00D4FF]">
                      {certification.category}
                    </div>
                  </div>

                  <p className="mt-6 flex-1 leading-8 text-slate-300">{certification.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Page>
  );
}
