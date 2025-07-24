"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage1 from "@/constants/images/staffing-recruitment/about-2.jpg";

// Custom useMobile hook
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
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

  // Animation variants for fade-in and fade-out
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-10 sm:py-16 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Staffing and Recruitment Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4">
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
                alt="Engineering services"
                width={isMobile ? 300 : 500}
                height={isMobile ? 250 : 500}
                className="w-full h-full object-cover"
                priority={isMobile}
              />
              {!isMobile && (
                <div className="absolute top-2 right-14 sm:top-2 sm:right-6 bg-white/90 p-3 rounded-xl">
                  <p className="text-lg font-medium text-center text-[#003C46] italic">
                    In today’s fast-paced and ever-evolving job market, finding
                    the right opportunity or the right talent can feel
                    overwhelming. That’s where we come in. At Cognition IES, we
                    believe recruitment is more than just matching resumes with
                    job descriptions — it’s about understanding people, purpose,
                    and potential. We work closely with both job seekers and
                    employers to ensure every connection is meaningful,
                    strategic, and long-lasting.
                  </p>
                </div>
              )}
            </div>
            {isMobile && (
              <div className="mt-4 bg-white/90 p-4 rounded-xl w-full">
                <p className="text-sm font-medium text-justify text-[#003C46] italic">
                  In today’s fast-paced and ever-evolving job market, finding
                  the right opportunity or the right talent can feel
                  overwhelming. That’s where we come in. At Cognition IES, we
                  believe recruitment is more than just matching resumes with
                  job descriptions — it’s about understanding people, purpose,
                  and potential. We work closely with both job seekers and
                  employers to ensure every connection is meaningful, strategic,
                  and long-lasting.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
