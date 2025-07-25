Rimport React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/constants/images/hero/build-operate.png";

export default function BuildOperateHero() {
  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Build Operate Hero Section"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/60 to-[#0098AF]/60" />

        <div className="absolute inset-0 opacity-5   bg-repeat" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center">
          <div className="relative z-20  h-full flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav className="absolute bottom-8   flex items-center space-x-2 text-sm text-white/70">
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
              </Link>{" "}
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services/built-operate">
                <span className="text-blue-200 font-medium">
                  Build & Operate
                </span>
              </Link>
            </nav>

            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Main Heading */}
                <div className="relative top-2">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight text-white leading-tight">
                    <span className="text-white bg-clip-text ">
                      Build & Operate
                    </span>
                  </h1>
                  <div className="absolute -bottom-2 left-2 w-24 h-1 bg-gradient-to-r from-[#99D5DF] to-transparent rounded-full" />
                </div>
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
