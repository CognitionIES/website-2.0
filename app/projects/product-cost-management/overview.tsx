import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BackgroundElement from "@/components/backgroundElement";
import Image from "next/image";

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState("methodology");

  return (
    <section id="approach" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-brand-teal/5">
      <BackgroundElement variant="lines" size="lg" className="top-20 right-0 opacity-20 text-brand-orange" />
      <BackgroundElement variant="dots" size="md" className="bottom-20 -left-10 opacity-20 text-brand-blue" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-darkGray mb-12">
            Heheh <span className="text-brand-teal">Approach</span>
          </h2>
        </AnimatedSection>
        
        <div className="flex flex-wrap mb-8 border-b border-brand-gray/20">
          {["methodology", "findings", "analysis"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-medium border-b-2 transition-colors duration-300 ${
                activeTab === tab 
                  ? "border-brand-orange text-brand-orange" 
                  : "border-transparent text-brand-gray hover:text-brand-teal"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {activeTab === "methodology" && (
            <AnimatedSection direction="up" className="lg:col-span-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Cost Analysis", "Benchmarking", "VAVE Method"].map((title, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 md:p-8 border border-brand-teal/10 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-brand-darkGray">{title}</h3>
                    <p className="text-brand-gray text-sm">{["Material cost review...", "Competitor analysis...", "Value Analysis..."][idx]}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
          
          {activeTab === "findings" && (
            <AnimatedSection direction="up" className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-blue/10 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-brand-darkGray">Key Findings</h3>
                  <ul className="space-y-3 text-brand-gray text-sm">
                    {["Design differences...", "Complex design...", "Potential standardization..."].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-orange mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-blue/10 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-brand-darkGray">Deliverables</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {["SWOT Analysis", "BOM Evolution", "Should Costing", "FEA Reports"].map((item, idx) => (
                      <div key={idx} className="bg-brand-blue/5 p-3 rounded border border-brand-blue/20 hover:bg-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300">
                        <span className="text-brand-darkGray text-center">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
          
          {activeTab === "analysis" && (
            <AnimatedSection direction="up" className="lg:col-span-12">
              <div className="bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 rounded-lg p-6 border border-brand-gray/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                      alt="Engineering Analysis"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg opacity-20"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center p-6">
                      <h3 className="text-lg font-semibold mb-4 text-brand-darkGray">Analysis</h3>
                      <p className="text-brand-gray text-sm">Detailed engineering analysis...</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[["Material", "68%"], ["Design", "82%"], ["Process", "75%"]].map(([label, value], idx) => (
                      <div key={idx} className="rounded-md bg-white p-4 border border-brand-teal/10 hover:shadow-md hover:border-brand-teal/30 transition-all duration-300">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-brand-darkGray">{label}</span>
                          <span className="text-xs font-medium text-brand-teal">{value}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-brand-orange h-full rounded-full" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;