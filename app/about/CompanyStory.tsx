"use client";

// Component Purpose: Displays the company story with text and an image
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function CompanyStory() {
  const { IMAGES, TEXT, ANIMATIONS, STATS } = ABOUT_CONSTANTS;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
        >
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6 drop-shadow-md tracking-tight">
              {TEXT.STORY_TITLE}
            </h2>
            
            <p className="text-lg leading-relaxed text-justify text-gray-700 mb-6">
              {TEXT.STORY_P1}
            </p>
            <p className="text-lg  text-justify text-gray-700 mb-6 relative">
              {TEXT.STORY_P2}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 1 }}
                className="absolute bottom-0 left-0 h-0.5 bg-[#0098AF] opacity-50"
              />
            </p>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-[#0098AF] opacity-10 rounded-lg blur-xl -z-10"
              />
              {STATS.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-[#0098AF] opacity-90 p-4 rounded-lg shadow-md border border-[#0098AF] opacity-30"
                >
                  <div className="w-12 h-12 bg-[#5B5B5B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {stat.stat}
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed text-white   font-medium text-black">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 relative h-80 lg:h-[500px]">
            <Image
              src={IMAGES.STORY_IMAGE.OurJourneyImage}
              alt="Creative Workspace"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-[#5B5B5B] opacity-50 rounded-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#5B5B5B] opacity-20 rounded-full shadow-md flex items-center justify-center text-center p-4"
            >
              <p className="text-white font-semibold">
                Global Reach:  India & USA
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}