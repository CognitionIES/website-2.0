/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  id: string;
}

const services: Service[] = [
  {
    id: "direct-hire",
    title: "Direct Hire",
    subtitle: "Finding Permanent Talent",
    description:
      "Build your core team with confidence. Our direct hire services connect you with top-tier, pre-vetted professionals who are aligned with your culture, goals, and long-term vision.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing",
    subtitle: "Flexible Workforce, On Demand",
    description:
      "Scale quickly without long-term commitments. Our contract staffing services provide skilled professionals for short- or mid-term assignments. We manage everything from sourcing and onboarding to payroll and compliance — so you can focus on delivery, not HR.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: "contract-to-hire",
    title: "Contract-to-Hire (C2H)",
    subtitle: "Try Before You Hire",
    description:
      "Evaluate talent in real-time before making it permanent. Our contract-to-hire model allows you to assess a candidate's skills, culture fit, and work ethic during a trial period. If it's a match, convert to full-time with confidence and zero guesswork.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing",
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
}> = ({ service, isVisible }) => {
  return (
    <div>
      <div
        className={`group bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 overflow-hidden transform transition-all duration-300 hover:scale-105 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          borderColor: "hsl(185 64% 73% / 0.2)",
          boxShadow: "0 4px 20px hsl(188 100% 34% / 0.15)",
          transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "hsl(188 100% 34% / 0.4)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px hsl(193 100% 23% / 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "hsl(185 64% 73% / 0.2)";
          e.currentTarget.style.boxShadow =
            "0 4px 20px hsl(188 100% 34% / 0.15)";
        }}
        role="article"
        aria-labelledby={`service-title-${service.id}`}
      >
        <div className="p-6 pb-4">
          <h3
            id={`service-title-${service.id}`}
            className="text-xl md:text-2xl font-bold text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors duration-300"
          >
            {service.title}
          </h3>
          <p className="text-base md:text-lg font-medium text-[#0098AF] leading-relaxed">
            {service.subtitle}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.title} - Professional staffing service`}
            className="w-full h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
            width={800}
            height={200}
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[#003C46]/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm md:text-base text-white leading-relaxed text-center">
              {service.description}
            </p>
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(188 100% 34% / 0.05), transparent)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
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
      className="relative py-16 overflow-hidden "
      aria-labelledby="services-section-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="none"/%3E%3Cpath fill="rgba(0,60,70,0.05)" d="M0 0h100v100H0z"/%3E%3C/svg%3E')`,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-20">
          <h2
            className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
            style={{ color: "hsl(193 100% 23%)" }}
          >
            Our{" "}
            <span style={{ color: "hsl(188 100% 34%)" }}>
              Engagement Models
            </span>
          </h2>
          <p
            className="text-lg max-w-7xl mx-auto"
            style={{ color: "hsl(200 20% 35%)" }}
          >
            Tailored hiring solutions to meet your business needs — whether
            you&apos;re scaling fast or building for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
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
};

export default ServicesSection;
