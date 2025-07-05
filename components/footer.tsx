"use client";
import * as React from "react";
import { motion } from "framer-motion";
import CompanyInfo from "./Footer/CompanyInfo";
import UsefulLinks from "./Footer/UsefulLinks";
import Link from "next/link";
import LinkedinLogo from "@/constants/images/linkedinLogo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#003C46] text-white relative overflow-hidden">
      <div className="relative px-4 sm:px-6">
        <div className="max-w-[95%] sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto mt-6 sm:py-8 md:py-10 lg:py-10">
          {/* Grid layout for footer sections */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-10 md:gap-8 lg:gap-12 mt-4">
            <CompanyInfo />
            <div className="col-span-1 md:col-span-4 mt-0 sm:mt-5 md:mt-5 ml-0 sm:ml-16">
              <UsefulLinks />
            </div>
          </div>
        </div>
        {/* LinkedIn and Email for desktop view */}
        <div className="hidden md:block absolute bottom-2 right-4 sm:bottom-2 sm:right-8 md:bottom-1 md:right-40 text-base sm:text-lg text-[#E6F0F5]/70">
          <div className="flex items-center space-x-2 sm:space-x-3 mt-8 sm:mt-10">
            <Link
              href="https://www.linkedin.com/company/cognitionies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0098AF] px-2"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                width={32}
                height={32}
                className="sm:w-10 sm:h-10"
              />
            </Link>
            <span>|</span>
            <Link
              href="mailto:info@cognitionies.com"
              className="hover:text-[#0098AF] text-sm sm:text-base"
            >
              info@cognitionies.com
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 sm:mt-8 text-[10px] sm:text-xs text-[#E6F0F5]/70">
        <p>Copyright © 2025 Cognition IES | All Rights Reserved</p>
      </div>
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-[#0098AF]/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#5B5B5B]/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#0098AF]/50 rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 sm:right-8 md:right-12 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#0098AF]/50 rounded-full -z-10"
      />
    </footer>
  );
}
