"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary Top-Left Ambient Orb (Purple / Violet) */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-purple-600/18 via-violet-800/12 to-transparent blur-[120px]"
      />

      {/* Secondary Top-Right Ambient Orb (Fuchsia / Pink) */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[5%] -right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-pink-600/14 via-rose-700/10 to-transparent blur-[140px]"
      />

      {/* Center-Bottom Subtle Accent (Deep Indigo / Cyan) */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] left-[20%] w-[60vw] h-[40vw] max-w-[800px] max-h-[500px] rounded-full bg-gradient-to-tr from-blue-700/10 via-indigo-600/8 to-transparent blur-[160px]"
      />

      {/* Grain / Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
