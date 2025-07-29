"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div>
      <section
        ref={sectionRef}
        className="w-full relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
         
        </div>
      </section>
      <section className="w-full py-12 sm:py-14 lg:py-22 bg-gradient-to-r from-[#0098af] to-[#003C46] text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md"
            
          >
            Ready to Transform Your Hiring?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-sm sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join hundreds of companies who trust us with their most important hiring decisions.
          </motion.p>
          <Link href="/contact">
            <Button
              className="group bg-white text-[#0098AF] rounded-lg border-2 border-[#003C46]/20 hover:border-[#0098af]/50 hover:bg-[#F5FDFF] hover:shadow-lg hover:scale-[1.02] transition-all duration-500 text-lg px-8 py-3 w-fit font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#0098af] opacity-10 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#003C46] opacity-10 rounded-full blur-3xl -z-10"
        />
      </section>
    </div>
  );
}