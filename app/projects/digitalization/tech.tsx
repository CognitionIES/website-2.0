"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

export default function Tech() {
  const techItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(); // Get isMobile from hook

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

  useEffect(() => {
    if (isInView && !isMobile) {
      // Desktop animations
      techItemsRef.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-x-0");
            item.classList.remove("opacity-0", "translate-x-10");
          }, 300 + index * 150);
        }
      });

      containerRefs.current.forEach((container, index) => {
        if (container) {
          setTimeout(() => {
            container.classList.add("opacity-100", "translate-y-0");
            container.classList.remove("opacity-0", "translate-y-8");
          }, 200 + index * 200);
        }
      });
    }
  }, [isInView, isMobile]);

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Common data
  const technologies = [
    "3D Laser Scanning Equipment: For precise spatial data acquisition.",
    "AI-Powered Analysis Tools: To validate and analyze scan data against design specifications.",
    "Digital Twin Platforms: For creating and managing the intelligent digital replica of the facility.",
    "Dashboard and Visualization Tools: For real-time monitoring and analytics.",
  ];

  const clientFeedback = {
    quote:
      "This digital transformation has fundamentally changed how we operate. We now have a living, breathing model of our plant that helps us plan better, run smoother, and grow smarter.",
    cite: "— Head of Operations, Confidential Client",
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden"
      >
        <div className="">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  relative z-10"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {isMobile && (
              <div className="space-y-8 ">
                {/* Mobile Technologies */}
                <motion.div
                  ref={(el) => {
                    containerRefs.current[0] = el;
                  }}
                  className="bg-white p-6 rounded-xl shadow-md"
                  variants={containerVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#003C46] mb-4 flex items-center">
                    <span className="text-[#0098AF] mr-2">💡</span>
                    Technologies Used
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    {technologies.map((tech, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex items-start p-2 rounded-md hover:bg-gray-50"
                      >
                        <span className="text-[#0098AF] mr-2 mt-1">⦿</span>
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Mobile Client Feedback */}
                <motion.div
                  ref={(el) => {
                    containerRefs.current[1] = el;
                  }}
                  className="bg-white p-6 rounded-xl shadow-md"
                  variants={containerVariants}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#003C46] mb-4 flex items-center">
                    <span className="text-[#0098AF] mr-2">🔄</span>
                    Client Feedback
                  </h3>
                  <blockquote className="text-gray-700 text-sm sm:text-base italic border-l-4 border-[#0098AF]/30 pl-4">
                    {clientFeedback.quote}
                    <br />
                    <cite className="not-italic mt-2 block text-right text-xs sm:text-sm text-gray-500">
                      {clientFeedback.cite}
                    </cite>
                  </blockquote>
                </motion.div>
              </div>
            )}

            {!isMobile && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
                {/* Desktop Technologies */}
                <motion.div
                  ref={(el) => {
                    containerRefs.current[0] = el;
                  }}
                  className="md:col-span-3 bg-white p-6 lg:p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg"
                  variants={containerVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#003C46] mb-4 flex items-center">
                    <span className="text-[#0098AF] mr-2">💡</span>
                    Technologies Used
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-base lg:text-lg">
                    {technologies.map((tech, index) => (
                      <li
                        key={index}
                        ref={(el) => {
                          techItemsRef.current[index] = el;
                        }}
                        className="flex items-start opacity-0 translate-x-10 transition-all duration-500 ease-out hover:bg-gray-50 p-2 rounded-md"
                      >
                        <span className="text-[#0098AF] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                          ⦿
                        </span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Desktop Client Feedback */}
                <motion.div
                  ref={(el) => {
                    containerRefs.current[1] = el;
                  }}
                  className="md:col-span-2 bg-white p-6 lg:p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg"
                  variants={containerVariants}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#003C46] mb-4 flex items-center">
                    <span className="text-[#0098AF] mr-2">🔄</span>
                    Client Feedback
                  </h3>
                  <blockquote className="text-gray-700 text-base lg:text-lg italic border-l-4 border-[#0098AF]/30 pl-4 transition-all duration-500 hover:border-l-6 hover:border-[#0098AF]/50">
                    {clientFeedback.quote}
                    <br />
                    <cite className="not-italic mt-2 block text-right text-sm lg:text-base text-gray-500 transition-all duration-300 hover:text-[#0098AF]">
                      {clientFeedback.cite}
                    </cite>
                  </blockquote>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
