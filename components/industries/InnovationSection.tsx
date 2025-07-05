"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Rocket, Target } from 'lucide-react';

interface InnovationSectionProps {
  industry: Industry;
}

const InnovationSection: FC<InnovationSectionProps> = ({ industry }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const innovations = [
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: `Pioneering ${industry.title.toLowerCase()} solutions with cutting-edge technology`
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Delivering accuracy and reliability in every project'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: "Preparing your business for tomorrow's challenges"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Innovation at Core</h2>
          <p className="text-gray-600">
            Driving technological advancement in {industry.title}
          </p>
        </div>
        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/5 to-transparent"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;