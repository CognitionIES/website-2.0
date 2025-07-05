"use client";

import { FC } from 'react';
import Image from 'next/image';
import { Industry } from '@/types/industry';

interface HeroSectionProps {
  industry: Industry;
}

const HeroSection: FC<HeroSectionProps> = ({ industry }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src={industry.heroImage}
        alt={`${industry.title} hero image`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {industry.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;