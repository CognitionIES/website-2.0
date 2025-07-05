"use client";

import Image from "next/image";
import React from "react";
import objectiveImage from "@/constants/images/projects/digitalization/objective.jpg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Objective() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        ease: "easeOut",
      },
    },
  };
  return (
    <div>
      <div>
        <section
          ref={sectionRef}
          className="w-full py-8 sm:py-10 lg:py-12 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="items-center"
            >
                {/* Mobile version */}
                <div className="md:hidden rounded-xl shadow-md overflow-hidden ">
                  <div className="relative h-[200px]">
                    <Image
                      src={objectiveImage}
                      alt="Engineering services"
                      
                      className="w-[450px] h-[200px] "
                    />
                  </div>
                  <div className="bg-[#003C46] p-4">
                    <h3 className="text-xl font-semibold uppercase text-white mb-2">
                      🎯 Objective
                    </h3>
                    <p className="text-white/90 text-sm">
                      To transform a traditionally operated manufacturing plant
                      into a data-driven, smart facility by implementing
                      advanced digital tools, real-time monitoring, and process
                      optimization systems.
                    </p>
                  </div>
                </div>

                {/* Desktop version */}
                <div className="relative hidden md:block h-[350px] rounded-xl shadow-md overflow-hidden">
                  <Image
                    src={objectiveImage}
                    alt="Engineering services"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay text on top of the image */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col p-6">
                    <div className="w-full flex justify-end">
                      <div className="w-[58%]">
                        <h3 className="text-3xl font-semibold uppercase text-white mb-2">
                          🎯 Objective
                        </h3>
                        <p className="text-white/90 text-lg ">
                          To transform a traditionally operated manufacturing
                          plant into a data-driven, smart facility by
                          implementing advanced digital tools, real-time
                          monitoring, and process optimization systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
         
              <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
