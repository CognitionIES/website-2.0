/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage from "@/constants/images/projects/pcm/project-overview.jpg";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile(); // Get isMobile from hook

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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12  relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center"
          >
            {isMobile && (
              <div className="rounded-xl shadow-md overflow-hidden">
                <div className="relative h-[150px] sm:h-[250px]">
                  <Image
                    src={aboutImage}
                    alt="Client Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#003C46] p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold uppercase text-white mb-3">
                    🏢 Client Profile
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base text-justify leading-relaxed">
                    Our client, a leading industrial equipment manufacturer,
                    delivers high-performance outdoor power tools like log
                    splitters, pressure washers, and air compressors for
                    commercial and residential markets in North America. They
                    partnered with Cognition Engineering Solutions to optimize
                    costs and innovate their Log Splitter product line.
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold uppercase text-white mt-4 mb-3">
                    🎯 Project Overview
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base  text-justify leading-relaxed">
                    The project focused on cost transformation and design
                    refinement of the Log Splitter lineup, maintaining quality
                    and safety while achieving cost reductions through
                    Cognition’s Product Cost Management (PCM) approach,
                    benchmarking competitors, and optimizing designs.
                  </p>
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="relative h-[500px] lg:h-[500px] rounded-xl shadow-md overflow-hidden">
                <Image
                  src={aboutImage}
                  alt="Client Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-white mb-4">
                      🏢 Client Profile
                    </h3>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed text-justify">
                      Our client is a reputed North American manufacturer in the
                      industrial equipment sector, offering products such as
                      pressure washers, air compressors, and other
                      commercial-grade machinery. To remain competitive in a
                      price-sensitive market, the client partnered with
                      Cognition IES to establish a dedicated offshore
                      engineering and cost optimization team under a Build &
                      Operate model.
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-white mt-6 mb-4">
                      🎯 Project Overview
                    </h3>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed text-justify">
                      The engagement aimed at driving a complete transformation
                      in product cost, design efficiency, and manufacturability
                      of selected equipment lines. Through our Build & Operate
                      approach, Cognition IES established and managed a
                      specialized engineering team to support design
                      improvements, benchmarking, and cost control initiatives
                      for the client’s offshore operations.
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
