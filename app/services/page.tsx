"use client";
import React from "react";
import { motion } from "framer-motion";
import frame8 from "@/constants/images/Background/Frame_8.jpg";
import HeroSection from "@/components/Services/HeroSection";
import { AboutSection } from "@/components/Services/AboutSection";
import AccordionSection from "@/components/Services/AccordionSection";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import CTA from "@/components/HomePage/CTA";
import Footer from "@/components/footer";
import ServicesShowcase from "@/components/ServicesShowcase";

function ServicesPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${frame8.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MegaMenu />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesShowcase />
        <AccordionSection />
        <CTA />
        <Footer />
      </motion.main>
    </div>
  );
}

export default ServicesPage;
