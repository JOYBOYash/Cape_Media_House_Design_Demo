import React from 'react';
import { motion } from 'motion/react';

const activities = [
  "Creative Strategy",
  "Brand Identity",
  "Social Media",
  "Web Development",
  "UI/UX Design",
  "Video Production",
  "Motion Graphics",
  "Performance Marketing"
];

export function Marquee() {
  return (
    <div className="relative w-full bg-accent py-6 md:py-8 overflow-hidden border-y border-foreground/10 rotate-[-1deg] translate-y-[-20px] z-20">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 pr-12 items-center"
        >
          {[...activities, ...activities].map((activity, i) => (
            <React.Fragment key={i}>
              <span className="font-header text-2xl md:text-4xl font-black text-black uppercase tracking-tight">
                {activity}
              </span>
              <div className="w-3 h-3 bg-black rounded-full" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
