/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function AboutSection() {
  const { ITEMS } = CAREERS_CONSTANTS.VALUES;
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

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

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <section
        ref={sectionRef}
        className="w-full py-4 sm:py-8 lg:py-4 sm:h-[620px] relative bg-[#0098af]/10 rounded-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center">
              Our Values
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center"
          >
            <div className="grid md:grid-cols-1 gap-4">
              {ITEMS.map((value, index) => (
                <motion.div
                  key={index}
                  variants={CARD_HOVER}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white p-4 rounded-lg border border-[#0098AF]/10 shadow-sm"
                >
                  <div className="grid md:grid-cols-1 gap-1">
                    <div className="text-xl font-bold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed text-gray-600">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
