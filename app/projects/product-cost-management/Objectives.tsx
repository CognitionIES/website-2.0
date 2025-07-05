"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import objectiveImage from "@/constants/images/projects/pcm/objective.jpg";
import objectiveImage2 from "@/constants/images/projects/pcm/objective-two.jpg";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

export default function Objectives() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center"
          >
            {isMobile && (
              <div className="space-y-6">
                {/* Mobile Client Objectives */}
                <div className="rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-[180px] sm:h-[250px]">
                    <Image
                      src={objectiveImage}
                      alt="Client Objectives"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex text-left items-center  bg-black/50 p-4 sm:p-6">
                      <h3 className="text-2xl sm:text-2xl font-semibold uppercase text-white ">
                        🎯 Client Objectives
                      </h3>
                    </div>
                  </div>
                  <div className="bg-[#003C46] p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "🔧 Manufacturing Cost Reduction",
                        "💸 Improve Margins up to 50%",
                        "📉 Move Down the Price Ladder",
                        "🔍 Reverse Engineering of Competitor Models",
                        "🛠 Re-imagine Product Architecture",
                        "🆚 Benchmarking with Market Leaders",
                        "📈 Process Quality Enhancement",
                        "🧮 Factor of Safety Validation on Reengineered Parts",
                      ].map((item, index) => (
                        <motion.p
                          key={index}
                          custom={index}
                          variants={mobileItemVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          className="text-white/90 text-sm sm:text-base"
                        >
                          {item}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Business Perspective */}
                <div className="rounded-xl shadow-md overflow-hidden">
                  {" "}
                  <div className="bg-[#003C46] p-3 sm:p-6">
                    {" "}
                    <h3 className="text-xl sm:text-4xl font-semibold uppercase text-white mb-4">
                      💼 Business Perspective
                    </h3>
                    <div className=" grid grid-cols-1 md:grid-cols-2">
                      {/* Market Positioning */}
                      <div>
                        <h6 className="text-base sm:text-lg font-semibold uppercase text-white my-2">
                          🧭 Market Positioning
                        </h6>
                        <div className="space-y-2">
                          {[
                            "Enhance brand value improvements",
                            "Compete more aggressively on price ladder",
                          ].map((item, index) => (
                            <motion.p
                              key={index}
                              custom={index + 8} // Offset for previous list
                              variants={mobileItemVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              className="text-white/90 text-sm sm:text-base flex items-start"
                            >
                              <span className="text-[#E6F0F5] mr-2">⦿</span>
                              {item}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                      {/* 📊 Revenue Growth */}
                      <div>
                        <h6 className="text-base sm:text-lg font-semibold uppercase text-white my-2 ">
                          📊 Revenue Growth
                        </h6>
                        <div className="space-y-2">
                          {[
                            "Increase margin with cost effective design",
                            "Expand customer base with optimized SKUs",
                          ].map((item, index) => (
                            <motion.p
                              key={index}
                              custom={index + 10} // Offset for previous lists
                              variants={mobileItemVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              className="text-white/90 text-sm sm:text-base flex items-start"
                            >
                              <span className="text-[#E6F0F5] mr-2">⦿</span>
                              {item}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 lg:gap-8">
                {/* Desktop Client Objectives */}
                <div className="relative h-[400px] lg:h-[430px] rounded-xl shadow-md overflow-hidden">
                  <Image
                    src={objectiveImage}
                    alt="Client Objectives"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col p-6 sm:p-8 lg:p-10">
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-white mb-6">
                      🎯 Client Objectives
                    </h3>
                    <div className="space-y-2">
                      {[
                        "🔧 Manufacturing Cost Reduction",
                        "💸 Improve Margins up to 50%",
                        "📉 Move Down the Price Ladder",
                        "🛠 Re-imagine Product Architecture",
                        "🆚 Benchmarking with Market Leaders",
                        "🔍 Reverse Engineering of Competitor Models",
                        "📈 Process Quality Enhancement",
                        "🧮 Factor of Safety Validation on Reengineered Parts",
                      ].map((item, index) => (
                        <p
                          key={index}
                          className="text-white/90 text-base sm:text-lg"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Business Perspective */}
                <div className="relative h-[400px] lg:h-[430px] rounded-xl shadow-md overflow-hidden">
                  <Image
                    src={objectiveImage2}
                    alt="Business Perspective"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col p-6 sm:p-8 lg:p-10">
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-white mb-6">
                      💼 Business Perspective
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h6 className="text-lg sm:text-xl font-semibold uppercase text-white mb-2">
                          🧭 Market Positioning
                        </h6>
                        <div className="space-y-2">
                          {[
                            "Enhance brand value improvements",
                            "Compete more aggressively on price ladder",
                          ].map((item, index) => (
                            <p
                              key={index}
                              className="text-white/90 text-base sm:text-lg flex items-start"
                            >
                              <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                                ⦿
                              </span>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h6 className="text-lg sm:text-xl font-semibold uppercase text-white mb-2">
                          📊 Revenue Growth
                        </h6>
                        <div className="space-y-2">
                          {[
                            "Increased margins with cost-effective designs",
                            "Expand customer base with optimized SKUs",
                          ].map((item, index) => (
                            <p
                              key={index}
                              className="text-white/90 text-base sm:text-lg flex items-start"
                            >
                              <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                                ⦿
                              </span>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
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
