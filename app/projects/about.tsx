/* eslint-disable @typescript-eslint/no-unused-vars */
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
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-18 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5FDFF 0%, rgba(153, 213, 223, 0.05) 50%, #F5FDFF 100%)",
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[#0098AF]/10 to-[#99D5DF]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-tr from-[#99D5DF]/15 to-[#0098AF]/5 rounded-full blur-xl" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#0098AF]/20 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${8 + i * 11}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        <motion.div
          className=" mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Featured Work
          </span>
          <motion.div variants={headerVariants}>
            <h2
              className=" font-bold  text-3xl md:text-4xl lg:text-5xl mb-4"
              style={{ color: "hsl(193 100% 23%)" }}
            >
              Our Recent{" "}
              <span style={{ color: "hsl(188 100% 34%)" }}>Projects</span>
            </h2>
          </motion.div>
          <motion.p
            variants={headerVariants}
            className="text-xl max-w-3xl "
            style={{ color: "hsl(200 20% 35%)" }}
          >
            Explore how Cognition IES is transforming businesses through
            cutting-edge
            <span className="text-[#0098AF] font-medium">
              {" "}
              staffing solutions
            </span>{" "}
            and end-to-end
            <span className="text-[#0098AF] font-medium">
              {" "}
              Build & Operate models
            </span>{" "}
            across{" "}
            <span className="text-[#003C46] font-medium">
              IT and Engineering sectors.
            </span>
          </motion.p>{" "}
        </motion.div>

        {/* Staffing & Recruitment Section */}
        <motion.div
          className="mb-20 md:mb-24"
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
                <h3 className="text-3xl md:text-4xl font-bold text-[#003C46] tracking-tight">
                  Staffing & Recruitment
                </h3>
                <p className="text-[#5B5B5B] font-medium">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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

        {/* Build & Operate Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0098AF] to-[#007B8F] rounded-2xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#003C46] tracking-tight">
                  Build & Operate
                </h3>
                <p className="text-[#5B5B5B] font-medium">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
