"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    id: "project-1",
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image: digitalImage,
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Log Splitter Cost Optimization & Benchmarking",
    category: "Financial Optimization",
    description:
      "Conducted a detailed cost and function analysis of the Log Splitter, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image: pcmImage2,
    href: "/projects/product-cost-management",
  },
];

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
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

  useEffect(() => {
    if (isInView) {
      projectRefs.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-y-0");
            item.classList.remove("opacity-0", "translate-y-12");
          }, 200 + index * 150);
        }
      });
    }
  }, [isInView]);

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-br from-white to-[#E6F0F5]/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098AF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003C46]/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
            <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
              Featured Work
            </p>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#003C46] tracking-tight drop-shadow-sm">
            Recent Projects
          </h1>
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>

          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative max-w-7xl mt-8"
          >
            {isMobile ? (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    ref={(el) => {
                      projectRefs.current[index] = el;
                    }}
                    variants={cardVariants}
                    className="project-card w-full opacity-0 translate-y-12 transition-all duration-700"
                    whileHover={{ y: -5 }}
                  >
                    <div className="group h-full bg-white/90 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <Link
                        href={project.href}
                        className="block relative h-[200px] w-full overflow-hidden cursor-pointer"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center h-full w-full transform transition-transform duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${
                              typeof project.image === "string"
                                ? project.image
                                : project.image.src
                            })`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                        <div className="absolute top-3 left-3">
                          <div className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                            <p className="text-[10px] font-medium text-[#003C46]">
                              {project.category}
                            </p>
                          </div>
                        </div>
                      </Link>

                      <div className="p-4 space-y-3">
                        <a href={project.href} className="block">
                          <h3 className="text-lg font-semibold text-[#5b5b5b] group-hover:text-[#0098af] transition-colors">
                            {project.title}
                          </h3>
                        </a>
                        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <a
                          href={project.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0098af] group relative"
                        >
                          <span className="relative">
                            View in detail
                            <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6 lg:gap-6"
                  style={{
                    transform: `translateX(-${
                      activeIndex * (100 / visibleProjects)
                    }%)`,
                  }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      ref={(el) => {
                        projectRefs.current[index] = el;
                      }}
                      variants={cardVariants}
                      className={cn(
                        "project-card flex-shrink-0 w-full opacity-0 translate-y-12 transition-all duration-700",
                        "w-1/2"
                      )}
                      whileHover={{ y: -5 }}
                    >
                      <div className="group h-full bg-white/80 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                        <Link
                          href={project.href}
                          className="block relative h-[180px] sm:h-[240px] w-full overflow-hidden cursor-pointer"
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center h-full w-full transform transition-transform duration-700 group-hover:scale-105"
                            style={{
                              backgroundImage: `url(${
                                typeof project.image === "string"
                                  ? project.image
                                  : project.image.src
                              })`,
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <div className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                              <p className="text-[10px] sm:text-xs font-medium text-[#003C46]">
                                {project.category}
                              </p>
                            </div>
                          </div>
                        </Link>

                        <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                          <a href={project.href} className="block">
                            <h3 className="text-lg sm:text-2xl font-semibold text-[#5b5b5b] group-hover:text-[#0098af] transition-colors">
                              {project.title}
                            </h3>
                          </a>
                          <p className="text-gray-600 line-clamp-3 text-sm sm:text-base leading-relaxed">
                            {project.description}
                          </p>
                          <a
                            href={project.href}
                            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#0098af] group relative"
                          >
                            <span className="relative">
                              View in detail
                              <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="flex justify-between mt-4 sm:hidden">
                <Button
                  variant="outline"
                  className="p-2 rounded-full bg-white border-[#0098af] text-[#0098af] hover:bg-[#0098af] hover:text-white transition-colors"
                  onClick={handlePrev}
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="p-2 rounded-full bg-white border-[#0098af] text-[#0098af] hover:bg-[#0098af] hover:text-white transition-colors"
                  onClick={handleNext}
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
