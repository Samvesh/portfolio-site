import { BriefcaseBusiness, Radio } from "lucide-react";
import { Page, PageHeader } from "../components/Page.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { experiences } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Page>
      <PageHeader eyebrow="Experience" title="Recent_Activity">
        <p>
          Internship work across CRM-assisted outreach, communication campaigns, web page design,
          responsive improvements, and UI/UX review.
        </p>
      </PageHeader>

      <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <TiltCard className="p-8">
          <p className="mono mb-7 flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-[#00D4FF]">
            <Radio size={18} />
            live_stream
          </p>
          <div className="mono grid gap-5 rounded-lg bg-[#07090b] p-7 text-sm text-slate-300">
            <p><span className="text-slate-500">10:45 AM</span> <span className="ml-4 text-cyan-100">PUSH</span> outreach campaigns delivered on time</p>
            <p><span className="text-slate-500">09:12 AM</span> <span className="ml-4 text-cyan-100">SYNC</span> LeadSquared CRM basics applied</p>
            <p><span className="text-slate-500">08:00 AM</span> <span className="ml-4 text-cyan-100">MERGE</span> responsive webpage improvements shipped</p>
          </div>
        </TiltCard>

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <TiltCard key={experience.company} delay={index * 0.06} className={index === 0 ? "panel-hot p-8" : "p-8"}>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
                  <BriefcaseBusiness size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mono text-sm font-bold uppercase tracking-[0.2em] text-[#00D4FF]">
                        {experience.role}
                      </p>
                      <h2 className="display mt-2 text-3xl font-black text-slate-100">{experience.company}</h2>
                    </div>
                    {(experience.duration || experience.location) && (
                      <span className="mono rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-cyan-50">
                        {experience.duration || experience.location}
                      </span>
                    )}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {experience.details.map((detail) => (
                      <div key={detail} className="mono rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-slate-200">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </Page>
  );
}
