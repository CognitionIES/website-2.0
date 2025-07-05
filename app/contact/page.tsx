"use client";

// This file puts together all parts of the contact page
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
//import { motion } from "framer-motion";
//import MapSection from "./MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      {/* Top navigation */}
      <MegaMenu />
      {/* Hero section */}
      <HeroSection />
      {/* Contact info and form section */}
      <ContactSection />
      {/* Map section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
