import React from "react";
import Navbar from "@/components/ui/Navbar";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Hero from "@/components/sections/Hero";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#ededed] overflow-hidden selection:bg-purple-900/50 selection:text-white">
      {/* Ambient Radial Mesh Background */}
      <AmbientBackground />

      {/* Editorial Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section with Portrait */}
        <About />

        {/* Infinite Vision & Skills Marquee Ticker */}
        <MarqueeBanner />

        {/* Featured Project Showcase with 3D Laptop Stage */}
        <ProjectShowcase />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Certifications & Accreditations */}
        <Certifications />

        {/* Serverless Contact Form & Editorial Footer */}
        <Contact />
      </main>
    </div>
  );
}
