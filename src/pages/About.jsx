import { GraduationCap, Layers3 } from "lucide-react";
import { Page, PageHeader } from "../components/Page.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { education, profile, skills } from "../data/portfolio.js";

export default function About() {
  return (
    <Page>
      <PageHeader eyebrow="Technical Stack" title="Skills, education, and engineering base.">
        <p>{profile.intro}</p>
      </PageHeader>

      <section className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionTitle label="Core Tech" title="Tools Samvesh has actually worked with" />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => (
              <TiltCard key={skill.group} delay={index * 0.04} className={index === 0 ? "panel-hot p-7" : "p-7"}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
                    <Layers3 size={20} />
                  </div>
                  <h2 className="display text-2xl font-black text-white">{skill.group}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-50">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle label="Education" title="Academic timeline" />
          <TiltCard className="p-8">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
              <GraduationCap size={26} />
            </div>
            <div className="grid gap-4">
              {education.items.map((item) => (
                <div key={`${item.institute}-${item.year}`} className="border-l-2 border-cyan-100/40 bg-white/[0.045] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="display text-xl font-black text-white">{item.institute}</h2>
                      <p className="mt-2 text-slate-300">{item.degree}</p>
                    </div>
                    <span className="mono text-sm font-bold text-[#00D4FF]">{item.year}</span>
                  </div>
                  <p className="mono mt-4 text-sm font-bold text-cyan-100">{item.result}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </section>
    </Page>
  );
}
