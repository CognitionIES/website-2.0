/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage from "@/constants/images/projects/digitalization/about.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false); // Track if animation has run
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true; // Set to true after first view
        }
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
        className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Digitalization
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4">
              Project Objective
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {isMobile && (
              <div className="rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-[150px]">
                  <Image
                    src={aboutImage}
                    alt="Engineering services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#003C46] p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold uppercase text-white mb-3">
                    🔍 Project Overview
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    A manufacturing plant sought to transition from manual,
                    disconnected processes to a fully digital operating model.
                    The challenges included layout inaccuracies, lack of plant
                    visibility, and frequent rework due to design-installation
                    gaps.
                  </p>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mt-2">
                    Under a Build & Operate model, Cognition IES took full
                    ownership — from digital engineering setup to real-time
                    operational monitoring — delivering a live digital twin
                    ecosystem and ongoing operational support.
                  </p>
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="relative h-[350px] lg:h-[400px] rounded-xl shadow-md overflow-hidden">
                <Image
                  src={aboutImage}
                  alt="Engineering services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-white mb-4">
                      🔍 Project Overview
                    </h3>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed text-justify">
                      A manufacturing plant sought to transition from manual,
                      disconnected processes to a fully digital operating model.
                      The challenges included layout inaccuracies, lack of plant
                      visibility, and frequent rework due to design-installation
                      gaps.
                    </p>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed text-justify mt-4">
                      Under a Build & Operate model, Cognition IES took full
                      ownership — from digital engineering setup to real-time
                      operational monitoring — delivering a live digital twin
                      ecosystem and ongoing operational support.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
