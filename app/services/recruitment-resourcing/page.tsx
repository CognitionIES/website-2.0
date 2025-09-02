/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import AboutSection from "./mainContent";
import ServicesSection from "./Services";
import IndustriesWeServe from "./industriesWeServe";
import WhyPartner from "./CTA";
import ProcessSection from "./process";
import ToolsSection from "./tool";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Index() {
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="h-auto w-full overflow-hidden relative bg-gradient-to-b from-[#F5FDFF] via-[#E6F0F5] to-[#F0F9FB]/80">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <MegaMenu />
      <Hero />
      <section ref={sectionRef}>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesWeServe />
        <ToolsSection />
        <WhyPartner />
      </section>
      <Footer />
    </div>
  );
}
