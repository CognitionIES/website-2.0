import React from "react";
import { Wrench, Target, HandshakeIcon } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";
//import Link from "next/link";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Expertise",
      description:
        "With deep domain knowledge and hands-on experience in implementing Service CPQ, our team ensures a seamless rollout and smooth integration into your existing ecosystem.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Customization",
      description:
        "We understand that no two businesses are alike. That's why we customize every Service CPQ deployment to align with your operational goals, ensuring maximum efficiency and ROI.",
    },
    {
      icon: <HandshakeIcon className="h-6 w-6" />,
      title: "End-to-End Support",
      description:
        "From the first consultation to long-term post-implementation assistance, our dedicated experts are with you at every stage — ensuring your success is our success.",
    },
  ];

  

  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#E6F0F5]/20 via-white to-white -z-10" />

      {/* Main background shape */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[#0098af]/5 rounded-l-[100px] -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00b4d8]/10 rounded-full blur-2xl -z-5"></div>
      <div className="absolute bottom-1/4 left-20 w-40 h-40 bg-[#0098af]/10 rounded-full blur-xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-10" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Left side - diagonal box with title */}
          <div className="md:w-2/5 relative">
            <div className="absolute inset-0 bg-[#E6F0F5] skew-y-3 rounded-tr-3xl rounded-bl-3xl -z-5"></div>
            <div className="relative p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] leading-tight">
                Why Choose
                <span className="relative inline-block mx-2">
                  <span className="relative z-10">Cognition IES</span>
                </span>
                for Service CPQ?
              </h2>

             
            </div>
          </div>

          {/* Right side - curved image */}
          <div className="md:w-3/5">
            {/* <div className="relative overflow-hidden rounded-l-full rounded-r-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0098af]/70 to-transparent mix-blend-multiply z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="Partnership"
                width={500}
                height={500}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#003C46]/80 to-transparent z-20">
                <p className="text-white font-medium">
                  Your success is our mission
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Reason cards - overlapping design */}
        <div className="relative mt-18 mb-24">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Success metrics - animated vertical bars */}
        <div className="mt-20 max-w-5xl mx-auto">
          

          {/* Bottom callout */}
          {/* <div className="mt-16 text-center bg-gradient-to-r from-[#0098af]/10 via-[#00b4d8]/20 to-[#0098af]/10 p-8 rounded-2xl">
            <p className="text-xl text-[#003C46] font-medium">
              Ready to transform your service operations?
            </p>
            <div className="mt-4">
              <Link href="/contact">
              <button className="bg-[#0098af] hover:bg-[#003C46] text-white py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                Schedule a Consultation
              </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({
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
  // Calculate delay based on index
  const delay = Math.min(index * 100, 800);

  // Different styling based on position
  const positionClasses = [
    "md:z-30 md:transform md:translate-x-4",
    "md:z-20",
    "md:z-10 md:transform md:-translate-x-4",
  ];

  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E6F0F5] shadow-lg
                transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex-1 ${positionClasses[index]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon with circular background and floating shapes */}
      <div className="relative mb-6">
        <div className="absolute top-0 left-0 w-20 h-20 bg-[#E6F0F5] rounded-full -z-5"></div>
        <div className="absolute top-3 left-3 w-3 h-3 bg-[#00b4d8]/30 rounded-full"></div>
        <div className="absolute bottom-2 right-6 w-4 h-4 bg-[#0098af]/20 rounded-full"></div>

        {/* Main icon */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0098af] to-[#00b4d8] flex items-center justify-center shadow-md z-10">
          <div className="text-white">{icon}</div>
        </div>
      </div>

      {/* Content with slanted badge */}
      <div className="relative">
        <div className="absolute top-0 right-0 bg-[#E6F0F5] text-[#0098af] text-xs font-medium px-3 py-1 rounded-full transform rotate-3">
          {`0${index + 1}`}
        </div>

        <h3 className="text-xl font-semibold text-[#003C46] mb-3">{title}</h3>
        <p className="text-[#5b5b5b] leading-relaxed">{description}</p>
      </div>

      {/* Bottom accent line with gradient */}
      <div className="mt-4 h-1 w-1/3 bg-gradient-to-r from-[#0098af] to-[#00b4d8] rounded-full"></div>
    </div>
  );
};



export default WhyChoose;
