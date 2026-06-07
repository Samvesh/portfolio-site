import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Rocket,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard.jsx";
import { Page } from "../components/Page.jsx";
import { contact, profile, projects, skills } from "../data/portfolio.js";

const focusCards = [
  {
    icon: Brain,
    title: "AI & RAG Systems",
    text: "Building intelligent applications with RAG, embeddings and LLMs",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "React, Node.js, FastAPI and modern scalable architecture",
  },
  {
    icon: Cloud,
    title: "APIs & Integrations",
    text: "REST APIs, SSE Streaming, JWT Auth and third-party integrations",
  },
  {
    icon: Database,
    title: "Databases",
    text: "MongoDB, ChromaDB, Vector DBs and efficient data modeling",
  },
  {
    icon: Rocket,
    title: "Deployments",
    text: "Vercel, Render, CI/CD and production-grade deployments",
  },
  {
    icon: GraduationCap,
    title: "2026 Graduate",
    text: "B.E CSE at Chandigarh University | CGPA: 7.8",
  },
];

const stats = [
  { icon: Layers3, value: "6+", label: "Major Projects" },
  { icon: Award, value: "12+", label: "Certifications" },
  { icon: Code2, value: "10+", label: "Technologies" },
  { icon: Rocket, value: "100%", label: "Dedication" },
];

const arsenal = [
  { title: "Frontend", text: "React, Vite, Tailwind CSS, Chart.js, Leaflet", icon: Code2 },
  { title: "Backend", text: "Node.js, Express.js, FastAPI, REST APIs", icon: Layers3 },
  { title: "Databases", text: "MongoDB, Mongoose, ChromaDB, File I/O", icon: Database },
  { title: "AI / ML", text: "RAG, OpenAI Whisper, Embeddings, Gemini 1.5", icon: Brain },
  { title: "DevOps / Cloud", text: "Vercel, Render, Git/GitHub, CI/CD", icon: Cloud },
  { title: "Languages", text: "JavaScript, Python, Java, C++, C, SQL, HTML, CSS", icon: Terminal },
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
            className="display max-w-5xl text-[2.9rem] font-black leading-[1.05] text-white sm:text-[4rem] lg:text-[4.65rem]"
          >
            Building <span className="text-glow">AI-Powered</span> Products.
            <span className="block">
              <span className="text-glow">Full Stack</span> Developer focused on RAG systems, APIs and scalable web applications.
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
              className="mono inline-flex min-h-14 items-center gap-3 rounded-xl bg-gradient-to-r from-[#4FACFE] to-[#00D4FF] px-8 text-sm font-bold text-[#0A0A0A] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,212,255,0.28)]"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex min-h-14 items-center gap-3 rounded-xl border border-cyan-100/35 px-8 text-sm font-bold text-cyan-50 transition hover:-translate-y-1 hover:bg-cyan-100 hover:text-[#0A0A0A]"
            >
              <Github size={18} />
              View GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-100/30 text-cyan-50 transition hover:-translate-y-1 hover:bg-cyan-100 hover:text-[#0A0A0A]"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2.7 }}
        >
          <TiltCard className="panel-hot p-7">
            <p className="mb-6 flex items-center gap-3 text-sm font-bold text-[#00D4FF]">
              <Rocket size={18} />
              Currently focused on
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {focusCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="mb-5 text-[#00D4FF]" size={28} />
                    <h2 className="text-base font-bold text-white">{card.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3 sm:block">
                    <Icon className="text-[#00D4FF] sm:mb-2" size={20} />
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </TiltCard>
        </motion.div>
      </section>

      <section className="grid gap-8 border-t border-white/10 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-sm font-bold text-white">
            <Brain size={18} className="text-[#00D4FF]" />
            Featured Projects
          </p>
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
            <p className="flex items-center gap-3 text-sm font-bold text-white">
              <Layers3 size={18} className="text-[#00D4FF]" />
              Tech Stack Arsenal
            </p>
            <p className="text-sm text-slate-400">Explore technologies I work with</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {arsenal.map((item) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.title} className="p-5">
                  <div className="flex gap-4">
                    <Icon className="shrink-0 text-[#00D4FF]" size={32} />
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>
    </Page>
  );
}
