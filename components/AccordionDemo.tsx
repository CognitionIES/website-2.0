"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/constants/home/faqs";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AccordionDemo() {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="mb-12 max-w-7xl">
          <div className="inline-block mb-3 px-3 py-1 bg-[#E6F0F5] rounded-full">
            <p className="text-xs font-medium text-[#0098af] uppercase">
              Frequently Asked Questions
            </p>
          </div>
        {/* Section header */}

          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-4">
            Why Choose Us?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-7xl">
            The right engineering partner isn&apos;t just about technical
            services, it&apos;s about working with a team that understands your
            industry, your challenges, and the pressure to stay ahead.
          </p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl max-w-7xl shadow-sm border border-[#E6F0F5]"
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
                <AccordionTrigger className="py-5 px-6 hover:no-underline text-base sm:text-lg font-medium text-[#003C46] data-[state=open]:text-[#009af] hover:text-[#0098af]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-0 pb-5 text-gray-600">
                  <div className="border-l-2 border-[#0098af]/20 pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Simple divider */}
        <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>
      </div>
    </section>
  );
}
