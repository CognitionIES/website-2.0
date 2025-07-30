/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import frame8 from "@/constants/images/Background/Frame_8.jpg";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import AboutSection from "./mainContent";
import Footer from "@/components/footer";
import JobSeekerSection from "./JobSeekerSection";
import EmployerSection from "./EmployerSection";
import DividerElement from "@/components/DividerElement";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Locate, Mail, Map, MapIcon, MapPin, Phone } from "lucide-react";
import ServicesSection from "./Services";
import IndustriesWeServe from "./industriesWeServe";
import CTASection from "./CTA";
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
  const handleContactSubmit = (e: React.FormEvent) => {
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
      {/* <section
        ref={sectionRef}
        className="w-full relative py-16 sm:py-20 lg:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className={`py-8 ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
            <div
              className={`flex ${
                isMobile ? "flex-col" : "flex-col md:flex-row"
              }`}
            >
              <JobSeekerSection />
              {!isMobile && <DividerElement />}
              <EmployerSection isMobile={isMobile} />
            </div>
          </div>
        </motion.div>
      </section> */}

      <WhyPartner />
      <Footer />
    </div>
  );
};

export default Index;
{
  /* Contact Us 
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#003C46" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2
              className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#F5FDFF",
              }}
            >
              Connect With Us
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#99D5DF" }}
            >
              Ready to transform your recruitment strategy or advance your
              career?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Professional Contact Form 
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-4 py-4 rounded-lg border border-slate-300/20 outline-none focus:border-slate-300/40 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                    style={{ color: "#F5FDFF" }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-4 py-4 rounded-lg border border-slate-300/20 outline-none focus:border-slate-300/40 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                    style={{ color: "#F5FDFF" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-4 rounded-lg border border-slate-300/20 outline-none focus:border-slate-300/40 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                  style={{ color: "#F5FDFF" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 rounded-lg border border-slate-300/20 outline-none focus:border-slate-300/40 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                  style={{ color: "#F5FDFF" }}
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full px-4 py-4 rounded-lg border border-slate-300/20 outline-none focus:border-slate-300/40 transition-all duration-300 resize-none bg-white/10 backdrop-blur-sm"
                  style={{ color: "#F5FDFF" }}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#0098AF", color: "white" }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Professional Contact Details 
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "rgba(245, 253, 255, 0.1)" }}
                >
                  <Phone size={20} style={{ color: "#99D5DF" }} />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#F5FDFF" }}
                  >
                    Phone
                  </h4>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    +1 (555) 123-4567
                  </p>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    Monday - Friday, 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "rgba(245, 253, 255, 0.1)" }}
                >
                  <Mail size={20} style={{ color: "#99D5DF" }} />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#F5FDFF" }}
                  >
                    Email
                  </h4>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    contact@staffingpro.com
                  </p>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    careers@staffingpro.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "rgba(245, 253, 255, 0.1)" }}
                >
                  <MapPin size={20} style={{ color: "#99D5DF" }} />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#F5FDFF" }}
                  >
                    Office
                  </h4>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    123 Business District
                  </p>
                  <p style={{ color: "#99D5DF" }} className="text-sm">
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Professional office hours 
              <div
                className="p-6 rounded-lg border border-slate-300/20"
                style={{ backgroundColor: "rgba(245, 253, 255, 0.05)" }}
              >
                <h4 className="font-semibold mb-4" style={{ color: "#F5FDFF" }}>
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm" style={{ color: "#99D5DF" }}>
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      */
}
