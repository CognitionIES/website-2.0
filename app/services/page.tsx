"use client";
import React from "react";
import { motion } from "framer-motion";

import { HeroSection } from "@/components/Services/HeroSection";
import { AboutSection } from "@/components/Services/AboutSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { AccordionSection } from "@/components/Services/AccordionSection";
import { CTASection } from "@/components/Services/CTASection";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import CTA from "@/components/HomePage/CTA";
import Footer from "@/components/footer";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <MegaMenu />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AccordionSection />
        <CTASection />
        <CTA />
        <Footer />
      </motion.main>
    </div>
  );
}

export default ServicesPage;
