import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Rocket, BarChart3, Smartphone, Sparkles } from 'lucide-react';
import { AnimatedGrid } from './effects';

const ease = [0.16, 1, 0.3, 1];

export function Hero() {
  const ref = useRef(null);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-highlight/30 blur-[100px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-300/20 blur-[110px] animate-blob [animation-delay:8s]" />
      </div>
      <AnimatedGrid />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-medium text-ink/70 backdrop-blur"
          >
            <Rocket size={14} className="text-accent" />
            Trusted Website Development Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            We Build{' '}
            <span className="gradient-text">Digital Experiences</span>
            <br />
            That Make Businesses Stand Out.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60"
          >
            At MIF IT Solutions, we create premium websites that help businesses build trust,
            attract customers, and grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Start Your Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-ghost group">
              <Play size={15} className="text-accent" />
              View Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-sm text-ink/50"
          >
            <div className="flex -space-x-2">
              {['#2563EB', '#60A5FA', '#0F172A', '#3B82F6'].map((c) => (
                <span key={c} className="h-8 w-8 rounded-full border-2 border-bg" style={{ background: c }} />
              ))}
            </div>
            <span>Trusted by <strong className="text-ink">10+</strong> businesses worldwide</span>
          </motion.div>
        </div>

        {/* Right — floating laptop mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <LaptopMockup />

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-20 glass rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <BarChart3 size={20} />
              </span>
              <div>
                <p className="text-xs text-ink/50">Conversions</p>
                <p className="font-display text-lg font-semibold">+247%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 top-44 glass rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-highlight/15 text-accent">
                <Smartphone size={20} />
              </span>
              <div>
                <p className="text-xs text-ink/50">Mobile Ready</p>
                <p className="font-display text-sm font-semibold">100% Responsive</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-8 -left-4 glass rounded-2xl px-4 py-3 shadow-card"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium">Award-winning design</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LaptopMockup() {
  return (
    <div className="relative mx-auto max-w-md animate-float">
      {/* glow */}
      <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-accent/20 blur-3xl" />

      {/* screen */}
      <div className="relative rounded-2xl border border-ink/10 bg-ink p-2 shadow-glow-lg">
        <div className="overflow-hidden rounded-xl bg-bg">
          {/* browser bar */}
          <div className="flex items-center gap-1.5 border-b border-ink/5 bg-white/80 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-3 rounded-md bg-bg px-3 py-1 text-[10px] text-ink/40">mifitsolutions.com</span>
          </div>

          {/* screen content — rotating preview */}
          <div className="relative h-64 overflow-hidden p-5">
            <ScreenPreview />
          </div>
        </div>
      </div>

      {/* base */}
      <div className="relative mx-auto h-3 w-[112%] -translate-x-[5.3%] rounded-b-xl bg-gradient-to-b from-ink/90 to-ink/60" />
      <div className="relative mx-auto h-1 w-1/3 rounded-b-lg bg-ink/40" />
    </div>
  );
}

function ScreenPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-full flex-col gap-3"
    >
      {/* mini hero */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded bg-accent" />
          <span className="text-[10px] font-semibold text-ink">MIF IT</span>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-6 rounded-full bg-ink/10" />
          ))}
        </div>
      </div>

      <div className="mt-2 space-y-1.5">
        <div className="h-3 w-3/4 rounded bg-ink/80" />
        <div className="h-3 w-1/2 rounded bg-accent/70" />
      </div>
      <div className="h-1.5 w-full rounded bg-ink/10" />
      <div className="h-1.5 w-5/6 rounded bg-ink/10" />

      {/* dashboard cards */}
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[
          { v: '10+', l: 'Projects', c: 'bg-accent/15' },
          { v: '98%', l: 'Satisfaction', c: 'bg-highlight/15' },
          { v: '24/7', l: 'Support', c: 'bg-ink/5' },
        ].map((s) => (
          <div key={s.l} className={`rounded-lg ${s.c} p-2`}>
            <p className="font-display text-sm font-bold text-ink">{s.v}</p>
            <p className="text-[8px] text-ink/50">{s.l}</p>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="mt-1 flex h-12 items-end gap-1.5 rounded-lg bg-ink/5 p-2">
        {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease }}
            className="flex-1 rounded-t bg-gradient-to-t from-accent to-highlight"
          />
        ))}
      </div>
    </motion.div>
  );
}
