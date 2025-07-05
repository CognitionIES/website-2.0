"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/constants/images/projects/digitalization/hero.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section>
      <div
        className={`relative ${
          isMobile ? "h-[400px]" : "h-[450px]"
        } overflow-hidden`}
      >
        <Image
          src={HeroImage}
          alt="Projects Showcase"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5  bg-repeat" />
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center ${
            isMobile ? "items-center text-center" : ""
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md relative"
          >
            Projects
            <span
              className={`absolute bottom-0 ${
                isMobile ? "" : "left-0 w-24"
              } h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent`}
            />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-xl mt-4 tracking-tight text-white/90 drop-shadow-md"
          >
            Showcasing innovative engineering solutions across industries
          </motion.h2>
          {!isMobile && (
            <nav className="absolute bottom-0 left-4 sm:left-6 lg:left-8 mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" />
                Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/projects"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                Projects
              </Link>
            </nav>
          )}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-16 w-5 h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
        />
      </div>
    </section>
  );
}
