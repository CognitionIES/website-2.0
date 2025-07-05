"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';

interface ClientSectionProps {
  industry: Industry;
}

const ClientSection: FC<ClientSectionProps> = ({ industry }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industry.clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-700">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;