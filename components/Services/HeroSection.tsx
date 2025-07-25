"use client"; // Mark as Client Component to allow event handlers or interactivity

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/constants/images/hero/services-hero.png";
import { ChevronRight, Home } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={heroImage}
          // src={engineeringImage}
          alt="FEED & Conceptual Design Innovation"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/60 to-[#0098AF]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center">
          <div className="relative z-20  h-full flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav className="absolute bottom-8 flex items-center space-x-2 text-sm text-white/70">
              <Link
                href="/"
                className="hover:text-blue-300 flex items-center gap-1.5 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services">
                <span className="text-blue-200 font-medium">Services</span>
              </Link>
            </nav>

            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Main Heading */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight text-white leading-tight">
                      <span className="text-white bg-clip-text ">
                        Our Services
                      </span>
                    </h1>
                    <div className="absolute -bottom-2 left-2 w-24 h-1 bg-gradient-to-r from-[#99D5DF] to-transparent rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#F5FDFF]/60 text-xs font-medium tracking-wider uppercase">
                  Explore Services
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-6 h-10 border-2 border-[#99D5DF]/30 rounded-full flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1 h-3 bg-gradient-to-b from-[#99D5DF] to-[#0098AF] rounded-full mt-2"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Subtle Floating Particles */}
        </div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -100],
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: "20px",
            }}
          />
        ))}
      </div>
    </section>
  );
}
