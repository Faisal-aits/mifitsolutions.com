import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react';
import { SectionHeader } from './Services';

const steps = [
  { icon: Search, title: 'Discover', desc: 'We dive deep into your goals, audience, and market to define a clear strategy.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes and high-fidelity prototypes crafted around your brand identity.' },
  { icon: Code2, title: 'Develop', desc: 'Clean, scalable code built with modern tech and rigorous quality standards.' },
  { icon: Rocket, title: 'Launch', desc: 'Optimized deployment with testing, performance audits, and zero downtime.' },
  { icon: LifeBuoy, title: 'Support', desc: 'Ongoing maintenance, updates, and improvements to keep you ahead.' },
];

const ease = [0.16, 1, 0.3, 1];

export function Process() {
  return (
    <section id="process" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How we work"
          title="A process built for clarity and momentum"
          subtitle="Every project follows a proven five-step framework that keeps things transparent from kickoff to launch."
        />

        <div className="mt-20 overflow-x-auto pb-4">
          <div className="relative flex min-w-[900px] items-start justify-between gap-4 lg:min-w-0">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-accent/20 via-accent/40 to-highlight/20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease }}
              className="absolute left-0 right-0 top-7 h-0.5 origin-left bg-gradient-to-r from-accent to-highlight"
            />

            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.15 }}
                className="relative z-10 flex w-1/5 flex-col items-center px-2 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-ink/10 bg-white text-accent shadow-card">
                  <s.icon size={24} />
                </span>
                <span className="mt-2 text-xs font-semibold text-ink/30">0{i + 1}</span>
                <h3 className="mt-1 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
