"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  ArrowRight,
  Users,
  Code,
  Database,
  GitBranch,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";
import Footer from "@/components/footer";

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

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-[#003C46] shadow-xl backdrop-blur-md border-b border-[#0098AF]/20"
          : "bg-[#003C46]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div
              className={`text-xl font-bold text-[#F5FDFF] transition-all duration-300 ${
                isScrolled ? "scale-95" : "scale-100"
              }`}
            >
              TechStaff Solutions
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-[#F5FDFF] hover:text-[#99D5DF] transition-all duration-300 hover:scale-105"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#0098AF] hover:text-[#99D5DF] transition-all duration-300 font-medium relative"
              >
                Projects
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0098AF] transform scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#"
                className="text-[#F5FDFF] hover:text-[#99D5DF] transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
              <a
                href="#"
                className="text-[#F5FDFF] hover:text-[#99D5DF] transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
          <button className="md:hidden text-[#F5FDFF] hover:text-[#99D5DF] transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
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
      className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-[#003C46]/90 to-[#0098AF]/80 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced Decorative Elements */}
      <div
        className={`absolute top-20 left-10 w-40 h-40 bg-[#0098AF]/30 rounded-full blur-2xl transition-all duration-[2000ms] ease-out ${
          mounted ? "animate-pulse opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 right-16 w-32 h-32 bg-[#99D5DF]/20 rounded-full blur-xl transition-all duration-[2500ms] ease-out delay-500 ${
          mounted ? "animate-pulse opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/4 w-6 h-6 bg-[#F5FDFF]/30 rounded-full transition-all duration-[3000ms] ease-out delay-1000 ${
          mounted ? "animate-ping opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Breadcrumb */}
        <div
          className={`hidden md:flex items-center space-x-2 text-[#F5FDFF]/80 text-sm mb-8 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Home className="w-4 h-4 hover:text-[#99D5DF] transition-colors duration-300" />
          <ChevronRight className="w-4 h-4 animate-pulse" />
          <span className="hover:text-[#99D5DF] cursor-pointer transition-all duration-300 hover:scale-105">
            Projects
          </span>
          <ChevronRight className="w-4 h-4 animate-pulse" />
          <span className="text-[#99D5DF] font-medium">
            IT Talent Deployment
          </span>
        </div>

        <div className="text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl font-bold text-[#F5FDFF] mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block transition-all duration-1000 ease-out delay-200">
              Contract Staffing for
            </span>
            <span
              className={`block text-[#99D5DF] transition-all duration-1000 ease-out delay-400 ${
                isVisible ? "translate-x-0" : "translate-x-4"
              }`}
            >
              Full-Stack Development Team
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl text-[#F5FDFF]/90 max-w-2xl mx-auto md:mx-0 transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Showcasing innovative engineering and IT staffing solutions across
            industries.
          </p>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div
            className="flex flex-col items-center space-y-2 cursor-pointer group"
            onClick={() =>
              document
                .getElementById("recent-projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-[#F5FDFF]/70 text-xs font-medium group-hover:text-[#99D5DF] transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-[#F5FDFF]/70 animate-bounce group-hover:text-[#99D5DF] group-hover:scale-110 transition-all duration-300" />
          </div>
        </div>
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
      className="py-20 bg-[#F5FDFF] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#0098AF] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#0098AF] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-16 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Recent Projects
        </h2>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IT talent deployment team"
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div
                  className={`inline-block text-sm font-semibold text-[#0098AF] mb-3 px-3 py-1 bg-[#0098AF]/10 rounded-full transition-all duration-300 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  IT Staffing
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold text-[#003C46] mb-3 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  IT Talent Deployment
                </h3>
                <h4
                  className={`text-lg font-semibold text-[#5B5B5B] mb-6 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Contract Staffing for Full-Stack Development Team
                </h4>
                <p
                  className={`text-[#5B5B5B] mb-8 leading-relaxed transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  Successfully staffed and deployed a team of skilled full-stack
                  developers (React & Node.js) for a growing IT company. Ensured
                  quick turnaround, seamless onboarding, and end-to-end
                  compliance support for a 12-month contract.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("project-overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`inline-flex items-center space-x-3 bg-[#0098AF] text-white px-8 py-4 rounded-xl hover:bg-[#007B8F] transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <span className="font-semibold">View in Detail</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
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
      className="py-20 bg-gradient-to-br from-[#F5FDFF] to-[#E6F0F5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-[#003C46] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="SaaS platform development"
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/30 to-transparent"></div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12 text-[#F5FDFF] relative">
                <div
                  className={`inline-block bg-[#0098AF]/20 text-[#99D5DF] px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  IT Staffing Excellence
                </div>
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Project Overview
                </h2>
                <p
                  className={`text-lg leading-relaxed text-[#F5FDFF]/90 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  A rapidly growing IT firm needed a team of full-stack
                  developers to fast-track the development of a new SaaS
                  platform. They were seeking skilled professionals proficient
                  in React.js and Node.js, with a strong understanding of
                  scalable architecture and agile development. The client
                  required quick hiring with minimal internal resource overhead,
                  and full compliance coverage including payroll, taxation, and
                  documentation.
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-[#0098AF]/30 rounded-full opacity-50"></div>
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
    <section ref={setRef} className="py-20 bg-[#F5FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:items-center md:space-x-16">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team objective visualization"
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="bg-[#003C46] p-8 md:p-12 rounded-2xl text-[#F5FDFF] shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0098AF]/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                <h2
                  className={`text-3xl md:text-4xl font-bold mb-8 relative z-10 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  Objective
                </h2>
                <p
                  className={`text-lg leading-relaxed text-[#F5FDFF]/90 relative z-10 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  To staff and manage a high-performing full-stack development
                  team on a 12-month contract, ensuring smooth onboarding,
                  delivery readiness, and full compliance coverage.
                </p>

                {/* Success indicator */}
                <div
                  className={`flex items-center space-x-3 mt-8 text-[#99D5DF] relative z-10 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">Mission Accomplished</span>
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
      title: "Requirement Scoping",
      description:
        "Collaborated with the client to finalize job descriptions, skill expectations, and team composition.",
    },
    {
      title: "Talent Sourcing & Screening",
      description:
        "Leveraged our tech talent pool to identify and evaluate suitable candidates.",
    },
    {
      title: "Technical Evaluation",
      description:
        "Conducted pre-interviews, coding tests, and cultural fit assessments.",
    },
    {
      title: "Onboarding & Documentation",
      description:
        "Handled all offer roll-outs, background verification, and documentation.",
    },
    {
      title: "Payroll & Compliance",
      description:
        "Managed PF, ESI, taxation, and monthly payroll with complete compliance support.",
    },
    {
      title: "Ongoing Coordination",
      description:
        "Regular follow-ups for performance check-ins, engagement, and attrition control.",
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-br from-[#E6F0F5] to-[#F5FDFF] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0098AF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-16 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Our Approach
        </h2>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:space-x-16">
            <div className="md:w-3/5 space-y-6 mb-12 md:mb-0">
              <p
                className={`text-xl text-[#5B5B5B] mb-12 font-medium transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                We deployed our proven contract staffing model tailored to IT
                development roles.
              </p>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl border-l-4 border-[#0098AF] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-l-6 group ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0098AF] text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#003C46] mb-3 text-lg group-hover:text-[#0098AF] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#5B5B5B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:w-2/5">
              <div className="sticky top-24">
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Process visualization"
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#0098AF]/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#99D5DF]/30 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyResults = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const results = [
    "Rapid Talent Onboarding: From requirement to deployment in record time.",
    "Exceptional Team Stability: Zero attrition during the entire contract period.",
    "Accelerated Integration: Developers aligned with sprint goals within the first week.",
    "Process Automation Ready: All timesheets, billing, and compliance handled through automation.",
  ];

  const kpiData = [
    {
      metric: "Hiring Turnaround Time",
      before: "7–9 weeks",
      after: "Less than 3 weeks",
    },
    {
      metric: "Team Stability (Attrition Rate)",
      before: "~20% per quarter",
      after: "0% attrition in 6 months",
    },
    {
      metric: "Sprint Integration Time",
      before: "2–3 weeks",
      after: "Within 5 working days",
    },
    {
      metric: "Compliance/Billing Accuracy",
      before: "Manual + delayed processing",
      after: "100% automated, on-time billing",
    },
  ];

  const services = [
    "Contract Staffing",
    "Full-Stack Developer Hiring",
    "Payroll & Compliance",
    "HR Documentation & Support",
  ];

  return (
    <section
      ref={setRef}
      className="py-20 bg-[#F5FDFF] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0098AF] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#0098AF] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-16 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Key Results & Outcomes
        </h2>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:space-x-12">
            <div className="md:w-3/5 space-y-8">
              {/* Results List */}
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Achievements
                </h3>
                <ul className="space-y-6">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-4 transition-all duration-500 hover:translate-x-2 group/item ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-6 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <Star className="w-6 h-6 text-[#0098AF] mt-0.5 flex-shrink-0 group-hover/item:scale-110 group-hover/item:text-[#007B8F] transition-all duration-300" />
                      <span className="text-[#5B5B5B] leading-relaxed group-hover/item:text-[#003C46] transition-colors duration-300">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KPI Table */}
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  Performance Metrics
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#0098AF]/10 rounded-lg">
                      <tr>
                        <th className="text-left p-4 font-bold text-[#003C46] rounded-l-lg">
                          Metric
                        </th>
                        <th className="text-left p-4 font-bold text-[#003C46]">
                          Before
                        </th>
                        <th className="text-left p-4 font-bold text-[#003C46] rounded-r-lg">
                          After
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kpiData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 hover:bg-[#0098AF]/5 transition-all duration-300 hover:scale-[1.01] group/row ${
                            isVisible
                              ? "translate-x-0 opacity-100"
                              : "translate-x-6 opacity-0"
                          }`}
                          style={{ transitionDelay: `${900 + index * 100}ms` }}
                        >
                          <td className="p-4 font-semibold text-[#003C46] group-hover/row:text-[#0098AF] transition-colors duration-300">
                            {row.metric}
                          </td>
                          <td className="p-4 text-[#5B5B5B]">{row.before}</td>
                          <td className="p-4 text-[#0098AF] font-bold group-hover/row:scale-105 transition-transform duration-300">
                            {row.after}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 mt-8 md:mt-0 space-y-8">
              {/* Services Delivered */}
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1300ms" }}
                >
                  Services Delivered
                </h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className={`flex items-center space-x-4 transition-all duration-500 hover:translate-x-2 group/service ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1400 + index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-[#0098AF] rounded-full group-hover/service:scale-125 transition-transform duration-300"></div>
                      <span className="text-[#5B5B5B] font-medium group-hover/service:text-[#003C46] transition-colors duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tech stack visualization"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechAndTestimonial = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const technologies = [
    { name: "React.js", icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", icon: <Globe className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "CI/CD & GitLab", icon: <GitBranch className="w-5 h-5" /> },
    { name: "API Integration", icon: <Globe className="w-5 h-5" /> },
    { name: "Microservices", icon: <Code className="w-5 h-5" /> },
  ];

  const roles = ["Full-Stack Developers", "Frontend Engineers"];

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-br from-[#E6F0F5] to-[#F5FDFF] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#0098AF]/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#99D5DF]/10 rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-16 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Technologies & Roles Placed
        </h2>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex md:space-x-16">
            <div className="md:w-3/5 space-y-10">
              {/* Technologies */}
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 bg-[#0098AF]/5 rounded-xl hover:bg-[#0098AF]/10 transition-all duration-300 hover:scale-105 hover:shadow-md group ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="text-[#0098AF] group-hover:scale-110 group-hover:text-[#007B8F] transition-all duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-[#003C46] font-semibold group-hover:text-[#0098AF] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles */}
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1000ms" }}
                >
                  Roles Deployed
                </h3>
                <div className="flex flex-wrap gap-4">
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 bg-[#0098AF] text-white px-6 py-3 rounded-full hover:bg-[#007B8F] hover:scale-105 hover:shadow-lg transition-all duration-300 group ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1100 + index * 100}ms` }}
                    >
                      <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="md:w-2/5 mt-10 md:mt-0">
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border-l-4 border-[#0098AF] hover:border-l-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-[#0098AF]/10 font-serif">
                  &quot;
                </div>

                <h3
                  className={`text-2xl font-bold text-[#003C46] mb-8 relative z-10 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1300ms" }}
                >
                  Client Testimonial
                </h3>
                <blockquote
                  className={`text-[#5B5B5B] italic text-lg leading-relaxed mb-8 relative z-10 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1400ms" }}
                >
                  &quot;The team delivered quality candidates within days, and took
                  complete responsibility from onboarding to payroll. This
                  allowed us to scale faster and stay focused on our product
                  roadmap.&quot;
                </blockquote>
                <cite
                  className={`text-[#0098AF] font-bold text-lg relative z-10 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "1500ms" }}
                >
                  — HR Head, IT Services Client
                </cite>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0098AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      className="py-20 bg-[#0098AF] relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-black/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#F5FDFF] mb-6 transition-all duration-700 ${
              isVisible ? "scale-100" : "scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Ready to Scale Your IT Team?
          </h2>
          <p
            className={`text-xl md:text-2xl text-[#F5FDFF]/90 mb-12 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Let us help you build a high-performing team with zero hassle.
          </p>
          <button
            className={`inline-flex items-center space-x-3 bg-[#F5FDFF] text-[#5B5B5B] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#E6F0F5] hover:scale-110 hover:shadow-2xl transition-all duration-300 group ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] antialiased">
      <Navigation />
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
