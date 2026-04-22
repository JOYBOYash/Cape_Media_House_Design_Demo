import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import { Flame, Brain, Share2 } from 'lucide-react';

const philosophies = [
  {
    icon: <Flame size={24} />,
    title: "Bold First",
    desc: "Safe is forgettable. We push boundaries so your brand is impossible to ignore."
  },
  {
    icon: <Brain size={24} />,
    title: "Strategy + Soul",
    desc: "Every creative decision has logic behind it. Every data point has a story."
  },
  {
    icon: <Share2 size={24} />,
    title: "Culture-Led",
    desc: "We plug into culture before the wave breaks. First movers win."
  }
];

const String = "DON'T";

export function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16 md:gap-32">
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="flex"
          >
            <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              OUR BELIEF SYSTEM
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-header text-4xl md:text-[clamp(64px,10vw,120px)] font-black leading-[0.85] tracking-tighter max-w-4xl"
          >
            {String} ATTRACT. <br />
            <span className="text-accent underline decoration-4 underline-offset-8">IMPACT</span> <br />
            THEM.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full">
          {philosophies.map((phil, i) => (
            <motion.div
              key={phil.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="w-16 h-16 bg-background/5 border border-background/20 rounded-none flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                {phil.icon}
              </div>
              <h3 className="font-header text-2xl font-black uppercase tracking-tight">{phil.title}</h3>
              <p className="text-background/50 font-normal leading-relaxed text-sm md:text-base max-w-xs">{phil.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
