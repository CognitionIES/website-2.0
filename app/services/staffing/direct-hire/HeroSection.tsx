import React from "react";
import heroImage from "@/constants/images/hero/direct-hire-1.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Direct Hire Hero Image"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A2E]/80 via-[#0098AF]/70 to-[#5B5B5B]/60 bg-[length:200%_200%] animate-gradient-shift" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center">
          <div className="relative z-20 h-full flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="absolute bottom-8 flex items-center space-x-2 text-sm text-[#F5FDFF]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <Link
                href="/"
                className="hover:text-[#66B8C7] flex items-center gap-1.5 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/staffing"
                className="hover:text-[#66B8C7] transition-colors duration-300"
              >
                <span className="text-[#66B8C7] font-medium">Staffing</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/staffing/direct-hire"
                className="hover:text-[#66B8C7] transition-colors duration-300"
              >
                <span className="text-[#66B8C7] font-medium">Direct Hire</span>
              </Link>
            </motion.nav>
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Main Heading */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F5FDFF] font-bold tracking-tight leading-tight">
                    <span className="text-[#F5FDFF]">
                      Direct
                      <span className="text-[#66B8C7]"> Hire</span>
                    </span>
                  </h1>
                  <motion.div
                    className="absolute -bottom-2 left-1 w-32 h-1 bg-gradient-to-r from-[#0098AF] to-[#66B8C7] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="text-lg md:text-xl text-[#F5FDFF]/90 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Find the perfect permanent talent to drive your business
                  forward with our expert direct hire services
                </motion.p>
              </div>
            </div>
          </div>

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [0, -120],
                x: [0, Math.random() * 150 - 75],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeOut",
              }}
              className="absolute w-1 h-1 bg-[#66B8C7]/40 rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                bottom: "15px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;