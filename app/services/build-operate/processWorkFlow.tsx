import React from "react";
import { motion, Variants } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useIsMobile } from "../../../hooks/use-mobile";
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
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const decorativeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16  overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5FDFF 0%, rgba(153, 213, 223, 0.08) 50%, #F5FDFF 100%)",
      }}
    >
      {/* Enhanced Decorative Background Elements */}

      <motion.div
        className="absolute bottom-40 left-16 w-32 h-32 bg-gradient-to-tr from-[#99D5DF]/20 to-[#0098AF]/10 rounded-full blur-xl"
        variants={decorativeVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        transition={{ delay: 0.5 }}
        style={{
          background:
            "radial-gradient(circle, rgba(153,213,223,0.2) 0%, rgba(0,152,175,0.05) 70%, transparent 100%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0098AF]/30 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        <motion.div
          className="mb-16 md:mb-18"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2 variants={headerVariants}>
            <h2
              className=" font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
              style={{ color: "hsl(193 100% 23%)" }}
            >
              Our <span style={{ color: "hsl(188 100% 34%)" }}>Process</span>
            </h2>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[#5B5B5B] max-w-7xl mx-auto  leading-relaxed"
            variants={headerVariants}
          >
            From vision to reality, one strategic step at a time. Our proven
            methodology ensures
            <span className="text-[#0098AF] font-medium">
              {" "}
              clarity, quality, and continuous value delivery
            </span>{" "}
            throughout your project journey.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Mobile Connecting Line */}
          {isMobile && (
            <motion.div
              className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0098AF]/60 via-[#0098AF]/30 to-transparent"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isIntersecting ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}

          <div className={`space-y-16 md:space-y-20 ${isMobile ? "pl-6" : ""}`}>
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

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  );
}
