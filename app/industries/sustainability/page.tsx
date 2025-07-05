"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import About from "./about";
import Services from "./services";
import { faqs } from "./constants";

export default function SustainabilityIndustry() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      <Hero />

      <div className="bg-gradient-to-b from-white to-[#F5FDFF]">
        <About />
        <Services />

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-16 bg-[#F5FDFF] relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003C46] text-sparkle">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A] font-light leading-relaxed">
                Quick answers about our sustainability solutions.
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
            <div className="text-[#4A4A4A]">
              <Accordion type="single" collapsible className="text-[#4A4A4A]">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-t border-[#99D5DF]/20 glow-trail"
                    onMouseEnter={() => {}}
                  >
                    <AccordionTrigger className="text-lg font-medium hover:text-[#00A4B4] py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light py-4">
                      {faq.answer}
                    </AccordionContent>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.03 }}
                      transition={{
                        duration: 1000,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="absolute bottom-2 right-2 w-2 h-2 bg-[#5B5B5B] opacity-10 rounded-full glow-trail"
                    />
                  </AccordionItem>
                ))}
              </Accordion>
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
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.05, x: 0 }}
              transition={{
                duration: 2000,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-20 right-20 w-3 h-3 bg-[#0098AF] opacity-15 rounded-full shadow-[0_0_4px_#0098AF] glow-trail"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{
                duration: 1000,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-20 left-20 w-2 h-2 bg-[#5B5B5B] opacity-10 rounded-full glow-trail"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{
                duration: 1000,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-8 right-8 w-1 h-1 bg-[#0098AF] opacity-5 rounded-full shadow-[0_0_2px_#0098AF] glow-trail"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
