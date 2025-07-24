/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const AccordionSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white/90 to-[#E6F0F5]/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Have Questions? We&apos;ve Got Answers
            </h2>
          </div>

          {/* FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <Accordion
                type="single"
                collapsible
                className="bg-white rounded-xl shadow-md border border-[#E6F0F5]"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={
                      index === faqs.length - 1
                        ? "border-b-0"
                        : "border-b border-[#E6F0F5]/50"
                    }
                  >
                    <AccordionTrigger className="py-5 px-6 hover:no-underline text-xl sm:text-xl font-medium text-[#003C46] hover:text-[#0098af] data-[state=open]:text-[#0098af]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pt-0 pb-5 text-lg text-gray-600">
                      <div className="border-l-2 border-[#0098af]/20 pl-4">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>

          {/* Simple divider */}
          <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>

          {/* CTA section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-[#003C46] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contact our team for personalized assistance or to discuss your
              project needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#0098af] text-white font-medium rounded-full hover:bg-[#007a8c] transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccordionSection;
