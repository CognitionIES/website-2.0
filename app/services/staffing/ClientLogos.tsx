import React from 'react';

const ClientLogos = () => {
  // In a real implementation, these would be actual client logos
  const logoPlaceholders = [
    { name: "Acme Inc" },
    { name: "TechGiant" },
    { name: "GlobalFirm" },
    { name: "InnovateCo" },
    { name: "FutureTech" },
    { name: "MegaCorp" },
  ];

  return (
    <div className="py-12 bg-[#E6F0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-bold text-[#003C46] mb-8">Trusted by Leading Organizations</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logoPlaceholders.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm border border-gray-100 opacity-0 animate-fade-in hover-card-scale" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#0098af]/10 rounded-full flex items-center justify-center">
                <span className="font-bold text-[#0098af]">{logo.name.substring(0, 2)}</span>
              </div>
              <span className="ml-2 text-sm font-medium text-[#003C46]">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
