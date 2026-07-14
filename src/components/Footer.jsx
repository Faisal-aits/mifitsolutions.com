import { Instagram, Linkedin, ArrowUpRight, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-bg text-ink pt-24 pb-12 px-6 md:px-10 lg:px-20 border-t border-ink/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
          
          {/* Left Side */}
          <div className="flex flex-col items-start gap-14">
            <img src={logo} alt="MIF DIGITAL" className="h-12 sm:h-16 w-auto object-contain" />
            
            <p className="relative bottom-[37px] left-[12px] font-display text-xl sm:text-2xl font-bold tracking-tight max-w-md text-ink/90 leading-relaxed">
              Designed to impress . Built to perform
            </p>
            
            <div className="relative bottom-[37px] left-[12px] flex items-center gap-3 rounded border border-ink/20 px-5 py-2.5 text-xs font-bold tracking-widest text-ink/70 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              Maharashtra
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start md:items-end gap-6 font-display text-lg sm:text-xl font-bold mt-10 md:mt-0 md:translate-y-5">
            <a href="tel:+918080669609" className="group flex items-center gap-3 hover:text-accent transition-colors">
              <Phone size={20} className="text-ink/40 transition-colors group-hover:text-accent" />
              +91 ••••••9609
            </a>
            <a href="tel:+919359473030" className="group flex items-center gap-3 hover:text-accent transition-colors">
              <Phone size={20} className="text-ink/40 transition-colors group-hover:text-accent" />
              +91 ••••••3030
            </a>
            <a href="tel:+917774930920" className="group flex items-center gap-3 hover:text-accent transition-colors">
              <Phone size={20} className="text-ink/40 transition-colors group-hover:text-accent" />
              +91 ••••••0920
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-ink/10 pt-8 text-xs font-bold text-ink/50">
          <div className="flex items-center gap-6">
            <p>© 2026 mif it solution . mifitsolutions.com</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-ink transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="hover:text-ink transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>
          <p>Built quietly. On Purpose by MIF DIGITAL</p>
        </div>
      </div>
    </footer>
  );
}
