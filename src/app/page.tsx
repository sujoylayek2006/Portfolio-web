import React from "react";
import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#ededed] overflow-hidden selection:bg-purple-900/50 selection:text-white">
      {/* Ambient Radial Mesh Background */}
      <AmbientBackground />

      {/* Editorial Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* Phase 1: Hero Section */}
        <Hero />

        {/* Phase 6: Infinite Vision & Skills Marquee Ticker */}
        <MarqueeBanner />

        {/* Phase 2: Featured Project Showcase with Laptop Mockups */}
        <ProjectShowcase />

        {/* Phase 3: About Me Section with Portrait */}
        <About />

        {/* Phase 3: Technical Skills Matrix */}
        <Skills />

        {/* Phase 3: Certifications & Accreditations */}
        <Certifications />

        {/* Phase 4: Serverless Contact Form & Editorial Footer */}
        <Contact />
      </main>
    </div>
  );
}
