import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center md:px-16 md:py-24"
        >
          {/* glow blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-highlight/20 blur-[100px]" />
          </div>

          {/* grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Chat With Us{' '}
              <span className="gradient-text">Directly?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
              Message us on WhatsApp to discuss your project, ask questions, and chat directly with our team.
            </p>
            
            <div className="relative mt-9 inline-block" ref={ref}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:shadow-glow-lg hover:bg-[#20bd5a]"
              >
                WhatsApp Us
                <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 bottom-full mb-4 w-56 -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
                  >
                    {[
                      { n: '+91 ••••••9609', l: '918080669609' },
                      { n: '+91 ••••••3030', l: '919359473030' },
                      { n: '+91 ••••••0920', l: '917774930920' },
                    ].map((contact, i) => (
                      <a
                        key={i}
                        href={`https://wa.me/${contact.l}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl p-3 text-left hover:bg-ink/5 transition-colors"
                      >
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                          <MessageCircle size={14} />
                        </div>
                        <p className="font-display text-sm font-semibold text-ink">{contact.n}</p>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
