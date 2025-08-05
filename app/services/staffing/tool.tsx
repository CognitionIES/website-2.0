/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
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
    shape: "rounded-3xl",
  },
  {
    id: "ai-tools",
    title: "AI-Powered Recruitment Tools",
    description:
      "Cutting-edge artificial intelligence helps us identify the best candidates faster. Our AI tools analyze resumes, predict candidate success, and match skills with job requirements, reducing time-to-hire while improving placement quality and cultural fit assessments.",
    icon: BrainIcon,
    shape: "rounded-2xl",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Salesforce and other enterprise CRM solutions enable us to build lasting relationships with clients and candidates. We track engagement history, preferences, and feedback to deliver personalized experiences and maintain long-term talent pipeline management.",
    icon: NetworkIcon,
    shape: "rounded-3xl",
  },
  {
    id: "video-platforms",
    title: "Video Interviewing Platforms",
    description:
      "Modern video interviewing technology facilitates seamless remote interviews and assessments. Our platforms support live interviews, pre-recorded assessments, and collaborative evaluation tools, ensuring global talent access while maintaining interview quality and consistency.",
    icon: VideoIcon,
    shape: "rounded-2xl",
  },
];

const ToolsSection: React.FC = () => {
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
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-[#E6F0F5]/90"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="none"/%3E%3Cpath fill="rgba(0,60,70,0.05)" d="M0 0h100v100H0z"/%3E%3C/svg%3E')`,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2
            className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
            style={{ color: "hsl(193 100% 23%)" }}
          >
            Tools &{" "}
            <span style={{ color: "hsl(188 100% 34%)" }}>Technologies</span>
          </h2>
          <p
            className="text-lg max-w-7xl mx-auto"
            style={{ color: "hsl(200 20% 35%)" }}
          >
            Leveraging cutting-edge technology to deliver superior recruitment
            outcomes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isVisible = visibleTools.has(tool.id);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={tool.id}
                data-tool-id={tool.id}
                data-delay={index * 200}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? isLeft
                      ? "fade-in-up"
                      : "slide-in-right"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`relative p-8 ${tool.shape} border-2 cursor-pointer bg-white/90 backdrop-blur-md transition-all duration-500 hover:scale-102`}
                  style={{
                    borderColor: "hsl(185 64% 73% / 0.2)",
                    boxShadow: "0 4px 20px hsl(188 100% 34% / 0.15)",
                    transition:
                      "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "hsl(188 100% 34% / 0.4)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px -10px hsl(193 100% 23% / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "hsl(185 64% 73% / 0.2)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px hsl(188 100% 34% / 0.15)";
                  }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: "hsl(188 100% 34%)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "hsl(188 95% 28%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "hsl(188 100% 34%)";
                      }}
                    >
                      <IconComponent className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-xl md:text-2xl mb-2"
                        style={{ color: "hsl(193 100% 23%)" }}
                      >
                        {tool.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{ color: "hsl(200 20% 35%)" }}
                  >
                    {tool.description}
                  </p>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(188 100% 34% / 0.05), transparent)",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
