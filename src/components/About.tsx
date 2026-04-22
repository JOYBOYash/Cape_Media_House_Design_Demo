import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: "Brands Served", value: "150+" },
  { label: "Years in the Game", value: "07" },
  { label: "Client Love", value: "98%" }
];

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-24 md:py-40 px-8 md:px-12 bg-background relative z-10">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Enhanced rotating ring with blurry and particle effect */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[85%] aspect-square border-2 border-dashed border-accent/10 rounded-full blur-[2px]"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] aspect-square border border-accent/5 rounded-full"
            />
            {/* Particles / Highlights on the ring to make rotation visible */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] aspect-square rounded-full z-0"
              style={{ 
                background: 'conic-gradient(from 0deg, transparent 0%, var(--accent) 5%, transparent 10%, transparent 40%, var(--accent) 45%, transparent 50%)',
                opacity: 0.15,
                filter: 'blur(8px)'
              }}
            />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-10"
            >
              <span className="font-header text-[clamp(100px,18vw,240px)] font-black leading-none text-accent drop-shadow-[0_0_30px_rgba(204,255,0,0.2)]">07</span>
              <div className="flex flex-col items-center md:items-start justify-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-header text-5xl md:text-8xl font-black text-foreground uppercase leading-[0.8]"
                >
                  YEARS
                </motion.span>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="font-cta text-xs md:text-lg uppercase tracking-[0.4em] font-black text-foreground/40 mt-2 whitespace-nowrap"
                >
                  OF CRAFTING CULTURE
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex"
          >
            <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              WHO WE ARE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="font-header text-4xl md:text-7xl font-black leading-[0.8]"
          >
            ARCHITECTS OF <br /><span className="text-accent underline decoration-4 underline-offset-8">VELOCITY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl font-normal"
          >
            Born from a passion for culture-making, Cape Media House is where creative insanity meets strategic genius. We don't just run campaigns — we craft movements that make people feel something.
          </motion.p>

          <div className="grid grid-cols-3 gap-8 mt-4 border-t border-foreground/10 pt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex flex-col gap-2"
              >
                <span className="font-header text-3xl md:text-5xl font-black text-foreground">{stat.value}</span>
                <span className="font-cta text-[10px] uppercase tracking-widest opacity-40 font-black">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
