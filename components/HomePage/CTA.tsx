// @/components/HomePage/CTA.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null); // Reference to the footer

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (footerRef.current) footerObserver.unobserve(footerRef.current);
    };
  }, []);

  return (
    <section
    ref={sectionRef}
    className="w-full py-12 sm:py-14 lg:py-22 bg-[#0098AF] text-white relative overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md">
        Ready to Start Your Project?
      </h2>
      <p className="text-base sm:text-lg mb-8">
        Contact us today to see how we can bring your ideas to life.
      </p>
      <Link href="/contact">
        <Button className="bg-white text-[#0098AF] rounded-lg hover:bg-[#5b5b5b] hover:text-white transition-colors duration-200 text-lg px-6 py-2 w-fit">
          Get in Touch
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
  );
};

export default CTA;