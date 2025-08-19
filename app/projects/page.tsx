"use client";

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { ProjectsSection } from "./about";
import CTASection from "@/components/CTA";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-b from-white to-[#F5F7FA]/80">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0098AF]/20 rounded-full blur-3xl -z-10" />
      </div>
      <MegaMenu />
      <Hero />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
