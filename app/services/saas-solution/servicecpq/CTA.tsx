"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set hasAnimated to true on first render to trigger animation once
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <div>
      <div className=" ">
        <section
          ref={sectionRef}
          className="w-full relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className=""
            ></motion.div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-14 lg:py-22 bg-[#0098AF] text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md">
              Get a Free Demo and Consultation
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8">
              See our AI-driven solutions in action! Our demo shows how you can
              automate, streamline, and enhance your service management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#003C46] px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 border border-[#E6F0F5] hover:bg-[#E6F0F5]/50 focus:outline-none focus:ring-2 focus:ring-[#E6F0F5] focus:ring-offset-2 group"
              >
                Book Your Free Demo
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={hasAnimated ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
          />
        </section>
      </div>
    </div>
  );
};

export default CTA;
