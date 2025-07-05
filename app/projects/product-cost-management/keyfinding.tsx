/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import keyImage from "@/constants/images/bg/key.jpg";
import deliverablesImage from "@/constants/images/bg/deliverables.jpg";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

const PCMKeyFindings = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const isMobile = useIsMobile(); // Get isMobile from hook

  const keyFindings = [
    "Major weight savings and design simplification opportunities were found across valves, cradles, tanks, and support structures",
    "Several NorthStar components were over-engineered, leading to excess material usage and fabrication costs",
    "Benchmark competitors utilized fabricated or modular designs with fewer parts and less hardware",
    "Opportunities to standardize SKUs across product families were identified to improve inventory and sourcing efficiency",
    "Areas such as hydraulic tanks, filter systems, and frames showed potential for leaner, cost-effective alternatives",
  ];

  const deliverables = [
    "SWOT Analysis",
    "Pareto Analysis (80/20)",
    "Idea Pool Generation Report",
    "DFA / DFM / DFMEA Reports",
    "Root Cause Analysis",
    "Should-Costing",
    "FEA Reports",
    "Final Manufacturing Drawings",
    "Costed BOM Evolution",
    "Vendor Identification",
    "Function Cost-Worth Analysis Report",
    "Physical Competitive Benchmark Report",
  ];

  // Intersection Observer setup
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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const decorativeVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut", // use a valid string easing
      },
    },
  };

  // Parallax effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] via-white to-white opacity-90 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5 }}
      />
      {/* Decorative elements */}
      <motion.div
        variants={decorativeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-20 right-10 w-64 h-64 bg-[#0098af]/5 rounded-full blur-3xl z-0"
      />
      <motion.div
        variants={decorativeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute bottom-20 left-10 w-72 h-72 bg-[#003C46]/5 rounded-full blur-3xl z-0"
      />

      <section
        ref={sectionRef}
        className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Key Findings Section */}
        {isMobile ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#003C46]"
            >
              <span className="text-2xl">📌</span> Key Findings
            </motion.h2>
            <motion.div variants={containerVariants} className="">
              {keyFindings.map((finding, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start px-2 py-1 gap-2"
                >
                  <span className="text-[#00b4d8] mt-1">•</span>
                  <p className="text-black/90  text-base  text-justify sm:text-base">
                    {finding}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative hidden md:block h-[320px] rounded-xl shadow-md overflow-hidden mb-8"
          >
            <motion.div style={{ y: y1 }}>
              <Image
                src={keyImage}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full opacity-40 object-cover"
              />
            </motion.div>
            {/* Overlay text on top of the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/10 to-[#0098af]/60 flex flex-col p-6">
              <motion.h2
                className="text-4xl font-bold mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <span className="text-3xl">📌</span> Key Findings
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-1 gap-2"
              >
                {keyFindings.map((finding, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="rounded-xl px-5 py-1 group"
                    whileHover={{
                      x: 5,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00b4d8] text-[#5b5b5b] flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm font-bold">{idx + 1}</span>
                      </motion.div>
                      <p className="text-black transition-colors  duration-300">
                        {finding}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Deliverables Section */}
        {isMobile ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#003C46]"
            >
              <span className="text-2xl">📦</span> Deliverables
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-2 "
            >
              {deliverables.map((deliverable, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2 p-1 rounded-lg "
                >
                  <CheckCircle className="text-[#00b4d8] h-4 w-4 mt-0.5" />
                  <span className="text-[#000000] text-base sm:text-base">
                    {deliverable}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative hidden md:block h-[280px] rounded-xl shadow-md overflow-hidden"
          >
            <motion.div style={{ y: y2 }}>
              <Image
                src={deliverablesImage}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Overlay text on top of the image */}
            <div className="absolute inset-0 bg-black/40 flex flex-col p-6">
              <motion.h2
                className="text-4xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-black/80"
                variants={itemVariants}
              >
                <span className="text-3xl text-black">📦</span> Deliverables
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1"
              >
                {deliverables.map((deliverable, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group"
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-start gap-2 mb-2 p-3 border-l-4 border-[#00b4d8] bg-white/70 rounded-r-lg shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="text-[#00b4d8] h-4 w-4 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-[#000000] text-sm group-hover:text-[#003C46] transition-colors duration-300">
                        {deliverable}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default PCMKeyFindings;
