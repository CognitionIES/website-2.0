"use client"; // Mark as Client Component to allow event handlers or interactivity

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import AboutSection from "./about";
import CTASection from "@/components/CTA";
const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative  overflow-hidden">
        <Hero />
      </section>
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
