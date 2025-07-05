import React from "react";

interface BadgeProps {
  children: React.ReactNode; // Support children (e.g., text content)
  variant?: "default" | "secondary" | "outline"; // Add variant options
  className?: string; // Optional additional classes
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantStyles = {
    default: "bg-blue-100 text-blue-600",
    secondary: "bg-gray-100 text-gray-600",
    outline: "bg-transparent text-gray-600 border border-gray-300",
  };

  return (
    <span
      className={`inline-block ${variantStyles[variant]} text-sm font-medium py-1 px-3 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;