import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from './Services';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Nova Finance',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    company: 'Nova Finance',
    rating: 5,
    text: 'MIF IT Solutions transformed our vision into a platform that our users genuinely love. The attention to detail in every interaction is unmatched. We saw a 247% increase in conversions within the first quarter.',
  },
  {
    name: 'James Carter',
    role: 'Founder, Lumen Lighting',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    company: 'Lumen',
    rating: 5,
    text: 'From the first call to launch day, the team was professional, responsive, and deeply invested in our success. Our new store feels premium and converts beautifully. Easily the best agency experience we have had.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, Pulse',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    company: 'Pulse',
    rating: 5,
    text: 'The landing page MIF built for our product launch exceeded every benchmark we set. Fast, gorgeous, and conversion-optimized. Our signup rate on launch day was 7.4% — far beyond what we projected.',
  },
  {
    name: 'David Chen',
    role: 'CTO, Orbit Analytics',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    company: 'Orbit',
    rating: 5,
    text: 'Working with MIF was like having an extension of our own team. They understood the technical requirements instantly and delivered a dashboard our clients actually enjoy using. Report creation time dropped 80%.',
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir) => setIndex((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by founders and teams alike"
          subtitle="Don't take our word for it — here's what our clients say about working with MIF."
        />

        <div className="mt-14 relative overflow-hidden rounded-3xl border border-ink/5 bg-white/70 p-8 backdrop-blur shadow-card md:p-14">
          <Quote className="absolute right-8 top-8 text-accent/10" size={80} />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mt-6 max-w-3xl font-display text-xl leading-relaxed text-ink/80 md:text-2xl">
                "{current.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img src={current.avatar} alt={current.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/20" />
                <div>
                  <p className="font-display font-semibold">{current.name}</p>
                  <p className="text-sm text-ink/50">{current.role}</p>
                </div>
                <span className="ml-3 rounded-lg bg-ink/5 px-3 py-1.5 font-display text-xs font-semibold text-ink/60">
                  {current.company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* controls */}
          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
            <div className="ml-2 flex gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink/15'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
