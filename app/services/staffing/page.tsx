"use client";

import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import SectionButton from "@/components/SectionButton";
import DividerElement from "@/components/DividerElement";
import ParallaxOrbs from "./ParallaxOrbs";
import { Rocket, Award } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import AboutSection from "./mainContent";
// import CTASection from "@/components/CTA";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  // Job seeker features
  const jobSeekerFeatures = [
    {
      title: "Verified Job Listings",
      description:
        "Browse through carefully vetted opportunities that match your skillset and career goals.",
      icon: "check",
    },
    {
      title: "Direct Application",
      description:
        "Our intelligent system connects you with roles that align with your unique potential and aspirations.",
      icon: "sparkle",
    },
    {
      title: "Career Profile Management",
      description:
        "Access expert advice and resources to help you navigate your professional journey.",
      icon: "check",
    },
    {
      title: "Real-Time Alerts & Updates",
      description:
        "Receive tailored coaching to help you present your best self to potential employers.",
      icon: "sparkle",
    },
    {
      title: "Resume Guidance & Career Tips",
      description:
        "Receive tailored coaching to help you present your best self to potential employers.",
      icon: "sparkle",
    },
  ];

  // Employer features
  const employerFeatures = [
    {
      title: "Dedicated recruitment specialists for your sector",
      description:
        "Work with industry experts who understand your specific talent needs and market dynamics.",
      icon: "sparkle",
    },
    {
      title: "Permanent, temporary, and contract staffing options",
      description:
        "We identify, evaluate, and present only the most qualified candidates for your consideration.",
      icon: "check",
    },
    {
      title: "Complete talent acquisition strategy & execution",
      description:
        "Streamline your recruitment workflow with our proven methodologies and tools.",
      icon: "check",
    },
    {
      title: "Pre-screening, skill assessment & background checks",
      description:
        "Develop sustainable approaches to building and maintaining your ideal team.",
      icon: "sparkle",
    },
    {
      title: "Employer branding and candidate engagement support",
      description:
        "Develop sustainable approaches to building and maintaining your ideal team.",
      icon: "sparkle",
    },
  ];

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  // const fadeInVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
  // };

  return (
    <div className="h-auto w-full overflow-hidden">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <div>
        <section
          ref={sectionRef}
          className="w-full relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div
              className={`py-8 ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}
            >
              <div
                className={`flex ${
                  isMobile ? "flex-col" : "flex-col md:flex-row"
                }`}
              >
                {/* Job Seekers Column */}
                <div
                  className={`w-full ${
                    isMobile ? "" : "md:w-1/2"
                  } bg-[#E6F0F5] ${
                    isMobile
                      ? "rounded-3xl"
                      : "rounded-l-3xl md:rounded-l-none md:rounded-tl-3xl md:rounded-bl-3xl"
                  } ${
                    isMobile
                      ? "h-auto py-8"
                      : "h-[500px] sm:h-[600px] md:h-auto"
                  } mt-6 relative`}
                >
                  <ParallaxOrbs theme="jobseeker" />
                  <div
                    className={`max-w-lg mx-auto ${
                      isMobile ? "px-4" : "px-4 sm:px-6"
                    } relative z-10 py-6`}
                  >
                    <div className="text-center mb-4 animate-fade-in">
                      <h2
                        className={`${
                          isMobile
                            ? "text-2xl"
                            : "text-2xl sm:text-3xl md:text-4xl"
                        } font-bold mb-2 gradient-text seeker-gradient-text`}
                      >
                        For Job Seekers
                      </h2>
                      <p
                        className={`text-[#5b5b5b] italic ${
                          isMobile ? "text-sm" : "text-sm sm:text-base"
                        }`}
                      >
                        Find Opportunities That Match Your Potential
                      </p>
                    </div>
                    <div
                      className={`mb-6 ${
                        isMobile ? "text-sm" : "text-sm sm:text-base"
                      } text-[#5b5b5b] animate-fade-in`}
                      style={{ animationDelay: "200ms" }}
                    >
                      <p className="leading-relaxed">
                        Your job search should reflect your{" "}
                        <span className="font-bold text-[#0098af]">
                          unique potential
                        </span>
                        . Our platform connects you with opportunities that
                        align with your skills, goals, and values, creating a
                        more meaningful path to your next career move.
                      </p>
                    </div>
                    <div className="mb-6">
                      <div
                        className={`flex items-center mb-3 ${
                          isMobile ? "" : "sm:mb-4"
                        }`}
                      >
                        <h3
                          className={`${
                            isMobile ? "text-base" : "text-lg sm:text-xl"
                          } font-bold text-[#0098af] animate-fade-in flex items-center`}
                          style={{ animationDelay: "300ms" }}
                        >
                          <Award
                            className={`${
                              isMobile ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"
                            } mr-2`}
                          />
                          What We Offer
                        </h3>
                        <div
                          className={`flex-grow h-px bg-gradient-to-r from-[#0098af] to-transparent ${
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
                        {jobSeekerFeatures.map((feature, index) => (
                          <FeatureCard
                            key={index}
                            title={feature.title}
                            theme="jobseeker"
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
                      <Link href="/services/staffing/job-seeker">
                        <SectionButton
                          text="Start Your Journey"
                          theme="jobseeker"
                          size="lg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Divider - Only show on desktop */}
                {!isMobile && <DividerElement />}

                {/* Employers Column */}
                <div
                  className={`w-full ${
                    isMobile ? "mt-8" : "md:w-1/2"
                  } bg-[#003C46] ${
                    isMobile
                      ? "rounded-3xl"
                      : "rounded-r-3xl md:rounded-r-none md:rounded-tr-3xl md:rounded-br-3xl"
                  } ${
                    isMobile
                      ? "h-auto py-8"
                      : "h-[500px] sm:h-[600px] md:h-auto"
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
                          isMobile
                            ? "text-2xl"
                            : "text-2xl sm:text-3xl md:text-4xl"
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
                        positions—it&apos;s about building the future of your
                        company. We believe that{" "}
                        <span className="font-bold text-[#00b4d8]">
                          every hire is a step toward growth
                        </span>
                        , and our approach reflects this philosophy.
                      </p>
                    </div>
                    <div className="mb-6">
                      <div
                        className={`flex items-center mb-3 ${
                          isMobile ? "" : "sm:mb-4"
                        }`}
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
                        <SectionButton
                          text="Build Your Team"
                          theme="employer"
                          size="lg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
 
      <Footer />
    </div>
  );
};

export default Index;
