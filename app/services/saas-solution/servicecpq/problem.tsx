import React from "react";

import {
  CheckCircle,
  ArrowRight,
  ZapIcon,
  ShieldIcon,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Problems = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side with image and overlays */}
          <div className="lg:col-span-5 animate-fade-in-up order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                  alt="Service Interface"
                  fill
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0098af]/40 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 p-5 bg-white rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <ZapIcon className="text-[#003C46] h-6 w-6" />
                  <div>
                    <p className="text-sm font-medium text-[#003C46]">
                      30% Faster
                    </p>
                    <p className="text-xs text-[#5b5b5b]">Claims Processing</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <ShieldIcon className="text-[#0098af] h-5 w-5" />
                  <p className="text-sm font-medium text-[#003C46]">
                    Automated Security
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side text content */}
          <div className="lg:col-span-7 animate-fade-in-up order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#E6F0F5]/20">
              <div className="inline-flex items-center justify-center p-2 bg-[#00b4d8]/10 rounded-full mb-6">
                <Rocket className="h-5 w-5 text-[#00b4d8] mr-2" />
                <span className="text-sm font-medium text-[#003C46]">
                  Transform Your Service
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
                Transform Your After-Sales Experience
              </h2>
              <p className="text-[#5b5b5b] text-lg mb-8">
                Move beyond reactive solutions. Deliver proactive service and a
                better B2B buying experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Benefit text="Streamline warranty claims for faster approvals" />
                <Benefit text="Generate accurate quotes with automated tools" />
                <Benefit text="Manage all repairs in one unified platform" />
                <Benefit text="Gain real-time visibility into performance" />
              </div>

              <Link
                href="/contact"
                className="bg-[#0098af] text-white px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2"
              >
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Feature boxes in vertical arrangement with diagonal pattern */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              <SolutionFeature
                title="Purpose-Built for Manufacturers"
                description="Optimize service operations for manufacturers, partners, and service providers in one platform."
                position="left"
              />
              <SolutionFeature
                title="Fast Setup & Customization"
                description="Easily configurable to fit your unique workflows for seamless transition."
                position="center"
              />
              <SolutionFeature
                title="Intelligent Insights"
                description="Leverage AI-driven analytics to make informed decisions and enhance productivity."
                position="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefit = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-[#0098af] mr-3 h-5 w-5 mt-1 flex-shrink-0" />
      <p className="text-[#5b5b5b]">{text}</p>
    </div>
  );
};

const SolutionFeature = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position: "left" | "center" | "right";
}) => {
  const positionClasses = {
    left: "ml-0",
    center: "ml-8 md:ml-16",
    right: "ml-16 md:ml-32",
  };

  return (
    <div
      className={`${positionClasses[position]} border-l-4 border-[#0098af] pl-4 bg-[#E6F0F5]/10 p-4 rounded-r-lg transform hover:translate-x-2 transition-transform duration-300`}
    >
      <h4 className="font-medium text-[#003C46] mb-2">{title}</h4>
      <p className="text-sm text-[#5b5b5b]">{description}</p>
    </div>
  );
};

export default Problems;
