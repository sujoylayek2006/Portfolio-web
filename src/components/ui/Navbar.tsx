"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ArrowUpRight } from "lucide-react";
import { navLinks, socialLinks } from "@/data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy detection
      const sections = ["projects", "about", "skills", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center space-x-1.5 focus:outline-none"
            aria-label="Sujoy Layek Home"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Sujoy.
            </span>
          </a>

          {/* Center Indicator (Shows active section when scrolled) */}
          <div className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>{activeSection}</span>
          </div>

          {/* Right Controls: Resume & Menu Button */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* Resume Quick Button (Desktop) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 hover:border-purple-400/40 text-neutral-300 hover:text-white bg-white/[0.02] hover:bg-purple-500/10 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </a>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="group flex items-center space-x-1.5 text-sm sm:text-base font-serif tracking-wide text-neutral-200 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span>Menu</span>
              {isMenuOpen && <X className="w-4 h-4 text-neutral-400 group-hover:text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16"
          >
            {/* Top row alignment with header */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4">
              <span className="font-serif text-2xl font-bold text-neutral-400">
                Navigation
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="max-w-4xl mx-auto w-full my-auto py-8">
              <ul className="space-y-4 md:space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-baseline space-x-4 text-3xl md:text-6xl font-serif font-bold text-neutral-300 hover:text-white transition-colors"
                    >
                      <span className="text-xs md:text-sm font-mono text-purple-400/80 tracking-widest">
                        0{idx + 1}
                      </span>
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 text-purple-400 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Menu Footer with Contact & Socials */}
            <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-neutral-400 space-y-4 sm:space-y-0">
              <div>
                <p className="text-neutral-500 uppercase tracking-widest text-[10px]">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-purple-300 transition-colors font-mono"
                >
                  {socialLinks.email}
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
