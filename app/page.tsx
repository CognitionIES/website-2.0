"use client";

import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "@/components/HomePage/hero";
import AboutUs from "@/components/HomePage/AboutUs";
import dynamic from "next/dynamic";
import RecentProjects from "@/components/HomePage/RecentProjects";
import ContactSection from "./contact/ContactSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import CTA from "@/components/CTA";
import EngagementCarousel from "@/components/HomePage/EngagementModel";

const TestimonialSlider = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false }
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#F5FDFF] via-[#E6F0F5] to-[#F0F9FB]/80">
      <MegaMenu />
      <Hero />
      <div className="min-h-screen text-gray-900 font-sans relative overflow-hidden">
        <main className="relative">
          <section className="w-full relative">
            <AboutUs />
          </section>
          <section className="relative">
            <ServicesShowcase />
          </section>
          <section className="relative">
            <EngagementCarousel />
          </section>
          <section className="relative">
            <RecentProjects />
          </section>
          <section className="relative">
            <TestimonialSlider />
          </section>
          <section className="w-full relative overflow-hidden">
            <Careers />
          </section>
          <section className="relative bg-gradient-to-b from-[#F0F9FB] to-[#D9E8ED]/60">
            <ContactSection />
          </section>
          <CTA />
        </main>
        <Footer />
        {/* Enhanced Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/5 left-16 w-6 h-6 bg-[#0098AF] rounded-full blur-md -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute bottom-1/4 right-20 w-48 h-48 bg-[#99D5DF]/50 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{
            delay: 1.2,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-3/4 left-1/3 w-8 h-8 bg-[#003C46]/30 rounded-full blur-sm -z-10"
        />
      </div>
    </div>
  );
}
