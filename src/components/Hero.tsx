import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  
  // Memoize static positions for particles to prevent jittering on re-render
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      x: Math.random() * 80 - 40,
    }));
  }, []);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-8 md:px-12 pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px]"
        />
        <div 
          className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/20 blur-[100px]"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, var(--fg) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* Kinetic Grid/Lines */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The rotating grid squares that follow mouse */}
            <motion.div 
              style={{ 
                x: mousePos.x * 120,
                y: mousePos.y * 120
              }}
              className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute border-[2.5px] border-black dark:border-accent/40 rounded-[40px]"
                  style={{ 
                    width: `${200 + i * 120}px`,
                    height: `${200 + i * 120}px`,
                    rotate: `${i * 15}deg`
                  }}
                />
              ))}
            </motion.div>

            {/* Static Floating glowing points */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                animate={{
                  y: [0, -150, 0],
                  x: [0, p.x, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay
                }}
                className="absolute w-2 h-2 bg-black dark:bg-accent rounded-full"
                style={{
                  top: p.top,
                  left: p.left
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-10 py-20"
      >
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              className="flex items-center group cursor-default"
            >
              <span className="font-cta text-xs md:text-sm uppercase tracking-[0.4em] bg-accent text-black px-4 py-1.5 font-black flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                DIGITAL ADRENALINE AGENCY
              </span>
            </motion.div>
          </div>

          <h1 className="font-header text-[clamp(40px,11vw,130px)] font-black leading-[0.8] tracking-tighter text-balance">
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: "100%", skewY: 10 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="block origin-left"
              >
                CRAFTING
              </motion.span>
            </div>
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: "100%", skewY: 10 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="block text-accent origin-left"
              >
                BOLD
              </motion.span>
            </div>
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: "100%", skewY: 10 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="block origin-left"
              >
                EXPERIENCES
              </motion.span>
            </div>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-4 gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base md:text-lg max-w-md text-foreground/60 font-medium leading-relaxed"
          >
            A full-service digital boutique specializing in high-performance marketing for brands that refuse to blend into the noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4"
          >
            <button className="group relative flex items-center gap-3 bg-accent text-black font-cta font-black uppercase py-5 px-10 rounded-none overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 accent-glow">
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="group border border-foreground/20 font-cta font-black uppercase py-5 px-10 rounded-none hover:bg-foreground hover:text-background transition-all duration-300">
              Our Showreel
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-accent/50"
      >
        <motion.div 
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-accent rounded-full -ml-[2px]"
        />
      </motion.div>
    </section>
  );
}
