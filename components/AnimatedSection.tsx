import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "right" | "left";
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.2,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold, // Default to 0.2 (20% visible)
        rootMargin: "0px", // Remove negative margin to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (direction) {
      case "right":
        return "animate-fade-in-right";
      case "left":
        return "animate-fade-in-left";
      case "up":
      default:
        return "animate-fade-in";
    }
  };

  // Combine base classes with animation class when visible
  const combinedClassName = cn(
    "transition-all duration-700",
    className,
    isVisible ? getAnimationClass() : ""
  );

  // Initial style is hidden, animation style applies when visible
  const style = isVisible
    ? { animationDelay: `${delay}s`, animationFillMode: "forwards" }
    : { opacity: 0 };

  return (
    <div ref={sectionRef} id={id} className={combinedClassName} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;