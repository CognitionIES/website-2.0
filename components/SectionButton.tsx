import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionButtonProps {
  text: string;
  theme: 'jobseeker' | 'employer';
  size?: 'default' | 'sm' | 'lg';
}

const SectionButton: React.FC<SectionButtonProps> = ({ text, theme, size = 'default' }) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <Button 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 ease-in-out",
        isJobSeeker 
          ? "bg-[#0098af] hover:bg-[#007A8F] text-white" 
          : "bg-[#00b4d8] hover:bg-[#0090AD] text-white",
        {
          'px-3 py-1 text-sm': size === 'sm',
          'px-6 py-2': size === 'default',
          'px-8 py-3 text-lg': size === 'lg',
        }
      )}
    >
      <span className="flex items-center justify-center">
        {text}
        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 w-full h-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </Button>
  );
};

export default SectionButton;
