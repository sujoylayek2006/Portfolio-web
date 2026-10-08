"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 md:pt-44 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
      {/* Top Tag & Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-3"
      >
        <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide bg-neutral-900/80 border border-white/10 text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span>Available for Internships & Roles</span>
        </span>
        <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
          B.Tech CSE • NSHM Knowledge Campus
        </span>
      </motion.div>

      {/* Main Editorial Hero Headline */}
      <div className="my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] max-w-5xl">
            Crafting scalable systems &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 italic">
              pixel-perfect
            </span>{" "}
            digital realities.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-base md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed"
        >
          Hi, I&apos;m{" "}
          <strong className="text-white font-medium">Sujoy Layek</strong> — a
          Full-Stack Web Developer and Computer Science Engineering student. I
          engineer traceable web platforms, developer automation tools, and
          high-performance interfaces.
        </motion.p>

        {/* CTA Buttons & Social Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <span>Explore Featured Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-white/15 text-neutral-300 hover:text-white hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-sm font-medium"
          >
            <span>Get in Touch</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-2 sm:ml-4 pt-2 sm:pt-0">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email Sujoy Layek"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Scroll Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-500 font-mono"
      >
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span className="text-neutral-400">
            Interests: Full-Stack Web Development &bull; Cybersecurity &bull; Ethical Hacking &bull; AI
          </span>
        </div>

        <a
          href="#projects"
          className="group flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors shrink-0"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-purple-400" />
        </a>
      </motion.div>
    </section>
  );
}
