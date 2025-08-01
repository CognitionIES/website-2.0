import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Search,
  Users,
  Settings,
  Rocket,
  TrendingUp,
  Clock,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProcessStep } from "@/constants/processSteps";

interface StepCardProps {
  step: ProcessStep;
  index: number;
  isInView: boolean;
  isMobile: boolean;
}

const iconMap = {
  search: Search,
  users: Users,
  settings: Settings,
  rocket: Rocket,
  "trending-up": TrendingUp,
};

export function StepCard({ step, index, isInView, isMobile }: StepCardProps) {
  const IconComponent = iconMap[step.icon as keyof typeof iconMap];
  const isEven = index % 2 === 0;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 0 : isEven ? -60 : 60,
      y: isMobile ? 40 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        delay: index * 0.15,
      },
    },
  };

  const numberVariants: Variants = {
    hidden: {
      scale: 0.6,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.15 + 0.2,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotate: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.15 + 0.4,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: index * 0.15 + 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex items-center gap-8 ${
        isMobile ? "flex-col" : isEven ? "flex-row" : "flex-row-reverse"
      }`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Step Number with Enhanced Design */}
      <motion.div
        className="flex-shrink-0 group relative"
        variants={numberVariants}
        whileHover={{
          scale: 1.15,
          rotate: 5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-[#0098AF]/20 rounded-full blur-md"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />

          {/* Main circle with gradient */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#0098AF] via-[#007B8F] to-[#005A66] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:shadow-[#0098AF]/50 group-hover:shadow-2xl border-4 border-white/20">
            <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">
              {step.id}
            </span>
          </div>

          {/* Icon overlay with enhanced styling */}
          <motion.div
            className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#99D5DF] to-[#7BC4CE] rounded-full flex items-center justify-center shadow-lg border-2 border-white"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <IconComponent className="w-5 h-5 text-[#003C46]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Content Card */}
      <motion.div className="flex-1" variants={contentVariants}>
        <Card className="group hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 border-l-4 border-l-[#0098AF] hover:border-l-[#007B8F] relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0098AF]/5 to-transparent rounded-bl-full" />

          <CardContent className="relative">
            <div className="space-y-6">
              {/* Title with enhanced typography */}
              <div className="flex pt-6 items-start justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-[#003C46] leading-tight tracking-tight group-hover:text-[#0098AF] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Description with improved readability */}
              <p className="text-[#5B5B5B] leading-relaxed text-base md:text-lg font-light">
                {step.description}
              </p>

              {/* Enhanced metadata section */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-[#007B8F] group/duration">
                  <div className="p-2 bg-[#0098AF]/10 rounded-lg group-hover/duration:bg-[#0098AF]/20 transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#5B5B5B] block">
                      Duration
                    </span>
                    <span className="font-semibold text-lg">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#5B5B5B] group/output flex-1">
                  <div className="p-2 bg-[#99D5DF]/20 rounded-lg group-hover/output:bg-[#99D5DF]/30 transition-colors duration-300 mt-1">
                    <FileText className="w-5 h-5 text-[#0098AF]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#5B5B5B] block">
                      Key Deliverables
                    </span>
                    <span className="font-medium text-[#003C46]">
                      {step.output}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enhanced Connecting Line (Desktop) */}
      {!isMobile && index < 4 && (
        <motion.div
          className="absolute top-24 left-1/2 transform -translate-x-1/2 z-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.8 }}
        >
          <svg width="2" height="120" className="overflow-visible">
            <defs>
              <linearGradient
                id={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0098AF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0098AF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0098AF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="120"
              stroke={`url(#gradient-${index})`}
              strokeWidth="2"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: 1.2,
                delay: index * 0.15 + 1,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}
