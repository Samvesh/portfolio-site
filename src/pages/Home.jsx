import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard.jsx";
import { Page } from "../components/Page.jsx";
import { contact, profile, stackGroups } from "../data/portfolio.js";

export default function Home() {
  return (
    <Page>
      <section className="grid min-h-[calc(100vh-11rem)] items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.35, duration: 0.6 }}
            className="mono mb-12 inline-flex border-l-2 border-cyan-100 bg-[#121516] px-6 py-3 text-base font-bold tracking-[0.08em] text-cyan-50"
          >
            <Terminal size={18} className="mr-3 text-cyan-100" />
            system_status: online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.45 }}
            className="display max-w-5xl text-[3.7rem] font-black leading-[0.98] text-slate-100 sm:text-[5.4rem] lg:text-[6.4rem]"
          >
            Hello World,
            <span className="block text-glow">I am SAMVESH.</span>
            <span className="block">I build digital</span>
            <span className="block">experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 2.62 }}
            className="mt-9 max-w-4xl text-xl leading-9 text-slate-300"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 2.76 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="mono inline-flex min-h-14 items-center gap-3 rounded-xl bg-gradient-to-r from-[#4FACFE] to-[#00D4FF] px-8 text-sm font-bold tracking-[0.18em] text-[#0A0A0A] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,212,255,0.28)]"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex min-h-14 items-center gap-3 rounded-xl border border-cyan-100/50 px-8 text-sm font-bold tracking-[0.18em] text-cyan-50 transition hover:-translate-y-1 hover:bg-cyan-100 hover:text-[#0A0A0A]"
            >
              <Github size={18} />
              View Github
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
          initial={{ opacity: 0, x: 34, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 2.7 }}
        >
          <TiltCard className="hero-code-card panel-hot p-8">
            <div className="mb-10 flex gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
            </div>
            <pre className="mono whitespace-pre-wrap text-base leading-8 text-slate-300">
              <span className="accent">class Developer {"{"}</span>
              {`\n  constructor() {\n    this.name = 'Samvesh';\n    this.role = 'Full Stack + AI';\n    this.stack = ['React', 'FastAPI', 'Node'];\n  }\n\n  async createExperience() {\n    return await code.build();\n  }\n}`}
            </pre>
          </TiltCard>
        </motion.div>
      </section>

      <section className="grid gap-6 pb-8 md:grid-cols-3">
        <TiltCard className="panel-hot p-8 md:col-span-2">
          <p className="mono mb-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">Technical_Stack</p>
          <h2 className="display text-4xl font-black text-slate-100">Production-ready web, AI, data, and cloud tooling.</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.label}>
                <p className="mono mb-3 text-sm font-bold text-[#00D4FF]">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="mono rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TiltCard>

        <TiltCard className="flex items-center justify-center p-8 text-center">
          <div>
            <p className="display text-7xl font-black text-[#00D4FF]">12+</p>
            <p className="mono mt-2 text-sm font-bold tracking-[0.18em] text-slate-200">protected REST routes built in Fruitora</p>
          </div>
        </TiltCard>
      </section>
    </Page>
  );
}
