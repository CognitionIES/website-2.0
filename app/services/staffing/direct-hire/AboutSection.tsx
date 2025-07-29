"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import aboutImage from "@/constants/images/staffing-recruitment/direct-hire-about.jpg";

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Animation variants for fade-in and slide-up
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
    <section
      id="about-section"
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-[#0098af]/10 animate-gradient-shift relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-['Montserrat'] font-semibold text-3xl sm:text-4xl md:text-5xl text-[#1A2A2E]">
            What is Direct Hire?
          </h2>
        </div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-12 items-center"
        >
          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className=" text-lg text-[#5B5B5B] leading-relaxed text-justify">
              Direct hire is a comprehensive recruitment solution designed for
              organizations seeking permanent, full-time employees. Unlike
              temporary or contract staffing, our direct hire service focuses on
              finding candidates who will become integral, long-term members of
              your team.
            </p>
            <p className="font-['Roboto'] text-lg text-[#5B5B5B] leading-relaxed text-justify">
              Our expert recruiters conduct thorough candidate vetting,
              including skills assessments, cultural fit evaluations, and
              comprehensive background checks. We handle the entire recruitment
              process from initial sourcing to final negotiations, ensuring you
              receive only the most qualified candidates who align with your
              company&apos;s values and objectives.
            </p>
            <p className="font-['Roboto'] text-lg text-[#5B5B5B] leading-relaxed text-justify">
              With our direct hire service, you gain access to passive
              candidates who aren&apos;t actively job searching but represent
              the top talent in your industry. Our established network and
              proven methodologies significantly reduce your time-to-hire while
              improving the quality of your permanent placements.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-1">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0098AF] to-[#66B8C7] rounded-2xl opacity-20 blur-lg"></div>
              <Image
                src={aboutImage}
                alt="Professional interview process"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-[#0098AF] transition-transform duration-300"
                width={550}
                height={550}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
