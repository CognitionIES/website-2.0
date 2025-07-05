"use client";

import { motion } from "framer-motion";
import { services } from "./constants";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46] drop-shadow-sm text-sparkle">
            Our Sustainability Services
          </h2>
          <p className="text-lg text-[#5B5B5B] font-light leading-relaxed">
            Eco-friendly solutions for energy, waste, and resource management.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{
              duration: 1000,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 right-8 w-2 h-2 bg-[#0098AF] opacity-5 rounded-full shadow-[0_0_3px_#0098AF] glow-trail"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group hover:shadow-xl transition-shadow duration-1000 cursor-pointer glow-trail"
              onClick={() => console.log(`Clicked ${service.title}`)}
              onMouseEnter={() => {}}
            >
              <ServiceCard service={service} />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{
                  duration: 1000,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-2 right-2 w-3 h-3 bg-[#0098AF] opacity-15 rounded-full shadow-[0_0_4px_#0098AF]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{
                  duration: 1000,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-2 left-2 w-2 h-2 bg-[#5B5B5B] opacity-10 rounded-full glow-trail"
              />
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1000 }}
          className="absolute top-0 left-0 w-48 h-48 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1000 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: 0 }}
          animate={{ opacity: 0.05, y: 0, rotate: 180 }}
          transition={{
            duration: 2000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-20 w-4 h-4 bg-[#0098AF] opacity-15 rounded-full shadow-[0_0_5px_#0098AF] glow-trail"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-20 right-20 w-2 h-2 bg-[#5B5B5B] opacity-10 rounded-full glow-trail"
        />
      </div>
    </section>
  );
}
