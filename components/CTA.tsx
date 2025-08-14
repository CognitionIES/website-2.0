/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { PROJECTS_PAGE_CONSTANTS } from "@/constants/project/home";

export default function CTASection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-r from-[#007B8F] to-[#0098AF] text-[#F5FDFF] overflow-hidden"
      aria-labelledby="cta-section-title"
    >
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F5FDFF]/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F5FDFF]/5 rounded-full blur-2xl" />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          id="cta-section-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight"
        >
          {PROJECTS_PAGE_CONSTANTS.CTA.TITLE}
        </h2>
        <p className="text-base md:text-lg font-roboto text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
          {PROJECTS_PAGE_CONSTANTS.CTA.DESCRIPTION}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <button className="group relative overflow-hidden px-8 py-3 bg-white text-[#0098AF] rounded-xl font-medium font-roboto transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {PROJECTS_PAGE_CONSTANTS.CTA.BUTTON}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5FDFF] to-[#E6F0F5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </Link>
          <button className="group flex items-center gap-3 px-8 py-3 text-white rounded-xl font-medium font-roboto border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-2 h-2 bg-green-400 rounded-full">
              <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
            </div>
            Available for immediate consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
}
