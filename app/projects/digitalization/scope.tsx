/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
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

  // Updated data for both desktop and mobile
  const scopeItems = [
    {
      title: "Process Lead",
      desc: "Oversaw process design and validation, ensuring alignment with operational requirements and project specifications.",
    },
    {
      title: "Structural Design Engineer",
      desc: "Designed and validated structural components, ensuring compliance with engineering standards and plant layout requirements.",
    },
    {
      title: "Piping Design Engineer",
      desc: "Developed and validated piping designs, ensuring integration with the overall plant layout and operational efficiency.",
    },
    {
      title: "AVEVA – E3D & PCM Tool Experts",
      desc: "Utilized AVEVA E3D and PCM tools to create and manage 3D models, supporting design conformity and digital twin operations.",
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
                  <span className="text-[#0098af] mr-2">👷</span>
                  Key Roles Deployed
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To support build, validation, and continuous operations, the
                  following expert roles were staffed:
                </p>
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
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  These professionals played a crucial role in plant layout
                  validation, design conformity, and 3D model creation during
                  the build phase, and provided continued engineering oversight
                  for digital twin operations.
                </p>
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
                        <span className="text-[#0098af] mr-3">👷</span>
                        Key Roles Deployed
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg mb-6">
                        To support build, validation, and continuous operations,
                        the following expert roles were staffed:
                      </p>
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
                      <p className="text-gray-700 text-base sm:text-lg mt-6">
                        These professionals played a crucial role in plant
                        layout validation, design conformity, and 3D model
                        creation during the build phase, and provided continued
                        engineering oversight for digital twin operations.
                      </p>
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
