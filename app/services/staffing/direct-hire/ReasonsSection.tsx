import React, { useEffect, useRef, useState } from "react";
import {
  CustomClock,
  CustomStar,
  CustomDollar,
  CustomGraph,
} from "./CustomIcons";

const reasons = [
  {
    icon: CustomClock,
    title: "Faster Hiring",
    description:
      "Reduce time-to-hire by 40% with advanced screening and our extensive candidate network.",
    delay: 0,
  },
  {
    icon: CustomStar,
    title: "AB",
    description:
      "Access passive candidates and industry leaders for top-tier professional matches.",
    delay: 150,
  },
  {
    icon: CustomDollar,
    title: "Cost Efficiency",
    description:
      "Cut overhead costs with our transparent, high-ROI talent acquisition solutions.",
    delay: 300,
  },
  {
    icon: CustomGraph,
    title: "Lasting Success",
    description:
      "Ensure cultural fit and retention with our thorough vetting and support.",
    delay: 450,
  },
];

const ReasonsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-[#E6F5FA]/80 to-[#F0FBFF]/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-10 text-center ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="inline-block mb-2 bg-[#00A3BF]/10 text-[#00A3BF] text-xs font-medium tracking-wide uppercase rounded-full px-3 py-1">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F27] leading-tight">
            Why Direct Hire Excels
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg border border-[#0A1F27]/5 hover:border-[#00A3BF]/30 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${reason.delay}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#00A3BF] to-[#007A8C] rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1F27] group-hover:text-[#00A3BF] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A5B63] text-sm leading-relaxed mt-1">
                    {reason.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#00A3BF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
