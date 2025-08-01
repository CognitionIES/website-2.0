import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { useIsMobile } from "@/hooks/use-mobile";

const SLIDE_INTERVAL = 5000;

export function ProjectSlider() {
  const isMobile = useIsMobile();

  // Create infinite loop array
  const infiniteProjects = [...projects, ...projects, ...projects];
  const [currentIndex, setCurrentIndex] = useState(projects.length); // Start from middle
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  const cardsToShow = isMobile ? 1 : 2;
  const visibleProjects = infiniteProjects.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSlideDirection("right");
        setCurrentIndex((prev) => {
          const next = prev + 1;
          // Reset to middle when reaching the end to maintain infinite loop
          if (next >= infiniteProjects.length - cardsToShow) {
            return projects.length;
          }
          return next;
        });
      }, SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [isHovered, cardsToShow, infiniteProjects.length]);

  const handlePrevious = useCallback(() => {
    setSlideDirection("left");
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // Reset to middle when reaching the beginning
      if (next < 0) {
        return infiniteProjects.length - cardsToShow - projects.length;
      }
      return next;
    });
  }, [cardsToShow, infiniteProjects.length]);

  const handleNext = useCallback(() => {
    setSlideDirection("right");
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Reset to middle when reaching the end
      if (next >= infiniteProjects.length - cardsToShow) {
        return projects.length;
      }
      return next;
    });
  }, [cardsToShow, infiniteProjects.length]);

  // Calculate dot indicators based on actual project position
  const currentProjectIndex = currentIndex % projects.length;

  const handleDotClick = (index: number) => {
    setSlideDirection(index > currentProjectIndex ? "right" : "left");
    setCurrentIndex(projects.length + index);
  };

  // Animation variants for sliding
  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#F5FDFF] to-[#99D5DF]/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003C46] mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-[#5B5B5B] max-w-2xl mx-auto leading-relaxed">
            Explore our latest work in delivering innovative solutions across
            industries.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={currentIndex}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="flex gap-4 lg:gap-6"
              >
                {visibleProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${currentIndex}-${index}`}
                    className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0`}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Desktop */}
          {!isMobile && (
            <>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  size="default"
                  className="w-12 h-12 rounded-full shadow-lg"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                <Button
                  onClick={handleNext}
                  variant="outline"
                  size="default"
                  className="w-12 h-12 rounded-full shadow-lg"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Navigation Controls - Mobile */}
        {isMobile && (
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="default"
              className="w-12 h-12 rounded-full"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="default"
              className="w-12 h-12 rounded-full"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentProjectIndex === index
                  ? "bg-[#0098AF] scale-110"
                  : "bg-[#99D5DF] hover:bg-[#0098AF]/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
