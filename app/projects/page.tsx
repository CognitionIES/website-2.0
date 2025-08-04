"use client";
import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { ProjectsSection } from "./about";
import CTASection from "@/components/CTA";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative  overflow-hidden">
        <Hero />
      </section>
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
