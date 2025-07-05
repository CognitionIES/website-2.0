
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollSection } from '@/components/ScrollSection';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MousePointer2 } from 'lucide-react';

// Mock data for sections
const SECTIONS = [
  {
    id: 'section-1',
    title: 'Innovative Design Solutions',
    description: 'We create forward-thinking designs that push boundaries while maintaining usability and elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    bulletPoints: [
      'User-centered approach',
      'Unique aesthetic vision',
      'Innovative materials',
      'Sustainable practices'
    ]
  },
  {
    id: 'section-2',
    title: 'Strategic Development',
    description: 'Our development process is methodical and strategic, ensuring quality results that exceed expectations.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    bulletPoints: [
      'Agile methodology',
      'Quality assurance focus',
      'Continuous integration',
      'Performance optimization'
    ]
  },
  {
    id: 'section-3',
    title: 'Seamless Integration',
    description: 'We ensure all components work together perfectly, creating cohesive and reliable systems.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    bulletPoints: [
      'Cross-platform compatibility',
      'API development',
      'System architecture',
      'Legacy system integration'
    ],
    additionalImageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'section-4',
    title: 'Ongoing Support',
    description: 'Our relationship continues well beyond project completion with dedicated support and maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1581291496424-afd8abd2c2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    bulletPoints: [
      '24/7 technical assistance',
      'Regular maintenance',
      'Performance monitoring',
      'Upgrade pathways'
    ]
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef
  });
  
  const progressBarScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Hide scroll hint after 5 seconds
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= SECTIONS.length || isScrolling) return;
    
    setIsScrolling(true);
    setCurrentIndex(index);
    
    const container = containerRef.current;
    if (container) {
      const sectionElements = container.querySelectorAll('.snap-section');
      sectionElements[index]?.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Prevent multiple scrolls by setting a timeout
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (isScrolling) return;
    
    if (event.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  };
  
  const handleTouchStart = useRef({ y: 0 });
  const handleTouchMove = useRef({ y: 0 });
  
  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = { y: e.touches[0].clientY };
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    handleTouchMove.current = { y: e.touches[0].clientY };
  };
  
  const onTouchEnd = () => {
    if (isScrolling) return;
    
    const deltaY = handleTouchStart.current.y - handleTouchMove.current.y;
    
    if (Math.abs(deltaY) > 50) { // Threshold to trigger section change
      if (deltaY > 0) {
        scrollToSection(currentIndex + 1);
      } else {
        scrollToSection(currentIndex - 1);
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-muted/30">
      <motion.div 
        className="progress-bar" 
        style={{ scaleX: progressBarScaleX }} 
      />
      
      <div 
        ref={containerRef}
        className="snap-container"
        onWheel={handleWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {SECTIONS.map((section, index) => (
          <div 
            key={section.id} 
            id={section.id}
            className="snap-section flex items-center justify-center transition-section"
          >
            <ScrollSection
              index={index}
              title={section.title}
              description={section.description}
              imageUrl={section.imageUrl}
              bulletPoints={section.bulletPoints}
              additionalImageUrl={section.additionalImageUrl}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {SECTIONS.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? "bg-primary shadow-lg scale-125" 
                : "bg-muted/50 hover:bg-muted"
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>
      
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-50">
        <Button
          onClick={() => scrollToSection(currentIndex - 1)}
          disabled={currentIndex === 0}
          variant="ghost"
          size="icon"
          className={`rounded-full backdrop-blur-sm ${
            currentIndex === 0 ? "opacity-50" : "opacity-90 hover:opacity-100"
          }`}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => scrollToSection(currentIndex + 1)}
          disabled={currentIndex === SECTIONS.length - 1}
          variant="ghost"
          size="icon"
          className={`rounded-full backdrop-blur-sm ${
            currentIndex === SECTIONS.length - 1 ? "opacity-50" : "opacity-90 hover:opacity-100"
          }`}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
      
      {showScrollHint && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-lg"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MousePointer2 size={16} />
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;