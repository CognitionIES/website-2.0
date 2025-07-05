import React from "react";
//import { Check } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Partner = () => {
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

  // Animation variants for fade-in and fade-out
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
    <section className=" relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#E6F0F5]/20 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-[#0098af]/5 rounded-full blur-xl -z-5"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-[#00b4d8]/5 rounded-full blur-xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-30" />

      <div>
        <section
          ref={sectionRef}
          className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-8 max-w-7xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
                Engineering Efficiency Where It Matters Most
              </h2>
            </div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className=" items-center"
            >
              <div className="text-center max-w-5xl mx-auto">
                <p className="text-lg text-gray-600 mb-6  leading-relaxed">
                  As an authorized dealer of Service CPQ, Cognition IES is proud
                  to offer cutting-edge, AI-driven after-sales solutions
                  tailored for manufacturers, dealers, and service
                  organizations. Our collaboration brings forth a unified
                  platform that streamlines warranty management, enhances repair
                  workflows, and accelerates service quoting processes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Bottom decorative wave */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 bg-[#E6F0F5]/60 -z-5"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 C80,10 150,50 200,20 C250,0 300,20 350,10 C400,0 450,30 500,15 C550,0 600,15 650,30 C700,45 750,20 800,40 L800,100 L0,100 Z' fill='%23FFFFFF'/%3E%3C/svg%3E\")",
          maskSize: "800px 100px",
          maskRepeat: "repeat-x",
        }}
      ></div>
    </section>
  );
};

export default Partner;
