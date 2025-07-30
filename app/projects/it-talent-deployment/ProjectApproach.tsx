"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};

const ProjectApproach = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const steps = [
    {
      title: "Requirement Scoping",
      description:
        "Collaborated with the client to finalize job descriptions, skill expectations, and team composition.",
    },
    {
      title: "Talent Sourcing & Screening",
      description:
        "Leveraged our tech talent pool to identify and evaluate suitable candidates.",
    },
    {
      title: "Technical Evaluation",
      description:
        "Conducted pre-interviews, coding tests, and cultural fit assessments.",
    },
    {
      title: "Onboarding & Documentation",
      description:
        "Handled all offer roll-outs, background verification, and documentation.",
    },
    {
      title: "Payroll & Compliance",
      description:
        "Managed PF, ESI, taxation, and monthly payroll with complete compliance support.",
    },
    {
      title: "Ongoing Coordination",
      description:
        "Regular follow-ups for performance check-ins, engagement, and attrition control.",
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#E6F0F5] to-[#F5FDFF] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0098AF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-12 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          initial={{ opacity: 0, y: 6 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Approach
        </motion.h2>

        <motion.div
          className="transition-all duration-1000 ease-out"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p
            className={`text-xl text-[#5B5B5B] mb-10 font-medium text-center transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            We deployed our proven contract staffing model tailored to IT
            development roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#0098AF] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-l-6 group`}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0098AF] text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#003C46] mb-2 text-lg group-hover:text-[#0098AF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#5B5B5B] leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectApproach;
