"use client";
import React from "react";
import { Clock, Zap, LineChart, Target, Layers } from "lucide-react";

const benefits = [
  {
    icon: <Clock />,
    title: "Reduce Time to Sale",
    description:
      "Cut quoting time from hours to minutes with automated workflows and intelligent templates.",
  },
  {
    icon: <Zap />,
    title: "Proactive Service Offerings",
    description:
      "Predict maintenance needs and engage customers proactively with data-driven insights.",
  },
  {
    icon: <LineChart />,
    title: "AI-Led Price Insights",
    description:
      "Optimize margins and discounts with AI guidance to maximize profitability.",
  },
  {
    icon: <Target />,
    title: "Scientific Pipeline Management",
    description:
      "Fill your pipeline with targeted opportunities and increase conversion rates.",
  },
  {
    icon: <Layers />,
    title: "Mass Customization",
    description:
      "Design next-gen, segment-specific service offerings without complexity.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl py-14  mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
            AI-Powered Solutions For Modern Service Teams
          </h2>
          <p className="text-[#5b5b5b]">
            Our platform delivers tangible business benefits that drive revenue
            growth and operational excellence.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 bg-[#E6F0F5]/30 rounded-xl p-8 animate-fade-in-up mb-20">
          <h3 className="text-2xl font-medium tracking-tight font-semibold text-[#003C46] mb-6 text-center">
            Who Can Benefit?
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Industrial Machinery & Components Manufacturers
              </h4>
              <p className="text-[#5b5b5b]">
                Streamline service operations and boost aftermarket revenue.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Dealers and Service Providers
              </h4>
              <p className="text-[#5b5b5b]">
                Enhance service delivery and improve customer satisfaction.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Digital Companies
              </h4>
              <p className="text-[#5b5b5b]">
                Optimize service offerings and create new revenue streams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className="flex items-start gap-6 animate-fade-in-up transition-all duration-300 hover:border hover:border-[#0098af] hover:shadow-md rounded-lg p-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0098af]/10 flex items-center justify-center">
        <div className="text-[#0098af]">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold font-medium tracking-tight text-[#003C46] mb-3">
          {title}
        </h3>
        <p className="text-[#5b5b5b]">{description}</p>
      </div>
    </div>
  );
};
export default Benefits;
