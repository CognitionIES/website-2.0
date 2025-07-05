"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function StatsSection() {
  const { IMAGES, STATS, ANIMATIONS } = ABOUT_CONSTANTS;

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-[#5B5B5B] text-white relative">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={IMAGES.TECH_PATTERN}
          alt="Tech Pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 tracking-tight">
          Our Impact
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {STATS.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-[#5B5B5B]/60 rounded-lg shadow-lg border-2 border-[#0098AF] relative overflow-hidden"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {item.stat}
              </h3>
              <p className="text-base sm:text-lg font-light">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
