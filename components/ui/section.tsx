import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
  children: ReactNode;
  className?: string;
  customPadding?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className,
  customPadding,
  as = "section",
  ...props
}: SectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion[as] as any;
  
  return (
    <Component
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "w-full",
        customPadding || "py-16 md:py-24",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {children}
      </div>
    </Component>
  );
}
