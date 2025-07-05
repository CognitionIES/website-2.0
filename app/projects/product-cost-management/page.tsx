"use client";

import React from "react";
import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import ProjectCTA from "./ProjectCTA";
import Hero from "./hero";
import AboutSection from "./about";
import Objectives from "./Objectives";
import ProjectApproach from "./approach";
import PCMKeyFindings from "./keyfinding";
import SummaryGains from "./summary";

export default function ProductCostManagement() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <Objectives />
      <ProjectApproach />
      <PCMKeyFindings />
      <SummaryGains />
      <ProjectCTA />
      <Footer />
    </div>
  );
}
