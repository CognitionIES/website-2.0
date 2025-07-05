"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CaseStudiesProps {
  industry: Industry;
}

const CaseStudies: FC<CaseStudiesProps> = ({ industry }) => {
  const caseStudies = [
    {
      title: `${industry.title} Innovation Project`,
      description: 'Revolutionizing industry standards with cutting-edge solutions',
      tags: ['Innovation', 'Technology', 'Efficiency'],
      image: industry.heroImage
    },
    {
      title: 'Process Optimization',
      description: 'Streamlining operations for enhanced productivity',
      tags: ['Optimization', 'Automation', 'ROI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600">
            Discover how we&apos;ve helped our clients achieve remarkable results
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{study.title}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;