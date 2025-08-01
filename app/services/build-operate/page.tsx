"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import WhyChooseUs from "./about";
//import CapabilitiesGrid from "./CapabilitiesGrid";
import ClosingCTA from "./ClosingCTA";
import Footer from "@/components/footer";
import ExpertiseHighlight from "./ExpertiseHighlight";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import { ProcessWorkflow } from "./processWorkFlow";

export default function Home() {
  return (
    <div>
      <MegaMenu />
      <div>
        <Hero />
        <HeroSection />
        <WhyChooseUs />
        {/* <CapabilitiesGrid /> */}
        <ProcessWorkflow />
        <ExpertiseHighlight />
        <ClosingCTA />
        <Footer />
      </div>
    </div>
  );
}
