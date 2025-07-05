/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { StaticImageData } from "next/image";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
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

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;

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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-8 lg:py-12 overflow-hidden relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-[#0098af] opacity-5 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.07, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#5b5b5b] opacity-5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0098af] opacity-5 blur-3xl"></div>
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
          <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
            Featured Work
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#003C46] tracking-tight drop-shadow-sm">
            Our Recent Projects
          </h1>
        </motion.div>

        {/* Navigation buttons (desktop only) */}
        {!isMobile && (
          <div className="flex justify-between mt-4 mb-4 sm:hidden md:flex">
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

        {/* Projects grid with navigation */}
        <div className="relative max-w-7xl">
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
                  }
                  transition={{ duration: 0.25, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "project-card flex-shrink-0 w-full",
                    isMobile ? "w-full" : "w-1/2"
                  )}
                  whileHover={{ y: -5 }}
                >
                  <div className="group h-full bg-white/30 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    {/* Image container */}
                    <div className="relative h-[180px] sm:h-[240px] w-full overflow-hidden">
                      <div
                        className="image-hover-scale absolute inset-0 bg-cover bg-center h-full w-full"
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
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-2xl font-semibold text-[#5b5b5b] group-hover:text-[#0098af] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#0098af] group relative"
                      >
                        <span className="relative">
                          View in detail
                          <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Circular Indicators (mobile only) */}
        {isMobile && (
          <div className="flex justify-center gap-1.5 mt-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-[#0098af] scale-125"
                    : "bg-[#5b5b5b]/20"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${project.title} project`}
              />
            ))}
          </div>
        )}

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 sm:mt-6 text-center"
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="rounded-full bg-[#0098af] text-white hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-[#0098af] px-3 py-2 sm:px-4 sm:py-3 h-auto text-sm sm:text-base font-medium border-[#0098af] transition-colors duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
