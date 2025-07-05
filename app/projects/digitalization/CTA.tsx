"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
//import Footer from "./footer";
import { ArrowRight } from "lucide-react";
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

  // Animation variants for fade-in effect
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
  };

  // Animation for the background circle
  // const circleVariants = {
  //   hidden: { opacity: 0, scale: 0 },
  //   visible: { opacity: 0.1, scale: 1, transition: { delay: 0.7, duration: 1 } },
  // };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full  relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md">
            Ready to Digitize Your Business?
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Contact us to explore how our digitalization solutions can transform
            your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-[#5b5b5b] hover:bg-[#E6F0F5] px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
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
