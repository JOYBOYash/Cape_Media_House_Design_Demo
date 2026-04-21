import { motion, useScroll, useSpring } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="relative selection:bg-accent selection:text-background min-h-screen overflow-x-hidden font-body">
        <CustomCursor />
        {/* Minimalism Skewed Background Decorator */}
        <div className="fixed top-0 right-0 w-2/3 h-full bg-foreground/[0.03] -mr-32 skew-x-12 z-0 pointer-events-none transition-colors duration-500" />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[100] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main>
          <Hero />
          <Marquee />
  
          <About />
          <Services />
          <Work />
          <Philosophy />
          <Partners />
          <Testimonials />
        </main>
        
        <Footer />

        {/* Custom cursor background noise effect or subtle overlays can be added here */}
        <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.015] grayscale" 
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />
      </div>
    </ThemeProvider>
  );
}

