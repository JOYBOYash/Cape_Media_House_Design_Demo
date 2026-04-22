import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Footer() {
  const { resolvedTheme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const logoSrc = resolvedTheme === 'dark' ? '/CAPE_D.png' : '/CAPE_L.png';

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" }
  ];

  return (
    <footer className="relative bg-background border-t border-foreground/5 pt-24 overflow-hidden">
      {/* Mega CTA */}
      <div id="reach-us" className="px-8 md:px-12 pb-24 border-b border-foreground/5 overflow-hidden">
        <div ref={ref} className="max-w-7xl mx-auto flex flex-col items-start text-left gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="flex"
          >
            <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-6 py-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              READY TO BE LEGENDARY?
            </span>
          </motion.div>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-header text-5xl md:text-[clamp(64px,12vw,150px)] font-black leading-[0.8] tracking-tighter"
          >
            BUILD <br />
            <span className="italic text-accent">SOMETHING WILD.</span>
          </motion.h2>
          
          <motion.button 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="group relative bg-accent text-black font-cta font-bold uppercase py-6 px-12 text-lg tracking-widest hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Start a Project <ArrowUpRight size={24} />
            <div className="absolute inset-0 border-2 border-black dark:border-white translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </motion.button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center">
              <img 
                src={logoSrc} 
                alt="Cape Media House" 
                className="h-16 md:h-20 object-contain"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('/mnt/user-data/uploads/')) {
                    e.currentTarget.src = `/mnt/user-data/uploads/${resolvedTheme === 'dark' ? 'CAPE_D.png' : 'CAPE_L.png'}`;
                  }
                }}
              />
            </div>
            <p className="text-foreground/50 text-sm max-w-xs leading-relaxed capitalize">
              We wear the cape so your brand can fly. Modern solutions for brands that dare to lead.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 border border-foreground/10 flex items-center justify-center rounded-full hover:bg-accent hover:border-accent hover:text-background transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-header text-sm font-bold uppercase tracking-widest text-accent">Agency</h4>
            <ul className="flex flex-col gap-4 text-sm text-foreground/60">
              <li><a href="#work" className="hover:text-accent transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#insights" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-header text-sm font-bold uppercase tracking-widest text-accent">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-foreground/60 leading-relaxed font-mono">
              <li>hello@capemediahouse.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, MH, India HQ</li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
             <h4 className="font-header text-sm font-bold uppercase tracking-widest text-accent">Newsletter</h4>
             <p className="text-sm text-foreground/50">Get the fresh thinking from the Cape Files.</p>
             <div className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Your Email" 
                 className="flex-1 bg-foreground/5 border border-foreground/10 py-3 px-4 rounded-none focus:outline-none focus:border-accent transition-colors font-cta text-xs uppercase"
               />
               <button className="bg-foreground text-background font-cta text-[10px] items-center flex font-bold uppercase px-6 hover:bg-accent hover:text-background transition-colors">
                 Join
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 md:px-12 py-8 bg-foreground/5 border-t border-foreground/10 text-center">
        <p className="font-cta text-[10px] uppercase tracking-[0.3em] text-foreground/30">
          © {new Date().getFullYear()} Cape Media House. All rights reserved. Made with ⚡ in India.
        </p>
      </div>
    </footer>
  );
}
