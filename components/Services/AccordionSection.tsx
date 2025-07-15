/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Cognition different from other service providers?",
      answer:
        "We combine deep technical expertise with strategic business understanding to deliver solutions that not only work but drive real business value. Our approach is collaborative, transparent, and focused on long-term success rather than quick fixes.",
    },
    {
      question: "How do you ensure the security of our data and systems?",
      answer:
        "Security is paramount in everything we do. We implement industry-leading security practices, conduct regular audits, maintain compliance with major standards (SOC 2, ISO 27001), and use advanced encryption and monitoring tools to protect your data and systems.",
    },
    {
      question: "What is your typical project timeline and process?",
      answer:
        "Our process begins with a comprehensive discovery phase (1-2 weeks), followed by solution design and planning (1-2 weeks), implementation (varies by scope), testing and deployment (1-2 weeks), and ongoing support. We use agile methodologies to ensure flexibility and regular communication.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We offer comprehensive post-launch support including 24/7 monitoring, regular maintenance, performance optimization, and strategic guidance. Our support packages are flexible and can be customized based on your specific needs.",
    },
    {
      question: "Can you work with our existing technology stack?",
      answer:
        "Yes, we're technology-agnostic and experienced with a wide range of platforms and tools. We'll assess your current infrastructure and recommend the best approach, whether it's building on your existing stack or strategically migrating to new solutions.",
    },
    {
      question: "How do you handle project communication and updates?",
      answer:
        "We believe in transparent, regular communication. You'll have access to dedicated project managers, weekly progress reports, real-time project dashboards, and scheduled check-ins. We adapt our communication style to match your preferences and requirements.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
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
            <HelpCircle className="w-4 h-4 text-[#0098AF]" />
            <span className="text-sm font-medium text-[#0098AF]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got Questions?
            <span className="block text-[#0098AF]">We Have Answers</span>
          </h2>

          <p className="text-lg text-[#5B5B5B] max-w-7xl mx-auto">
            Find answers to the most common questions about our services,
            processes, and how we can help your business succeed.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden shadow-lg"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-300 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold text-[#5B5B5B] group-hover:text-[#0098AF] transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#0098AF]" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-[#0098AF]/20 bg-gradient-to-r from-[#0098AF]/5 to-transparent">
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-[#5B5B5B] leading-relaxed pt-4"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
