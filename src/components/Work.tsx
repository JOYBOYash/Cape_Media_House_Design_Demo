import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "The Purple Revolution",
    category: "Brand Launch",
    color: "bg-purple-600",
    image: "https://picsum.photos/seed/agency1/800/1000"
  },
  {
    title: "Viral at Scale",
    category: "Social Campaign",
    color: "bg-blue-600",
    image: "https://picsum.photos/seed/agency2/1000/800"
  },
  {
    title: "10x ROAS Story",
    category: "Performance Media",
    color: "bg-green-600",
    image: "https://picsum.photos/seed/agency3/800/800"
  },
  {
    title: "Creator Economy Play",
    category: "Influencer",
    color: "bg-pink-600",
    image: "https://picsum.photos/seed/agency4/800/1000"
  }
];

export function Work() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* High-intensity focus overlay */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-[var(--overlay)] pointer-events-none transition-colors duration-700"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, var(--overlay) 80%)'
            }}
          />
        )}
      </AnimatePresence>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="flex"
            >
              <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                SELECTED WORK
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              className="font-header text-4xl md:text-7xl font-black leading-none"
            >
              DEFINING THE<br />
              <span className="text-accent underline decoration-4 underline-offset-[12px]">CULTURE.</span>
            </motion.h2>
          </div>
          <button className="font-cta text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-accent pb-2 hover:text-accent transition-colors flex items-center gap-2">
            ALL CASE STUDIES <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={cn(
                "group relative overflow-hidden h-[400px] md:h-[600px] cursor-pointer border border-foreground/10 card-tilt bg-foreground/5 transition-all duration-700",
                i === 0 ? "lg:col-span-12 h-[350px] md:h-[450px]" : "lg:col-span-4",
                hoveredIdx !== null && hoveredIdx !== i ? "opacity-20 scale-95 blur-[4px] grayscale" : "opacity-100 scale-100"
              )}
            >
              {/* Featured Case Study Header */}
              {i === 0 && (
                <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-20">
                  <div className="bg-accent h-1 w-12 mt-2" />
                  <span className="font-cta text-[10px] text-foreground/40 font-black">FEATURED CASE STUDY</span>
                </div>
              )}

              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end gap-2 z-10">
                <span className="font-cta text-[10px] md:text-xs uppercase tracking-widest text-accent font-black">{project.category}</span>
                <h3 className="font-header text-3xl md:text-5xl font-black text-foreground group-hover:text-accent transition-colors leading-[0.8] tracking-tighter">
                  {project.title}
                </h3>
              </div>

              {/* Decorative Corner */}
              {i === 0 && (
                <div className="absolute -bottom-2 -left-2 w-24 h-24 border-l border-b border-accent z-20 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
