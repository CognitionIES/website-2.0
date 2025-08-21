/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import aboutImage1 from "@/constants/images/staffing-recruitment/about-2.jpg";

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-12 lg:py-16 relative bg-gradient-to-b from-white to-[#F5F7FA]/80 overflow-hidden"
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
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-xs font-roboto font-medium uppercase tracking-wider rounded-full mb-4">
             Recruitment and Resourcing Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]">
            Empowering Careers. Enabling Growth.
          </h2>
        </div>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <div
            className={`relative ${
              isMobile ? "w-full h-[250px]" : "md:h-[450px] md:w-[1220px]"
            } rounded-xl shadow-md overflow-hidden ${
              isMobile ? "" : "hidden md:block"
            }`}
          >
            <Image
              src={aboutImage1}
              alt="Staffing and Recruitment Services"
              fill
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              priority={isMobile}
            />
            {!isMobile && (
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md">
                <p className="text-base font-roboto font-medium text-[#003C46] italic leading-relaxed">
                  In today’s fast-paced and ever-evolving job market, finding
                  the right opportunity or the right talent can feel
                  overwhelming. That’s where we come in. At Cognition IES, we
                  believe recruitment is more than just matching resumes with
                  job descriptions — it’s about understanding people, purpose,
                  and potential. We work closely with you to ensure every
                  connection is meaningful, strategic, and long-lasting.
                </p>
              </div>
            )}
          </div>
          {isMobile && (
            <div className="mt-4 bg-white/95 backdrop-blur-md p-4 rounded-xl w-full shadow-md">
              <p className="text-sm font-roboto font-medium text-[#003C46] italic leading-relaxed">
                In today’s fast-paced and ever-evolving job market, finding the
                right opportunity or the right talent can feel overwhelming.
                That’s where we come in. At Cognition IES, we believe
                recruitment is more than just matching resumes with job
                descriptions — it’s about understanding people, purpose, and
                potential. We work closely with both job seekers and employers
                to ensure every connection is meaningful, strategic, and
                long-lasting.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
