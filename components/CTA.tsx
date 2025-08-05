"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* CTA section */}
        </div>
      </section>
      <section className="w-full py-12 sm:py-14 lg:py-22 bg-[#0098AF] text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-6 drop-shadow-md">
            {PROJECTS_PAGE_CONSTANTS.CTA.TITLE}
          </h2>
          <p className="text-sm sm:text-lg mb-8">
            {PROJECTS_PAGE_CONSTANTS.CTA.DESCRIPTION}
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#0098AF] rounded-lg hover:bg-[#5b5b5b] hover:text-white transition-colors duration-200 text-lg px-6 py-2 w-fit">
              {PROJECTS_PAGE_CONSTANTS.CTA.BUTTON}
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
        />
      </section>
    </div>
  );
}
