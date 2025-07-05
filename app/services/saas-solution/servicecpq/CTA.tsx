"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
//import { Button } from "@/components/ui/button";

const CTA = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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

  // Animation variants for fade-in effect
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
  };
  return (
    <div>
      
      <div className=" ">
        <section
          ref={sectionRef}
          className="w-full  relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className=""
            ></motion.div>


            {/* CTA section */}
          </div>
        </section>
        <section className="w-full py-12 sm:py-14 lg:py-22   bg-[#0098AF] text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className=" px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold mb-6 drop-shadow-md">
              Get a Free Demo and Consultation
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8">
              See our AI-driven solutions in action! Our demo shows how you can
              automate, streamline, and enhance your service management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#003C46] px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 border border-[#E6F0F5] hover:bg-[#E6F0F5]/50 focus:outline-none focus:ring-2 focus:ring-[#E6F0F5] focus:ring-offset-2;
  group"
              >
                Book Your Free Demo
              </Link>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
          />
        </section>
      </div>
    </div>
  );
};
/*
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod: string;
  priceSubtext: string;
  users: string;
  buttonText: string;
  buttonLink: string;
  gradient: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  pricePeriod,
  priceSubtext,
  users,
  buttonText,
  buttonLink,
  gradient,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden h-full flex flex-col bg-gradient-to-b ${gradient} text-white`}
    >
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="mb-6 text-white/90 flex-grow">{description}</p>

        <div className="mb-4">
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-white/80 ml-1">{pricePeriod}</span>
          </div>
          <p className="text-white/80 text-sm">{priceSubtext}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white/80"># of Users</p>
          <p className="text-4xl font-bold">{users}</p>
        </div>

        <Link
          href={buttonLink}
          className="inline-block bg-white text-[#0098af] px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
*/
export default CTA;
