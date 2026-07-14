import { motion } from 'framer-motion';
import { Zap, Search, Smartphone, Sparkles, Layers, Shield, BadgeDollarSign, Headphones } from 'lucide-react';
import { SectionHeader } from './Services';

const reasons = [
  { icon: Zap, title: 'Fast Performance', desc: 'Sub-second load times with optimized assets and edge delivery.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Semantic markup and technical SEO baked into every build.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Pixel-perfect experiences across every screen size.' },
  { icon: Sparkles, title: 'Modern UI', desc: 'Award-worthy interfaces designed to delight and convert.' },
  { icon: Layers, title: 'Scalable Code', desc: 'Architecture that grows with your business, not against it.' },
  { icon: Shield, title: 'Secure Development', desc: 'Best-practice security hardening on every layer.' },
  { icon: BadgeDollarSign, title: 'Affordable Pricing', desc: 'Transparent pricing with no hidden costs or surprises.' },
  { icon: Headphones, title: 'Lifetime Support', desc: 'We stick around — ongoing help whenever you need it.' },
];

const ease = [0.16, 1, 0.3, 1];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why MIF"
          title="Everything you need, nothing you don't"
          subtitle="We combine design craft with engineering rigor to deliver websites that perform."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease, delay: (i % 4) * 0.08 }}
              className="group flex flex-col items-start rounded-2xl border border-ink/5 bg-white/60 p-6 backdrop-blur transition-all duration-400 hover:border-accent/30 hover:bg-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-all duration-400 group-hover:bg-accent group-hover:text-white">
                <r.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/50">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
