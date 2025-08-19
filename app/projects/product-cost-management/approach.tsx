/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import approachImage from "@/constants/images/projects/pcm/pcm-approach.jpg";

export default function ProjectApproach() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false); // Track if animation has run
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true; // Set to true after first view
        }
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
        ease: "easeOut",
      },
    },
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

  const sections = [
    {
      title: "Team Setup & Onboarding",
      points: [
        "Recruited, trained, and deployed a cross-functional engineering team aligned to client goals.",
        "Enabled seamless integration with client’s internal teams via virtual and physical collaboration hubs.",
      ],
    },
    {
      title: "Cost Benchmarking & Value Engineering (VAVE)",
      points: [
        "Reverse-engineered competitors’ products for cost-performance insights.",
        "Conducted deep-dive analysis of existing product families to identify material and design inefficiencies.",
        "Applied VAVE and should-costing techniques to optimize part and assembly-level costs.",
      ],
    },
    {
      title: "Modular Design & SKU Rationalization",
      points: [
        "Simplified and standardized SKUs across product families.",
        "Identified over-engineered components and proposed modular redesigns to reduce tooling, inventory, and fabrication costs.",
      ],
    },
    {
      title: "Cross-functional Collaboration & Knowledge Transfer",
      points: [
        "Conducted design workshops with sourcing and manufacturing teams.",
        "Delivered training and documentation for long-term internal use and continuous improvement.",
      ],
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] to-white opacity-90 z-0" />
        <section
          ref={sectionRef}
          className="relative z-10 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="backdrop-blur-sm rounded-xl px-4"
          >
            <h1 className="text-3xl font-bold mb-4 text-[#003C46]">
              Build & Operate Execution Strategy
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
                    className="rounded-xl shadow-md p-3 bg-white/80 border border-[#0098af]"
                  >
                    <h2 className="text-lg font-bold text-[#0098af] mb-2">
                      {idx + 1}. {section.title}
                    </h2>
                    <div className="space-y-1">
                      {section.points.map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-start gap-2">
                          <span className="text-[#00b4d8] pl-2">•</span>
                          <p className="text-[#5b5b5b] text-justify text-sm">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-6">
                <div className="lg:col-span-4">
                  {sections.map((section, idx) => (
                    <div
                      key={idx}
                      className={`p-3 ml-14 rounded-xl transition-shadow ${
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
    </div>
  );
}
