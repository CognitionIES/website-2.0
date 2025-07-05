"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-[#F5FDFF] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003C46] drop-shadow-sm">
              Sustainability Solutions
            </h2>
            <p className="text-lg text-[#5B5B5B] mb-4 font-light leading-relaxed">
              We design solutions to reduce environmental impact and promote a
              circular economy.
            </p>
            <p className="text-lg text-[#5B5B5B] font-light leading-relaxed">
              From renewable energy to waste reduction, our innovations support
              a sustainable future.
            </p>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="block h-0.5 bg-[#0098AF] opacity-60 mt-4 rounded-full ripple"
            />
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&w=1000&q=80"
              alt="Sustainability Solutions"
              fill
              className="object-cover rounded-xl shadow-md"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              className="absolute bottom-0 right-0 w-24 h-24 bg-[#5B5B5B] opacity-15 rounded-full blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-4 left-4 w-2 h-2 bg-[#0098AF] opacity-10 rounded-full"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute top-0 left-0 w-48 h-48 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-16 right-16 w-3 h-3 bg-[#0098AF] opacity-15 rounded-full shadow-[0_0_4px_#0098AF]"
        />
      </div>
    </section>
  );
}
