import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=2000&q=80"
        alt="Sustainable Industry"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/sustainability-pattern.jpg')] bg-repeat" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        {/* Breadcrumbs */}
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
            href="/industries"
            className="hover:text-[#99D5DF] transition-colors duration-200"
          >
            Industries
          </Link>
          <FiChevronRight className="w-4 h-4" />
          <span>Sustainability</span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md text-sparkle">
          Pioneering Sustainable Solutions
        </h1>
        <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
          Innovating for a greener future across manufacturing, energy, and
          beyond.
        </p>
        <Button
          variant="default"
          className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-4 py-1.5 rounded-md font-medium shadow-md hover:scale-105 transition-transform duration-200 self-start glow-trail"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onMouseEnter={() => {}}
        >
          Explore Services
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="inline-block ml-1"
          >
            <FiChevronRight className="w-4 h-4" />
          </motion.span>
        </Button>
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
        {/* Decorative Elements */}
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
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 left-12 w-16 h-16 border-2 border-[#0098AF] opacity-20 rounded-full -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-12 right-12 w-3 h-3 bg-[#5B5B5B] opacity-10 rounded-full shadow-[0_0_4px_#5B5B5B] glow-trail"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-16 left-16 w-2 h-2 bg-[#0098AF] opacity-15 rounded-full glow-trail"
        />
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="block h-0.5 bg-[#0098AF] opacity-60 mt-4 rounded-full ripple"
        />
      </div>
    </div>
  );
}
