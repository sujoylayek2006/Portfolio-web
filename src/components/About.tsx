"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Award, Terminal, ArrowUpRight } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "B.Tech in CSE at NSHM Knowledge Campus Durgapur",
      color: "text-purple-400",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Specialized in React, Next.js, TypeScript & Node architectures",
      color: "text-pink-400",
    },
    {
      icon: Terminal,
      title: "Developer Tooling",
      desc: "Building Python bulk automation tools & CLI utilities",
      color: "text-blue-400",
    },
    {
      icon: Award,
      title: "Hackathons & Impact",
      desc: "Led flagship NGO Digital Connect platform & team initiatives",
      color: "text-emerald-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            About &amp; Background (03)
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Who I Am.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          A builder combining rigorous computer science fundamentals with an obsession for refined, pixel-perfect user experiences.
        </p>
      </div>

      {/* Grid: Bio Left, Portrait Right (Lewis Zhang Editorial Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg"
        >
          <p className="text-xl sm:text-2xl font-serif text-white leading-snug">
            Hi! I&apos;m <strong className="text-purple-300 font-semibold">Sujoy Layek</strong> — a Full-Stack Web Developer and Computer Science Engineering student based in West Bengal, India.
          </p>

          <p>
            Currently pursuing my <strong className="text-white">B.Tech in Computer Science &amp; Engineering</strong> at <span className="text-neutral-100 font-medium">NSHM Knowledge Campus Durgapur</span>, I focus on bridging deep algorithmic thinking with modern frontend and backend architectures.
          </p>

          <p>
            Throughout my development journey, I have built complete end-to-end applications: from collaborative social impact ecosystems like <strong className="text-white">NGO Digital Connect</strong> (which unites donors, non-profits, and beneficiaries with AI-assisted triage) to system-level productivity utilities like <strong className="text-white">RenameX</strong> and <strong className="text-white">MultiFileMaker</strong> in Python.
          </p>

          <p>
            I have a deep commitment to transforming complex concepts into clean, accessible, and high-performance software. When I&apos;m not architecting code, I explore competitive programming patterns, study distributed system models, and experiment with interactive micro-interactions.
          </p>

          {/* Quick Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-white/15 transition-all group"
                >
                  <div className="flex items-center space-x-3 mb-1.5">
                    <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal pl-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center space-x-6">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-purple-300 hover:text-purple-200 transition-colors"
            >
              <span>Let&apos;s start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Portrait Photo with Editorial Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle Backing Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/15 via-pink-600/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/sujoy-profile.jpg"
                alt="Sujoy Layek — Full-Stack Developer and B.Tech CSE Student"
                fill
                priority
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <div>
                <p className="text-white font-medium">Sujoy Layek</p>
                <p className="text-neutral-400 text-[10px] font-mono">B.Tech CSE &bull; NSHM Durgapur</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
