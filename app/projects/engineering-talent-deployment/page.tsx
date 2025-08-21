/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  Users,
  Code,
  Database,
  GitBranch,
  Globe,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";
import heroImage from "@/constants/images/hero/pexels-edmond-dantes-8068878.jpg";
import aboutImage from "@/constants/images/projects/it/about.jpg";
import objectiveImage from "@/constants/images/projects/it/objective.jpg";
import overviewImage from "@/constants/images/projects/it/overview.jpg";
import KeyResults from "./KeyResults";

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};

const Hero = () => {
  const [setRef, isVisible] = useIntersectionObserver(0.1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={setRef}
      className="relative h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/75 to-[#0098AF]/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 h-full flex flex-col justify-center">
        <div className="relative z-20 h-full flex flex-col justify-center">
          {/* Breadcrumb Navigation */}
          <motion.nav
            className="absolute bottom-8 flex items-center space-x-2 text-sm text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="hover:text-blue-300 flex items-center gap-1.5 transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/projects"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              <span className="text-blue-200 font-medium">Projects</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/projects/it-talent-deployment"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              <span className="text-blue-200 font-medium">
                Engineering Talent Deployment
              </span>
            </Link>
          </motion.nav>

          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Main Heading */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight">
                  <span className="text-white">
                    {" "}
                    Engineering Talent Deployment
                  </span>
                </h1>
                <motion.div
                  className="absolute -bottom-2 left-1 w-32 h-1 bg-gradient-to-r from-[#60a5fa] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Strategic staffing solution for engineering teams across
                multiple disciplines.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Subtle Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -120],
              x: [0, Math.random() * 150 - 75],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-blue-200/40 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              bottom: "15px",
            }}
          />
        ))}
      </div>
    </section>
  );
};

const RecentProjects = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      id="recent-projects"
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#F5FDFF] via-[#F5FDFF] to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#0098AF] rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-[#0098AF] rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#0098AF] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#0098AF] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={` mb-10 transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6 leading-tight">
            Project{" "}
            <span className="bg-gradient-to-r from-[#0098AF] to-[#007B8F] bg-clip-text text-transparent">
              Objective
            </span>
          </h2>
          <p className="text-xl text-[#5B5B5B] max-w-7xl mx-auto">
            Showcasing our latest success in Engineering talent deployment and
            staffing excellence
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.01] group border border-[#0098AF]/10">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg"
                  alt="IT talent deployment team"
                  className="w-full h-64 md:h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  width={800}
                  height={80}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/30 via-transparent to-[#0098AF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating badges on image */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <div className="px-3 py-1 bg-[#0098AF]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    Contractual Staffing
                  </div>
                  <div className="px-3 py-1 bg-[#99D5DF]/90 backdrop-blur-sm text-[#003C46] text-xs font-semibold rounded-full">
                    Zero Attrition
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12 relative">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0098AF]/10 to-transparent rounded-bl-3xl"></div>

                <h3
                  className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-3 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  Engineering Talent Resourcing
                </h3>

                <h4
                  className={`text-xl font-semibold text-[#0098AF] mb-6 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Multidisciplinary Engineering Recruitment for Design, Plant,
                  and EPC Projects
                </h4>

                <p
                  className={`text-[#5B5B5B] mb-8 leading-relaxed text-lg transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  Successfully deployed key engineering personnel including
                  Mechanical Design Engineers, Electrical & Instrumentation
                  (E&I) Engineers, and SmartPlant/AutoCAD-based tool specialists
                  for ongoing plant engineering and industrial design projects.
                </p>

                {/* Key highlights */}
                <div
                  className={`grid grid-cols-1 gap-4 mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "750ms" }}
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-xl text-[#5B5B5B] font-semibold">
                      Engagement Type:
                    </span>
                    <span className="text-md text-[#5B5B5B]">
                      Contractual & Permanent Staffing
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-xl text-[#5B5B5B] font-semibold">
                      Core Tools:
                    </span>
                    <span className="text-md text-[#5B5B5B]">
                      SmartPlant 3D, AutoCAD, CAESAR II, STAAD.Pro, SPI,
                      SolidWorks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectOverview = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      id="project-overview"
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#E6F0F5] via-[#F5FDFF] to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0098AF]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#99D5DF]/10 rounded-full blur-2xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-[#003C46] via-[#003C46] to-[#0098AF]/90 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group border border-[#0098AF]/20">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <Image
                  src={objectiveImage}
                  alt="SaaS platform development"
                  className="w-full h-80 md:h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  width={800}
                  height={80}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/40 via-transparent to-[#0098AF]/30"></div>

                {/* Floating stats on image */}
              </div>
              <div className="md:w-3/5 p-8 md:p-12 text-[#F5FDFF] relative">
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0098AF]/20 to-transparent rounded-bl-3xl"></div>

                <h2
                  className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Project Overview
                </h2>

                <div
                  className={`space-y-6 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-xl leading-relaxed text-[#F5FDFF]/90">
                    A major engineering project required rapid mobilization of
                    skilled professionals across mechanical, electrical, and
                    piping disciplines. The client needed engineers familiar
                    with advanced design tools and standards, capable of
                    integrating with their existing offshore project support
                    team. We were entrusted with end-to-end staffing – from
                    understanding requirements to sourcing, screening,
                    onboarding, and managing compliance.
                  </p>

                  <p className="text-lg leading-relaxed text-[#F5FDFF]/80">
                    This project demanded not just technical skill but also
                    domain familiarity, tool-specific expertise, and quick
                    adaptability to client processes. Our challenge was to
                    ensure full operational readiness in under four weeks while
                    ensuring team stability over the long term.
                  </p>
                </div>

                {/* Challenge highlights */}
                <div
                  className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="flex items-start space-x-3 p-4 bg-[#F5FDFF]/10 rounded-xl border border-[#F5FDFF]/20">
                    <Clock className="w-5 h-5 text-[#99D5DF] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#F5FDFF] mb-1">
                        Niche roles
                      </div>
                      <div className="text-sm text-[#F5FDFF]/80">
                        requiring specific tool proficiency
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-[#F5FDFF]/10 rounded-xl border border-[#F5FDFF]/20">
                    <Shield className="w-5 h-5 text-[#99D5DF] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#F5FDFF] mb-1">
                        Standardized hiring
                      </div>
                      <div className="text-sm text-[#F5FDFF]/80">
                        across departments with varied timelines
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-6 right-6 w-20 h-20 border-2 border-[#0098AF]/30 rounded-full opacity-50 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Objectives = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#F5FDFF] via-[#F5FDFF] to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#0098AF] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#0098AF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 border border-[#0098AF] rounded-full animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:items-center md:space-x-16">
            <div className="md:w-2/5 mb-12 md:mb-0">
              <div className="relative group">
                <Image
                  src={overviewImage}
                  alt="Team objective visualization"
                  className="w-full h-80 md:h-[420px] object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 via-transparent to-[#0098AF]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating objective badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0098AF]/20">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-[#0098AF]" />
                    <span className="text-sm font-semibold text-[#003C46]">
                      Mission Critical
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="bg-gradient-to-br from-[#003C46] via-[#003C46] to-[#0098AF]/90 p-10 md:p-12 rounded-3xl text-[#F5FDFF] shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-700 group border border-[#0098AF]/20">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0098AF]/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#99D5DF]/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-125 transition-transform duration-1000"></div>

                <div
                  className={`relative z-10 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Objective
                  </h2>

                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed text-[#F5FDFF]/90">
                      Delivering experienced engineering professionals to
                      support design, development, and execution across capital
                      projects, manufacturing setups, and plant engineering
                      functions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="flex items-center space-x-3 p-4 bg-[#F5FDFF]/10 rounded-xl border border-[#F5FDFF]/20">
                        <CheckCircle className="w-5 h-5 text-[#99D5DF] flex-shrink-0" />
                        <span className="text-[#F5FDFF]/90">
                          Full compliance coverage
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-[#F5FDFF]/10 rounded-xl border border-[#F5FDFF]/20">
                        <CheckCircle className="w-5 h-5 text-[#99D5DF] flex-shrink-0" />
                        <span className="text-[#F5FDFF]/90">
                          Seamless onboarding
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success indicator with animation */}
                <div
                  className={`flex items-center space-x-3 mt-10 text-[#99D5DF] relative z-10 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="w-3 h-3 bg-[#99D5DF] rounded-full animate-pulse"></div>
                  <span className="font-semibold text-lg">
                    Mission Accomplished
                  </span>
                  <CheckCircle className="w-6 h-6 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectApproach = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const steps = [
    {
      title: "Requirement Scoping & Skill Mapping",
      description:
        "Worked closely with project leads to define skill sets, project alignment, and tool-specific criteria.",
      icon: <Target className="w-5 h-5" />,
      color: "from-[#0098AF] to-[#007B8F]",
    },
    {
      title: "Sourcing Strategy",
      description:
        "Deployed targeted hiring campaigns across mechanical, electrical, and instrumentation talent pools.",
      icon: <Users className="w-5 h-5" />,
      color: "from-[#007B8F] to-[#0098AF]",
    },
    {
      title: "Tool-Based Evaluation",
      description:
        "Screened candidates for software/tool proficiency (e.g., SmartPlant 3D, CAESAR II, STAAD, SPI).",
      icon: <Code className="w-5 h-5" />,
      color: "from-[#0098AF] to-[#99D5DF]",
    },
    {
      title: "Onboarding & Compliance",
      description:
        "Streamlined background verification, documentation, and payroll onboarding.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-[#99D5DF] to-[#0098AF]",
    },
    {
      title: "Post-Deployment Support",
      description:
        "Continuous check-ins, engagement tracking, and attrition control processes.",
      icon: <Shield className="w-5 h-5" />,
      color: "from-[#0098AF] to-[#007B8F]",
    },
    {
      title: "Ongoing Coordination",
      description:
        "Regular follow-ups for performance check-ins, engagement, and attrition control.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-[#007B8F] to-[#0098AF]",
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#E6F0F5] via-[#F5FDFF] to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#0098AF]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#99D5DF]/10 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#0098AF]/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-[#0098AF]/20 rounded-full animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`mb-20 transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0098AF] to-[#007B8F] bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="text-xl text-[#5B5B5B] max-w-7xl mx-auto">
            We deployed our proven contract staffing model tailored to IT
            development roles, ensuring seamless integration and exceptional
            results.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-[#0098AF] shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-l-8 group relative overflow-hidden ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0098AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-start space-x-6 relative z-10">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="font-bold text-[#003C46] text-xl group-hover:text-[#0098AF] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-[#0098AF]/30 group-hover:bg-[#0098AF] group-hover:w-12 transition-all duration-500"></div>
                    </div>
                    <p className="text-[#5B5B5B] leading-relaxed text-lg group-hover:text-[#003C46] transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className="text-6xl font-bold text-[#0098AF]/10 group-hover:text-[#0098AF]/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechAndTestimonial = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const technologies = [
    {
      name: "SmartPlant 3D",
      icon: <Code className="w-5 h-5" />,
      level: "Expert",
    },
    { name: "AutoCAD", icon: <Globe className="w-5 h-5" />, level: "Expert" },
    {
      name: "CAESAR II",
      icon: <Database className="w-5 h-5" />,
      level: "Advanced",
    },
    {
      name: "STAAD.Pro",
      icon: <GitBranch className="w-5 h-5" />,
      level: "Advanced",
    },
    {
      name: "SPI",
      icon: <Globe className="w-5 h-5" />,
      level: "Expert",
    },
    {
      name: "SolidWorks",
      icon: <Code className="w-5 h-5" />,
      level: "Advanced",
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#E6F0F5] via-[#F5FDFF] to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Enhanced animated background elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`mb-12 transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6 leading-tight">
            Tools &{" "}
            <span className="bg-gradient-to-r from-[#0098AF] to-[#007B8F] bg-clip-text text-transparent">
              Testimonial
            </span>
          </h2>
          <p className="text-xl text-[#5B5B5B] max-w-7xl mx-auto">
            Cutting-edge Tools and skilled professionals deployed for maximum
            impact.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:space-x-16">
            <div className="md:w-3/5 space-y-10">
              {/* Enhanced Technologies Grid */}
              <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#0098AF]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0098AF]/10 to-transparent rounded-bl-3xl"></div>

                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Core Tools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 bg-gradient-to-r from-[#0098AF]/5 to-[#99D5DF]/5 rounded-xl hover:from-[#0098AF]/10 hover:to-[#99D5DF]/10 transition-all duration-500 hover:scale-105 hover:shadow-lg group border border-[#0098AF]/10 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-[#0098AF] group-hover:scale-125 group-hover:text-[#007B8F] transition-all duration-300"></div>
                        <div>
                          <div className="text-[#003C46] font-semibold group-hover:text-[#0098AF] transition-colors duration-300">
                            {tech.name}
                          </div>
                          <div className="text-sm text-[#5B5B5B] group-hover:text-[#003C46] transition-colors duration-300">
                            {tech.level}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Testimonial */}
            <div className="md:w-2/5 mt-10 md:mt-0">
              <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border-l-4 border-[#0098AF] hover:border-l-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Enhanced decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0098AF]/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute top-4 right-4 text-8xl text-[#0098AF]/10 font-serif leading-none">
                  &quot;
                </div>
                <div className="absolute bottom-4 left-4 text-6xl text-[#0098AF]/10 font-serif leading-none">
                  &quot;
                </div>

                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-3 relative z-10 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1300ms" }}
                >
                  Client Testimonial
                </h3>

                <div className="relative z-10">
                  <blockquote
                    className={`text-[#5B5B5B] italic text-xl leading-relaxed mb-4 transition-all duration-500 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "1400ms" }}
                  >
                    &quot;The teamCognition’s engineering staffing model made it
                    easy for us to quickly bring in a skilled,
                    multi-disciplinary team with the right tools and experience.
                    Their support helped us stay on schedule without putting
                    extra pressure on our internal recruitment team&quot;
                  </blockquote>

                  <div
                    className={`flex items-center space-x-4 transition-all duration-500 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "1500ms" }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0098AF] to-[#99D5DF] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <cite className="text-[#0098AF] font-bold text-lg not-italic">
                        HR Head
                      </cite>
                      <div className="text-[#5B5B5B] text-sm">Client</div>
                    </div>
                  </div>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0098AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={setRef}
      className="py-16 bg-gradient-to-br from-[#0098AF] via-[#0098AF] to-[#007B8F] relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0098AF]/90 via-transparent to-[#007B8F]/90"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Enhanced badge */}

          <h2
            className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5FDFF] mb-6 leading-tight transition-all duration-700 ${
              isVisible ? "scale-100" : "scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Ready to Scale Your{" "}
            <span className=" bg-gradient-to-r from-white to-[#99D5DF] bg-clip-text text-transparent">
              Team?
            </span>
          </h2>

          <p
            className={`text-sm sm:text-lg text-[#F5FDFF]/90 mb-12 leading-relaxed transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Let us help you build a high-performing team with
            <span className="text-white font-semibold"> zero hassle</span> and
            <span className="text-white font-semibold">
              {" "}
              guaranteed results
            </span>
            .
          </p>

          {/* Enhanced CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link href="/contact">
              <button className="inline-flex items-center space-x-3 bg-[#F5FDFF] text-[#003C46] px-8 py-4 rounded-2xl font-bold text-xl hover:bg-[#E6F0F5]  hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1">
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/projects">
              <button className="inline-flex items-center space-x-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50  transition-all duration-500 group backdrop-blur-sm">
                <span>View More Projects</span>
                <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] antialiased">
      <MegaMenu />
      <main>
        <Hero />
        <RecentProjects />
        <ProjectOverview />
        <Objectives />
        <ProjectApproach />
        <KeyResults />
        <TechAndTestimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
