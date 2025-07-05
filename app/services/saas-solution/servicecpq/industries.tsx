import React, { useEffect, useRef, useState } from "react";
import { Factory, Stethoscope, Hammer, Zap, Tractor } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";

const industriesData = [
  {
    icon: <Factory />,
    title: "HVAC Manufacturers & Partners",
    description:
      "Enhance collaboration with partners and streamline product support to deliver faster, more reliable after-sales service.",
  },
  {
    icon: <Tractor />,
    title: "Heavy Equipment & Construction",
    description:
      "Optimize field service operations, manage complex warranty claims, and reduce equipment downtime with intelligent workflows.",
  },
  {
    icon: <Stethoscope />,
    title: "Medical Equipment",
    description:
      "Ensure regulatory compliance, improve service quality, and support critical equipment uptime for better patient outcomes.",
  },
  {
    icon: <Hammer />,
    title: "CNC Machinery",
    description:
      "Boost parts and service revenue through self-service portals, smart service quoting, and predictive maintenance tools.",
  },
  {
    icon: <Zap />,
    title: "Electrical & Solar Manufacturers",
    description:
      "Improve warranty tracking, automate service contract renewals, and enhance customer satisfaction through digital service enablement.",
  },
];

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-10 md:py-14 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-white to-[#E6F0F5]/30 -z-10" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00b4d8]/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#0098af]/5 rounded-full blur-3xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with hexagon background */}
        <div className="relative mb-10">
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-2">
              Industries We Serve
            </h2>
            <p className="text-[#5b5b5b]">
              Tailored after-sales solutions for manufacturers across diverse
              sectors
            </p>
          </div>
        </div>

        {/* Industry Cards - Honeycomb Layout */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({
  icon,
  title,
  description,
  index,
  isVisible,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  // Calculate delay based on index
  const delay = Math.min(index * 100, 800);

  return (
    <div
      className={`group relative bg-white backdrop-blur w-full md:w-[calc(33%-1rem)] max-w-sm rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-md border border-[#E6F0F5] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0098af] to-[#00b4d8]"></div>

      <div className="p-6 flex flex-col items-center text-center">
        {/* Icon with animated background */}
        <div className="relative mb-5 inline-block">
          <div className="absolute inset-0 bg-[#E6F0F5] rounded-lg transform rotate-45 transition-transform group-hover:rotate-0"></div>
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="text-[#0098af] transform transition-transform group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-[#003C46] mb-3">{title}</h3>
        <p className="text-[#5b5b5b]">{description}</p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#E6F0F5] transform translate-x-6 translate-y-6 rotate-45"></div>
    </div>
  );
};

export default Industries;
