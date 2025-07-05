import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const { IMAGES } = ABOUT_CONSTANTS;
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={IMAGES.HERO_IMAGE.HeroImage}
          alt="Plant Engineering Hero Image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity- bg-repeat" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-end">
          <div className="mb-2 py-14 sm:mb-2">
            <div className={isMobile ? "text-center" : "text-left"}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md relative">
                Cognition IES Pvt. Ltd.
                <span
                  className={`absolute bottom-0 w-24 sm:w-28 md:w-32 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent ${
                    isMobile ? "left-1/2 -translate-x-1/2" : "left-0"
                  }`}
                />
              </h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 tracking-tight text-[#99D5DF] drop-shadow-md">
                Engineering Smarter Solutions for a Better Tomorrow
              </h2>
            </div>
          </div>
          {!isMobile && (
            <nav className="absolute bottom-0 left-4 sm:left-6 md:left-8 mb-4 sm:mb-6 flex items-center space-x-2 text-xs sm:text-sm font-light text-white/80">
              <Link
                href="/"
                className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
              >
                <FiHome className="w-3 h-3 sm:w-4 sm:h-4" />
                Home
              </Link>
              <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <Link
                href="/services/plant-engineering"
                className="hover:text-[#99D5DF] transition-colors duration-200"
              >
                About Us
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
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl -z-10"
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
          className="absolute top-16 sm:top-20 right-12 sm:right-16 w-4 sm:w-5 h-4 sm:h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
        />
      </div>
    </section>
  );
}
