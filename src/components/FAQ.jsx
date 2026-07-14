import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from './Services';

const faqs = [
  { q: 'How long does a typical website project take?', a: 'Most projects take 2-6 weeks depending on scope. Landing pages can launch in under a week, while complex web applications may take 8-12 weeks. We provide a detailed timeline after our discovery call.' },
  { q: 'What technologies do you work with?', a: 'We build with React, TypeScript, Tailwind CSS, and modern tooling like Vite and Framer Motion. For backends we use Supabase, Node.js, and other scalable solutions tailored to your needs.' },
  { q: 'Do you offer ongoing maintenance after launch?', a: 'Yes. Every project includes a support period, and we offer flexible maintenance plans covering updates, security patches, performance monitoring, and feature enhancements.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. We frequently take on redesign projects — we audit your current site, identify improvement areas, and rebuild with a modern, high-performing foundation while preserving your SEO equity.' },
  { q: 'What is your pricing structure?', a: 'Pricing is project-based and transparent. After a free consultation we provide a fixed quote with no hidden fees. We offer flexible payment milestones tied to project phases.' },
  { q: 'Do you provide SEO and marketing support?', a: 'Yes. Technical SEO is built into every site we ship. We also offer ongoing SEO optimization, content strategy, and conversion-rate consulting as add-on services.' },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions, answered"
              subtitle="Everything you need to know before starting your project with us."
            />
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  open === i ? 'border-accent/20 bg-white' : 'border-ink/8 bg-white/50'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium">{f.q}</span>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    open === i ? 'rotate-45 bg-accent text-white' : 'bg-ink/5 text-ink/50'
                  }`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
