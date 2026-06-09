import { Page, PageHeader } from "../components/Page.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Page>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <PageHeader eyebrow="Latest Projects" title="Production builds, not template demos.">
          <p>
            Real projects from the resume and project READMEs: deployed AI video auditing, a full-stack
            nutrition platform, TaskPulse REST task management, Bitcoin sentiment and trader performance
            analysis, banking systems, Python simulation, and a Binance Futures Testnet CLI trading bot.
          </p>
        </PageHeader>
        <a
          href="https://github.com/Samvesh"
          target="_blank"
          rel="noreferrer"
          className="mono mb-12 inline-flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-cyan-50 transition hover:text-[#00D4FF]"
        >
          View All Projects
        </a>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <TiltCard delay={0.03} className="project-card xl:col-span-2">
          <ProjectMedia project={featured} featured />
          <div className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {featured.tech.slice(0, 8).map((item) => (
                  <span key={item} className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase text-[#00D4FF]">
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="project-title display font-black uppercase text-slate-100">{featured.name}</h2>
              <p className="mono mt-2 text-sm font-bold tracking-[0.12em] text-cyan-100">{featured.subtitle}</p>
              {featured.live && <ProjectLink href={featured.live} label="Live Details" />}
            </div>
            <div>
              <p className="leading-8 text-slate-300">{featured.problem}</p>
              <p className="mt-4 leading-8 text-slate-400">{featured.how}</p>
              <p className="mt-4 leading-8 text-slate-400">{featured.value}</p>
            </div>
          </div>
        </TiltCard>

        {rest.map((project, index) => (
          <TiltCard key={project.name} delay={(index + 1) * 0.05} className="project-card flex min-h-[660px] flex-col">
            <ProjectMedia project={project} />
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((item) => (
                  <span key={item} className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase text-[#00D4FF]">
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="project-title display font-black uppercase text-slate-100">{project.name}</h2>
              <p className="mono mt-2 text-sm font-bold tracking-[0.12em] text-cyan-100">{project.subtitle}</p>
              <p className="mt-6 leading-8 text-slate-300">{project.problem}</p>
              <p className="mt-4 leading-8 text-slate-400">{project.how}</p>
              <div className="mt-auto pt-7">
                {project.live ? (
                  <ProjectLink href={project.live} label={project.live.includes("github") ? "GitHub Details" : "Live Details"} />
                ) : null}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Page>
  );
}

function ProjectMedia({ project, featured = false }) {
  if (project.image) {
    const isLogo = project.image.endsWith(".svg");
    return (
      <div className={`project-media ${featured ? "min-h-[360px]" : "min-h-[245px]"}`}>
        <img
          src={project.image}
          alt={`${project.name} project visual`}
          className={isLogo ? "h-36 w-36 object-contain drop-shadow-[0_0_38px_rgba(243,186,47,0.28)]" : "h-full w-full object-cover"}
        />
      </div>
    );
  }

  return null;
}

function ProjectLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mono mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-[0.16em] text-cyan-50 hover:text-[#00D4FF]"
    >
      {label}
    </a>
  );
}
