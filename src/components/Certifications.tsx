"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      issuer: "IBM",
      badgeColor: "from-blue-600/20 to-indigo-600/10",
      accentBorder: "group-hover:border-blue-500/40",
      title: "IBM Full-Stack Software Developer",
      subtitle: "Web Architecture, Node.js & Cloud Foundations",
      year: "Certified",
      credentialUrl: "https://www.credly.com/organizations/ibm",
    },
    {
      issuer: "Oracle",
      badgeColor: "from-red-600/20 to-amber-600/10",
      accentBorder: "group-hover:border-red-500/40",
      title: "Oracle Certified Foundations",
      subtitle: "Database Engineering & Java Programming Principles",
      year: "Certified",
      credentialUrl: "https://education.oracle.com/",
    },
    {
      issuer: "Amazon Web Services",
      shortIssuer: "AWS",
      badgeColor: "from-amber-600/20 to-orange-600/10",
      accentBorder: "group-hover:border-amber-500/40",
      title: "AWS Cloud Fundamentals & Architecture",
      subtitle: "Cloud Infrastructure, Storage & Compute Foundations",
      year: "Certified",
      credentialUrl: "https://aws.amazon.com/certification/",
    },
    {
      issuer: "Udemy",
      badgeColor: "from-purple-600/20 to-pink-600/10",
      accentBorder: "group-hover:border-purple-500/40",
      title: "Full-Stack Web Development & Python Automation",
      subtitle: "Advanced JavaScript, React Ecosystem & Python Scripting",
      year: "Completed",
      credentialUrl: "https://www.udemy.com/",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Validated Competence (05)
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Certifications &amp; Accreditations.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Formal external verifications and industry accreditations demonstrating commitment to engineering excellence.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.issuer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/5 ${cert.accentBorder} transition-all duration-300 group flex flex-col justify-between`}
          >
            {/* Top Row: Issuer & Status */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-200">
                  {cert.issuer}
                </span>

                <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                {cert.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                {cert.subtitle}
              </p>
            </div>

            {/* Bottom Row: Verification Link & Year */}
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-mono text-[11px]">
                {cert.year}
              </span>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center space-x-1.5 text-neutral-300 hover:text-white font-mono text-[11px] uppercase tracking-wider transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
