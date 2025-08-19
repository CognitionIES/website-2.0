/* eslint-disable @typescript-eslint/no-unused-vars */
// about.tsx (ProjectsSection)
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/use-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  staffingProjects,
  buildOperateProjects,
} from "@/constants/projects-data";
import { ProjectCard } from "./ProjectCard";
import { Users, Settings } from "lucide-react";

export function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });
  const isMozbile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-12 lg:py-16 bg-gradient-to-b from-[#F0F9FB] to-[#E6F0F5]/80 overflow-hidden"
      aria-labelledby="projects-section-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-xs font-roboto font-medium uppercase tracking-wider rounded-full mb-4">
            Featured Work
          </span>
          <motion.h2
            id="projects-section-title"
            variants={headerVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]"
          >
            Our Recent <span className="text-[#0098AF]">Projects</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base lg:text-lg font-roboto text-[#5B5B5B] mt-4 leading-relaxed max-w-4xl"
          >
            Explore how Cognition IES is transforming businesses through
            <span className="text-[#0098AF] font-medium">
              {" "}
              staffing solutions
            </span>{" "}
            and
            <span className="text-[#0098AF] font-medium">
              {" "}
              Build & Operate models
            </span>{" "}
            across
            <span className="text-[#003C46] font-medium">
              {" "}
              IT and Engineering sectors.
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0098AF] rounded-xl flex items-center justify-center hover:bg-[#007A8C] transition-colors duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46]">
                  Recruitment & Resourcing
                </h3>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  Expert talent deployment solutions
                </p>
              </div>
            </div>
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-[#0098AF]/50 to-transparent ml-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {staffingProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isIntersecting}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0098AF] rounded-xl flex items-center justify-center hover:bg-[#007A8C] transition-colors duration-300">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46]">
                  Build & Operate
                </h3>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  End-to-end solution development
                </p>
              </div>
            </div>
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-[#0098AF]/50 to-transparent ml-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {buildOperateProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + staffingProjects.length}
                isInView={isIntersecting}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
