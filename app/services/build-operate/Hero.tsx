"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/constants/images/build-operate/hero.jpg";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={heroImage}
          alt="Build & Operate"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/60 to-[#0098AF]/60" />
        <div className="absolute inset-0 opacity-5 bg-repeat" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="relative z-20 h-full flex flex-col justify-center">
            <nav className="absolute bottom-8 flex items-center space-x-2 text-sm font-medium text-white/70 font-roboto">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1.5 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/services"
                className="hover:text-[#99D5DF] transition-colors duration-300"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/services/build-operate"
                className="hover:text-[#99D5DF] transition-colors duration-300"
              >
                Build & Operate
              </Link>
            </nav>
            <div className="space-y-6">
              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat tracking-tight text-white leading-tight relative"
              >
                Build & Operate
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-[#99D5DF] to-transparent rounded-full" />
              </h1>
            </div>
          </div>
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
            className="absolute w-1 h-1 bg-[#99D5DF]/60 rounded-full"
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
