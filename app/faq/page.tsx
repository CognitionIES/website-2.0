"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent,  } from "@/components/ui/tabs";
import faqs from "@/constants/faqs";
//import { cn } from "@/lib/utils";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import CTASection from "@/components/CTA";

const FAQ = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  // const categories = [
  //  { id: "all", label: "All Questions" },
  //  { id: "General", label: "General" },
  //  { id: "Product", label: "About Product" },
  //  { id: "Process", label: "About Process" },
  // ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

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
    <div>
      <MegaMenu />
      <Hero />
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
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

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Tabs
              defaultValue="all"
              onValueChange={setActiveCategory}
              className="w-full"
            >
              {/* <TabsList className="grid w-full max-w-7xl mx-auto grid-cols-2 md:grid-cols-4 mb-8 bg-[#E6F0F5]/30">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className={cn(
                    "data-[state=active]:bg-[#0098af] data-[state=active]:text-white"
                  )}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList> */}

              <TabsContent value={activeCategory} className="mt-0">
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
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className={
                          index === filteredFaqs.length - 1
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
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Simple divider */}
          <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>

          {/* CTA section */}
        </div>
      </section>
        
    
    <CTASection />
      <Footer />
    </div>
  );
};

export default FAQ;
