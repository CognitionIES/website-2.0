"use client";

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { ProjectsSection } from "./about";
import CTASection from "@/components/CTA";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative font-roboto ">
      <MegaMenu />
      <Hero />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
