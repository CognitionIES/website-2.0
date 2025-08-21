"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { StaticImageData } from "next/image";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import Link from "next/link";
import heroImage from "@/constants/images/hero/pexels-fauxels-3183197.jpg";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

const projects: Project[] = [
  {
    id: "project-0",
    title: "IT Talent Deployment",
    category: "Recruitment Support",
    description:
      "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    href: "/projects/it-talent-deployment",
  },
  {
    id: "project-1",
    title: "Digitalization",
    category: "Build and Operate",
    description:
      "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image: digitalImage,
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Industrial Equipment Cost Optimization & Benchmarking",
    category: "Build and Operate",
    description:
      "Conducted a detailed cost and function analysis of the Industrial Equipment, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image: pcmImage2,
    href: "/projects/product-cost-management",
  },
  {
    id: "project-3",
    title: "Engineering Talent Deployment",
    category: "Recruitment Support",
    description:
      "Delivering experienced engineering professionals to support design, development, and execution across capital projects, manufacturing setups, and plant engineering functions.",
    image: heroImage,
    href: "/projects/engineering-talent-deployment",
  },
];

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(projects.length / visibleProjects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-12 lg:py-16 font-primary relative bg-gradient-to-b from-[#F0F9FB] to-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:22px_22px] opacity-[0.03]"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-3 py-1 bg-[#E6F0F5] rounded-full">
          <p className="text-xs font-medium text-[#003C46] uppercase">
            Featured Work
          </p>
        </div>
        <motion.h1
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] sm:text-[36px] font-heading font-bold text-[#003C46] mt-3 tracking-tight"
        >
          Our Recent Projects
        </motion.h1>
        <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl">
          Showcasing how we build, operate, and deliver impact across
          industries.
        </p>

        <div className="relative max-w-7xl mt-8">
          <div className="overflow-hidden">
            <div
              className="flex  transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleProjects)
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.25, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "project-card flex-shrink-0",
                    isMobile ? "w-full" : "w-[48%]" 
                  )}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-full bg-white rounded-2xl shadow-md border border-[#003C46]/10 hover:border-[#0098AF] hover:shadow-xl transition-all duration-300 p-2 group">
                    <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-xl">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${
                            typeof project.image === "string"
                              ? project.image
                              : project.image.src
                          })`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 via-[#003C46]/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full shadow-sm">
                        <p className="text-xs font-medium text-[#003C46]">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#003C46] group-hover:text-[#0098AF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#0098AF] relative group/link"
                      >
                        <span className="relative">
                          View in detail
                          <span className="absolute -bottom-px left-0 w-full h-[1px] bg-[#0098AF]/60 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Arrow Buttons for Mobile and Desktop */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={goToPrevSlide}
              className="p-3 bg-white/70 backdrop-blur-sm border border-white/30 text-[#003C46] rounded-full shadow-md m-4 hover:bg-[#0098AF]/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              onClick={goToNextSlide}
              className="p-2 bg-[#0098AF]/80 text-white rounded-full m-4 hover:bg-[#007A8C] transition-all duration-300"
              aria-label="Next slide"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          {isMobile && (
            <div className="flex justify-center gap-1.5 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-[#0098AF] scale-125"
                      : "bg-[#5B5B5B]/20"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="bg-[#0098AF] text-white hover:bg-white hover:text-[#003C46] hover:border-[#0098AF] rounded-full px-4 py-3 text-base"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
