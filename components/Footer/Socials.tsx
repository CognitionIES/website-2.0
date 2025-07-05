"use client";

// This component shows social media links
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";

export default function Socials() {
  const { TITLE, ITEMS } = FOOTER_CONSTANTS.SOCIALS;
  const { FADE_IN } = FOOTER_CONSTANTS.ANIMATIONS;

  return (
    <motion.div variants={FADE_IN} className="col-span-12 md:col-span-2">
      {/* Section title */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-[#0098AF] drop-shadow-sm">
        {TITLE}
      </h3>
      {/* Social links list */}
      <ul className="space-y-2">
        {ITEMS.map(([title, href]) => (
          <motion.li
            key={title}
            initial="rest"
            whileHover="hover"
            className="relative"
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-200 hover:text-[#0098AF] transition-colors duration-300 flex items-center gap-3 font-medium group"
            >
              {title === "LinkedIn" && (
                <Linkedin className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              )}
              {title === "Facebook" && (
                <Facebook className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              )}
              {title === "Instagram" && (
                <Instagram className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              )}
              {title === "Twitter" && (
                <Twitter className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              )}
              {title}
            </Link>
            {/* Hover dot */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              className="absolute -top-2 -right-2 w-3 h-3 bg-[#0098AF] opacity-70 rounded-full"
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}