"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Terminal,
  Server,
  Wrench,
  CheckCircle,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap = {
  Layers,
  Terminal,
  Server,
  Wrench,
  Cpu,
  ShieldCheck,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Expertise &bull; Capabilities
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Technical Stack.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Battle-tested libraries, architectural patterns, and development tooling deployed across modern software stacks.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = iconMap[category.iconName];
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/15 transition-all group overflow-hidden"
            >
              {/* Category Subtle Ambient Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Category Header with Percentage Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-white/10 shrink-0">
                        <Icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                    </div>

                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200 shrink-0">
                      {category.percentage}%
                    </span>
                  </div>

                  {/* Animated Proficiency Bar */}
                  <div className="mb-6">
                    <div className="h-1.5 w-full bg-neutral-800/80 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.2 + idx * 0.08,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.barGradient}`}
                      />
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-neutral-800/60 hover:bg-neutral-800 border border-white/5 hover:border-purple-500/30 text-neutral-300 hover:text-white transition-all select-none"
                      >
                        <CheckCircle className="w-3 h-3 text-purple-400 opacity-60" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
