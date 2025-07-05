"use client";

// Displays the mission and vision statements with a background image
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function MissionVision() {
  const { IMAGES, TEXT, ANIMATIONS } = ABOUT_CONSTANTS;

  return (
    <section className="py-12 sm:py-8 lg:py-12 bg-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
          className="space-y-16 relative"
        >
          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transform relative border-l-4 border-[#0098AF] z-10">
            <h2 className="text-3xl font-semibold text-[#0098af] mb-4 tracking-tight">
              {TEXT.MISSION_TITLE}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-gray-700 mb-6">
              {TEXT.MISSION_DESC}
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-[#0098AF] opacity-50 mt-4 rounded-full"
            />
          </div>
          {/* Vision */}
          <div className="bg-white opacity-100 p-8 rounded-xl shadow-lg max-w-2xl ml-auto transform border-r-4 border-[#5c5c5c] relative z-10 border-r-4 border-[#0098AF]">
            <h2 className="text-3xl font-semibold text-[#5c5c5c] mb-4 tracking-tight">
              {TEXT.VISION_TITLE}
            </h2>
            <p className="text-lg leading-relaxed text-justify text-gray-700 mb-6">
              {TEXT.VISION_DESC}
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-[#5B5B5B] opacity-50 mt-4 rounded-full"
            />
          </div>
        </motion.div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-50">
          <Image
            src={IMAGES.MISSION_VISION_BG}
            alt="Abstract Lines"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}