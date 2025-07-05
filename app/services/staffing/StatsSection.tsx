import React from 'react';
import { Briefcase, Users, Award, Building } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      label: "Candidates Placed", 
      value: "15,000+", 
      icon: <Users className="h-8 w-8 text-[#00b4d8]" />,
      delay: 0
    },
    { 
      label: "Partner Companies", 
      value: "750+", 
      icon: <Building className="h-8 w-8 text-[#00b4d8]" />,
      delay: 100
    },
    { 
      label: "Industries Served", 
      value: "25+", 
      icon: <Briefcase className="h-8 w-8 text-[#00b4d8]" />,
      delay: 200
    },
    { 
      label: "Success Rate", 
      value: "93%", 
      icon: <Award className="h-8 w-8 text-[#00b4d8]" />,
      delay: 300
    }
  ];

  return (
    <div className="py-12 bg-[#002b32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-[#003c46]/60 p-6 rounded-lg border border-[#00b4d8]/20 opacity-0 animate-fade-in hover-card-scale"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
