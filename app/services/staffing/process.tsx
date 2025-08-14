/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
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

const ProcessSection: React.FC = () => {
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
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step-id]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F5FDFF]/50"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(185 64% 73% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(188 100% 34% / 0.1) 0%, transparent 50%)
          `,
        }}
      ></div>

      <div className="relative px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className=" mb-16">
          <h2
            className=" font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
            style={{ color: "hsl(193 100% 23%)" }}
          >
            How We <span style={{ color: "hsl(188 100% 34%)" }}>Work</span>
          </h2>
          <p
            className="text-lg max-w-7xl mx-auto "
            style={{ color: "hsl(200 20% 35%)" }}
          >
            A Unified Talent Acquisition Process for Every Hiring Model. Whether
            you need permanent hires, project-based consultants, or scalable
            offshore teams — our streamlined recruitment methodology delivers
            the right talent, every time.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleSteps.has(step.id);

            return (
              <div key={step.id} className="relative">
                <div
                  data-step-id={step.id}
                  data-delay={index * 200}
                  className={`transition-all duration-700 ${
                    isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div
                    className="p-8 bg-white rounded-3xl transition-all duration-300 hover:-translate-y-2 text-center"
                    style={{
                      boxShadow: "0 4px 20px hsl(188 100% 34% / 0.15)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px -10px hsl(193 100% 23% / 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px hsl(188 100% 34% / 0.15)";
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                      style={{ backgroundColor: "hsl(188 100% 34%)" }}
                    >
                      <IconComponent className="text-white w-8 h-8" />
                    </div>

                    <h3
                      className="font-montserrat font-bold text-2xl mb-4"
                      style={{ color: "hsl(193 100% 23%)" }}
                    >
                      {index + 1}. {step.title}
                    </h3>

                    <p
                      className="font-roboto mb-4 leading-relaxed"
                      style={{ color: "hsl(200 20% 35%)" }}
                    >
                      {step.description}
                    </p>

                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: "hsl(185 64% 73% / 0.2)" }}
                    >
                      <p
                        className="font-roboto font-medium text-sm"
                        style={{ color: "hsl(193 100% 23%)" }}
                      >
                        <span className="font-semibold">Deliverable:</span>{" "}
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow for larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div
                      className="w-8 h-8"
                      style={{ color: "hsl(188 100% 34%)" }}
                    >
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
