import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, Cpu, Wrench, Radio, Fuel } from "lucide-react";

const IndustriesWeServe = () => {
  const industries = [
    {
      icon: Building2,
      name: "BFSI",
      description:
        "From investment banking to accounting and everything in between, we have the expertise to match the right candidate with the right opportunity",
      color: "#0098af",
    },
    {
      icon: Cpu,
      name: "Infromation Technology",
      description:
        "From software development and IT support to cyber security and project management, we have the expertise to match the right candidate with the right opportunity",
      color: "#003C46",
    },
    {
      icon: Wrench,
      name: "Engineering",
      description:
        "Specialized recruitment for engineering roles across mechanical, civil, electrical, and chemical disciplines.",
      color: "#0098af",
    },
    {
      icon: Radio,
      name: "Telecom",
      description:
        "Talent solutions for telecommunications, network infrastructure, and 5G technology companies.",
      color: "#003C46",
    },
    {
      icon: Fuel,
      name: "Oil & Gas",
      description:
        "Comprehensive staffing for upstream, midstream, and downstream operations with safety-first approach.",
      color: "#0098af",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#99D5DF]/10 via-[#F5FDFF] to-[#99D5DF]/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0098af" />
              <stop offset="100%" stopColor="#003C46" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="2" fill="url(#grad1)" />
          <circle cx="300" cy="150" r="3" fill="url(#grad1)" />
          <circle cx="150" cy="300" r="2" fill="url(#grad1)" />
          <circle cx="350" cy="350" r="4" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4">
            Industries <span className="text-[#0098af]">We Serve</span>
          </h2>
          <p
            className="text-lg max-w-7xl mx-auto "
            style={{ color: "hsl(200 20% 35%)" }}
          >
            Specialized recruitment expertise across key industries, delivering
            talent solutions that drive business growth
          </p>
        </div>

        <div className="space-y-8">
          {/* First row: 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 3).map((industry, index) => (
              <Card
                key={index}
                className="group p-8 bg-white shadow-lg border-2 border-[#003C46]/20 hover:shadow-2xl group-hover:border-[#0098af]/50 group-hover:scale-[1.02] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      <industry.icon
                        size={32}
                        style={{ color: industry.color }}
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: industry.color }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#003C46] group-hover:text-[#0098af] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-[#5b5b5b] leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Second row: 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industries.slice(3).map((industry, index) => (
              <Card
                key={index + 3}
                className="group p-8 bg-white shadow-lg border-2 border-[#003C46]/20 hover:shadow-2xl group-hover:border-[#0098af]/50 group-hover:scale-[1.02] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      <industry.icon
                        size={32}
                        style={{ color: industry.color }}
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: industry.color }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#003C46] group-hover:text-[#0098af] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-[#5b5b5b] leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
