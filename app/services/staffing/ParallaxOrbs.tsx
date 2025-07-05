import React from 'react';
import { cn } from '@/lib/utils';

interface ParallaxOrbsProps {
  theme: 'jobseeker' | 'employer';
}

const ParallaxOrbs: React.FC<ParallaxOrbsProps> = ({ theme }) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orb */}
      <div 
        className={cn(
          "absolute rounded-full opacity-20 animate-float",
          isJobSeeker 
            ? "bg-gradient-to-br from-[#000000]/30 to-[#000000]/30" 
            : "bg-gradient-to-br from-[#E6F0F5]/20 to-[#00b4d8]/20",
          "w-72 h-72 -top-20 -right-20"
        )}
        style={{ animationDuration: '15s' }}
      />
      
      {/* Medium orb */}
      <div 
        className={cn(
          "absolute rounded-full opacity-10 animate-float",
          isJobSeeker 
            ? "bg-gradient-to-tr from-[#000000]/20 to-[#000000]/20" 
            : "bg-gradient-to-tr from-[#00b4d8]/20 to-[#E6F0F5]/10",
          "w-48 h-48 bottom-32 left-10"
        )}
        style={{ animationDuration: '20s', animationDelay: '2s' }}
      />
      
      {/* Small orbs */}
      <div 
        className={cn(
          "absolute rounded-full opacity-20 animate-float",
          isJobSeeker 
            ? "bg-[#0098af]/30" 
            : "bg-[#00b4d8]/30",
          "w-16 h-16 top-32 left-20"
        )}
        style={{ animationDuration: '8s', animationDelay: '1s' }}
      />
      
      <div 
        className={cn(
          "absolute rounded-full opacity-20 animate-float",
          isJobSeeker 
            ? "bg-[#00b4d8]/30" 
            : "bg-[#E6F0F5]/20",
          "w-12 h-12 bottom-20 right-32"
        )}
        style={{ animationDuration: '10s', animationDelay: '3s' }}
      />
    </div>
  );
};

export default ParallaxOrbs;
