/* eslint-disable @typescript-eslint/no-unused-vars */
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
    threshold: 0.05,
    rootMargin: "-50px",
  });
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 bg-gradient-to-b from-[#F5FDFF] to-[#99D5DF]/30 overflow-hidden"
      aria-labelledby="projects-section-title"
    >
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[#0098AF]/10 to-[#99D5DF]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-tr from-[#99D5DF]/15 to-[#0098AF]/5 rounded-full blur-xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-xs font-medium font-roboto uppercase tracking-wider rounded-full mb-4">
            Featured Work
          </span>
          <motion.h2
            id="projects-section-title"
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#003C46] mb-4"
          >
            Our Recent <span className="text-[#0098AF]">Projects</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-base md:text-lg font-roboto text-[#5B5B5B] max-w-4xl leading-relaxed"
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
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0098AF] to-[#007B8F] rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-[#003C46] tracking-tight">
                  Staffing & Recruitment
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
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0098AF] to-[#007B8F] rounded-2xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-[#003C46] tracking-tight">
                  Build & Operate
                </h3>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  End-to-end solution development
                </p>
              </div>
            </div>
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-[#99D5DF]/50 to-transparent ml-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
