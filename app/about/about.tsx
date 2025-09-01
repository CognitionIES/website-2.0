"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const { IMAGES, TEXT, STATS } = ABOUT_CONSTANTS;
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              {TEXT.STORY_TITLE}
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="">
              <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                {TEXT.STORY_P1}
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                {TEXT.STORY_P2}
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                {TEXT.STORY_P3}
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                {TEXT.STORY_P4}
              </p>
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
                    <p className="text-lg leading-relaxed text-white font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className="relative w-full max-w-[500px] mx-auto md:max-w-[620px] rounded-xl shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 border-4 border-[#0098AF]/20 rounded-xl z-10" />
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px]">
                <Image
                  src={IMAGES.STORY_IMAGE.OurJourneyImage}
                  alt="Engineering services"
                  fill
                  className="object-cover rounded-xl group-hover:brightness-105 transition-brightness duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 620px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
