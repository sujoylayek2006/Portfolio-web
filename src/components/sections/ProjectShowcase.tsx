"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import LaptopMockup from "@/components/ui/LaptopMockup";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeNgoImage, setActiveNgoImage] = useState(0);

  const activeProject = projects[currentIndex];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const setProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeCurve,
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: easeCurve,
      },
    }),
  };

  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Selected Works
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Featured Projects.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Interactive web platforms, developer automation tools, and scalable systems built with clean code and high performance.
        </p>
      </div>

      {/* 3D Stage Navigation Tabs & Slide Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/5">
        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {projects.map((proj, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setProject(idx)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "text-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "text-neutral-400 hover:text-neutral-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectPill"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <span>{proj.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous project slide"
            className="p-2.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next project slide"
            className="p-2.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Showcase Stage */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeProject.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* Left Column: Project Metadata & Story */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400 mb-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full border ${activeProject.badgeColor}`}
                >
                  {activeProject.category}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-amber-400/90 mt-1 uppercase tracking-wider">
                {activeProject.subtitle}
              </p>

              {/* Role & Year Table */}
              <div className="grid grid-cols-2 gap-4 my-6 py-4 border-y border-white/10 text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
                    ROLE
                  </span>
                  <span className="text-neutral-200 font-medium text-sm">
                    {activeProject.role}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
                    YEAR
                  </span>
                  <span className="text-neutral-200 font-medium text-sm">
                    {activeProject.year}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
                {activeProject.description}
              </p>

              {/* Core Feature Bullet Points */}
              <ul className="space-y-2 mb-8 text-xs sm:text-sm text-neutral-400">
                {activeProject.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <span>Explore Live Website</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/15 text-neutral-200 hover:text-white hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-xs sm:text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <button
                onClick={() => paginate(1)}
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white ml-auto transition-colors"
              >
                <span>Next ({projects[(currentIndex + 1) % projects.length].title})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Laptop Mockup with Real Screenshot */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <LaptopMockup urlBar={activeProject.urlBar}>
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[340px] md:min-h-[420px] bg-neutral-950 overflow-hidden flex items-center justify-center">
                  {/* Real Project Screenshot */}
                  <div className="relative w-full h-full">
                    <Image
                      src={
                        activeProject.gallery
                          ? activeProject.gallery[activeNgoImage]
                          : activeProject.mainImage
                      }
                      alt={`${activeProject.title} Interface Preview`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      className="object-contain object-center transition-all duration-500 bg-[#0c0c10]"
                    />
                  </div>

                  {/* NGO Multi-Screenshot Gallery Switcher (if gallery exists) */}
                  {activeProject.gallery && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-xl z-20">
                      <span className="text-[10px] font-mono text-neutral-400 mr-1 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-purple-400" />
                        Views:
                      </span>
                      {activeProject.gallery.map((_, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => setActiveNgoImage(gIdx)}
                          className={`w-5 h-5 rounded-full text-[10px] font-mono flex items-center justify-center transition-all ${
                            activeNgoImage === gIdx
                              ? "bg-purple-500 text-white font-bold scale-110 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                              : "bg-white/10 text-neutral-400 hover:text-white hover:bg-white/20"
                          }`}
                          aria-label={`Show view ${gIdx + 1}`}
                        >
                          {gIdx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </LaptopMockup>

              {/* Stage Accent Glow Under Device */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none -z-10" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
