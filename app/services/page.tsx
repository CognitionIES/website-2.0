"use client";

import sections from "@/constants/sections";
import frameBackground from "@/constants/images/Background/Frame_8.jpg";
import Footer from "@/components/footer";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { Suspense, useEffect, useState, useRef, useCallback } from "react";
import SearchParamsHandler from "./SearchParamsHandler";
import { ScrollSection } from "@/components/ScrollSection";
import CTASection from "@/components/CTA";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleParamChange = useCallback((params: Record<string, string>) => {
    console.log("Search parameters changed:", params);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionRefs.current.length || isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;

      if (
        currentSection === sectionRefs.current.length - 1 &&
        event.deltaY > 0
      ) {
        setIsScrolling(false);
        return;
      }

      if (currentSection === 0 && event.deltaY < 0) {
        setIsScrolling(false);
        return;
      }

      event.preventDefault();
      setIsScrolling(true);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(sectionRefs.current.length - 1, currentSection + direction)
      );
      scrollToSection(nextSection);
    };

    const handleScrollEnd = () => setIsScrolling(false);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, isScrolling]);

  return (
    <div>
      <div className="relative min-h-screen overflow-y-auto pb-8 snap-y snap-mandatory">
        <div
          className="fixed inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url(${frameBackground.src})`,
          }}
        />
        <div className="relative">
          <header className="relative z-50">
            <MegaMenu />
          </header>
          <main className="relative pt-8">
            <Suspense fallback={<div>Loading search parameters...</div>}>
              <SearchParamsHandler onParamChange={handleParamChange} />
            </Suspense>
            {Object.entries(sections).map(([key, section], index) => (
              <section
                key={key}
                id={key}
                ref={(el) => {
                  sectionRefs.current[index] = el as HTMLDivElement | null;
                }}
                className={` flex items-center justify-center ${
                  isMobile ? "py-[96px]  px-2 min-h-3/4" : "py-24 min-h-screen"
                } snap-start ${index === 0 ? "mt-12" : ""}`}
              >
                <div
                  className={`w-full max-w-7xl  mx-auto px-2 py-8 rounded-3xl transition-colors duration-500 outline outline-2 outline-black/50 ${
                    index % 2 === 0
                      ? "bg-blue-400/5 dark:bg-blue-950/10"
                      : "bg-gray-400/10 dark:bg-gray-900/10"
                  }`}
                  style={{ minHeight: "50vh" }}
                >
                  <ScrollSection
                    index={index}
                    title={section.title}
                    description={section.description}
                    imageUrl={section.imageUrl.src}
                    bulletPoints={section.bulletPoints}
                    additionalImageUrl={section.additionalImageUrl?.src}
                  />
                </div>
              </section>
            ))}
          </main>
        </div>
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90 z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MousePointer2 size={isMobile ? 14 : 16} aria-hidden="true" />
                <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}>
                  Scroll to explore
                </span>
                <ChevronDown size={isMobile ? 14 : 16} aria-hidden="true" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}