"use client";

import {
  ArrowLeft,
  Building,
  Users,
  Cog,
  BarChart3,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RPOSolutions = () => {
  return (
    <div className="min-h-screen bg-[#F5FDFF]">
      {/* Header */}
      <section className="relative py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services/staffing"
            className="inline-flex items-center text-[#0098AF] hover:text-[#0098AF]/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#0098AF]/10 rounded-xl flex items-center justify-center mr-6">
                <Building className="w-8 h-8 text-[#0098AF]" />
              </div>
              <h1 className="text-5xl font-bold text-[#003C46]">
                RPO Solutions
              </h1>
            </div>
            <p className="text-xl text-[#5B5B5B] leading-relaxed">
              Comprehensive recruitment process outsourcing. Let us become your
              dedicated recruitment team for scalable, efficient hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What We Do */}
            <div>
              <h2 className="text-3xl font-bold text-[#003C46] mb-8">
                What is RPO?
              </h2>
              <div className="space-y-6">
                <p className="text-[#5B5B5B] leading-relaxed">
                  Recruitment Process outsourcing (RPO) is a strategic
                  partnership where we take full ownership of your recruitment
                  function. We become an extension of your team, managing the
                  entire hiring process from job posting to onboarding.
                </p>
                <p className="text-[#5B5B5B] leading-relaxed">
                  Our RPO solutions are designed for organizations that need to
                  scale their hiring quickly, improve recruitment quality, or
                  reduce the cost and complexity of managing internal
                  recruitment teams.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-[#003C46] mb-8">
                Key Features
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    text: "Dedicated recruitment team aligned with your goals",
                  },
                  {
                    icon: Cog,
                    text: "Customized recruitment processes and workflows",
                  },
                  { icon: BarChart3, text: "Advanced analytics and reporting" },
                  {
                    icon: Clock,
                    text: "Faster time-to-hire and improved efficiency",
                  },
                  {
                    icon: Globe,
                    text: "Scalable solutions for global hiring needs",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[#0098AF]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#0098AF]" />
                    </div>
                    <span className="text-[#5B5B5B]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Models */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#003C46] mb-12 text-center">
              Service Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Full RPO",
                  description:
                    "Complete recruitment outsourcing with dedicated team managing all hiring activities.",
                  features: [
                    "Complete process ownership",
                    "Dedicated recruitment team",
                    "Full technology stack",
                    "End-to-end management",
                  ],
                },
                {
                  title: "Partial RPO",
                  description:
                    "Selective outsourcing of specific recruitment functions or departments.",
                  features: [
                    "Targeted function focus",
                    "Flexible engagement",
                    "Specific expertise",
                    "Gradual implementation",
                  ],
                },
                {
                  title: "Project RPO",
                  description:
                    "Short-term engagement for specific hiring projects or rapid scaling needs.",
                  features: [
                    "Project-based scope",
                    "Rapid deployment",
                    "Specific timelines",
                    "Scalable resources",
                  ],
                },
              ].map((model, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] border border-[#5B5B5B]/20 rounded-2xl p-6 hover:shadow-[0_4px_20px_-2px_#0098AF1A] transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-[#003C46] mb-3">
                    {model.title}
                  </h3>
                  <p className="text-[#5B5B5B] mb-4">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-[#5B5B5B]"
                      >
                        <div className="w-1.5 h-1.5 bg-[#0098AF] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#003C46] mb-12 text-center">
              Why Choose Our RPO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Cost Reduction",
                  description:
                    "Reduce recruitment costs by up to 40% through optimized processes",
                },
                {
                  icon: Clock,
                  title: "Faster Hiring",
                  description:
                    "Decrease time-to-hire with streamlined, efficient processes",
                },
                {
                  icon: Users,
                  title: "Quality Improvement",
                  description:
                    "Better candidate quality through expert screening and assessment",
                },
                {
                  icon: Cog,
                  title: "Scalability",
                  description:
                    "Easily scale hiring up or down based on business needs",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0098AF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[#0098AF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#003C46] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#5B5B5B] text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-[#0098AF]/5 to-[#007B8F]/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#003C46] mb-6">
              Transform Your Recruitment Function
            </h2>
            <p className="text-[#5B5B5B] text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to build a recruitment strategy that scales with
              your business and delivers exceptional results.
            </p>
            <Button size="lg" className="bg-[#0098AF] hover:bg-[#0098AF]/90">
              Discuss RPO Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPOSolutions;
