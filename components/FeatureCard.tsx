
import React from 'react';
import { CheckSquare, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  theme: 'jobseeker' | 'employer';
  delay?: number;
  icon?: 'check' | 'sparkle';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  theme, 
  delay = 0,
  icon = 'check'
}) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <div 
      className={cn(
        "relative rounded-xl  transition-all duration-300 ease-in-out animate-fade-in overflow-hidden",
        isJobSeeker 
          ? "bg-white hover:shadow-[0_0_15px_rgba(0,184,216,0.3)]" 
          : "bg-[#00313B] hover:shadow-[0_0_15px_rgba(230,240,245,0.2)]"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-3">
        <div className={cn(
          "flex-shrink-0 p-2 rounded-lg",
          isJobSeeker ? "bg-[#004A5A]/20" : "bg-[#004A5A]"
        )}>
          {icon === 'check' ? (
            <CheckSquare 
              className={cn(
                "w-5 h-5 ",
                isJobSeeker ? "text-[#0098af]" : "text-[#00b4d8]"
              )} 
            />
          ) : (
            <Sparkles
              className={cn(
                "w-5 h-5",
                isJobSeeker ? "text-[#0098af]" : "text-[#00b4d8]"
              )} 
            />
          )}
        </div>
        <div className="flex-1">
          <h4 className={cn(
            "text-md font-semibold mt-[5px]",
            isJobSeeker ? "text-[#003C46]" : "text-[#E6F0F5]"
          )}>
            {title}
          </h4>
          <p className={cn(
            "text-sm",
            isJobSeeker ? "text-[#5b5b5b]" : "text-gray-300"
          )}>
            
          </p>
        </div>
      </div>
      
      {/* Add a subtle effect on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out ",
        isJobSeeker ? "bg-gradient-to-r from-transparent to-[#E6F0F5]/20 " : "bg-gradient-to-r from-transparent to-[#00b4d8]/10",
        "group-hover:opacity-100"
      )} />
    </div>
  );
};

export default FeatureCard;
