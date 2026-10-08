"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronDown,
  Building2,
  FileText,
} from "lucide-react";
import {
  organizations,
  certifications,
  type OrganizationData,
} from "@/data/certifications";

export default function Certifications() {
  // Default to HackerRank, or allow clicking to select/toggle
  const [selectedOrgId, setSelectedOrgId] = useState<string>("hackerrank");

  const selectedOrg = organizations.find((org) => org.id === selectedOrgId);
  const activeCertificates = certifications.filter(
    (cert) => cert.orgId === selectedOrgId
  );

  const handleOrgClick = (orgId: string) => {
    setSelectedOrgId(orgId);
  };

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
            Verified Accreditations &bull; 5 Organizations &bull; 21 Certifications
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Certifications &amp; Credentials.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Select an issuing organization box below to reveal and review its verified credential records and official PDF certificates.
        </p>
      </div>

      {/* Organization Boxes Grid (Joto gulo organization toto gulo box) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
        {organizations.map((org: OrganizationData) => {
          const isSelected = selectedOrgId === org.id;
          const count = certifications.filter((c) => c.orgId === org.id).length;

          return (
            <motion.button
              key={org.id}
              onClick={() => handleOrgClick(org.id)}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`relative text-left p-5 md:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                isSelected
                  ? "bg-neutral-900 border-2 border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                  : "bg-neutral-900/50 hover:bg-neutral-900/80 border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Ambient Glow for Selected / Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${org.glowColor} pointer-events-none transition-opacity duration-300 ${
                  isSelected ? "opacity-100" : "opacity-30 group-hover:opacity-70"
                }`}
              />

              <div className="relative z-10 w-full">
                {/* Header: Icon & Count */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${org.badgeBg}`}
                  >
                    <Building2 className={`w-5 h-5 ${org.color}`} />
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider ${
                      isSelected
                        ? "bg-purple-500 text-white"
                        : "bg-white/5 border border-white/10 text-neutral-300"
                    }`}
                  >
                    {count} {count === 1 ? "Cert" : "Certs"}
                  </span>
                </div>

                {/* Organization Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {org.name}
                </h3>

                <p className="text-neutral-400 text-xs mt-1.5 leading-relaxed font-normal line-clamp-2">
                  {org.tagline}
                </p>

                {/* Domain Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {org.domains.slice(0, 3).map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-neutral-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Click Affordance */}
              <div className="relative z-10 mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span
                  className={`font-mono text-[11px] flex items-center gap-1 transition-colors ${
                    isSelected ? "text-purple-300 font-semibold" : "text-neutral-400"
                  }`}
                >
                  {isSelected ? "Viewing Credentials" : "Click to View"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isSelected ? "rotate-180 text-purple-400" : "text-neutral-500"
                  }`}
                />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Expanded Credentials Display of Selected Organization */}
      <AnimatePresence mode="wait">
        {selectedOrg && (
          <motion.div
            key={selectedOrg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-xl relative shadow-2xl"
          >
            {/* Active Org Banner Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
              <div className="flex items-center space-x-3.5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${selectedOrg.badgeBg}`}
                >
                  <Building2 className={`w-6 h-6 ${selectedOrg.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {selectedOrg.name}
                    </h3>
                    <span className="inline-flex items-center space-x-1 text-xs font-mono text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                    Showing all {activeCertificates.length} verified credentials issued to Sujoy Layek
                  </p>
                </div>
              </div>

              {/* Quick Switch Helper */}
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-2 bg-neutral-900/80 px-3.5 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>{activeCertificates.length} PDF Documents Available</span>
              </div>
            </div>

            {/* Grid of Certificates for This Specific Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-6 rounded-2xl bg-neutral-900/70 border border-white/5 ${cert.accentBorder} transition-all duration-300 group flex flex-col justify-between hover:bg-neutral-900`}
                >
                  {/* Top Details */}
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

                    <h4 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight line-clamp-2">
                      {cert.title}
                    </h4>

                    <p className="text-neutral-400 text-xs mt-2 leading-relaxed font-normal line-clamp-3">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Date & View PDF Action Button */}
                  <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {cert.year}
                    </span>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-neutral-200 hover:text-white font-mono text-[11px] uppercase tracking-wider transition-all"
                      aria-label={`View PDF certificate for ${cert.title}`}
                    >
                      <span>View PDF</span>
                      <ExternalLink className="w-3 h-3 text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
