import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author?: string;
  position?: string;
  theme: 'jobseeker' | 'employer';
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position,
  theme,
  delay = 0 
}) => {
  const isJobSeeker = theme === 'jobseeker';
  
  return (
    <div 
      className={cn(
        "p-5 rounded-lg mb-6 relative opacity-0 animate-fade-in",
        isJobSeeker 
          ? "bg-[#E6F0F5] border-l-4 border-[#003C46]" 
          : "bg-[#003C46] bg-opacity-70 border-l-4 border-[#00b4d8]"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote 
        size={20} 
        className={cn(
          "absolute top-3 left-3 opacity-20",
          isJobSeeker ? "text-[#0098af]" : "text-[#00b4d8]"
        )} 
      />
      
      <p className={cn(
        "italic relative z-10 pl-6",
        isJobSeeker ? "text-[#003C46]" : "text-[#00b4d8] font-bold"
      )}>
        &quot;{quote}&quot;
      </p>
      
      {author && (
        <div className="mt-3 flex items-center pl-6">
          <div className={cn(
            "w-1 h-8 mr-2",
            isJobSeeker ? "bg-[#0098af]" : "bg-[#00b4d8]"
          )}></div>
          <div>
            <p className={cn(
              "font-semibold",
              isJobSeeker ? "text-[#003C46]" : "text-white"
            )}>
              {author}
            </p>
            {position && (
              <p className={cn(
                "text-xs",
                isJobSeeker ? "text-[#5b5b5b]" : "text-white/70"
              )}>
                {position}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
