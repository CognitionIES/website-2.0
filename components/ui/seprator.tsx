import React from "react";

interface SeparatorProps {
  className?: string; // Allow for custom styling
}

export const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
  return <hr className={`border-t-2 border-gray-300 ${className}`} />;
};
