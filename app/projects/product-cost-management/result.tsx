import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { MotionProps, Variants } from "framer-motion";

const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
};

const ProjectResults = () => {
  const project = {
    title: "Log Splitter Cost Optimization",
    subtitle:
      "Engineering innovative solutions for manufacturing efficiency and market competitiveness.",
    description:
      "Our client, a leading manufacturer in the industrial equipment sector, specializes in outdoor power tools including log splitters, pressure washers, and air compressors. They engaged Cognition Engineering Solutions to optimize costs and improve the competitiveness of their Log Splitter product line. The primary goal was to analyze the product's design, components, and manufacturing costs to identify opportunities for cost reduction without compromising quality and performance.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overviewImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    approachImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    resultsImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop",
    client: "Leading Industrial Equipment Manufacturer",
    duration: "6 months",
  };

  return (
    <motion.section
      {...fadeInUp}
      id="results"
      className="py-20 lg:py-28 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5b5b5b]">
            Results & Impact
          </h2>
        </div>
        <h3 className="text-2xl font-semibold text-[#5b5b5b] mb-8">
          Delivering measurable improvement in cost and competitiveness
        </h3>
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: "50%", label: "Increased Profit Margins" },
            { value: "35%", label: "Reduced Manufacturing Costs" },
            { value: "40+", label: "Optimization Opportunities" },
            { value: "3x", label: "Market Competitiveness" },
          ].map((outcome) => (
            <motion.div
              key={outcome.label}
              {...fadeInUp}
              className="relative bg-gradient-to-b from-gray-50 to-[#E6F0F5] p-6 rounded-xl shadow-md text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-[#0098af]">
                  {outcome.value}
                </h3>
                <p className="text-lg text-[#5b5b5b] mt-2">{outcome.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#5b5b5b] mb-4">
              Key Findings
            </h3>
            <div className="space-y-4">
              {[
                "Significant weight and design differences between client's product and benchmarked models",
                "Complex component design increased manufacturing costs unnecessarily",
                "Benchmarked products had lighter, simpler designs without compromising functionality",
                "Opportunities to standardize parts across product lines for cost efficiency",
              ].map((finding, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#E6F0F5] rounded-full flex items-center justify-center">
                    <span className="text-[#0098af] font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-[#5b5b5b]">{finding}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl shadow-xl overflow-hidden border border-[#E6F0F5]">
            <Image
              src={project.resultsImage}
              alt="Results Image"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectResults;
