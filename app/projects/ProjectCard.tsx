import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import { Project } from "@/constants/projects-data";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.2,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: index * 0.2 + 0.3,
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
        delay: index * 0.2 + 0.4,
      },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-700 hover:border-[#0098AF]/30">
        {/* Enhanced Image Section */}
        <motion.div
          className="relative h-64 overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-xs font-semibold text-[#003C46] tracking-wide">
                {project.category}
              </p>
            </div>
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#0098AF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* View Project Button */}
          <motion.div
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={project.href}
              className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-[#003C46] font-semibold text-sm hover:bg-[#0098AF] hover:text-white transition-all duration-300"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div className="p-6 space-y-4" variants={contentVariants}>
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-[#5B5B5B] leading-relaxed line-clamp-3 text-justify">
              {project.description}
            </p>
          </div>

          {/* Learn More Link */}
          <motion.div
            className="pt-2"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <a
              href={project.href}
              className="inline-flex items-center gap-2 text-[#0098AF] font-semibold hover:text-[#007B8F] transition-colors duration-300 group/link"
            >
              <span className="relative">
                Learn More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0098AF] group-hover/link:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
