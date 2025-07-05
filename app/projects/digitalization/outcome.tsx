/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import outcomeImage from "@/constants/images/projects/digitalization/outcome.jpg";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

export default function Outcome() {
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const tableRowsRef = useRef<(HTMLTableRowElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
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
      listItemsRef.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-x-0");
            item.classList.remove("opacity-0", "translate-x-10");
          }, 300 + index * 150);
        }
      });

      tableRowsRef.current.forEach((row, index) => {
        if (row) {
          setTimeout(() => {
            row.classList.add("opacity-100");
            row.classList.remove("opacity-0");
          }, 800 + index * 200);
        }
      });

      if (imageRef.current) {
        setTimeout(() => {
          imageRef.current?.classList.add("opacity-100", "translate-y-0");
          imageRef.current?.classList.remove("opacity-0", "translate-y-10");
        }, 300);
      }
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
        ease: "easeOut", // Changed from ["easeOut"] to "easeOut"
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
        ease: "easeOut", // Changed from ["easeOut"] to "easeOut"
      },
    }),
  };

  const mobileTableRowVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 * index + 0.5,
        duration: 0.5,
        ease: "easeOut", // Changed from ["easeOut"] to "easeOut"
      },
    }),
  };
  // Common data
  const outcomes = [
    {
      title: "Improved Accuracy",
      content:
        "3D validation reduced layout deviations drastically, saving hours in installation rework.",
    },
    {
      title: "Operational Efficiency",
      content:
        "Downtime was minimized through real-time alerts & predictive maintenance insights.",
    },
    {
      title: "Energy Optimization",
      content:
        "Monitoring & simulation helped reduce energy consumption per unit produced.",
    },
    {
      title: "Scalable Infrastructure",
      content:
        "The platform is future-ready, adaptable for upcoming automation and robotics integration.",
    },
    {
      title: "Better Visibility",
      content:
        "Stakeholders can now access real-time status, performance metrics, and alerts via a centralized dashboard.",
    },
  ];

  const metrics = [
    { metric: "Layout Error Rate", before: "~8%", after: "less than 2%" },
    {
      metric: "Production Downtime",
      before: "12hrs/month",
      after: "less than 3hrs/month",
    },
    {
      metric: "Rework due to fit issues",
      before: "5+ incidents/month",
      after: "0 incident",
    },
  ];

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-[#003C46] mb-8 flex items-center"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="text-[#0098af] mr-2">💡</span> Key Results &
            Outcomes
          </motion.h2>

          {isMobile && (
            <div className="space-y-8">
              {/* Mobile Image */}
              <motion.div
                ref={imageRef}
                className="relative h-[200px] sm:h-[250px] rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={outcomeImage}
                  alt="Outcome of Digitalization Project"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>

              {/* Mobile List */}
              <div className="bg-white/95 rounded-xl shadow-md p-6">
                <ul className="space-y-4">
                  {outcomes.map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="flex items-start text-sm sm:text-base text-gray-700"
                    >
                      <span className="text-[#0098af] pr-3 mt-1">⦿</span>
                      <div>
                        <span className="font-semibold">{item.title}:</span>{" "}
                        {item.content}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Mobile Table */}
              <div className="bg-white rounded-xl shadow-md  overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <motion.tr
                      ref={(el) => {
                        tableRowsRef.current[0] = el;
                      }}
                      variants={mobileTableRowVariants}
                      custom={0}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white"
                    >
                      <th className="p-3 text-sm uppercase font-semibold">
                        Metric
                      </th>
                      <th className="p-3 text-sm uppercase font-semibold">
                        Before
                      </th>
                      <th className="p-3 text-sm uppercase font-semibold">
                        After
                      </th>
                    </motion.tr>
                    {metrics.map((row, index) => (
                      <motion.tr
                        key={index}
                        ref={(el) => {
                          tableRowsRef.current[index + 1] = el;
                        }}
                        variants={mobileTableRowVariants}
                        custom={index + 1}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="hover:bg-gray-50"
                      >
                        <td className="p-3 text-sm border-t border-gray-100 bg-[#00b4d8]/10">
                          {row.metric}
                        </td>
                        <td className="p-3 text-sm border-t border-gray-100 bg-[#00b4d8]/10">
                          {row.before}
                        </td>
                        <td className="p-3 text-sm border-t border-gray-100 bg-[#00b4d8]/10 font-medium">
                          {row.after}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Desktop Image */}
              <motion.div
                ref={imageRef}
                className="relative h-[420px] md:h-[520px] w-full rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={outcomeImage}
                  alt="Outcome of Digitalization Project"
                  fill
                  className="object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </motion.div>

              {/* Desktop Content */}
              <div className="col-span-2 space-y-6">
                <div className="bg-white/95 rounded-xl shadow-md p-6">
                  <ul className="space-y-1">
                    {outcomes.map((item, index) => (
                      <li
                        key={index}
                        ref={(el) => {
                          listItemsRef.current[index] = el;
                        }}
                        className="text-base lg:text-lg text-gray-700 opacity-0 translate-x-10 transition-all duration-500 ease-out"
                      >
                        <span className="text-[#0098af] pr-2 transition-transform duration-300 inline-block hover:scale-110">
                          ⦿
                        </span>
                        <span className="font-semibold">{item.title}:</span>{" "}
                        {item.content}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-x-auto rounded-lg shadow-md">
                  <table className="w-full text-center ">
                    <tbody>
                      <tr
                        ref={(el) => {
                          tableRowsRef.current[0] = el;
                        }}
                        className="opacity-0 transition-opacity duration-700 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white"
                      >
                        <th className="p-4 uppercase font-semibold">Metric</th>
                        <th className="p-4 uppercase font-semibold">Before</th>
                        <th className="p-4 uppercase font-semibold">After</th>
                      </tr>
                      {metrics.map((row, index) => (
                        <tr
                          key={index}
                          ref={(el) => {
                            tableRowsRef.current[index + 1] = el;
                          }}
                          className="opacity-0 transition-opacity duration-700 hover:bg-gray-50"
                        >
                          <td className="px-4 py-1 border bg-[#00b4d8]/10 border-gray-100">
                            {row.metric}
                          </td>
                          <td className="px-4 py-1 border bg-[#00b4d8]/10 border-gray-100">
                            {row.before}
                          </td>
                          <td className="px-4 py-1 border bg-[#00b4d8]/10 border-gray-100 font-medium">
                            {row.after}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
