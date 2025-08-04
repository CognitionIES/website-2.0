/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import HeroImage from "@/constants/images/projects/digitalization/hero.jpg";
import { FiChevronRight, FiHome } from "react-icons/fi";

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};

export default function ProjectsHero() {
  const [setRef, isVisible] = useIntersectionObserver();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={setRef}
      className="relative h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/80 to-[#0098AF]/70" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="relative z-20 h-full flex flex-col justify-center space-y-6">
          {/* Breadcrumbs */}
          <motion.nav
            className="absolute bottom-8 flex items-center space-x-2 text-sm text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="hover:text-blue-300 flex items-center gap-1.5 transition-colors duration-300"
            >
              <FiHome className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>
            <FiChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/projects"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              <span className="text-blue-200 font-medium">Projects</span>
            </Link>
          </motion.nav>

          {/* Heading */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight">
              Projects
            </h1>
            <motion.div
              className="absolute -bottom-2 left-1 w-32 h-1 bg-gradient-to-r from-[#99D5DF] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 128 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Showcasing innovative engineering solutions across industries.
          </motion.p>
        </div>

        {/* Floating Particles */}
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
    </section>
  );
}
