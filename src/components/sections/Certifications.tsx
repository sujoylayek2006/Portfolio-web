"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";
import { certifications, certificationCategories } from "@/data/certifications";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            Verified Accreditations &bull; 21 Certifications
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Certifications &amp; Credentials.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Verified industry credentials spanning Cloud Infrastructure, Generative AI, Problem Solving, Software Engineering, and Cyber Defense.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
        {certificationCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                isSelected
                  ? "text-white font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "text-neutral-400 hover:text-neutral-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeCertTab"
                  className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-60">({cat.count})</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Certifications Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCertifications.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 rounded-2xl bg-neutral-900/60 border border-white/5 ${cert.accentBorder} transition-all duration-300 group flex flex-col justify-between hover:bg-neutral-900/80`}
            >
              {/* Top Row: Issuer & Verified Status */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-200">
                    {cert.issuer}
                  </span>

                  <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed font-normal line-clamp-3">
                  {cert.subtitle}
                </p>
              </div>

              {/* Bottom Row: Year & PDF Action Button */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-mono text-[11px]">
                  {cert.year}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-neutral-200 hover:text-white font-mono text-[11px] uppercase tracking-wider transition-all"
                  aria-label={`View certificate for ${cert.title}`}
                >
                  <span>View PDF</span>
                  <ExternalLink className="w-3 h-3 text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
