"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import { processSteps } from "@/constants/processSteps";
import { StepCard } from "./setupCard";

export function ProcessWorkflow() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: "-100px",
  });
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="process-workflow"
      ref={ref}
      className="relative py-16 bg-gradient-to-b from-[#F5FDFF] to-[#99D5DF]/30 overflow-hidden"
      aria-labelledby="process-workflow-title"
    >
      <motion.div
        className="absolute bottom-40 left-16 w-32 h-32 bg-gradient-to-tr from-[#99D5DF]/20 to-[#0098AF]/10 rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2
            variants={headerVariants}
            id="process-workflow-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#003C46] mb-4"
          >
            Our <span className="text-[#0098AF]">Process</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-base md:text-lg font-roboto text-[#5B5B5B] max-w-4xl leading-relaxed"
          >
            From vision to reality, one strategic step at a time. Our proven
            methodology ensures{" "}
            <span className="text-[#0098AF] font-medium">
              clarity, quality, and continuous value delivery
            </span>{" "}
            throughout your project journey.
          </motion.p>
        </motion.div>
        <div className="relative">
          {isMobile && (
            <motion.div
              className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0098AF]/60 via-[#0098AF]/30 to-transparent"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isIntersecting ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}
          <div className={`space-y-12 md:space-y-16 ${isMobile ? "pl-6" : ""}`}>
            {processSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isInView={isIntersecting}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
