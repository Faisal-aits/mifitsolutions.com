import { motion } from 'framer-motion';
import {
  Palette, Briefcase, Rocket, Code2, FolderOpen, ShoppingCart, Search, Wrench,
} from 'lucide-react';

const services = [
  { icon: Palette, title: 'Website Design', desc: 'Bespoke, conversion-focused designs crafted to elevate your brand identity.' },
  { icon: Briefcase, title: 'Business Websites', desc: 'Professional corporate sites that build authority and generate leads.' },
  { icon: Rocket, title: 'Landing Pages', desc: 'High-converting landing pages engineered for marketing campaigns.' },
  { icon: Code2, title: 'Web Applications', desc: 'Scalable, secure custom web apps tailored to your operations.' },
  { icon: FolderOpen, title: 'Portfolio Websites', desc: 'Showcase your work with stunning, interactive portfolio experiences.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Full-featured online stores with seamless checkout and inventory.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Rank higher with technical SEO built into every line of code.' },
  { icon: Wrench, title: 'Website Maintenance', desc: 'Ongoing support, updates, and monitoring to keep you running smooth.' },
];

const ease = [0.16, 1, 0.3, 1];

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Premium services, engineered for growth"
          subtitle="From concept to launch, we deliver end-to-end web solutions that move your business forward."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      {/* animated border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'linear-gradient(120deg, transparent, rgba(96,165,250,0.15), transparent)' }}
      />

      <div className="relative">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-highlight/10 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={22} />
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/55">{desc}</p>
      </div>
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-4 text-lg leading-relaxed text-ink/55"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
