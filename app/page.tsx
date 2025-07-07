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

const TestimonialSlider = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false }
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <MegaMenu />
      <Hero />
      <div className="min-h-screen  text-gray-900 font-sans relative">
        <main className="relative">
          <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
            <AboutUs />
          </section>
          <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
            <ServicesShowcase />
          </section>
          <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
            <RecentProjects />
          </section>
          <section>
            <TestimonialSlider />
          </section>
          <section>
            <Careers />
          </section>
          <ContactSection />
          <CTA />
        </main>
        <Footer />
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-10 w-5 h-5 bg-[#0098AF] rounded-full -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#99D5DF] rounded-full blur-2xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 right-12 w-4 h-4 bg-[#5B5B5B] rounded-full -z-10"
        />
      </div>
    </div>
  );
}
