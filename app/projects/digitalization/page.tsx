import React from "react";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import AboutSection from "./about";
import Objective from "./objective";
import Scope from "./scope";
import Outcome from "./outcome";
import Tech from "./tech";
import CTASection from "./CTA";

export default function DigitalizationProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#E5ECEF]">
      <MegaMenu />
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <Hero />
      </section>
      <AboutSection />
      <Objective />
      <Scope />
      <Outcome />
      <Tech />
      <CTASection />
      {/* Call to Action Section */} 
      <Footer />
    </div>
  );
}
