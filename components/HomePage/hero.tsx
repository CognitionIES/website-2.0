"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Navigation functions
  const goToPrevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const goToSlide = (index: SetStateAction<number>) => setCurrentSlide(index);

  return (
    <section
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden font-sans"
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
      onTouchStart={() => isMobile && setIsPaused(true)}
      onTouchEnd={() => isMobile && setIsPaused(false)}
      aria-label="Cognition IES Hero Slideshow"
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={isMobile ? slide.mobileImage : slide.image}
            alt={slide.title}
            width={1920}
            height={1080}
            priority={index === 0}
            sizes="100vw"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/70 to-[#0098AF]/50" />

          {/* Text Overlay */}
          {isMobile ? (
            <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center z-10">
              <div className="text-right text-white px-4 max-w-md">
                <span className="inline-block py-1 px-3 bg-white/15 backdrop-blur-sm text-white text-xs uppercase tracking-widest rounded-full border border-white/10 shadow-lg">
                  {slide.majorService}
                </span>
                <p className="text-xs text-[#99D5DF] font-medium tracking-widest uppercase drop-shadow-sm mt-2">
                  {slide.subtitle}
                </p>
                <h1 className="text-xl font-bold mb-3 leading-tight text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xs font-light leading-relaxed text-gray-100 drop-shadow-md">
                  {slide.description}
                </p>
                
              </div>
            </div>
          ) : (
            <div className="absolute bottom-8 right-8 flex items-end justify-end z-10">
              <div className="text-right text-white px-4 sm:px-6 max-w-5xl">
                <span className="inline-block py-1.5 px-4 bg-white/15 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-semibold rounded-full border border-white/10 animate-slide-right shadow-lg">
                  {slide.majorService}
                </span>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#99D5DF] font-medium tracking-widest uppercase drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 text-gray-100 font-light leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {isMobile ? (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 rounded-full z-20 hover:bg-[#0098AF]/80 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="text-white w-4 h-4" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 rounded-full z-20 hover:bg-[#0098AF]/80 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
            aria-label="Next Slide"
          >
            <ChevronRight className="text-white w-4 h-4" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
            aria-label="Next Slide"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {isMobile ? (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-[#0098AF] scale-125"
                  : "bg-white/60 hover:bg-white/90 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <div className="absolute bottom-8 right-8 flex flex-col space-y-2.5 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-[#0098AF] h-5"
                  : "bg-white/60 hover:bg-white/90 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
// Write an excellent blog or article about closures in javascript, explaining the concept, how it works, and providing examples

// What is async await in JavaScript?
/*import { useEffect, useState, useRef } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(
    Array(heroSlides.length).fill(false)
  );
  const [loadingProgress, setLoadingProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const slideTimerRef = useRef<number | null>(null);

  // Progress animation for current slide
  useEffect(() => {
    if (isPaused) return;

    setLoadingProgress(0);

    const startTime = Date.now();
    const duration = 5000; // 5 seconds, same as slide duration

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setLoadingProgress(progress);

      if (progress < 100) {
        slideTimerRef.current = requestAnimationFrame(animateProgress);
      }
    };

    slideTimerRef.current = requestAnimationFrame(animateProgress);

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, duration);

    return () => {
      clearTimeout(timer);
      if (slideTimerRef.current) {
        cancelAnimationFrame(slideTimerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  // Handle pause/resume
  useEffect(() => {
    if (isPaused && slideTimerRef.current) {
      cancelAnimationFrame(slideTimerRef.current);
    }
  }, [isPaused]);

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle image load
  const handleImageLoad = (index: number) => {
    const newLoadState = [...isLoaded];
    newLoadState[index] = true;
    setIsLoaded(newLoadState);
  };

  return (
    <section
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Engineering Innovation Hero Slideshow"
    >
      {/* Progress Bar 
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-30">
        <div
          ref={progressRef}
          className="h-full bg-[#0098af] transition-all duration-300 ease-linear"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      {/* Slides 
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={currentSlide !== index}
        >
          {slide.blurImage ? (
            <div
              className={`blur-load w-full h-full ${
                isLoaded[index] ? "loaded" : ""
              }`}
              style={{ backgroundImage: `url(${slide.blurImage})` }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                onLoad={() => handleImageLoad(index)}
                className="w-full h-full object-cover object-center brightness-[0.85]"
              />
            </div>
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
              onLoad={() => handleImageLoad(index)}
              className="w-full h-full object-cover object-center brightness-[0.85]"
            />
          )}

          <div className="absolute inset-0 hero-gradient" />

          {/* Text Overlay 
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:max-w-2xl lg:max-w-3xl">
                <div
                  className={`transition-all duration-700 delay-100 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="hero-subtitle text-sm sm:text-base font-medium tracking-widest uppercase text-[#33C3F0] mb-4 inline-block">
                    {slide.subtitle}
                  </span>
                </div>

                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight text-white tracking-tight transition-all duration-700 delay-200 whitespace-normal max-w-full ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-sm sm:text-base md:text-lg mb-8 text-white/90 font-light leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.description}
                </p>

                <button
                  className={`group px-7 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 shadow-lg hover:shadow-xl delay-400 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="relative">
                    Explore Solutions
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098af] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows with improved design 
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 sm:px-6 md:px-8 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={goToPrevSlide}
          className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/10 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#0098af]/30 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNextSlide}
          className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/10 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#0098af]/30 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide Indicators (redesigned) 
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ease-out focus:outline-none group`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-brand-blue"
                  : "w-4 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
 */
