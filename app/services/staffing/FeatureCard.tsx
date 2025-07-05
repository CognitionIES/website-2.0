import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Star } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  theme: 'jobseeker' | 'employer';
  delay?: number;
  icon?: 'check' | 'star';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  theme,
  delay = 0,
  icon = 'check'
}) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <div 
      className={cn(
        "transform transition-all duration-300 p-5 rounded-lg mb-4 opacity-0 animate-fade-in hover-card-scale",
        isJobSeeker 
          ? "bg-white hover:shadow-lg hover:-rotate-1 border border-[#0098af]/20" 
          : "bg-[#003C46] bg-opacity-90 hover:shadow-md hover:rotate-1 border border-[#00b4d8]/20",
      )}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-center mb-2">
        <div 
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300",
            isJobSeeker 
              ? "bg-gradient-to-r from-[#0098af] to-[#00b4d8] text-white shadow-md" 
              : "bg-gradient-to-r from-[#00b4d8] to-[#0098af] text-white shadow-md"
          )}
        >
          {icon === 'check' ? (
            <Check size={18} strokeWidth={3} />
          ) : (
            <Star size={18} strokeWidth={3} />
          )}
        </div>
        <h3 
          className={cn(
            "font-bold text-lg",
            isJobSeeker ? "text-[#0098AF]" : "text-[#00b4d8]"
          )}
        >
          {title}
        </h3>
      </div>
      <p 
        className={cn(
          "pl-12 text-sm leading-relaxed",
          isJobSeeker ? "text-[#5b5b5b]" : "text-white text-opacity-90"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
