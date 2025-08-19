
"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ApproachSection() {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  const isMobile = useIsMobile();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current && !isMobile) {
      hasAnimated.current = true;
      listRefs.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-y-0");
            item.classList.remove("opacity-0", "translate-y-4");
          }, 300 + index * 150);
        }
      });
    }
  }, []);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: hasAnimated.current ? 0 : 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const approachItems = [
    {
      title: "Digital Engineering Deployment",
      desc: "Laser scanning, 3D model generation, and as-built validation.",
    },
    {
      title: "Domain-Specific Role Allocation",
      desc: "Placement of tool experts and design engineers across disciplines.",
    },
    {
      title: "Digital Twin Enablement",
      desc: "Layering of applications to create a responsive operational environment.",
    },
    {
      title: "Real-Time Operationalization",
      desc: "Dashboards, alerts, and proactive monitoring rolled out across teams.",
    },
    {
      title: "Sustained Operations",
      desc: "Ongoing support for optimization, upgrades, and training.",
    },
  ];

  return (
    <div>
      <section className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={hasAnimated.current ? "visible" : "hidden"}
          onAnimationComplete={() => {
            hasAnimated.current = true;
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-8 flex items-center">
            <span className="text-[#0098af] mr-2">🛠️</span> Build & Operate Model Approach
          </h2>

          {isMobile && (
            <div className="bg-white/95 rounded-xl shadow-md p-6 space-y-4">
              <ul className="space-y-4">
                {approachItems.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start"
                  >
                    <span className="text-[#0098af] pr-3 mt-1">⦿</span>
                    <div>
                      <span className="font-bold uppercase text-sm sm:text-base">
                        {item.title}
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {!isMobile && (
            <div className="relative bg-white/95 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0098AF]/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0098AF]/10 to-transparent rounded-tr-full"></div>
              <div className="relative flex flex-col p-6 sm:p-8 lg:p-10">
                <ul className="space-y-4">
                  {approachItems.map((item, index) => (
                    <li
                      key={index}
                      ref={(el) => {
                        listRefs.current[index] = el;
                      }}
                      className="flex items-start pl-4 opacity-0 translate-y-4 transition-all duration-500 ease-out"
                    >
                      <span className="text-[#0098af] pr-3 mt-1 transition-transform duration-300 hover:scale-110">
                        ⦿
                      </span>
                      <p className="flex-1 text-base sm:text-lg text-gray-700">
                        <span className="font-bold uppercase">{item.title}: </span>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
