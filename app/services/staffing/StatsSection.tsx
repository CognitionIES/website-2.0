import React from "react";
import {
  Users,
  Target,
  Building,
  Shield,
  Code,
  Wrench,
  Phone,
  Fuel,
} from "lucide-react";

export default function StatSection() {
  const services = [
    {
      title: "Direct Hire",
      description:
        "Permanent placements for critical roles with comprehensive screening and cultural fit assessment",
      icon: Users,
      color: "from-[#0098AF] to-[#0098AF]-hover",
      delay: "0ms",
    },
    {
      title: "Contract-to-Hire",
      description:
        "Flexible staffing solutions that allow evaluation periods before permanent commitment",
      icon: Target,
      color: "from-[#003C46] to-[#0098AF]",
      delay: "150ms",
    },
    {
      title: "RPO Solutions",
      description:
        "Full recruitment process outsourcing with dedicated teams and scalable hiring strategies",
      icon: Building,
      color: "from-[#99D5DF] to-[#0098AF]",
      delay: "300ms",
    },
  ];

  const industries = [
    {
      name: "Banking & Finance",
      icon: Building,
      description: "Risk management, compliance, and financial expertise",
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Actuarial, underwriting, and claims professionals",
    },
    {
      name: "Technology",
      icon: Code,
      description: "Software engineers, data scientists, and IT specialists",
    },
    {
      name: "Engineering",
      icon: Wrench,
      description: "Mechanical, civil, and industrial engineering talent",
    },
    {
      name: "Telecom",
      icon: Phone,
      description: "Network engineers and telecommunications experts",
    },
    {
      name: "Oil & Gas",
      icon: Fuel,
      description: "Energy sector specialists and field engineers",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#003C46] via-[#0098AF] to-[#0098AF]-hover">
          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Staffing & Recruitment
                <span className="block text-3xl font-normal text-[#99D5DF] mt-2">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-[#F5FDFF] max-w-3xl mx-auto leading-relaxed">
                Connecting exceptional talent with outstanding opportunities
                through innovative recruitment strategies and deep industry
                expertise.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5FDFF] to-transparent"></div>
        </div>

        {/* Services Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5FDFF] via-white to-[#99D5DF]/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#99D5DF]/30 to-[#0098AF]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#0098AF]/20 to-[#99D5DF]/30 rounded-full blur-3xl opacity-40"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Services We Provide
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0098af] to-[#99D5DF] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive staffing solutions tailored to your unique
                business needs and growth objectives.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group relative"
                    style={{ animationDelay: service.delay }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="p-8">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0098AF] group-hover:to-[#0098AF]-hover transition-all duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 px-6 relative overflow-hidden bg-[#003C46]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#003C46] via-[#003C46]/95 to-[#0098AF]/20"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#99D5DF] to-[#0098AF] mx-auto mb-6"></div>
              <p className="text-xl text-[#99D5DF] max-w-2xl mx-auto">
                Deep expertise across diverse sectors, delivering specialized
                talent solutions for complex industry requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={industry.name}
                    className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 rounded-2xl bg-gradient-to-br from-[#F5FDFF] to-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#99D5DF]/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0098AF]/5 to-[#99D5DF]/10 group-hover:from-[#0098AF]/10 group-hover:to-[#99D5DF]/20 transition-all duration-500"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#99D5DF]/20 to-[#0098AF]/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#0098AF]/20 to-[#99D5DF]/20 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-500"></div>

                      <div className="relative h-full p-6 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0098AF] to-[#0098AF]-hover flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="w-2 h-2 bg-[#99D5DF] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300">
                            {industry.name}
                          </h3>
                          <p className="text-sm text-[#5B5B5B] leading-relaxed group-hover:text-[#003C46] transition-colors duration-300">
                            {industry.description}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0098AF] to-[#99D5DF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#0098AF] via-[#0098AF]-hover to-[#003C46] relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-[#99D5DF] mb-10 leading-relaxed">
              Let our experienced team connect you with top-tier talent or your
              next career opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0098AF] font-semibold rounded-full hover:bg-[#F5FDFF] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Find Talent
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0098AF] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Opportunities
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
