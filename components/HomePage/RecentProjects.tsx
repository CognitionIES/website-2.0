"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    id: "project-0",
    title: "IT Talent Deployment",
    category: "Contract Staffing",
    description:
      "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    href: "/projects/it-talent-deployment",
  },
  {
    id: "project-1",
    title: "Digitalization",
    category: "Build And Operate",
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
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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
          <p className="text-xs font-medium text-[#0098AF] uppercase">
            Featured Work
          </p>
        </div>
        <motion.h1
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[24px] sm:text-[32px] font-heading font-semibold text-[#003C46] mt-2"
        >
          Our Recent Projects
        </motion.h1>
        <div className="relative max-w-7xl mt-8">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 sm:gap-8 transition-transform duration-500"
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
                    isMobile ? "w-full" : "w-[45%]"
                  )}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-full bg-white rounded-xl shadow-sm border border-[#003C46]/10 hover:border-[#0098AF] hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)]">
                    <div className="relative h-[180px] sm:h-[240px] w-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center h-full w-full"
                        style={{
                          backgroundImage: `url(${
                            typeof project.image === "string"
                              ? project.image
                              : project.image.src
                          })`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-white/90 rounded-full">
                          <p className="text-xs font-medium text-[#003C46]">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-[24px] font-heading font-semibold text-[#003C46] group-hover:text-[#0098AF]">
                        {project.title}
                      </h3>
                      <p className="text-base font-primary text-gray-600 line-clamp-3">
                        {project.description}
                      </p>
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-1.5 text-base font-medium text-[#0098AF] group"
                      >
                        <span className="relative">
                          View in detail
                          <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098AF]/50 group-hover:scale-x-100 scale-x-0 transition-transform" />
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {isMobile && (
            <div className="flex justify-center gap-1.5 mt-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-[#0098AF] scale-125"
                      : "bg-[#5B5B5B]/20"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${project.title}`}
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
