"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import HeroCareerImg from "@/constants/images/career/hero.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const CAREERS_CONSTANTS = {
  HERO: {
    IMAGE: HeroCareerImg,
    TITLE: "Build & Operate With Confidence",
    SUBTITLE:
      "From assembling high-performing teams to managing operations end-to-end, we empower your business to scale faster and smarter.",
    TAGS: "Trusted by global innovators | 30+ member teams delivered | Proven Build & Operate Expertise",
  },
};

export default function Hero() {
  const isMobile = useIsMobile();
  const { IMAGE, TITLE, SUBTITLE, TAGS } = CAREERS_CONSTANTS.HERO;

  const scrollToPositions = () => {
    const positionsSection = document.getElementById("positions");
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div
        className={`relative h-[450px] overflow-hidden ${
          isMobile ? "flex items-center justify-center" : ""
        }`}
      >
        <Image
          src={IMAGE}
          alt="Vibrant Office Environment"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#003C46]/70 to-[#0098AF]/60" />
        <div className="absolute inset-0 opacity-10  bg-repeat" />
        <div
          className={`relative z-10 ${
            isMobile
              ? "max-w-full px-6"
              : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          } h-full flex flex-col items-center justify-center text-center`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-3xl md:text-4xl lg:text-5xl  font-extrabold tracking-tight text-white drop-shadow-md relative ${
              isMobile ? "mb-6" : "mb-3 sm:mb-4 md:mb-6"
            } leading-tight relative`}
          >
            {TITLE}
            <span
              className={`absolute bottom-0 ${
                isMobile ? "left-0  " : "left-0 w-24 "
              } h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent`}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-white/90 text-sm xs:text-base sm:text-base md:text-lg lg:text-xl font-light ${
              isMobile
                ? "max-w-full mb-6"
                : "max-w-xl xs:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8"
            } leading-relaxed`}
          >
            {SUBTITLE}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className={`text-white/80 text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg font-medium ${
              isMobile
                ? "max-w-full mb-6"
                : "max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10"
            }`}
          >
            {TAGS}
          </motion.p>
        </div>
        {!isMobile && (
          <div className="relative z-30 max-w-7xl mx-auto">
            <nav className="absolute bottom-8 left-0 mb-6 flex items-center sm:px-6 lg:px-12 space-x-2 text-sm xs:text-sm sm:text-base font-light text-white/80">
              <FiHome className="w-4 h-4" />
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/services/staffing"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                Staffing
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/services/staffing/job-seekers"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                Job Seekers
              </Link>
            </nav>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
          onClick={scrollToPositions}
        >
          <FiChevronDown className="w-6 sm:w-8 h-6 sm:h-8" />
        </motion.div>
      </div>
    </section>
  );
}
