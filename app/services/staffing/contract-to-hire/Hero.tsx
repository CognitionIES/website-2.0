"use client"; // Mark as Client Component to allow event handlers or interactivity

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import HeroImageSm from "@/constants/images/staffing-recruitment/job-seeker-hero-sm.jpg";
import HeroImageMd from "@/constants/images/staffing-recruitment/job-seeker-hero.jpg";
import HeroImageLg from "@/constants/images/staffing-recruitment/job-seeker-hero.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`relative ${isMobile ? "h-[400px]" : "h-[450px]"}`}>
        {/* Responsive Hero Images */}
        <Image
          src={HeroImageSm}
          alt="Job Seeker Hero Image Small"
          fill
          className="object-cover object-center block sm:hidden"
          priority
          sizes="(max-width: 640px) 100vw"
          quality={80}
        />
        <Image
          src={HeroImageMd}
          alt="Job Seeker Hero Image Medium"
          fill
          className="object-cover object-center hidden sm:block md:hidden"
          priority
          sizes="(max-width: 768px) 90vw"
          quality={80}
        />
        <Image
          src={HeroImageLg}
          alt="Job Seeker Hero Image Large"
          fill
          className="object-cover object-center hidden md:block"
          priority
          sizes="1280px"
          quality={80}
        />

        {/* Multi-layered Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#0098AF]/75 to-[#00b4d8]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 to-transparent opacity-80" />
        <div className="absolute inset-0 opacity-10   bg-repeat" />

        {/* Content Container */}
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center text-center justify-center ${
            isMobile ? "items-center text-center" : ""
          }`}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-lg mb-4 sm:mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b0e9ff]">
              Your Career.
            </span>{" "}
            Our Commitment.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-4 sm:mb-6"
          >
            We’re more than a job board. We’re your career partners. We aim to
            make the job-seeking process easier, smoother, and more transparent
            for everyone.
          </motion.p>

          {/* Third Text Line - Hidden on smaller screens */}
          {!isMobile && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/85 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-3xl mx-auto mb-6 sm:mb-8"
            >
              Because you’re not just finding a job — you’re stepping into your
              future.
            </motion.p>
          )}

          {/* Breadcrumb Navigation - Hidden on mobile */}
          {!isMobile && (
            <nav className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-light text-white/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <Link
                href="/"
                className="hover:text-white flex items-center gap-1.5 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4 sm:w-5 sm:h-5" /> Home
              </Link>
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              <Link
                href="/services/staffing"
                className="hover:text-white transition-colors duration-200"
              >
                Staffing & Recruitment
              </Link>
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              <Link
                href="/services/staffing/job-seekers"
                className="hover:text-white transition-colors duration-200"
              >
                Job Seekers
              </Link>
            </nav>
          )}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
          >
            <FiChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-[#00b4d8]/40 to-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-10 sm:top-16 md:top-24 right-4 sm:right-8 md:right-12 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-[#b0e9ff]/50 rounded-full -z-10"
        />
      </div>
    </section>
  );
}
