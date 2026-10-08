"use client";

import React from "react";
import { motion } from "framer-motion";

interface LaptopMockupProps {
  children: React.ReactNode;
  urlBar?: string;
  className?: string;
}

export default function LaptopMockup({
  children,
  urlBar,
  className = "",
}: LaptopMockupProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-3xl mx-auto group perspective-[1000px] ${className}`}
    >
      {/* Ambient Glow behind Laptop on Hover */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Screen Lid (Top Half) */}
      <div className="relative rounded-t-2xl md:rounded-t-[20px] bg-[#1a1a1d] p-2 sm:p-3 pb-0 shadow-2xl border border-neutral-700/60 ring-1 ring-white/10">
        {/* Webcam / Notch Area */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700/80" />
          <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/50" />
        </div>

        {/* Display Frame / Screen */}
        <div className="relative rounded-t-lg bg-[#0d0d11] overflow-hidden border border-neutral-800 shadow-inner aspect-[16/10] flex flex-col">
          {/* Optional Browser URL Bar */}
          {urlBar && (
            <div className="h-6 sm:h-7 bg-[#141418] border-b border-neutral-800/80 px-3 flex items-center justify-between text-[10px] text-neutral-400 select-none">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-[#09090b] px-3 py-0.5 rounded-full text-neutral-400 font-mono text-[9px] truncate max-w-[200px] sm:max-w-[320px] border border-white/5">
                https://{urlBar}
              </div>
              <div className="w-6" />
            </div>
          )}

          {/* Screen Content */}
          <div className="relative flex-1 w-full overflow-hidden">
            {children}
          </div>

          {/* Screen Glass Glare / Sheen effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Laptop Hinge & Base Chassis */}
      <div className="relative">
        {/* Hinge */}
        <div className="h-1.5 md:h-2 bg-gradient-to-b from-[#141416] to-[#25252b] w-full mx-auto" />

        {/* Laptop Lower Lip / Base */}
        <div className="relative h-3 md:h-4 bg-gradient-to-b from-[#2b2b32] via-[#202026] to-[#121216] rounded-b-xl shadow-2xl border-t border-white/10 flex items-start justify-center">
          {/* Opening Notch Lip */}
          <div className="w-16 sm:w-24 h-1.5 bg-[#17171a] rounded-b-md shadow-inner" />
        </div>

        {/* Chassis Table Shadow */}
        <div className="absolute -bottom-3 left-6 right-6 h-3 bg-black/60 blur-md rounded-full pointer-events-none" />
      </div>
    </motion.div>
  );
}
