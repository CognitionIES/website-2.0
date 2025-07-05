"use client";

// This component shows a Google Maps embed
import WorldMapDemo from "@/components/ui/WorldMapDemo";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import { motion } from "framer-motion";

export default function MapSection() {
  const { EMBED_URL } = CONTACT_CONSTANTS.MAP;

  return (
    <section className="py-16">
      <div className="mt-16 max-w-7xl mx-auto border-2 border-[#000000]/40 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden h-[400px] relative">
        {/* Google Maps iframe */}
        <iframe
          src={EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <WorldMapDemo />
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "center" }}
          className="absolute top-14 left-[32%] -translate-x-[30%] w-[37%] h-0.5 bg-white opacity-50"
        />
      </div>
    </section>
  );
}
