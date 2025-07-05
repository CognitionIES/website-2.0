import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileIndustryHero() {
  // Unsplash image: A futuristic mobile tech scene (smartphone with digital elements)
  const mobileImage = "https://media.istockphoto.com/id/1733213138/photo/ev-production-line-on-advanced-automated-smart-factory-high-performance-electric-car.jpg?s=1024x1024&w=is&k=20&c=Sj3A6TjlNb7Ms12z-ocAKv2nanB3D_hlFvsLQL98n5I=";

  return (
    <section>
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={mobileImage}
          alt="Mobile Technology Innovation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5 bg-[url('/images/mobile-pattern.jpg')] bg-repeat" /> {/* Optional: Add a mobile-themed pattern */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
          <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-4 h-4" />
              Home
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <Link
              href="/mobile-industry"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Mobile Industry
            </Link>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative">
            Innovate the Mobile Future
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
          </h1>
          <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
            Discover cutting-edge solutions and lead the charge in mobile technology.
          </p>
          <Button
            variant="default"
            className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-2 py-1 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-200 self-start"
            onClick={() =>
              document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Solutions
          </Button>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
        {/* Decorative Elements in Hero */}
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