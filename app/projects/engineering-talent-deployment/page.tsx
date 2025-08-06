/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ChevronRight,
  Home,
  ArrowRight,
  Users,
  Code,
  CheckCircle,
  Shield,
  Target,
  Clock,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Award,
  Zap,
  BarChart3,
  PieChart,
  Settings,
  Wrench,
  Cpu,
  Globe,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

// Custom hook for intersection observer
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

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

// Enhanced Button Component
const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#0098AF] to-[#00B4D8] text-white hover:from-[#007B9A] hover:to-[#0098AF] focus:ring-[#0098AF] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary:
      "bg-white text-[#003C46] border-2 border-[#0098AF] hover:bg-[#0098AF] hover:text-white focus:ring-[#0098AF]",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[#0098AF] focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    default: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Enhanced Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#0098AF] to-[#00B4D8] rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#003C46]">TechStaff</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0098AF] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0098AF] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0098AF] transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0098AF] transition-colors font-medium"
            >
              About
            </Link>
            <Button size="sm">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const [setRef, isVisible] = useIntersectionObserver();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={setRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-[#003C46] via-[#0098AF] to-[#00B4D8]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -200],
              x: [0, Math.random() * 200 - 100],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "0px",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <motion.nav
          className="absolute top-24 flex items-center space-x-2 text-sm text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Projects</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#99D5DF]">Engineering Talent</span>
        </motion.nav>

        {/* Main Content */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black tracking-tight leading-none mb-8">
              Engineering
              <br />
              <span className="bg-gradient-to-r from-[#99D5DF] to-[#FFFFFF] bg-clip-text text-transparent">
                Talent Deployment
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strategic staffing solutions for engineering teams across multiple
            disciplines, delivering expertise that drives innovation and project
            success.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Component
const StatsSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    engineers: 0,
    success: 0,
  });

  useEffect(() => {
    if (isVisible) {
      const targets = {
        projects: 150,
        clients: 50,
        engineers: 500,
        success: 98,
      };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });
    }
  }, [isVisible]);

  const stats = [
    {
      icon: <Target className="w-8 h-8" />,
      number: counters.projects,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: counters.clients,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: counters.engineers,
      label: "Engineers Deployed",
      suffix: "+",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: counters.success,
      label: "Success Rate",
      suffix: "%",
    },
  ];

  return (
    <section ref={setRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] to-[#E2E8F0] opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4">
            Delivering Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself - consistently delivering
            top-tier engineering talent
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0098AF] to-[#00B4D8] text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#003C46] mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0098AF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B4D8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
              Project Overview
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-8 leading-tight">
              Transforming Engineering
              <span className="text-[#0098AF]"> Teams</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A major engineering project required rapid mobilization of
                skilled professionals across mechanical, electrical, and piping
                disciplines. The client needed engineers familiar with advanced
                design tools and industry standards.
              </p>
              <p>
                We delivered end-to-end staffing solutions – from understanding
                requirements to sourcing, screening, onboarding, and managing
                compliance. This project demanded not just technical skill but
                domain expertise and quick adaptability.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-8 h-8 text-[#0098AF] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#003C46]">4 Weeks</div>
                <div className="text-gray-600">Avg. Hiring Time</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="w-8 h-8 text-[#0098AF] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#003C46]">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Engineering team collaboration"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Award className="w-6 h-6 text-[#0098AF] mb-2" />
              <div className="text-sm font-semibold text-gray-900">
                Certified Excellence
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Zap className="w-6 h-6 text-[#0098AF] mb-2" />
              <div className="text-sm font-semibold text-gray-900">
                Rapid Deployment
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Objectives Section
const ObjectivesSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const objectives = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Talent Placement",
      description:
        "Delivering experienced engineering professionals across design, development, and execution phases of capital projects.",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Technical Expertise",
      description:
        "Specialized engineers proficient in advanced design tools and industry-standard methodologies.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Scalable Solutions",
      description:
        "Flexible workforce deployment that adapts to project requirements and timeline changes.",
    },
  ];

  return (
    <section ref={setRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            Our Objectives
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6">
            Mission-Critical <span className="text-[#0098AF]">Goals</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-[#0098AF]/20 h-full">
                <div className="text-[#0098AF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {objective.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#003C46] mb-4">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Key Positions Section
const KeyPositionsSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const positions = [
    {
      title: "Mechanical Design Engineer",
      description:
        "Designed and validated mechanical components for plant and EPC projects using advanced CAD tools.",
      skills: ["SolidWorks", "AutoCAD", "ANSYS", "Design Validation"],
    },
    {
      title: "Electrical & Instrumentation Engineer",
      description:
        "Developed electrical systems and instrumentation designs for operational efficiency.",
      skills: ["SmartPlant", "E3.series", "PLC Programming", "HMI Design"],
    },
    {
      title: "Piping Layout & Stress Engineer",
      description:
        "Created and analyzed piping layouts using specialized stress analysis tools.",
      skills: ["CAESAR II", "PDMS", "AutoPIPE", "Stress Analysis"],
    },
    {
      title: "SmartPlant & SPI Specialists",
      description:
        "Managed 3D modeling and instrumentation data using industry-leading platforms.",
      skills: ["SmartPlant 3D", "SPI", "3D Modeling", "Data Management"],
    },
    {
      title: "Plant Maintenance Design Support",
      description:
        "Supported ongoing plant maintenance with design optimization expertise.",
      skills: [
        "Maintenance Planning",
        "Asset Management",
        "Reliability Engineering",
      ],
    },
    {
      title: "HVAC & Utility Systems Designer",
      description:
        "Designed comprehensive HVAC and utility systems for plant operations.",
      skills: [
        "HVAC Design",
        "Energy Efficiency",
        "System Integration",
        "Load Calculations",
      ],
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            Key Positions Filled
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6">
            Expert <span className="text-[#0098AF]">Engineering Roles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successfully deployed specialized engineering personnel across
            multiple disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0098AF]/20 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors">
                    {position.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {position.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {position.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg">
            <Users className="w-8 h-8 text-[#0098AF]" />
            <div className="text-left">
              <div className="text-sm text-gray-600">Engagement Type</div>
              <div className="text-lg font-bold text-[#003C46]">
                Contractual & Permanent Staffing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Approach Section
const ApproachSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const approaches = [
    {
      step: "01",
      title: "Requirement Scoping & Skill Mapping",
      description:
        "Collaborate closely with project leads to define precise skill sets, project alignment criteria, and tool-specific requirements.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "Strategic Sourcing",
      description:
        "Deploy targeted hiring campaigns across mechanical, electrical, and instrumentation talent pools with industry expertise.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Tool-Based Evaluation",
      description:
        "Comprehensive screening for software proficiency including SmartPlant 3D, CAESAR II, STAAD, and specialized engineering tools.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Onboarding & Compliance",
      description:
        "Streamlined background verification, documentation management, and payroll onboarding with full regulatory compliance.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      step: "05",
      title: "Post-Deployment Support",
      description:
        "Continuous engagement monitoring, performance tracking, and proactive attrition control processes.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section ref={setRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6">
            Strategic <span className="text-[#0098AF]">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic methodology ensuring optimal talent placement and
            project success
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-[#0098AF] to-[#00B4D8]" />

          <div className="space-y-16">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0098AF]/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-2xl flex items-center justify-center text-white">
                        {approach.icon}
                      </div>
                      <div className="text-4xl font-black text-[#0098AF]/20">
                        {approach.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#003C46] mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-full border-4 border-white shadow-lg" />
                </div>

                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Results Section
const ResultsSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const results = [
    {
      title: "Project Continuity",
      description:
        "Zero manpower-related delays in engineering project flow and delivery timelines.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Cost Efficiency",
      description:
        "Offshore deployment strategy reduced overall engineering costs by up to 45%.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Accelerated Hiring",
      description:
        "Reduced average hiring turnaround from 8+ weeks to under 4 weeks consistently.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Scalable Framework",
      description:
        "Enabled flexible workforce scaling across engineering functions as needed.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Full Compliance",
      description:
        "100% accuracy in payroll and statutory process management (PF, ESI, NDAs).",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const metrics = [
    {
      metric: "Time to Fill (avg.)",
      before: "8–10 weeks",
      after: "< 4 weeks",
      improvement: "60% faster",
    },
    {
      metric: "Attrition (6 months)",
      before: "~15%",
      after: "< 5%",
      improvement: "67% reduction",
    },
    {
      metric: "Compliance Accuracy",
      before: "Manual process",
      after: "Fully automated",
      improvement: "100% accuracy",
    },
    {
      metric: "Cost Efficiency",
      before: "Standard rates",
      after: "45% reduction",
      improvement: "Significant savings",
    },
  ];

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-br from-[#003C46] to-[#0098AF] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            Key Results & Outcomes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Measurable <span className="text-[#99D5DF]">Impact</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering tangible results that transform engineering project
            outcomes
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl mb-4`}
              >
                {result.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{result.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics Comparison */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-[#003C46] mb-8 text-center">
            Performance Metrics
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#0098AF]/20">
                  <th className="pb-4 text-lg font-semibold text-[#003C46]">
                    Metric
                  </th>
                  <th className="pb-4 text-lg font-semibold text-[#003C46] text-center">
                    Before
                  </th>
                  <th className="pb-4 text-lg font-semibold text-[#003C46] text-center">
                    After
                  </th>
                  <th className="pb-4 text-lg font-semibold text-[#003C46] text-center">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <td className="py-4 font-medium text-[#003C46]">
                      {metric.metric}
                    </td>
                    <td className="py-4 text-center text-gray-600">
                      {metric.before}
                    </td>
                    <td className="py-4 text-center font-semibold text-[#0098AF]">
                      {metric.after}
                    </td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {metric.improvement}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Technologies Section
const TechnologiesSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  const technologies = [
    {
      name: "SmartPlant 3D",
      description: "Advanced 3D modeling and plant design",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      name: "AutoCAD",
      description: "Precise 2D and 3D design drafting",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      name: "CAESAR II",
      description: "Piping stress analysis and validation",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      name: "STAAD.Pro",
      description: "Structural analysis and design",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: "SPI",
      description: "Instrumentation data management",
      icon: <PieChart className="w-6 h-6" />,
    },
    {
      name: "SolidWorks",
      description: "Mechanical design and simulation",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  return (
    <section ref={setRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            Core Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6">
            Industry-Leading <span className="text-[#0098AF]">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our engineers are proficient in the most advanced engineering
            software and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0098AF]/30"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003C46] group-hover:text-[#0098AF] transition-colors">
                  {tech.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section
const TestimonialSection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-r from-[#F8FAFC] to-[#E2E8F0] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#0098AF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00B4D8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-semibold uppercase tracking-wider rounded-full mb-8">
            Client Feedback
          </span>

          <div className="relative">
            <Quote className="w-16 h-16 text-[#0098AF]/20 mx-auto mb-8" />

            <blockquote className="text-2xl md:text-3xl font-light text-[#003C46] leading-relaxed mb-8">
              &quot;Cognition&apos;s engineering staffing model helped us
              quickly mobilize a multi-disciplinary team with the right skill
              sets and tool experience. Their support ensured project timelines
              were met without overloading our internal recruitment
              resources.&quot;
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0098AF] to-[#00B4D8] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">SM</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-[#003C46]">
                  Senior Engineering Manager
                </div>
                <div className="text-gray-600">
                  Fortune 500 Manufacturing Company
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={setRef}
      className="py-20 bg-gradient-to-r from-[#003C46] to-[#0098AF] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Build Your
            <br />
            <span className="text-[#99D5DF]">Engineering Team?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform your engineering projects with our strategic staffing
            solutions. Let&apos;s discuss how we can accelerate your success.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              size="lg"
              variant="outline"
              className="group text-lg px-10 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#003C46] hover:bg-gray-100 text-lg px-10 py-4"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>contact@techstaff.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Component
export default function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] antialiased bg-white">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <ObjectivesSection />
        <KeyPositionsSection />
        <ApproachSection />
        <ResultsSection />
        <TechnologiesSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
