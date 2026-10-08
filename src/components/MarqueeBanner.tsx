"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface MarqueeBannerProps {
  className?: string;
  speed?: number; // duration in seconds for one full loop
}

const marqueeItems = [
  "FULL-STACK ARCHITECTURE",
  "SCALABLE WEB ECOSYSTEMS",
  "CREATES ENDLESS POSSIBILITIES",
  "HIGH-PERFORMANCE WEB",
  "PYTHON AUTOMATION & UTILITIES",
  "HACKATHON INNOVATION",
  "TRACEABLE IMPACT PLATFORMS",
  "INTERACTIVE EXPERIENCES",
];

export default function MarqueeBanner({
  className = "",
  speed = 28,
}: MarqueeBannerProps) {
  return (
    <section
      className={`relative w-full py-6 md:py-8 overflow-hidden border-y border-white/10 bg-neutral-950/70 backdrop-blur-md z-20 ${className}`}
      aria-label="Vision and skills highlights ticker"
    >
      {/* Subtle edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-fit select-none">
        <motion.div
          className="flex shrink-0 items-center space-x-8 md:space-x-12 pr-8 md:pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
        >
          {/* We render items twice in sequence to achieve an uninterrupted seamless 50% loop */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center space-x-8 md:space-x-12 group cursor-default"
            >
              <span className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] text-neutral-300 group-hover:text-amber-300 transition-colors duration-300 font-semibold whitespace-nowrap">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400/80 group-hover:text-rose-400 group-hover:scale-125 transition-all duration-300 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
