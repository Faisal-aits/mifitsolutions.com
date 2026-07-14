import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Industries Served' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export function Stats() {
  return (
    <section className="relative px-6 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 rounded-3xl glass p-10 shadow-card md:grid-cols-4 md:p-14">
          {stats.map((s, i) => (
            <Counter key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut', delay });
      return controls.stop;
    }
  }, [inView, value, count, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        <motion.span>{rounded}</motion.span>
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink/50">{label}</p>
    </motion.div>
  );
}
