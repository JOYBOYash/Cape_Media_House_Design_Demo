import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { cn } from '../lib/utils';

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const logoSrc = resolvedTheme === 'dark' ? '../public/CAPE_D.png' : '../public/CAPE_L.png';

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Titans', href: '#testimonials' },
    { name: 'Reach Us', href: '#reach-us' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "absolute top-0 left-0 w-full z-[110] py-8 px-6 md:px-12 flex justify-between items-center transition-colors duration-500",
          isMobileMenuOpen ? "text-background" : ""
        )}
      >
        <div className="flex items-center">
          <a href="#home" className="relative h-16 md:h-20 w-auto group">
            <img 
              src={logoSrc} 
              alt="Cape Media House" 
              className={cn(
                "h-full object-contain transition-all duration-500 group-hover:scale-110",
                isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              onError={(e) => {
                if (!e.currentTarget.src.includes('/mnt/user-data/uploads/')) {
                  e.currentTarget.src = `/mnt/user-data/uploads/${resolvedTheme === 'dark' ? 'CAPE_D.png' : 'CAPE_L.png'}`;
                }
              }}
            />
          </a>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          <button className={cn(
            "group relative hidden sm:block overflow-hidden bg-accent text-black font-cta text-xs font-black uppercase py-5 px-12 rounded-none transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] accent-glow active:scale-95 shadow-xl",
            isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}>
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          <button 
            className="group relative flex items-center justify-center w-12 h-12 z-[120]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  className="text-accent"
                >
                  <X size={40} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <div className="flex flex-col gap-1.5 items-end group-hover:gap-2 transition-all duration-300">
                  <span className="w-8 h-0.5 bg-foreground transition-all duration-300 group-hover:w-6" />
                  <span className="w-8 h-0.5 bg-foreground transition-all duration-300" />
                  <span className="w-8 h-0.5 bg-foreground transition-all duration-300 group-hover:w-10" />
                </div>
              )}
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-foreground flex flex-col justify-center p-8 md:p-24 overflow-hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-foreground"
            />
            
            {/* Main Menu Content Wrapper - Needs relative z-index to be above the animated background */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
              {/* Background elements in menu */}
              <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
              
              <div className="flex flex-col gap-8 md:gap-12">
                <span className="font-cta text-accent text-[10px] md:text-sm uppercase tracking-[0.6em] font-black opacity-50">
                  NAVIGATION
                </span>
                <ul className="flex flex-col gap-4 md:gap-8">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                    >
                      <a 
                        href={link.href}
                        className="font-header text-5xl md:text-8xl lg:text-9xl font-black text-background hover:text-accent transition-colors duration-300 uppercase leading-none block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-10 border-t border-background/10 pt-12 md:pt-0 md:border-0">
                <div className="flex flex-col gap-4">
                  <span className="font-cta text-accent text-[10px] uppercase tracking-[0.4em] font-black opacity-50">
                    APPEARANCE
                  </span>
                  <div className="flex items-center bg-background/5 p-2 gap-2 border border-background/10">
                    {(['dark', 'light', 'system'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={cn(
                          "px-6 py-3 font-cta text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 font-black",
                          theme === t ? "bg-accent text-black" : "text-background/40 hover:text-background hover:bg-background/5"
                        )}
                      >
                        {t === 'system' ? <div className="flex items-center gap-2"><Monitor size={14} /> SYSTEM</div> : t === 'light' ? 'LIGHT' : 'DARK'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-cta text-accent text-[10px] uppercase tracking-[0.4em] font-black opacity-50">
                    SOCIALS
                  </span>
                  <div className="flex gap-6 text-background/60 font-cta text-xs uppercase tracking-widest">
                    <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                    <a href="#" className="hover:text-accent transition-colors">Twitter</a>
                    <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
