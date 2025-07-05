"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatisticsSectionProps {
  industry: Industry;
}

const StatisticsSection: FC<StatisticsSectionProps> = ({ }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Global Partners' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;