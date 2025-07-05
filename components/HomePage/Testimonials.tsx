/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "I am pleased to provide this reference for Cognition IES, which has been a reliable partner in supporting our engineering and cost analysis initiatives at well-know client. They bring strong capabilities in teardown and idea generation, offering valuable insights that helped us refine our product design and explore cost-effective alternatives. Their approach to feature value and cost analysis has been beneficial in identifying areas for improvement.Cognition’s should-cost studies have provided useful visibility into cost structures and the level of detail has helped us make more informed decisions. In addition, their communication and deliverables are well-organized, making it easy for our teams to interpret findings and take action.We have had a very positive experience working with Cognition and would recommend them to organizations seeking engineering design support especially in the VAVE space.",
    author: "Anonymous",
    position: "Senior Vice President",
    company: "Confidential Client",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    quote:
      "Partnering with Cognition IES for our plant’s digital transformation has been a game-changer. From the very beginning, their team demonstrated a deep understanding of both engineering and digital technologies. The precision laser scanning helped us uncover layout inconsistencies. The digital twin they built is not just a model — it’s a dynamic tool that gives us real-time visibility into our operations. We’ve seen significant improvements in our decision-making, reduced downtime, and far fewer issues during equipment installation and changeovers. Their implementation of an evergreen strategy ensures that our digital systems evolve with us. The training and support provided to our staff were exceptional — even our most experienced operators quickly adapted to the new tools. Cognition IES didn’t just deliver a service; they’ve empowered us with a smarter, scalable way to run our facility. This project laid the foundation for Industry 4.0 in our plant, and we’re already planning the next phase with them.",
    author: "Anonymous",
    position: "Project Manager",
    company: "Confidential Client",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: "testimonial-3",
    quote:
      "Working with Cognition IES transformed our approach to product development. Their comprehensive analysis identified optimization opportunities we hadn't considered. The team's expertise in value engineering delivered a 15% reduction in manufacturing costs while enhancing product quality. Their clear communication and structured methodology made complex engineering concepts accessible to our entire team. I highly recommend their services to any company looking to gain a competitive edge",
    author: "Anonymous",
    position: "Senior Principal Engineer",
    company: "Confidential Client",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
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
      className="w-full py-10 sm:py-8 lg:py-12 relative overflow-hidden"
      style={{ backgroundColor: "#E6F0F5" }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 rounded-full bg-[#0098af] opacity-5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 rounded-full bg-[#00b4d8] opacity-5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.09, 0.09] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-[90%] sm:max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] text-left">
            Voices of Success
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mt-2">
            Discover how our solutions have transformed businesses and created
            lasting impact, directly from the leaders who partner with us.
          </p>
        </motion.div>

        {/* Carousel with Adaptive Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-full">
                  <Card
                    className={cn(
                      "bg-white/30 border-none rounded-2xl sm:rounded-3xl mx-auto relative",
                      "w-full max-w-[100%] sm:max-w-3xl lg:max-w-5xl h-[400px] sm:h-[380px] lg:h-[420px]"
                    )}
                  >
                    <CardContent className="p-6 sm:p-8 flex flex-col h-full relative">
                      <Quote
                        size={40}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#0098af] opacity-10"
                      />
                      <div className="absolute bottom-0 left-0 w-3/4 ml-8 sm:ml-[140px] items-center h-1 bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent" />
                      <blockquote
                        className="text-[#000000]/90 text-center italic text-base sm:text-lg lg:text-xl mb-6 flex-grow overflow-y-auto pr-2 sm:pr-4"
                        style={{ maxHeight: "260px" }}
                      >
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex justify-center items-center gap-4 mt-auto">
                        <div className="text-center">
                          <h3 className="text-[#5b5b5b] font-bold text-base sm:text-lg">
                            {testimonial.author}
                          </h3>
                          <p className="text-[#5b5b5b] text-xs sm:text-sm">
                            {testimonial.position}
                          </p>
                          <p className="text-[#0098af] text-xs sm:text-sm font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Hidden on Mobile, Visible on Larger Screens */}
            {!isMobile && (
              <>
                <CarouselPrevious
                  className="absolute left-[-40px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#0098af] text-white hover:bg-[#00b4d8] transition-colors duration-300"
                  aria-label="Previous testimonial"
                />
                <CarouselNext
                  className="absolute right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#0098af] text-white hover:bg-[#00b4d8] transition-colors duration-300"
                  aria-label="Next testimonial"
                />
              </>
            )}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
