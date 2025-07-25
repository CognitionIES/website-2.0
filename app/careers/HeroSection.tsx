import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home, Users, Briefcase, TrendingUp } from "lucide-react";
import Image from "next/image";
import heroImage from "@/constants/images/hero/careers-hero.png";
import Link from "next/link";
export default function CareersHero() {
  return (
    <section>
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Careers - Join Our Team"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/75 to-[#0098AF]/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center">
          <div className="relative z-20 h-full flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="absolute bottom-8 flex items-center space-x-2 text-sm text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <Link
                href="/"
                className="hover:text-blue-300 flex items-center gap-1.5 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/careers"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <span className="text-blue-200 font-medium">Careers</span>
              </Link>
            </motion.nav>
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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight">
                    <span className="text-white">Join Our Team</span>
                  </h1>
                  <motion.div
                    className="absolute -bottom-2 left-1 w-32 h-1 bg-gradient-to-r from-[#60a5fa] to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Build your career with us. We&apos;re looking for passionate
                  professionals who want to make an impact and grow with our
                  innovative team.
                </motion.p>

                {/* Feature Points */}
                <motion.div
                  className="flex flex-wrap gap-6 text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="text-sm font-medium">
                      Collaborative Culture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="text-sm font-medium">Career Growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="text-sm font-medium">
                      Exciting Projects
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Subtle Floating Particles */}
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
              className="absolute w-1 h-1 bg-blue-200/40 rounded-full"
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
}
