/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import frame8 from "@/constants/images/Background/Frame_8.jpg";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import AboutSection from "./mainContent";
import Footer from "@/components/footer";
import { useIsMobile } from "@/hooks/use-mobile";
import ServicesSection from "./Services";
import IndustriesWeServe from "./industriesWeServe";
import WhyPartner from "./CTA";
import ProcessSection from "./process";
import ToolsSection from "./tool";

const Index = () => {
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
  const handleContsactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };
  return (
    <div
      className="h-auto w-full overflow-hidden"
      style={{
        backgroundImage: `url(${frame8.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MegaMenu />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />

      <IndustriesWeServe />
      <ToolsSection />
      <section id="">
        <WhyPartner />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
