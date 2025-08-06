import { motion, Variants } from "framer-motion";
import { useIsMobile } from "../../hooks/use-mobile";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SocialConnect() {
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const Container = isMobile ? "div" : motion.div;

  return (
    <Container
      {...(!isMobile && {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      })}
      className="space-y-6"
    >
      <motion.div variants={!isMobile ? itemVariants : undefined}>
        <h3 className="text-xl font-semibold text-[#F5FDFF] mb-2">
          Connect With Us
        </h3>
      </motion.div>

      <motion.div
        variants={!isMobile ? itemVariants : undefined}
        className="space-y-4"
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 4px 12px rgba(0, 123, 143, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="https://www.linkedin.com/company/cognition-ies"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-3 rounded-lg bg-[#007B8F]/20 hover:bg-[#007B8F]/30 border border-[#007B8F]/30 hover:border-[#99D5DF]/50 transition-all duration-300"
          >
            <div className="relative">
              <svg
                className="w-6 h-6 text-[#F5FDFF] group-hover:text-[#99D5DF] transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div className="absolute inset-0 bg-[#99D5DF]/20 rounded blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="ml-3 flex-1">
              <div className="text-sm font-medium text-[#F5FDFF] group-hover:text-[#99D5DF] transition-colors duration-300">
                Follow us on LinkedIn
              </div>
              <div className="text-xs text-[#E6F0F5]/60">
                Stay updated with our latest news
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#E6F0F5]/40 group-hover:text-[#99D5DF] transition-colors duration-300" />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 4px 12px rgba(0, 152, 175, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="mailto:info@cognitionies.com"
            className="group flex items-center p-3 rounded-lg bg-[#0098AF]/20 hover:bg-[#0098AF]/30 border border-[#0098AF]/30 hover:border-[#99D5DF]/50 transition-all duration-300"
          >
            <div className="relative">
              <Mail className="w-6 h-6 text-[#F5FDFF] group-hover:text-[#99D5DF] transition-all duration-300" />
              <div className="absolute inset-0 bg-[#99D5DF]/20 rounded blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="ml-3 flex-1">
              <div className="text-sm font-medium text-[#F5FDFF] group-hover:text-[#99D5DF] transition-colors duration-300">
                info@cognitionies.com
              </div>
              <div className="text-xs text-[#E6F0F5]/60">
                Get in touch with our team
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={!isMobile ? itemVariants : undefined}
        className="pt-4"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="block w-full text-center py-3 px-4 bg-gradient-to-r from-[#007B8F] to-[#0098AF] hover:from-[#0098AF] hover:to-[#99D5DF] text-[#F5FDFF] font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Project
          </Link>
        </motion.div>
      </motion.div>
    </Container>
  );
}
