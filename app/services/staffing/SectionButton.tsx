import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface SectionButtonProps {
  text: string;
  theme: 'jobseeker' | 'employer';
  className?: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ 
  text, 
  theme,
  className 
}) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg",
        isJobSeeker 
          ? "bg-gradient-to-r from-[#0098af] to-[#00b4d8] hover:shadow-[0_5px_15px_rgba(0,152,175,0.4)] hover:scale-105" 
          : "bg-gradient-to-r from-[#0098af] to-[#00b4d8] hover:shadow-[0_5px_15px_rgba(0,180,216,0.4)] hover:scale-105",
        className
      )}
    >
      <span>{text}</span>
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

export default SectionButton;
