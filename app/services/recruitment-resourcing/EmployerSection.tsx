"use client";

import { employerFeatures } from "./FeatureData";
import FeatureCard from "@/components/FeatureCard";
import SectionButton from "@/components/SectionButton";
import ParallaxOrbs from "./ParallaxOrbs";
import { Rocket } from "lucide-react";
import Link from "next/link";

interface EmployerSectionProps {
  isMobile: boolean;
}

const EmployerSection: React.FC<EmployerSectionProps> = ({ isMobile }) => {
  return (
    <div
      className={`w-full ${
        isMobile ? "mt-8" : "md:w-1/2"
      } bg-[#003C46] backdrop-blur-sm ${
        isMobile
          ? "rounded-3xl"
          : "rounded-r-3xl md:rounded-r-none md:rounded-tr-3xl md:rounded-br-3xl"
      } ${
        isMobile ? "h-auto py-8" : "h-[500px] sm:h-[600px] md:h-auto"
      } mt-6 overflow-y-auto custom-scrollbar relative`}
    >
      <ParallaxOrbs theme="employer" />
      <div
        className={`max-w-lg mx-auto ${
          isMobile ? "px-4" : "px-4 sm:px-6"
        } relative z-10 py-6`}
      >
        <div className="text-center mb-4 animate-fade-in">
          <h2
            className={`${
              isMobile ? "text-2xl" : "text-2xl sm:text-3xl md:text-4xl"
            } font-bold mb-2 gradient-text employer-gradient-text`}
          >
            For Employers
          </h2>
          <p
            className={`text-gray-300 italic ${
              isMobile ? "text-sm" : "text-sm sm:text-base"
            }`}
          >
            Great Companies Are Built By Great Teams
          </p>
        </div>
        <div
          className={`mb-6 ${
            isMobile ? "text-sm" : "text-sm sm:text-base"
          } text-[#E6F0F5] animate-fade-in`}
          style={{ animationDelay: "200ms" }}
        >
          <p className="leading-relaxed">
            Finding the right talent isn&apos;t just about filling
            positions—it&apos;s about building the future of your company. We
            believe that{" "}
            <span className="font-bold text-[#00b4d8]">
              every hire is a step toward growth
            </span>
            , and our approach reflects this philosophy.
          </p>
        </div>
        <div className="mb-6">
          <div
            className={`flex items-center mb-3 ${isMobile ? "" : "sm:mb-4"}`}
          >
            <h3
              className={`${
                isMobile ? "text-base" : "text-lg sm:text-xl"
              } font-bold text-[#00b4d8] animate-fade-in flex items-center`}
              style={{ animationDelay: "300ms" }}
            >
              <Rocket
                className={`${
                  isMobile ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"
                } mr-2`}
              />
              What We Offer
            </h3>
            <div
              className={`flex-grow h-px bg-gradient-to-r from-[#00b4d8] to-transparent ${
                isMobile ? "ml-2" : "ml-2 sm:ml-3"
              }`}
            ></div>
          </div>
          <div
            className={`relative ${
              isMobile ? "space-y-3" : "space-y-3 sm:space-y-4"
            }`}
          >
            <div className="connection-line"></div>
            {employerFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                theme="employer"
                delay={400 + index * 100}
                icon={feature.icon as "check" | "sparkle"}
                description={""}
              />
            ))}
          </div>
        </div>
        <div
          className={`text-center mt-4 ${
            isMobile ? "" : "sm:mt-6"
          } animate-fade-in`}
          style={{ animationDelay: "900ms" }}
        >
          <Link href="/services/staffing/employer">
            <SectionButton text="Build Your Team" theme="employer" size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerSection;
