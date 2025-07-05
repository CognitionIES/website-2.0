import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#002b32] to-[#003C46] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Connecting <span className="text-[#00b4d8]">Talent</span> with <span className="text-[#00b4d8]">Opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Your bridge to meaningful career connections and exceptional talent
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <button className="px-8 py-3 bg-[#0098af] hover:bg-[#00b4d8] rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#00b4d8] focus:outline-none shadow-lg">
              Explore Opportunities
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-white/30 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00b4d8] opacity-10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-[#0098af] opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ArrowDown className="text-white/70" />
        <span className="sr-only">Scroll down</span>
      </div>
    </div>
  );
};

export default HeroSection;
