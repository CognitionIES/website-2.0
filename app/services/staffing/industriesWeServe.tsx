"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, Cpu, Wrench, Radio, Fuel } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Wrench,
    name: "Engineering",
    description:
      "Specialized recruitment for engineering roles across mechanical, civil, electrical, and chemical disciplines.",
    color: "#0098AF",
  },
  {
    icon: Cpu,
    name: "Information Technology",
    description:
      "From software development and IT support to cyber security and project management, we have the expertise to match the right candidate with the right opportunity.",
    color: "#003C46",
  },
  {
    icon: Fuel,
    name: "Oil & Gas",
    description:
      "Comprehensive staffing for upstream, midstream, and downstream operations with safety-first approach.",
    color: "#0098AF",
  },
  {
    icon: Radio,
    name: "Telecom",
    description:
      "Talent solutions for telecommunications, network infrastructure, and 5G technology companies.",
    color: "#003C46",
  },
  {
    icon: Building2,
    name: "BFSI",
    description:
      "From investment banking to accounting and everything in between, we have the expertise to match the right candidate with the right opportunity.",
    color: "#0098AF",
  },
];

export default function IndustriesWeServe() {
  return (
    <section
      className="py-16 sm:py-12 lg:py-16 bg-gradient-to-b from-[#FFF] to-[#E6F0F5]/60 relative overflow-hidden"
      aria-labelledby="industries-section-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            id="industries-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]"
          >
            Industries <span className="text-[#0098AF]">We Serve</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-roboto text-[#5B5B5B] mt-4 leading-relaxed">
            Specialized recruitment expertise across key industries, delivering
            talent solutions that drive business growth.
          </p>
        </div>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {industries.slice(0, 3).map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group p-6 bg-white/95 backdrop-blur-md shadow-lg border-[#003C46]/20 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)] hover:border-[#0098AF]/50 hover:scale-[1.02] transition-all duration-500 h-[220px] flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-[#0098AF]/20 group-hover:bg-[#0098AF]/30">
                        <industry.icon
                          size={24}
                          style={{ color: industry.color }}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-sm sm:text-base font-roboto text-[#5B5B5B] leading-relaxed line-clamp-3">
                      {industry.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {industries.slice(3).map((industry, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group p-6 bg-white/95 backdrop-blur-md shadow-lg border-[#003C46]/20 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)] hover:border-[#0098AF]/50 hover:scale-[1.02] transition-all duration-500 h-[220px] flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-[#0098AF]/20 group-hover:bg-[#0098AF]/30">
                        <industry.icon
                          size={24} // Changed from 32 to 24 for consistency
                          style={{ color: industry.color }}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-sm sm:text-base font-roboto text-[#5B5B5B] leading-relaxed line-clamp-3">
                      {industry.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
