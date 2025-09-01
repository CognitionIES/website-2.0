"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What engineering services do you provide?",
    answer:
      "We offer comprehensive engineering services including plant engineering (process design, automation, electrical infrastructure), product engineering (mechanical design, CAE/CFD analysis, prototyping), and specialized services like hydraulic systems, embedded systems, and technical documentation.",
  },
  {
    question: "Which software and tools do you use?",
    answer:
      "We utilize industry-leading software including CATIA, Siemens NX, SolidWorks for 3D modeling; Ansys, Altair for simulation; Altium Designer, KiCad for electrical design; and MATLAB for analysis. Our team stays current with the latest engineering technologies.",
  },
  {
    question: "How do you ensure project quality and compliance?",
    answer:
      "We follow ISO-certified quality management systems, conduct rigorous testing and validation, maintain comprehensive documentation, and ensure full regulatory compliance. Our experienced team implements industry best practices throughout the project lifecycle.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Simple designs may take 2-4 weeks, while complex plant engineering projects can span 6-18 months. We provide detailed project schedules with milestones and regular progress updates.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-project support including maintenance services, system updates, troubleshooting, training, and technical documentation updates. Our 24/7 support ensures your systems operate optimally.",
  },
  {
    question: "Can you work with existing systems and legacy equipment?",
    answer:
      "Absolutely. We specialize in retrofitting and upgrading existing systems, integrating new technologies with legacy equipment, and providing modernization solutions that extend asset life while improving performance and efficiency.",
  },
];

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

const FAQItem = ({ faq, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border/50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-primary" />
          ) : (
            <Plus className="h-4 w-4 text-primary" />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 bg-gradient-to-br from-muted/20 via-background to-accent/10 overflow-hidden">
      {/* Layered background gradients */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-20" />
      <div className="absolute top-0 left-1/3 w-1/2 h-full bg-gradient-primary opacity-5 transform -rotate-12" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-2/3 bg-gradient-accent opacity-8 transform rotate-6" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Frequently Asked
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Get answers to common questions about our engineering services and
            processes
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
