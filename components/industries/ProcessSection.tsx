"use client";

import { FC } from 'react';

const ProcessSection: FC = () => {
  const processes = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Initial consultation to understand requirements and project scope"
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Detailed design phase with regular client collaboration"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Efficient execution with quality control measures"
    },
    {
      step: "4",
      title: "Testing & Validation",
      description: "Comprehensive testing and validation procedures"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;