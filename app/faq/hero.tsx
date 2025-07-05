"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Hero_Image from "@/constants/images/FAQ/hero.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function hero() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={Hero_Image}
          alt="Office Environment"
          fill
          className=""
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5  bg-repeat" />
        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col ${
            isMobile ? "items-center mt-28 justify-center" : "justify-end"
          }`}
        >
          <div className={isMobile ? "text-center" : "text-left"}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md relative">
              FAQs
              <span
                className={`absolute bottom-0 ${
                  isMobile ? "left-1/2 -translate-x-1/2" : "left-0 w-24"
                }  h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent`}
              />
            </h1>
            <h2 className="text-lg md:text-xl lg:text-xl mt-4 tracking-tight text-white/90 drop-shadow-md">
              Find answers to your questions about our services
            </h2>
          </div>
          {!isMobile && (
            <nav className="self-start flex items-center space-x-2 mb-4 text-sm font-light text-white/80 mt-4">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-4 h-4" />
                Home
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link
                href="/faq"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                FAQs
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
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
