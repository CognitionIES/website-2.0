import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundElementProps {
  className?: string;
  variant?: "circle" | "dots" | "lines" | "grid";
  size?: "sm" | "md" | "lg";
  color?: string;
  animate?: boolean;
}

const BackgroundElement: React.FC<BackgroundElementProps> = ({
  className,
  variant = "circle",
  size = "md",
  color = "bg-[#0098af",
  animate = true,
}) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-32 w-32",
    lg: "h-64 w-64",
  };

  const getElement = () => {
    switch (variant) {
      case "dots":
        return (
          <div
            className={cn(
              "absolute pattern-dots opacity-20",
              sizeClasses[size],
              animate && "animate-pulse-slow",
              className
            )}
          />
        );
      case "lines":
        return (
          <div
            className={cn(
              "absolute pattern-lines opacity-20",
              sizeClasses[size],
              animate && "animate-pulse-slow",
              className
            )}
          />
        );
      case "grid":
        return (
          <div className={cn("absolute", className)}>
            <div
              className={cn(
                "relative grid grid-cols-2 gap-2 opacity-20",
                sizeClasses[size]
              )}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={cn("h-full w-full rounded-sm", color)}
                  style={{
                    animationDelay: animate ? `${i * 0.2}s` : "0s",
                  }}
                />
              ))}
            </div>
          </div>
        );
      case "circle":
      default:
        return (
          <div
            className={cn(
              "absolute rounded-full opacity-20",
              color,
              sizeClasses[size],
              animate && "animate-float",
              className
            )}
          />
        );
    }
  };

  return getElement();
};

export default BackgroundElement;
