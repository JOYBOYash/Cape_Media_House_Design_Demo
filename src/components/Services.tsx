import React from 'react';
import { motion } from 'motion/react';
import { Palette, Share2, Zap, Video, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Palette size={32} />,
    title: "Creative",
    desc: "Campaigns that don't just interrupt — they captivate. Visual storytelling, concept ideation & content that earns attention.",
    tags: ["Branding", "Campaigns", "Visual Design", "Copywriting"]
  },
  {
    icon: <Share2 size={32} />,
    title: "Media",
    desc: "Right message, right person, right moment. Data-driven media planning that turns spend into impact across every channel.",
    tags: ["Paid Social", "SEO/SEM", "Programmatic", "Analytics"]
  },
  {
    icon: <Zap size={32} />,
    title: "Technology",
    desc: "We build digital experiences that feel magic. From high-performance websites to immersive interactive campaigns.",
    tags: ["Web Dev", "UI/UX", "Automation", "AI Tools"]
  },
  {
    icon: <Video size={32} />,
    title: "Production",
    desc: "Cinema-quality content at brand speed. We shoot, edit, and craft visuals that make people stop scrolling — for real.",
    tags: ["Video", "Photography", "Motion", "Reels"]
  }
];

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-12 bg-foreground/5 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="flex"
            >
              <span className="font-cta bg-accent text-black text-xs uppercase tracking-[0.4em] font-black px-4 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                WHAT WE DO
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-header text-4xl md:text-7xl font-black leading-[0.8]"
            >
              EVERY DIGITAL<br />
              <span className="text-accent underline decoration-4 underline-offset-[12px]">SUPERPOWER.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.4 }}
            className="font-cta text-[10px] uppercase tracking-widest text-foreground/40 max-w-xs text-left md:text-right font-black"
          >
            We don't settle for average. We push for the extraordinary in every channel we touch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-background p-6 md:p-16 hover:bg-foreground transition-colors duration-500 overflow-hidden"
            >
              {/* Background Number */}
              <span className="absolute top-8 right-12 font-header text-8xl font-black text-foreground/5 group-hover:text-background/10 transition-colors">
                0{i+1}
              </span>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="text-accent group-hover:text-accent transition-colors duration-500 bg-foreground/5 group-hover:bg-background/10 w-16 h-16 flex items-center justify-center rounded-none border border-foreground/5">
                  {service.icon}
                </div>
                
                <h3 className="font-header text-3xl md:text-4xl font-black group-hover:text-background transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-foreground/60 group-hover:text-background/60 transition-colors duration-500 text-base font-normal leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-cta text-[10px] uppercase tracking-widest py-2 px-4 border border-foreground/10 group-hover:border-background/20 group-hover:text-background/90 rounded-none font-black">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/5 group-hover:border-background/10">
                  <button className="flex items-center gap-2 font-cta text-xs font-black uppercase tracking-widest group-hover:text-accent transition-colors">
                    EXPLORE SERVICE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
