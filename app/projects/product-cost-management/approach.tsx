"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import approachImage from "@/constants/images/projects/pcm/pcm-approach.jpg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

const ProjectApproach = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile(); // Get isMobile from hook

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
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

  // Animation variants for fade-in and fade-out
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const mobileItemVariants = {
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

  const sections = [
    {
      title: "Cost Analysis & Optimization",
      points: [
        "Conducted a thorough review of material costs, design efficiency, and manufacturing processes.",
        "Applied value engineering principles to identify cost-saving opportunities.",
        "Implemented should-costing methodologies to drive supplier negotiations.",
      ],
    },
    {
      title: "Physical Benchmarking",
      points: [
        "Performed hands-on analysis of competitor equipment to gain actionable insights.",
        "Compared product performance and material choices to industry standards.",
        "Leveraged reverse engineering to understand competitor cost structures.",
      ],
    },
    {
      title: "Applied VAVE Method",
      points: [
        "Utilized VAVE method to optimize design and manufacturing.",
        "Focused on enhancing product value while reducing unnecessary costs.",
        "Implemented a phased approach with regular feedback loops to refine recommendations.",
      ],
    },
    {
      title: "Cross-functional Collaboration",
      points: [
        "Engaged with client teams across engineering, procurement, and operations to align strategies.",
        "Facilitated workshops to identify and implement cost-saving opportunities.",
        "Provided training & knowledge transfer to internal teams for continuous improvement.",
      ],
    },
  ];

  return (
    <div>
      {/* First Section with Fade-In Animation */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] to-white opacity-90 z-0" />
        <div className="absolute inset-0 bg-[] bg-cover bg-center opacity-20 z-0" />

        <section
          ref={sectionRef}
          className="relative z-10 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" backdrop-blur-sm rounded-xl  px-4"
          >
            <h1 className="text-2xl font-bold mb-4 text-[#003C46]">
              🧠 Cognition&apos;s PCM Approach
            </h1>
            {isMobile ? (
              <div className="space-y-4">
                {sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="rounded-xl shadow-md  p-3 bg-white/80 border border-[#0098af]"
                  >
                    <h2 className="text-lg font-bold text-[#0098af] mb-2">
                      {idx + 1}. {section.title}
                    </h2>
                    <div className="space-y-1">
                      {section.points.map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-start gap-2">
                          <span className="text-[#00b4d8] pl-2">•</span>
                          <p className="text-[#5b5b5b]  text-justify text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-6">
                <div className="lg:col-span-4">
                  {[
                    {
                      title: "Cost Analysis & Optimization",
                      points: [
                        "Conducted a thorough review of material costs, design efficiency, and manufacturing processes.",
                        "Applied value engineering principles to identify cost-saving opportunities.",
                        "Implemented should-costing methodologies to drive supplier negotiations.",
                      ],
                    },
                    {
                      title: "Physical Benchmarking",
                      points: [
                        "Performed hands-on analysis of competitor equipment to gain actionable insights.",
                        "Compared product performance and material choices to industry standards.",
                        "Leveraged reverse engineering to understand competitor cost structures.",
                      ],
                    },
                    {
                      title: "Applied VAVE Method",
                      points: [
                        "Utilized VAVE method to optimize design and manufacturing.",
                        "Focused on enhancing product value while reducing unnecessary costs.",
                        "Implemented a phased approach with regular feedback loops to refine recommendations.",
                      ],
                    },
                    {
                      title: "Cross-functional Collaboration",
                      points: [
                        "Engaged with client teams across engineering, procurement, and operations to align strategies.",
                        "Facilitated workshops to identify and implement cost-saving opportunities.",
                        "Provided training & knowledge transfer to internal teams for continuous improvement.",
                      ],
                    },
                  ].map((section, idx) => (
                    <div
                      key={idx}
                      className={`p-1 ml-14 rounded-xl transition-shadow ${
                        idx % 2 === 0 ? "px-0" : "px-32"
                      }`}
                    >
                      <div
                        className="shadow-md px-2 py-1 rounded-xl bg-white/80 backdrop-blur-sm border border-[#0098af] w-[600px]"
                        style={{ zIndex: idx + 1 }}
                      >
                        <h2 className="text-xl font-bold text-[#0098af]">
                          {idx + 1}. {section.title}
                        </h2>
                        <div className="space-y-1">
                          {section.points.map((point, pointIdx) => (
                            <div
                              key={pointIdx}
                              className="flex items-start gap-2"
                            >
                              <span className="text-[#00b4d8] pl-4">•</span>
                              <p className="text-[#5b5b5b] text-sm">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-2 z-20 justify-end hidden lg:flex items-center">
                  <Image
                    src={approachImage}
                    alt="Project approach visualization with wooden blocks"
                    className="h-[500px] w-[280px] z-10 rounded-xl shadow-lg"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </section>
      </div>

      {/* Second Section (Already Has Animation) */}
    </div>
  );
};

export default ProjectApproach;
