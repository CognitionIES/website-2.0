import React from "react";
import { motion } from "framer-motion";
import { Server, Users, Code, ArrowRight, Sparkles } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "SaaS Solutions",
      description:
        "Comprehensive software-as-a-service solutions tailored to your business needs with scalable architecture and seamless integration.",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-purple-600 to-blue-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staffing & Recruitment",
      description:
        "Expert talent acquisition and staffing services to build high-performing teams that drive your business forward.",
      gradient: "from-green-500 to-teal-600",
      hoverGradient: "from-teal-600 to-green-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Build & Operate",
      description:
        "End-to-end development and operational support services from concept to deployment and beyond.",
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-red-600 to-orange-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0098AF]/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#0098AF]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#0098AF]" />
            <span className="text-sm font-medium text-[#0098AF]">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for
            <span className="block text-[#0098AF]">Modern Businesses</span>
          </h2>

          <p className="text-lg text-[#5B5B5B] max-w-7xl mx-auto">
            From strategy to execution, we provide end-to-end services that help
            you achieve your business goals with confidence and efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/30 group-hover:bg-gray/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/40 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white group-hover:bg-gradient-to-r  transition-all duration-300`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0098AF] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#5B5B5B] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <motion.div
                    className="flex items-center space-x-2 text-[#0098AF] font-medium cursor-pointer group-hover:text-[#00c4d4] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0098AF]/10 to-transparent rounded-2xl p-8 border border-[#0098AF]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-[#5B5B5B] mb-6 max-w-2xl mx-auto">
              Every business is unique. Let&apos;s discuss how we can create a
              tailored solution that perfectly fits your specific needs and
              goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0098AF] to-[#00c4d4] text-white px-8 py-3 rounded-lg font-medium hover:from-[#00c4d4] hover:to-[#0098AF] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
