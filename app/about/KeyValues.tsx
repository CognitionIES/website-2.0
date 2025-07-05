"use client";

// Displays the key values with images and hover effects
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function KeyValues() {
  const { IMAGES, TEXT, ANIMATIONS, KEY_VALUES } = ABOUT_CONSTANTS;

  return (
    <section className="py-12 sm:py-8 lg:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#003C46] mb-12 tracking-tight">
          {TEXT.VALUES_TITLE}
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {KEY_VALUES.map((value, index) => (
            <motion.div
              key={index}
              variants={ANIMATIONS.SCALE_HOVER}
              initial="rest"
              whileHover="hover"
              className="p-6 bg-gray-100 rounded-lg border border-gray-300 hover:border-[#0098AF] transition-all shadow-md relative overflow-hidden"
            >
              <div className="relative h-24 mb-4">
                <Image
                  src={IMAGES.KEY_VALUES[index]}
                  alt={value.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  className="absolute inset-0 bg-[#5B5B5B] opacity-50"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#5B5B5B] mb-2">
                {value.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
