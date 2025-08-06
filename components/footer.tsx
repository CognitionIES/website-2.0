import * as React from "react";
import { motion } from "framer-motion";
import CompanyInfo from "./Footer/CompanyInfo";
import UsefulLinks from "./Footer/UsefulLinks";
import SocialConnect from "./Footer/SocialConnect";
//import Newsletter from "./Footer/Newsletter";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-br from-[#003C46] via-[#003C46] to-[#007B8F] text-[#F5FDFF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-[#99D5DF] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0098AF] rounded-full blur-3xl"
        />
      </div>

      <div className="relative pt-8">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Company Info - Takes more space on desktop */}
            <div className="lg:col-span-5">
              <CompanyInfo />
            </div>

            {/* Links Section */}
            <div className="lg:col-span-4">
              <UsefulLinks />
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-3 space-y-8">
              <SocialConnect />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#007B8F]/30 bg-[#003C46]/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-[#E6F0F5]/70 font-light">
                © 2025 Cognition IES. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-[#E6F0F5]/70">
                <motion.link
                  href="/privacy"
                  whileHover={{ color: "#99D5DF" }}
                  className="hover:text-[#99D5DF] transition-colors duration-200"
                >
                  Privacy Policy
                </motion.link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
