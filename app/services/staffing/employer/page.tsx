"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Search,
  MessageSquare,
  CheckCircle,
  Users,
  Clock,
  Sparkles,
  RotateCcw,
  Award,
  Target,
  Car,
  ChevronDown,
  ChevronRight,
  Home,
} from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const Employers = () => {
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  const processSectionRef = useRef<HTMLElement>(null);
  const [isProcessInView, setIsProcessInView] = useState(false);

  // IntersectionObserver for animate-on-scroll elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
      animatedElementsRef.current.push(el as HTMLElement);
    });

    return () => {
      animatedElementsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // IntersectionObserver for Step-by-Step Engagement Process section (animate once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProcessInView(true);
          if (processSectionRef.current) {
            observer.unobserve(processSectionRef.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (processSectionRef.current) {
      observer.observe(processSectionRef.current);
    }

    return () => {
      if (processSectionRef.current) {
        observer.unobserve(processSectionRef.current);
      }
    };
  }, []);

  const processSteps = [
    {
      title: "Requirement Discovery",
      icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-[#00b4d8]" />,
      description:
        "Understand your hiring needs. JDs. timelines and cultural fit",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Choose Your Engagement Model",
      icon: <Search className="h-6 w-6 sm:h-8 sm:w-8 text-[#00b4d8]" />,
      description:
        "Flexible models: Contingency RPO, Contract, Retained Payroll",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Candidate Scrolling & Screening",
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-[#00b4d8]" />,
      description:
        "Head-hunting, screening and shortlisting candidates from verified databases",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const processSteps1 = [
    {
      title: "Interview Coordination",
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-[#00b4d8]" />,
      description: "Interview scheduling, feedback loop and support",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Post Placement Support",
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-[#00b4d8]" />,
      description: "Follow-ups, feedback collection and retention",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const benefits = [
    {
      title: "Time-saving",
      icon: <Clock className="h-10 w-10" />,
      description: "Let us handle the search while you focus on your business",
    },
    {
      title: "Quality matches",
      icon: <CheckCircle className="h-10 w-10" />,
      description: "Only candidates who match your requirements",
    },
    {
      title: "Growing network",
      icon: <Users className="h-10 w-10" />,
      description: "Access our expanding talent pool",
    },
    {
      title: "Fresh approach",
      icon: <Sparkles className="h-10 w-10" />,
      description: "Modern hiring techniques for today's market",
    },
  ];

  const engagementModels = [
    {
      title: "Contingency Hiring",
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Pay only on successful hire",
    },
    {
      title: "Retained Search",
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Ideal for senior leadership positions",
    },
    {
      title: "Contract Staffing",
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "For short-term or project-based needs",
    },
    {
      title: "RPO",
      icon: <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Full-cycle hiring managed by our team",
    },
    {
      title: "Payroll Services",
      icon: <Car className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "We onboard & manage compliance for your hires",
    },
    {
      title: "Services",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "We onboard & manage compliance for your hires",
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

  // Animation variants for fade-in and slide-up
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const isMobile = useIsMobile();

  return (
    <div className="bg-gradient-to-br from-[#E6F0F5]/40 to-white">
      <MegaMenu />
      <div className="">
        {/* Hero Section */}
        <section>
          <div
            className={`relative ${
              isMobile ? "h-[400px]" : "h-[450px]"
            } overflow-hidden`}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
              alt="Team collaboration"
              fill
              className="object-cover opacity-20"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/85 to-[#0098AF]/70" />
            <div className="absolute inset-0 opacity-10   bg-repeat" />
            <div
              className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex flex-col justify-center ${
                isMobile ? "items-center text-center" : ""
              }`}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md relative"
              >
                Our Business Engagement Model
                <span
                  className={`absolute bottom-0 ${
                    isMobile ? "" : "left-0 w-48"
                  } h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent`}
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-white/90 mt-4 max-w-3xl"
              >
                Transparent, Flexible and Scalable
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-white/90 mt-2 max-w-3xl"
              >
                We help you hire smarter through a structured Engagement model
                that ensures success from Day One
              </motion.p>
              {!isMobile && (
                <nav className="absolute bottom-0 left-6 sm:left-8 lg:left-12 mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
                  <Link
                    href="/"
                    className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link
                    href="/services/staffing/employers"
                    className="hover:text-[#99D5DF] transition-colors duration-200"
                  >
                    Employers
                  </Link>
                </nav>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "reverse",
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{
                delay: 1,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-20 right-16 w-5 h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
            />
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* How We Work Section */}
          <section ref={processSectionRef} className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-3 uppercase">
                Step-by-Step Engagement Process
              </h2>
            </div>

            {/* Process Flow with Images */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isProcessInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-4 sm:gap-8"
            >
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-6 rounded-lg bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="flex-1 text-base sm:text-lg md:text-xl font-bold text-[#003C46] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#5B5B5B] text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isProcessInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 max-w-4xl mx-auto gap-4 sm:gap-8 py-4"
            >
              {processSteps1.map((step, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-6 rounded-lg bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-lg">
                          {index + 4}
                        </span>
                      </div>
                    </div>
                    <h3 className="flex-1 text-base sm:text-lg md:text-xl font-bold text-[#003C46] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#5B5B5B] text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Engagement Models Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-3 uppercase">
                Engagement Models We Offer
              </h2>
            </div>

            {/* Innovative Engagement Model Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 justify-items-center">
              {engagementModels.map((model, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[200px] sm:max-w-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0098af]/90 to-[#003C46] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 sm:p-6 bg-gradient-to-br from-white to-[#E6F0F5] group-hover:from-transparent group-hover:to-transparent transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#E6F0F5] group-hover:bg-white/20 transition-colors duration-300 mb-4">
                      <div className="text-[#0098af] group-hover:text-white transition-colors duration-300">
                        {model.icon}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#003C46] group-hover:text-white transition-colors duration-300 mb-2 text-center">
                      {model.title}
                    </h3>

                    <p className="text-[#5b5b5b] group-hover:text-white/90 transition-colors duration-300 text-center text-sm sm:text-base">
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Our Model Works Section */}
          <section className="mb-20 rounded-xl overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-3 uppercase">
                Why Our Model Works
              </h2>
            </div>

            <div className="bg-gradient-to-l from-[#E6F0F5] to-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left column - Benefits */}
                <div className="p-8 bg-gradient-to-l from-[#E6F0F5] to-white">
                  <h2 className="text-justify md:text-base text-[#003C46] mb-4">
                    Our staffing and recruitment model is built for flexibility,
                    speed, and precision. With customizable engagement types, a
                    dedicated account manager, and transparent communication
                    throughout the process, we ensure every hire aligns with
                    your goals and culture. Our agile approach enables faster
                    turnaround times and scalable hiring solutions — whether
                    you&apos;re a startup or a large enterprise.
                  </h2>
                  <ul className="space-y-2 py-1">
                    <li className="flex items-start px-3 rounded-lg hover:bg-white/70 transition-colors duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0098af] text-white flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-[#003C46] font-medium">
                        Customizable engagement types
                      </span>
                    </li>
                    <li className="flex items-start px-3 rounded-lg hover:bg-white/70 transition-colors duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0098af] text-white flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-[#003C46] font-medium">
                        Dedicated account manager
                      </span>
                    </li>
                    <li className="flex items-start px-3 rounded-lg hover:bg-white/70 transition-colors duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0098af] text-white flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-[#003C46] font-medium">
                        Transparent communication
                      </span>
                    </li>
                    <li className="flex items-start px-3 rounded-lg hover:bg-white/70 transition-colors duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0098af] text-white flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-[#003C46] font-medium">
                        Faster turnaround time
                      </span>
                    </li>
                    <li className="flex items-start px-3 rounded-lg hover:bg-white/70 transition-colors duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0098af] text-white flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-[#003C46] font-medium">
                        Scalable hiring across business sizes
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right column - Image */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-r from-[#E6F0F5] to-white">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?q=80&w=2112&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0098af]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Partner With Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-3">
                Why Partner With Us
              </h2>
              <p className="text-[#5b5b5b] max-w-3xl mx-auto">
                We&apos;re bringing fresh energy to talent acquisition
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5] to-white opacity-70"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                    <div className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#0098af] to-[#00b4d8] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#003C46] mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-[#5b5b5b]">{benefit.description}</p>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0098af] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* CTA SECTION */}
      <div>
        <section ref={sectionRef} className="w-full relative">
          <div className="relative">{/* CTA section */}</div>
        </section>
        <section className="w-full text-white relative overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
              alt="Team collaboration"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1920px"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0098af]/80 to-[#000000]/60 flex items-center justify-center">
              <div className="text-center text-white p-6 md:p-12 max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Growing Together
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    As a startup ourselves, we&apos;re uniquely positioned to
                    understand your hiring needs
                  </p>

                  <Link href="/contact">
                    <Button className="bg-white text-[#0098AF] rounded-lg hover:bg-[#5b5b5b] hover:text-white transition-colors duration-200 text-lg px-6 py-2 w-fit">
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Employers;
