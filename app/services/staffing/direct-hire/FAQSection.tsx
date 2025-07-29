import React, { useEffect, useRef, useState } from "react";
import { CustomChevronDown } from "./CustomIcons";

const faqs = [
  {
    question: "What is the direct hire process?",
    answer:
      "Our direct hire process begins with understanding your specific requirements and company culture. We then source candidates through our extensive network, conduct comprehensive screenings including skills assessments and cultural fit evaluations, present qualified candidates for your review, and support you through the final selection and onboarding process.",
  },
  {
    question: "How long does it take to find a candidate?",
    answer:
      "Our average time-to-fill for direct hire positions is 2-4 weeks, significantly faster than industry standards. The timeline depends on factors such as role complexity, market availability, and specific requirements. Our streamlined process and extensive candidate network enable us to present qualified candidates quickly.",
  },
  {
    question: "What types of positions do you fill?",
    answer:
      "We specialize in permanent placements across all levels, from entry-level professionals to C-suite executives. Our expertise spans multiple industries including technology, healthcare, finance, manufacturing, and professional services. We handle both common and niche roles with equal expertise.",
  },
  {
    question: "Do you offer any guarantees?",
    answer:
      "Yes, we provide a comprehensive replacement guarantee for all direct hire placements. If a placed candidate doesn't work out within the guarantee period, we will replace them at no additional cost. Our guarantee terms vary by position level and are detailed in our service agreement.",
  },
  {
    question: "How do you ensure candidate quality?",
    answer:
      "Our rigorous vetting process includes skills assessments, behavioral interviews, reference checks, background verification, and cultural fit evaluations. We also maintain ongoing relationships with top talent in various industries, ensuring access to high-quality candidates who may not be actively job searching.",
  },
  {
    question: "What are your fees for direct hire services?",
    answer:
      "Our fee structure is transparent and competitive, typically ranging from 15-30% of the candidate's first-year salary, depending on the role level and complexity. We provide detailed fee information upfront with no hidden costs. Payment is due only upon successful placement and the candidate's start date.",
  },
];

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#E6F0F5] to-[#66B8C7] bg-[length:200%_200%] animate-gradient-shift relative overflow-hidden"
    >
      {/* Wave Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#1A2A2E] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-['Roboto'] text-xl text-[#5B5B5B]">
            Get answers to common questions about our direct hire services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border-l-4 border-[#0098AF] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#E6F0F5] hover:to-[#66B8C7] transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-['Montserrat'] font-semibold text-xl text-[#1A2A2E] pr-4">
                    {faq.question}
                  </h3>
                  <CustomChevronDown
                    className={`w-6 h-6 text-[#0098AF] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="font-['Roboto'] text-[#5B5B5B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
