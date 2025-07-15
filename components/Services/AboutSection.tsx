import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "D+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "A+",
      label: "Happy Clients",
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: "B+",
      label: "Projects Completed",
    },
    { icon: <Zap className="w-6 h-6" />, number: "C%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-[#0098AF]/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#0098AF]/20 mb-4"
              >
                <Target className="w-4 h-4 text-[#0098AF]" />
                <span className="text-sm font-medium text-[#0098AF]">
                  About Cognition
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Innovating the Future of
                <span className="block text-[#0098AF]">Business Solutions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-[#5B5B5B] text-justify mr-8 leading-relaxed mb-6"
              >
                At Cognition, we&apos;re passionate about transforming
                businesses through cutting-edge technology and innovative
                solutions. Our mission is to empower organizations with the
                tools and expertise they need to thrive in an ever-evolving
                digital landscape.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-[#5B5B5B] text-justify mr-8 leading-relaxed"
              >
                What sets us apart is our commitment to understanding your
                unique challenges and delivering tailored solutions that drive
                real results. We combine deep technical expertise with strategic
                thinking to create value that lasts.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0098AF]/10 to-transparent rounded-3xl"></div>

            <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0098AF] to-[#00c4d4] rounded-xl text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#5B5B5B] font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-[#0098AF]/10 to-transparent rounded-2xl border border-[#0098AF]/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0098AF] to-[#00c4d4] rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Our Promise</h3>
                </div>
                <p className="text-sm text-[#5B5B5B]">
                  We deliver exceptional results through innovation, expertise,
                  and unwavering commitment to your success.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
