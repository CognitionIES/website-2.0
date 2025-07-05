import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: boolean;
  gradientBg?: boolean;
  decorativeAccent?: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id, title, subtitle, children, accent = false, gradientBg = false, decorativeAccent = false }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 relative overflow-hidden", 
        accent ? "bg-brand-teal/5" : "bg-white",
        gradientBg && "bg-gradient-to-br from-white via-brand-blue/5 to-brand-teal/5"
      )}
    >
      {decorativeAccent && (
        <div className="absolute top-10 right-10 opacity-20">
          <Sparkle size={80} className="text-brand-orange" />
        </div>
      )}
      
      {gradientBg && (
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-brand-teal/20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-orange/10 translate-x-1/4 translate-y-1/4" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12 relative">
          <div className="w-12 h-1 bg-brand-orange mb-4 rounded" />
          <h2 className="text-3xl md:text-4xl font-medium mb-3 text-brand-darkGray">
            {title.split(" ").map((word: string, i: number) => (
              <span key={i} className={i % 2 === 1 ? "text-brand-teal" : ""}>{word} </span>
            ))}
          </h2>
          {subtitle && <p className="text-lg text-brand-gray">{subtitle}</p>}
        </div>
        <div className="animate-slide-up [animation-delay:200ms] [animation-fill-mode:backwards] relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;