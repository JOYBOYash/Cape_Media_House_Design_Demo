import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const partners = [
  { name: 'Aesthetic', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' },
  { name: 'Vortex', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' },
  { name: 'Ethereal', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' },
  { name: 'Nexus', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' },
  { name: 'Velocity', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' },
  { name: 'Apex', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80&auto=format' }
];

export function Partners() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section className="py-20 bg-background border-b border-foreground/5 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex flex-col gap-2"
        >
          <span className="font-cta bg-accent text-black text-[10px] uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2 w-fit">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
            TRUSTED BY TITANS
          </span>
        </motion.div>
      </div>
      
      <div className="flex whitespace-nowrap group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 md:gap-20 pr-10 md:pr-20 items-center transition-all duration-700"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 grayscale opacity-30 group-hover:opacity-10 hover:!opacity-100 hover:!grayscale-0 transition-all duration-500 hover:scale-110 cursor-default"
            >
              <div className="w-12 h-12 bg-foreground/10 flex items-center justify-center font-header font-black text-xl italic border border-foreground/5">
                {partner.name[0]}
              </div>
              <span className="font-header text-2xl md:text-4xl font-black uppercase text-foreground tracking-tighter">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
