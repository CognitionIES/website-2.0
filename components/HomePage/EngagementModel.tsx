/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EngagementModel {
  id: string;
  title: string;
  description: string;
}

const engagementModels: EngagementModel[] = [
  {
    id: "time-material",
    title: "Time & Material",
    description:
      "Agile and quick ramp-up, transparent cost structure, and access to pre-vetted technical talent. Ideal for projects where scope and duration evolve.",
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    description:
      "Industry-focused recruiters and AI-driven hiring processes that reduce cost-per-hire while ensuring compliance and quality hires.",
  },
  {
    id: "project-hiring",
    title: "Project-Based Hiring",
    description:
      "Fast-track recruitment tailored to specific project timelines, backed by strong domain expertise and strict delivery standards.",
  },
  {
    id: "engineering",
    title: "Specialised Engineering Services",
    description:
      "Domain-specific experts delivering advanced engineering solutions with consistent quality, digitalization, and cost optimization.",
  },
  {
    id: "build-operate",
    title: "Build & Operate",
    description:
      "Long-term model where we build, manage, and scale dedicated teams with shared accountability and seamless client transfer options.",
  },
];

const EngagementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % engagementModels.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? engagementModels.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying, isPaused]);

  const getVisibleCards = () => {
    const extended = [
      ...engagementModels,
      ...engagementModels,
      ...engagementModels,
    ];
    const startIndex = currentIndex + engagementModels.length;
    return {
      cards: extended.slice(startIndex - 1, startIndex + 4),
      centerIndex: 1,
    };
  };

  const { cards, centerIndex } = getVisibleCards();

  return (
    <section
      className="w-full py-16 sm:py-12 lg:py-16  bg-gradient-to-b from-[#FFF] to-[#E6F0F5]/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
            <p className="text-xs font-medium tracking-wider text-[#0098AF] uppercase">
              Models
            </p>
          </div>
          <h2 className="max-w-7xl text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46]">
            Our Engagement{" "}
            <span className="font-semibold bg-gradient-to-br from-[#003C46] to-[#1C7A8A] bg-clip-text text-transparent">
              Models
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            Flexible partnership models designed to meet your unique business
            needs and drive sustainable growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-card border-[#0098af] hover:shadow-card-hover transition-smooth"
            style={{
              backgroundColor: "hsl(0 0% 100%)",
              borderColor: "hsl(220 15% 90%)",
            }}
            onClick={prevSlide}
            aria-label="Previous engagement model"
          >
            <ChevronLeft
              className="h-4 w-4 sm:h-5 sm:w-5"
              style={{ color: "hsl(220 15% 15%)" }}
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-card border-[#0098af] hover:shadow-card-hover transition-smooth"
            style={{
              backgroundColor: "hsl(0 0% 100%)",
              borderColor: "hsl(220 15% 90%)",
            }}
            onClick={nextSlide}
            aria-label="Next engagement model"
          >
            <ChevronRight
              className="h-4 w-4 sm:h-5 sm:w-5"
              style={{ color: "hsl(220 15% 15%)" }}
            />
          </Button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-16">
            {/* Desktop: 3 cards visible */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {cards.slice(0, 3).map((model, index) => (
                <div
                  key={`${model.id}-${index}`}
                  className={`
                    relative transition-all duration-500 cursor-pointer
                    w-[280px] sm:w-[320px] lg:w-[360px]
                    ${
                      index === centerIndex
                        ? "scale-100 z-20"
                        : "scale-90 opacity-70 hover:opacity-90"
                    }
                  `}
                  onClick={() => {
                    if (index === 0) prevSlide();
                    if (index === 2) nextSlide();
                  }}
                >
                  <div
                    className={`
                    w-full h-64 sm:h-72 p-6 sm:p-8 rounded-lg shadow-card border-[#0098af] transition-smooth hover:shadow-card-hover
                    ${index === centerIndex ? "bg-[#0098af]" : ""}
                  `}
                    style={{
                      backgroundColor:
                        index === centerIndex ? undefined : "hsl(0 0% 100%)",
                      borderColor: "hsl(220 15% 90%)",
                    }}
                  >
                    <h3
                      className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight"
                      style={{
                        color:
                          index === centerIndex
                            ? "hsl(0 0% 100%)"
                            : "hsl(220 15% 15%)",
                      }}
                    >
                      {model.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        color:
                          index === centerIndex
                            ? "hsl(0 0% 100% / 0.9)"
                            : "hsl(220 10% 50%)",
                      }}
                    >
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: 1 card visible */}
            <div className="md:hidden">
              <div className="w-full max-w-[360px] mx-auto">
                <div className="w-full h-64 sm:h-72 p-6 rounded-lg bg-[#0098af] shadow-card-hover border-[#0098af]">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-4 leading-tight"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {engagementModels[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white">
                    {engagementModels[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {engagementModels.map((_, index) => (
              <button
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-smooth
                  ${
                    index === currentIndex
                      ? "w-6 sm:w-8"
                      : "hover:bg-[hsl(220_10%_50%)]"
                  }
                `}
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? "hsl(187 100% 34%)"
                      : "hsl(220 15% 90%)",
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementCarousel;
