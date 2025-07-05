"use client";

// This component shows contact information
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";

export default function ContactUs() {
  const { TITLE, ITEMS } = FOOTER_CONSTANTS.CONTACT;
  const { FADE_IN } = FOOTER_CONSTANTS.ANIMATIONS;

  return (
    <motion.div variants={FADE_IN} className="col-span-12 md:col-span-3">
      {/* Section title */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-[#0098AF] drop-shadow-sm">
        {TITLE}
      </h3>
      {/* Contact list */}
      <ul className="space-y-2">
        {ITEMS.map(([type, href, text]) => (
          <li key={text} className="relative">
            <Link
              href={href}
              className="text-lg text-white hover:text-[#0098AF] transition-colors duration-300 flex items-center gap-3 font-medium group"
            >
              {type === "Email" ? (
                <Mail className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              ) : (
                <Phone className="text-white opacity-70 w-6 h-6 group-hover:text-[#0098AF] transition-colors duration-300" />
              )}
              {text}
            </Link>
            {/* Hover dot */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              className="absolute -top-2 -right-2 w-3 h-3 bg-[#0098AF] opacity-70 rounded-full"
            />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
