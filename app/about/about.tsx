/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const { IMAGES, TEXT, STATS, ANIMATIONS } = ABOUT_CONSTANTS;
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
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
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-16 overflow-hidden"
    >
      {/* Sophisticated Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F3FAFA 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(199, 236, 238, 0.05), transparent, rgba(199, 236, 238, 0.05))",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={ANIMATIONS.FADE_UP}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="mb-8 "
        >
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl   font-bold text-[#003C46] mb-6 leading-tight">
            {TEXT.STORY_TITLE}
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ">
          {/* Text Content */}
          <motion.div
            variants={ANIMATIONS.FADE_UP}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#6B8299] leading-relaxed mb-6 text-justify">
                {TEXT.STORY_P1}
              </p>
              <p className="text-lg text-[#6B8299] leading-relaxed mb-6 text-justify">
                {TEXT.STORY_P2}
              </p>
              <p className="text-lg text-[#1F2E3D] font-medium leading-relaxed text-justify">
                {TEXT.STORY_P3}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  hasAnimated
                    ? { opacity: 0.15, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
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
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={ANIMATIONS.FADE_UP}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative Elements */}
              <div
                className="absolute -inset-4 rounded-2xl blur-xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 152, 175, 0.2), rgba(199, 236, 238, 0.2))",
                  transition: "opacity 0.5s",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 152, 175, 0.1), transparent)",
                }}
              />

              {/* Main Image Container */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(209, 217, 224, 0.5)",
                }}
              >
                <Image
                  src={IMAGES.STORY_IMAGE.OurJourneyImage}
                  alt="Our engineering journey and company growth"
                  className="w-full h-[440px] sm:h-[540px] object-cover group-hover:scale-105"
                  style={{ transition: "transform 0.7s" }}
                  loading="lazy"
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 60, 70, 0.2), transparent, transparent)",
                    transition: "opacity 0.5s",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
