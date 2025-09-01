/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  id: string;
}

const services: Service[] = [
  {
    id: "contract-staffing",
    title: "Time & Material",
    subtitle: "Pay only for the hours or effort utilized.",
    description:
      "Scale quickly without long-term commitments. Our contract staffing services provide skilled professionals for short- or mid-term assignments. We manage everything from sourcing and onboarding to payroll and compliance — so you can focus on delivery, not HR.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },

  {
    id: "rpo",
    title: "Recruitment Process Outsource",
    subtitle: "End-to-End Hiring, Handled by Experts",
    description:
      "Outsource your recruitment engine and reduce cost-per-hire. With RPO, our team acts as an extension of your HR department, managing the entire hiring process — sourcing, screening, interviews, compliance, and analytics — with speed, consistency, and scale.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: "project-based",
    title: "Project-Based Hiring",
    subtitle: "Onboard Full Teams for Specific Deliverables",
    description:
      "Deploy pre-assembled talent for mission-critical milestones. Ideal for product launches, system rollouts, or digital transformation projects, our project-based hiring delivers fully-equipped tech or engineering teams with defined scopes, timelines, and KPIs.",
    image:
      "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
];

const ServiceCard: React.FC<{
  service: Service;
  index: number;
  isVisible: boolean;
}> = ({ service, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group bg-white/95 backdrop-blur-md rounded-xl shadow-lg border-[#003C46]/20 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)] hover:border-[#0098AF]/50 hover:scale-[1.02] transition-all duration-500"
    >
      <div className="p-6 pb-4">
        <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base font-roboto font-medium text-[#0098AF] leading-relaxed">
          {service.subtitle}
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} - Professional staffing service`}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-[#003C46]/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-sm sm:text-base font-roboto text-white leading-relaxed text-center">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-12 lg:py-16 bg-gradient-to-b from-[#F0F9FB] to-[#E6F0F5]/80 overflow-hidden"
      aria-labelledby="services-section-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            id="services-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-[#003C46]"
          >
            Our <span className="text-[#0098AF]">Engagement Models</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-roboto text-[#5B5B5B] mt-4 leading-relaxed">
            Tailored hiring solutions to meet your business needs — whether
            you&apos;re scaling fast or building for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index + 3}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
