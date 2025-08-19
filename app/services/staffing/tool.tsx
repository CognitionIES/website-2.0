/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DatabaseIcon, BrainIcon, NetworkIcon, VideoIcon } from "./CustomIcons";

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  shape: string;
}

const tools: Tool[] = [
  {
    id: "ats",
    title: "Applicant Tracking Systems",
    description:
      "Advanced ATS platforms like BambooHR and Lever streamline our recruitment workflow, ensuring no candidate falls through the cracks. We leverage automation for efficient candidate management, interview scheduling, and communication tracking throughout the hiring process.",
    icon: DatabaseIcon,
    shape: "rounded-xl",
  },
  {
    id: "ai-tools",
    title: "AI-Powered Recruitment Tools",
    description:
      "Cutting-edge artificial intelligence helps us identify the best candidates faster. Our AI tools analyze resumes, predict candidate success, and match skills with job requirements, reducing time-to-hire while improving placement quality and cultural fit assessments.",
    icon: BrainIcon,
    shape: "rounded-xl",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Salesforce and other enterprise CRM solutions enable us to build lasting relationships with clients and candidates. We track engagement history, preferences, and feedback to deliver personalized experiences and maintain long-term talent pipeline management.",
    icon: NetworkIcon,
    shape: "rounded-xl",
  },
  {
    id: "video-platforms",
    title: "Video Interviewing Platforms",
    description:
      "Modern video interviewing technology facilitates seamless remote interviews and assessments. Our platforms support live interviews, pre-recorded assessments, and collaborative evaluation tools, ensuring global talent access while maintaining interview quality and consistency.",
    icon: VideoIcon,
    shape: "rounded-xl",
  },
];

export default function ToolsSection() {
  const [visibleTools, setVisibleTools] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const toolId = entry.target.getAttribute("data-tool-id");
            if (toolId) {
              setTimeout(() => {
                setVisibleTools((prev) => new Set([...prev, toolId]));
              }, parseInt(entry.target.getAttribute("data-delay") || "0"));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const toolElements = sectionRef.current?.querySelectorAll("[data-tool-id]");
    toolElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-12 lg:py-16 relative bg-gradient-to-b from-[#FFF] to-[#E6F0F5]/80 overflow-hidden"
      aria-labelledby="tools-section-title"
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            id="tools-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]"
          >
            Tools & <span className="text-[#0098AF]">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-roboto text-[#5B5B5B] mt-4 leading-relaxed">
            Leveraging cutting-edge technology to deliver superior recruitment
            outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isVisible = visibleTools.has(tool.id);

            return (
              <motion.div
                key={tool.id}
                data-tool-id={tool.id}
                data-delay={index * 200}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border-[#003C46]/20 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)] hover:border-[#0098AF]/50 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#0098AF] hover:bg-[#007A8C] transition-colors duration-300">
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-roboto text-[#5B5B5B] leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
