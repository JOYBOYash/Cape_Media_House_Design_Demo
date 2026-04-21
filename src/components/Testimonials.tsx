import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CAPE DIDN'T JUST CHANGE OUR BRANDING; THEY CHANGED THE WAY THE WHOLE MARKET SEES US. PURE GENIUS.",
    author: "MARCUS CHEN",
    role: "CEO, VORTEX INDUSTRIES",
    accent: "text-accent"
  },
  {
    quote: "THE ABILITY TO PLUG INTO CULTURE BEFORE IT BREAKS IS THEIR SUPERPOWER. WE'RE ALWAYS THREE STEPS AHEAD.",
    author: "SARAH JENKINS",
    role: "CMO, ETHEREAL GROUP",
    accent: "text-foreground"
  },
  {
    quote: "STRATEGY WITH SOUL. EVERY DATA POINT HAD A STORY. EVERY DECISION HAD POWER. TRULY LEGENDARY STUFF.",
    author: "DAVID ROSS",
    role: "FOUNDER, APEX TECH",
    accent: "text-accent"
  }
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 md:px-12 bg-background border-y border-foreground/5 relative overflow-hidden">
      {/* Visual background noise/shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-accent/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32 relative z-10">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex"
          >
            <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              CLIENT LOVE
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-header text-4xl md:text-7xl font-black leading-none"
          >
            WORDS FROM<br />
            <span className="text-accent underline decoration-4 underline-offset-[12px]">TITANS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-background p-6 md:p-16 flex flex-col gap-10 hover:bg-foreground transition-all duration-700 ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start">
                <Quote size={40} className="text-accent opacity-20 group-hover:opacity-100 transition-opacity" />
                <span className="font-header text-6xl md:text-8xl font-black text-foreground/5 group-hover:text-background/5">
                  0{i + 1}
                </span>
              </div>

              <p className={`font-header ${i === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-black italic tracking-tight leading-[0.9] group-hover:text-background transition-colors`}>
                "{t.quote}"
              </p>

              <div className="flex flex-col gap-1 mt-auto">
                <span className="font-cta text-sm uppercase tracking-widest text-accent font-black">
                  {t.author}
                </span>
                <span className="font-cta text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-black group-hover:text-background/40">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
