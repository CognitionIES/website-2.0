import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function FooterBackground() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay showing animations to avoid initial layout shifts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {/* Large gradient orbs with enhanced animations */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#0098AF]/20 rounded-full blur-3xl -z-10 pointer-events-none transform-gpu",
          isVisible ? "opacity-20 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-12",
          "transition-all duration-1200 ease-out"
        )}
      />
      <div 
        className={cn(
          "absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#5B5B5B]/20 rounded-full blur-3xl -z-10 pointer-events-none transform-gpu",
          isVisible ? "opacity-15 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-12",
          "transition-all duration-1200 ease-out delay-300"
        )}
      />
      
      {/* Innovative pulsing dots with staggered animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={cn(
            "absolute top-12 left-12 w-2 h-2 md:w-3 md:h-3 bg-[#0098AF]/30 rounded-full animate-pulse-slow", 
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 ease-in-out"
          )}
        />
        <div 
          className={cn(
            "absolute bottom-16 right-16 w-2 h-2 md:w-3 md:h-3 bg-[#0098AF]/30 rounded-full animate-pulse-slow", 
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 ease-in-out delay-300"
          )}
          style={{ animationDelay: "1s" }}
        />
        <div 
          className={cn(
            "absolute top-24 right-1/4 w-2 h-2 bg-[#0098AF]/20 rounded-full animate-pulse-slow", 
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 ease-in-out delay-500"
          )}
          style={{ animationDelay: "1.5s" }}
        />
        <div 
          className={cn(
            "absolute bottom-28 left-1/3 w-1.5 h-1.5 bg-[#0098AF]/25 rounded-full animate-pulse-slow", 
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 ease-in-out delay-700"
          )}
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  );
}
