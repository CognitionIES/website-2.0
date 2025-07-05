"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the useMobile hook

// Define types for props and constants
interface CareersContent {
  IMAGE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
}

// Animation variants for consistent motion
const motionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Configuration for responsive design
const responsiveConfig = {
  sectionPadding: "py-10 sm:py-8 lg:py-12",
  containerPadding: "px-4 sm:px-6 md:px-8 lg:px-12",
  gap: "gap-4 sm:gap-2 md:gap-8 lg:gap-12",
  imageSize: {
    width: 1500,
    height: 350,
    className: "w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px]",
  },
  overlayPosition:
    "bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6",
  badgePosition:
    "top-2 right-2 sm:top-20 sm:right-8 md:top-24 md:right-12 lg:right-40",
};

// Main Careers component
const Careers: React.FC = () => {
  const { IMAGE, SUBTITLE, DESCRIPTION } =
    CAREERS_CONSTANTS as unknown as CareersContent;

  // Use the custom useMobile hook
  const isMobile = useIsMobile();

  // Mobile Layout
  if (isMobile) {
    return (
      <section
        className={`w-full ${responsiveConfig.sectionPadding} bg-gradient-to-b from-white to-[#E6F0F5]/20 relative overflow-hidden`}
      >
        <div className="max-w-[95%] sm:max-w-7xl mx-auto ${responsiveConfig.containerPadding}">
          <div className="flex flex-col  sm:gap-8 md:gap-12">
            {/* "We’re Hiring" Text */}
            <div className="text-left ">
              <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-[#0098af]/10 text-[#0098af] text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full">
                We&apos;re Hiring
              </span>
            </div>

            {/* "Join Our Team" Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003C46] leading-tight mt-2">
              Join Our Team
            </h2>
            <div className="w-[60px] sm:w-[100px] h-[2px] md:h-[3px] bg-gradient-to-r from-[#0098af] to-transparent rounded-full mt-[3px]" />

            {/* Image */}
            <div className="relative rounded-2xl mt-4 overflow-hidden shadow-lg">
              <Image
                src={IMAGE}
                alt="Team collaborating in office"
                width={1500}
                height={350}
                className="w-full h-[250px] sm:h-[350px] object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            {/* Subtitle and Description */}
            <h3 className="text-lg sm:text-xl text-gray-600 font-medium leading-snug mt-4">
              {SUBTITLE}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 text-justify leading-relaxed">
              {DESCRIPTION}
            </p>

            {/* "Opportunities" Button */}
            <div className="pt-6 text-left">
              <Link href="/careers">
                <Button className="group bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-sm sm:text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-[#0098af] rounded-xl px-4 py-2.5 h-10 sm:h-11 shadow-md hover:shadow-lg">
                  <span>Opportunities</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout (default)
  return (
    <section
      className={`w-full ${responsiveConfig.sectionPadding} bg-gradient-to-b from-white to-[#E6F0F5]/20 relative overflow-hidden`}
    >
      <div className="max-w-[95%] sm:max-w-7xl mx-auto ${responsiveConfig.containerPadding}">
        <div className="grid grid-cols-1 md:grid-cols-3 ${responsiveConfig.gap} items-start md:items-center">
          {/* Image Section */}
          <div className="relative md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMAGE}
                alt="Team collaborating in office"
                width={responsiveConfig.imageSize.width}
                height={responsiveConfig.imageSize.height}
                className={`${responsiveConfig.imageSize.className} object-cover transition-transform duration-300 hover:scale-105`}
                priority
              />
              <div
                className={`absolute ${responsiveConfig.overlayPosition} bg-white/90 backdrop-blur-sm p-1 sm:p-2 md:p-3 rounded-xl shadow-md`}
              >
                <p className="text-[10px] sm:text-sm md:text-base font-medium text-[#003C46] italic">
                  Building the future together
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={motionVariants}
            viewport={{ once: true }}
            className="md:col-span-1 mt-6 sm:mt-4 md:mt-0"
          >
            <div className="ml-8">
              <div className="text-left md:text-right">
                <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-[#0098af]/10 text-[#0098af] text-[10px] sm:text-xs font-medium uppercase tracking-wider rounded-full">
                  We&apos;re Hiring
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003C46] leading-tight mt-4 md:mt-24">
                Join Our Team
              </h2>
              <div className="w-[60px] sm:w-[100px] h-[2px] md:h-[3px] bg-gradient-to-r from-[#0098af] to-transparent rounded-full mt-2 md:mt-0" />

              <h3 className="text-sm sm:text-lg md:text-xl text-gray-600 font-medium leading-snug mt-4 md:mt-8">
                {SUBTITLE}
              </h3>
              <p className="text-xs sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 text-justify leading-relaxed">
                {DESCRIPTION}
              </p>
              <div className="pt-6 sm:pt-12 text-left md:text-right">
                <Link href="/careers">
                  <Button className="group bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-[#0098af] rounded-xl px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 h-8 sm:h-9 md:h-10 shadow-md hover:shadow-lg">
                    <span>Opportunities</span>
                    <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/50 to-transparent" />
    </section>
  );
};

export default Careers;
