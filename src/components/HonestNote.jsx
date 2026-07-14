import { motion } from 'framer-motion';

export function HonestNote() {
  return (
    <section className="relative px-6 py-32 md:px-10 lg:px-20 bg-bg">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Left Column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest text-ink/40 uppercase">
              An Honest Note
            </h3>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-tight tracking-tight text-ink mb-10">
              A note on what we <span className="text-accent italic">don't</span> do.
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-ink/70 max-w-4xl mb-20">
              Our focus is entirely on engineering exceptional digital products. We are not, right now, a cloud infrastructure provider or an analytical services agency, even though those are part of the longer plan. We are starting with the vertical we can execute at the highest level: website and app development. The others will arrive when we can do each one properly. If that is what you need today, we will tell you so on the first call.
            </p>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-ink/10 pt-10">
              
              <div className="border-l border-ink/10 pl-6 sm:border-l-0 sm:pl-0 sm:pr-6 sm:border-r">
                <p className="text-xs font-semibold tracking-widest text-ink uppercase mb-3 flex items-center gap-2">
                  Today <span className="h-1.5 w-1.5 rounded-full bg-ink"></span>
                </p>
                <h4 className="font-display text-2xl text-ink">Website & App</h4>
              </div>

              <div className="border-l border-ink/10 pl-6 opacity-40 sm:border-l-0 sm:pl-6 sm:pr-6 sm:border-r">
                <p className="text-xs font-semibold tracking-widest text-ink uppercase mb-3">
                  Soon
                </p>
                <h4 className="font-display text-2xl">Cloud</h4>
              </div>

              <div className="border-l border-ink/10 pl-6 opacity-40 sm:border-l-0 sm:pl-6">
                <p className="text-xs font-semibold tracking-widest text-ink uppercase mb-3">
                  Later
                </p>
                <h4 className="font-display text-2xl">Analytical</h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
