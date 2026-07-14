import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { SectionHeader } from './Services';

import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';

const projects = [
  {
    title: 'Hiring Consultancy Platform',
    category: 'Landing Page',
    image: project1,
    challenge: 'A premier hiring consultancy needed a professional landing page to attract top-tier executive talent and corporate clients.',
    solution: 'Designed a highly professional, trust-building landing page with integrated applicant tracking pipelines and client lead forms.',
    result: 'Increased high-level candidate submissions by 35% and corporate inquiries by 20%.',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'School Management ERP',
    category: 'Web App',
    image: project2,
    challenge: 'A local school needed a centralized system to manage student records, staff payroll, and daily attendance.',
    solution: 'Developed a comprehensive web-based ERP system featuring distinct role-based dashboards and automated reporting.',
    result: 'Reduced administrative workload by 40 hours per month and completely digitized paper records.',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Modern UAE Lighting',
    category: 'Landing Page',
    image: project3,
    challenge: 'A modern, luxury lighting brand in the UAE needed a visually striking landing page to showcase their high-end architectural fixtures.',
    solution: 'Created an elegant, image-forward landing page optimized for high-resolution displays to highlight premium lighting designs.',
    result: 'Generated 300+ inquiries in the first week and successfully established a strong digital presence in the UAE market.',
    accent: 'from-violet-500 to-purple-500',
  }
];

const categories = ['All', ...new Set(projects.map(p => p.category))];

const ease = [0.16, 1, 0.3, 1];

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our work"
          title="Selected projects, crafted with intent"
          subtitle="A glimpse of the digital products we've built for ambitious brands across industries."
        />

        {/* filters */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? 'bg-ink text-white shadow-card'
                  : 'border border-ink/10 bg-white/60 text-ink/60 hover:border-accent hover:text-accent'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                onClick={() => setSelected(p)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-ink/5 bg-white/70 backdrop-blur"
              >
                <div className="relative h-64 overflow-hidden md:h-72">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className={`absolute right-4 top-4 rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                    {p.category}
                  </span>
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* case study modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-bg shadow-glow-lg"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink/60 backdrop-blur transition-colors hover:text-accent"
              >
                <X size={18} />
              </button>
              <div className="relative h-56 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
              </div>
              <div className="p-8">
                <span className={`inline-block rounded-full bg-gradient-to-r ${selected.accent} px-3 py-1 text-xs font-semibold text-white`}>
                  {selected.category}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{selected.title}</h3>
                <div className="mt-6 space-y-5">
                  <CaseRow label="Challenge" text={selected.challenge} />
                  <CaseRow label="Solution" text={selected.solution} />
                  <CaseRow label="Result" text={selected.result} highlight />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseRow({ label, text, highlight }) {
  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-wider ${highlight ? 'text-accent' : 'text-ink/40'}`}>{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{text}</p>
    </div>
  );
}
