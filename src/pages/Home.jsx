import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard.jsx";
import { Page } from "../components/Page.jsx";
import { contact, profile, projects } from "../data/portfolio.js";

const focusCards = [
  {
    title: "AI & RAG Systems",
    text: "Building intelligent applications with RAG, embeddings and LLMs",
  },
  {
    title: "Full Stack Development",
    text: "React, Node.js, FastAPI and modern scalable architecture",
  },
  {
    title: "APIs & Integrations",
    text: "REST APIs, SSE Streaming, JWT Auth and third-party integrations",
  },
  {
    title: "Databases",
    text: "MongoDB, ChromaDB, Vector DBs and efficient data modeling",
  },
  {
    title: "Deployments",
    text: "Vercel, Render, CI/CD and production-grade deployments",
  },
  {
    title: "2026 Graduate",
    text: "B.E CSE at Chandigarh University | CGPA: 7.8",
  },
];

const stats = [
  { value: "8+", label: "Major Projects" },
  { value: "12+", label: "Certifications" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const arsenal = [
  { title: "Frontend", text: "React, Vite, Tailwind CSS, Chart.js, Leaflet" },
  { title: "Backend", text: "Node.js, Express.js, FastAPI, REST APIs" },
  { title: "Databases", text: "MongoDB, Mongoose, ChromaDB, File I/O" },
  { title: "AI / ML", text: "RAG, OpenAI Whisper, Embeddings, Gemini 1.5" },
  { title: "Data Science", text: "Data Cleaning, EDA, Sentiment Analysis, Visualization" },
  { title: "Languages", text: "JavaScript, Python, Java, C++, C, SQL, HTML, CSS" },
];

export default function Home() {
  const featured = projects[0];
  const secondaryProjects = projects.slice(1, 4);

  return (
    <Page>
      <section className="grid min-h-[calc(100vh-11rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.35, duration: 0.6 }}
            className="mono mb-8 inline-flex items-center rounded-full border border-cyan-200/30 bg-white/[0.045] px-5 py-2.5 text-sm font-bold tracking-[0.02em] text-cyan-50"
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-[#00D4FF] shadow-[0_0_16px_rgba(0,212,255,0.8)]" />
            system_status: online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.45 }}
            className="hero-rainbow display max-w-5xl text-[2.9rem] font-black leading-[1.05] sm:text-[4rem] lg:text-[4.65rem]"
          >
            Building AI-Powered Products.
            <span className="block">
              Full Stack Developer focused on RAG systems, APIs and scalable web applications.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 2.62 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-300"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 2.76 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="mono inline-flex min-h-14 items-center rounded-xl bg-gradient-to-r from-[#4FACFE] to-[#00D4FF] px-8 text-sm font-bold text-[#0A0A0A] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,212,255,0.28)]"
            >
              View Projects
            </Link>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex min-h-14 items-center rounded-xl border border-cyan-100/35 px-8 text-sm font-bold text-cyan-50 transition hover:-translate-y-1 hover:bg-cyan-100 hover:text-[#0A0A0A]"
            >
              View GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex min-h-14 items-center rounded-xl border border-cyan-100/35 px-6 text-sm font-bold text-cyan-50 transition hover:-translate-y-1 hover:bg-cyan-100 hover:text-[#0A0A0A]"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2.7 }}
        >
          <TiltCard className="panel-hot p-7">
            <p className="mb-6 text-sm font-bold text-[#00D4FF]">Currently focused on</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {focusCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h2 className="text-base font-bold text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </section>

      <section className="grid gap-8 border-t border-white/10 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-bold text-white">Featured Projects</p>
          <div className="grid gap-4">
            <TiltCard className="project-card p-5">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white">{featured.name}</h2>
                    <span className="rounded-full border border-cyan-100/30 px-3 py-1 text-xs text-[#00D4FF]">Featured</span>
                  </div>
                  <p className="text-sm text-slate-300">{featured.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tech.slice(0, 6).map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{featured.problem}</p>
                </div>
                <img src={featured.image} alt={`${featured.name} project screenshot`} className="h-full min-h-52 rounded-2xl border border-white/10 object-cover" />
              </div>
            </TiltCard>

            <div className="grid gap-4 md:grid-cols-3">
              {secondaryProjects.map((project) => (
                <TiltCard key={project.name} className="p-5">
                  <h3 className="font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.subtitle}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-white">Tech Stack Arsenal</p>
            <p className="text-sm text-slate-400">Explore technologies I work with</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {arsenal.map((item) => (
              <TiltCard key={item.title} className="p-5">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
