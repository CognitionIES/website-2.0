"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
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
      className="py-16 sm:py-20 lg:py-16 font-primary relative bg-gradient-to-b from-[#F0F9FB] to-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0098AF]/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-dot-pattern bg-[length:24px_24px]"
        />
      </div>
      <div className="max-w-[90%] sm:max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-2 bg-[#E6F0F5]/80 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-[#0098AF] uppercase shadow-sm"
          >
            Featured Work
          </motion.span>
          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46]"
          >
            Our Recent Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed"
          >
            Showcasing how we build, operate, and deliver impact across
            industries.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className={cn("pl-4", isMobile ? "basis-full" : "basis-1/2")}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut",
                    }}
                  >
                    <div className="h-[420px] sm:h-[480px] bg-white rounded-2xl  border border-[#003C46]/5 hover:border-[#0098AF]/50  transition-all duration-500 ease-out group overflow-hidden flex flex-col">
                      <div className="relative h-[240px] sm:h-[280px] flex-shrink-0 overflow-hidden rounded-t-2xl">
                        <Image
                          src={project.image}
                          alt={`${project.title} project image`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          {...(index < 2
                            ? { priority: true }
                            : { loading: "lazy" })}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded-full shadow-md text-xs font-medium text-[#003C46] transition-all duration-300 group-hover:shadow-lg">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6 space-y-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-md text-gray-600 leading-6  flex-grow">
                          {project.description}
                        </p>
                        <Link
                          href={project.href}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#0098AF] hover:text-[#007A8C] transition-colors duration-300 mt-auto"
                        >
                          View in detail
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious
                  className="absolute left-[-40px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-[#0098AF] text-white hover:bg-[#007A8C] transition-colors duration-300 shadow-md"
                  aria-label="Previous projects"
                />
                <CarouselNext
                  className="absolute right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-[#0098AF] text-white hover:bg-[#007A8C] transition-colors duration-300 shadow-md"
                  aria-label="Next projects"
                />
              </>
            )}
          </Carousel>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/projects">
            <Button className="bg-[#0098AF] text-white hover:bg-[#007A8C] rounded-full px-8 py-3 text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              View All Projects
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
