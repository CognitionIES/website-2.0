"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';
import * as Icons from 'lucide-react';

interface ServiceHighlightsProps {
  industry: Industry;
}

const ServiceHighlights: FC<ServiceHighlightsProps> = ({ industry }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industry.services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {IconComponent && (
                    <IconComponent className="h-8 w-8 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;