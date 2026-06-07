import { ArrowRight, ExternalLink } from "lucide-react";
import { Page, PageHeader } from "../components/Page.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { projects } from "../data/portfolio.js";
const visualClass = {
  VideoIQ: "videoiq",
  Fruitora: "fruitora",
  "Bank Management System": "bank",
  "Plane Shooting Simulation": "game",
};
export default function Projects() {
  return (
    <Page>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <PageHeader eyebrow="Latest Projects" title="Production builds, not template demos.">
          <p>
            Real projects from the resume: deployed AI video auditing, a full-stack nutrition platform,
            Java banking simulation, and a Python arcade game.
          </p>
        </PageHeader>

          href="https://github.com/Samvesh"
          target="_blank"
          rel="noreferrer"
          className="mono mb-12 inline-flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-cyan-50 transition hover:text-[
#00D4FF]"
        >
          View All Projects
          <ArrowRight size={24} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <TiltCard key={project.name} delay={index * 0.05} className="project-card flex min-h-[660px] flex-col">
            <div className={project-visual ${visualClass[project.name] || ""}} />
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((item) => (
                  <span key={item} className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase text-[
#00D4FF]">
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="project-title display font-black uppercase text-slate-100">
                {project.name}
              </h2>
              <p className="mono mt-2 text-sm font-bold tracking-[0.12em] text-cyan-100">{project.subtitle}</p>
              <p className="mt-6 leading-8 text-slate-300">{project.problem}</p>
              <p className="mt-4 leading-8 text-slate-400">{project.how}</p>
              <div className="mt-auto pt-7">
                {project.live ? (

                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mono inline-flex items-center gap-2 text-sm font-bold tracking-[0.16em] text-cyan-50 hover:text-[
#00D4FF]"
                  >
                    Live Details
                    <ExternalLink size={17} />
                  </a>
                ) : (
                  <span className="mono text-sm font-bold tracking-[0.16em] text-cyan-50">System Details</span>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Page>
  );
}
