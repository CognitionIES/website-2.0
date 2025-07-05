"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE } = CONTACT_CONSTANTS.HERO;
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={IMAGE}
          alt="Plant Engineering Hero Image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5 bg-repeat" />
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center ${
            isMobile ? "items-center text-center" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md relative">
            {TITLE}
            <span
              className={`absolute bottom-0 ${
                isMobile ? "left-1/2 -translate-x-1/2" : "left-0 w-32" 
              }  h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent`}
            />
          </h1>
          <h1 className="text-lg md:text-xl lg:text-xl tracking-tight text-white mt-4 drop-shadow-md">
            {SUBTITLE}
          </h1>
          {!isMobile && (
            <nav className="absolute bottom-0 left-6 sm:left-8 lg:left-12 mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" />
                Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/services/plant-engineering"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                {TITLE}
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
