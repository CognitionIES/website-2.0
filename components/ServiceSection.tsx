
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoItem {
  src: string | { src: string };
  alt: string;
}

interface LogoRow {
  label: string;
  items: LogoItem[];
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
  logos: LogoRow[];
  index: number;
  isActive: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  description,
  imageUrl,
  bulletPoints,
  logos,
  index,
  isActive
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);
  }, [imageUrl]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={cn(
        "service-section flex items-center justify-center py-10 px-4 md:px-8",
        isEven ? "bg-gradient-to-b from-[#f8f9fa] to-[#f1f3f5]" : "bg-gradient-to-b from-[#f1f3f5] to-[#f8f9fa]"
      )}
    >
      <div 
        className={cn(
          "w-full max-w-7xl mx-auto service-content p-4 md:p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur",
          isActive ? "animate-scale-in" : "opacity-0"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Section */}
          <div 
            className={cn(
              "lg:col-span-5 relative h-64 md:h-[500px] rounded-xl overflow-hidden shadow-2xl",
              isEven ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className={cn(
              "absolute inset-0 transition-opacity duration-700",
              isImageLoaded ? "opacity-100" : "opacity-0 image-loading"
            )}>
              <Image
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={cn(
              "lg:col-span-7 space-y-6",
              isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8",
              isActive ? "animate-slide-up" : ""
            )}
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
              <div className="h-1 w-32 md:w-40 bg-gradient-to-r from-gray-900 to-gray-400 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bulletPoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start space-x-2 group"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-900 group-hover:bg-blue-500 transition-colors flex-shrink-0"></div>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{point}</p>
                </div>
              ))}
            </div>

            {logos.length > 0 && (
              <div className="space-y-5 pt-2">
                {logos.map((row, rowIdx) => (
                  <div key={rowIdx} className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-1">{row.label}</h3>
                    <div className="logo-grid">
                      {row.items.map((logo, idx) => (
                        <div
                          key={idx}
                          className="relative group p-1 rounded-md flex items-center justify-center hover:bg-gray-50 transition-all"
                        >
                          <Image
                            src={typeof logo.src === "string" ? logo.src : logo.src.src}
                            alt={logo.alt}
                            
                            className="max-h-8 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;