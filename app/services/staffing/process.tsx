/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SearchIcon,
  GlobeIcon,
  ClipboardIcon,
  CalendarIcon,
  DocumentIcon,
  SupportIcon,
} from "./CustomIcons";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ComponentType<any>;
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Role Discovery",
    description:
      "We begin by deeply understanding your requirements, team structure, culture, and long-term goals.",
    deliverable: "Role brief, success profile, key KPIs.",
    icon: SearchIcon,
  },
  {
    id: "sourcing",
    title: "Sourcing & Outreach",
    description:
      "Leveraging multi-channel sourcing (job boards, our talent pool, referrals, and passive outreach via LinkedIn, GitHub, etc.), we identify top-fit candidates.",
    deliverable: "ATS, sourcing automation, boolean search.",
    icon: GlobeIcon,
  },
  {
    id: "screening",
    title: "Screening & Evaluation",
    description:
      "Our recruiters conduct technical and behavioral assessments based on the role type (permanent, contract, or leadership).",
    deliverable: "Pre-screening, skill assessments, culture-fit scoring.",
    icon: ClipboardIcon,
  },
  {
    id: "interview",
    title: "Interview Coordination",
    description:
      "We manage end-to-end interview scheduling, candidate communication, and feedback loops.",
    deliverable: "Reduced time-to-hire, streamlined candidate experience.",
    icon: CalendarIcon,
  },
  {
    id: "offer",
    title: "Offer & Onboarding Support",
    description:
      "We ensure smooth offer rollouts, counteroffer handling, background checks, and onboarding support — especially for contract and RPO hires.",
    deliverable:
      "Compliance, documentation, payroll integration (for C2H/Contract).",
    icon: DocumentIcon,
  },
  {
    id: "support",
    title: "Post-Hire Support",
    description:
      "For contract, RPO, and C2H models, we stay engaged post-hire for performance check-ins, replacements (if needed), and payroll support.",
    deliverable: "Ongoing support and performance optimization.",
    icon: SupportIcon,
  },
];

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute("data-step-id");
            if (stepId) {
              setTimeout(() => {
                setVisibleSteps((prev) => new Set([...prev, stepId]));
              }, parseInt(entry.target.getAttribute("data-delay") || "0"));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step-id]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-12 lg:py-16 relative bg-gradient-to-b from-white to-[#F5F7FA]/80 overflow-hidden"
      aria-labelledby="process-section-title"
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
            id="process-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]"
          >
            How We <span className="text-[#0098AF]">Work</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-roboto text-[#5B5B5B] mt-4 leading-relaxed">
            A Unified Talent Acquisition Process for Every Hiring Model. Whether
            you need permanent hires, project-based consultants, or scalable
            offshore teams — our streamlined recruitment methodology delivers
            the right talent, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleSteps.has(step.id);

            return (
              <div key={step.id} className="relative">
                <motion.div
                  data-step-id={step.id}
                  data-delay={index * 200}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border-[#003C46]/20 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)] hover:border-[#0098AF]/50 hover:scale-[1.02] transition-all duration-500 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-[#0098AF] hover:bg-[#007A8C] transition-colors duration-300">
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46] mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm sm:text-base font-roboto text-[#5B5B5B] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="p-3 rounded-xl bg-[#0098AF]/10">
                    <p className="text-xs sm:text-sm font-roboto font-medium text-[#003C46]">
                      <span className="font-semibold">Deliverable:</span>{" "}
                      {step.deliverable}
                    </p>
                  </div>
                </motion.div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <svg
                      className="w-6 h-6 text-[#0098AF]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
