"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

export default function Scope() {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
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
      listRefs.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-y-0");
            item.classList.remove("opacity-0", "translate-y-4");
          }, 300 + index * 150);
        }
      });
    }
  }, [isInView, isMobile]);

  const sectionVariants = {
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

  // Common data for both desktop and mobile
  const scopeItems = [
    {
      title: "Dimensional Laser Survey Scanning",
      desc: "Conducted high-precision 3D scans of the facility to capture accurate spatial data, ensuring a comprehensive digital representation of the plant layout.",
    },
    {
      title: "Digital Dimensional Control",
      desc: "Utilized AI-powered software to analyze and validate laser survey scans against engineering designs and P&IDs, identifying necessary adjustments before fabrication and installation.",
    },
    {
      title: "Intelligent Digital Twin Creation",
      desc: "Developed a dynamic digital twin of the facility, integrating real-time data and enabling simulation of operational scenarios for proactive decision-making.",
    },
    {
      title: "Software Application Integration",
      desc: "Implemented a suite of applications within the digital twin to drive efficiencies across departments, including maintenance scheduling, inventory management, and performance analytics.",
    },
    {
      title: "Evergreen Program Implementation",
      desc: "Established a continuous update mechanism to maintain the accuracy and relevance of the digital twin, ensuring it reflects real-time changes in the facility.",
    },
  ];

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden"
      >
        <div>
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {isMobile && (
              <div className="bg-white/95 rounded-xl shadow-md p-6 space-y-4 ">
                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-[#5b5b5b] flex items-center">
                  <span className="text-[#0098af] mr-2">🛠</span>
                  Scope of Work
                </h3>
                <ul className="space-y-4">
                  {scopeItems.map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
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
                  <div className="w-full ">
                    <div className="w-full ">
                      <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-[#5b5b5b] mb-6 flex items-center">
                        <span className="text-[#0098af] mr-3">🛠</span>
                        Scope of Work
                      </h3>
                      <ul className="space-y-4">
                        {scopeItems.map((item, index) => (
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
                              <span className="font-bold uppercase">
                                {item.title}:{" "}
                              </span>
                              {item.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
