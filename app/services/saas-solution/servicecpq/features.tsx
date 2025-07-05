import React, { useState, useRef } from "react";
import {
  Zap,
  Settings,
  Bot,
  DollarSign,
  FileText,
  ClipboardCheck,
  Database,
  Wrench,
  Users,
  Activity,
  ShoppingCart,
  Package,
  Brain,
  Globe,
  Clock,
} from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  const [activeCategory, setActiveCategory] = useState("cpq");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Key feature categories
  const featureCategories = [
    {
      id: "cpq",
      title: "AI-Powered Configure, Price, Quote (CPQ)",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
      features: [
        {
          icon: <Settings />,
          title: "Intelligent Service Configuration",
          description:
            "Design and customize maintenance plans, repair options, and parts agreements through an intuitive guided interface.",
        },
        {
          icon: <DollarSign />,
          title: "Dynamic Pricing Engine",
          description:
            "Utilize AI to calculate real-time pricing based on equipment usage, service lifecycle, breakdown nature, and market conditions.",
        },
        {
          icon: <FileText />,
          title: "Automated Quote Generation",
          description:
            "Create accurate, detailed quotes using natural language inputs — streamlining even the most complex service configurations.",
        },
        {
          icon: <ClipboardCheck />,
          title: "Customizable Workflows",
          description:
            "Integrate effortlessly with CRM and ERP systems to adapt CPQ processes to your unique business operations.",
        },
      ],
    },
    {
      id: "warranty",
      title: "Warranty & Claims Management",
      icon: <Database className="h-6 w-6" />,
      color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
      features: [
        {
          icon: <Bot />,
          title: "Automated Processing",
          description:
            "Leverage AI to automate warranty claims, minimizing manual efforts and significantly reducing processing time.",
        },
        {
          icon: <Clock />,
          title: "Real-Time Tracking",
          description:
            "Track claim statuses in real-time and gain insights into frequent part failures and overall warranty costs.",
        },
        {
          icon: <ClipboardCheck />,
          title: "Compliance Assurance",
          description:
            "Ensure adherence to global and regional warranty regulations with built-in compliance checks.",
        },
      ],
    },
    {
      id: "repair",
      title: "Repair Management",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
      features: [
        {
          icon: <ClipboardCheck />,
          title: "Streamlined Workflows",
          description:
            "Manage repair jobs end-to-end — from service request intake to job completion, with integrated billing and invoicing.",
        },
        {
          icon: <Users />,
          title: "Technician Efficiency",
          description:
            "Optimize scheduling and dispatch using technician availability and skill-based matching for better job allocation.",
        },
        {
          icon: <Activity />,
          title: "Performance Analytics",
          description:
            "Gain actionable insights into repair trends, bottlenecks, and service quality for continuous improvement.",
        },
      ],
    },
    {
      id: "ecommerce",
      title: "B2B E-Commerce Portal",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
      features: [
        {
          icon: <Package />,
          title: "Unified Product Catalog",
          description:
            "Display all spare parts, consumables, and service packages in one centralized and searchable portal.",
        },
        {
          icon: <ClipboardCheck />,
          title: "Order Management",
          description:
            "Simplify order placement, payment, and confirmation — accelerating order fulfillment and customer satisfaction.",
        },
        {
          icon: <Brain />,
          title: "AI-Led Inventory Optimization",
          description:
            "Use predictive analytics to forecast demand and maintain ideal inventory levels across your network.",
        },
        {
          icon: <Globe />,
          title: "Global Scalability",
          description:
            "Support multi-currency, multilingual operations — enabling global sales and service reach with ease.",
        },
      ],
    },
  ];

  // Function to scroll to a specific category in the carousel
  const scrollToCategory = (categoryId: React.SetStateAction<string>) => {
    setActiveCategory(categoryId);

    if (carouselRef.current) {
      // Find the index of the button for the desired category
      const categoryIndex = featureCategories.findIndex(
        (cat) => cat.id === categoryId
      );
      if (categoryIndex !== -1) {
        // Get all buttons in the carousel
        const buttons = carouselRef.current.querySelectorAll("button");
        // Calculate which button to scroll to (could be first or second set of duplicates)
        const buttonToScrollTo =
          buttons[categoryIndex] ||
          buttons[categoryIndex + featureCategories.length];
        if (buttonToScrollTo) {
          // Scroll the button into view with smooth behavior
          buttonToScrollTo.scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });
        }
      }
    }
  };

  return (
    <section
      id="key-features"
      className="py-20 md:py-16 relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5]/20 to-white -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#00b4d8]/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#0098af]/10 rounded-full blur-3xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
            Key Features of Service CPQ
          </h2>
          <p className="text-[#5b5b5b]">
            Comprehensive solutions designed for modern after-sales service
            operations
          </p>
        </div>

        {/* Feature Categories Tabs - Desktop */}
        <div className="md:flex md:flex-wrap md:justify-center md:gap-6 mb-2 hidden">
          {featureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-md"
              }`}
            >
              <span>{category.icon}</span>
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Mobile Carousel - Improved */}
        <div className="md:hidden mb-2">
          {/* Static carousel that snaps */}
          <div
            ref={carouselRef}
            className="flex gap-4 px-4 py-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {/* Duplicate categories for better scrolling experience */}
            {[...featureCategories, ...featureCategories].map(
              (category, index) => (
                <button
                  key={`${category.id}-${index}`}
                  onClick={() => scrollToCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 flex-shrink-0 snap-center touch-manipulation ${
                    activeCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="font-medium whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
              )
            )}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 mb-4">
            {featureCategories.map((category) => (
              <button
                key={`indicator-${category.id}`}
                onClick={() => scrollToCategory(category.id)}
                className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#0098af] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${category.title}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="relative min-h-[400px]">
          {featureCategories.map((category) => (
            <div
              key={category.id}
              className={`${
                activeCategory === category.id ? "block" : "hidden"
              }`}
            >
              {/* Hexagonal Feature Grid */}
              <div className="flex flex-col items-center">
                {/* Category showcase image */}
                <div className="mb-8 w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg relative group">
                  <div
                    className={`absolute inset-0 ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      Explore our comprehensive {category.title.toLowerCase()}{" "}
                      features
                    </p>
                  </div>
                </div>

                {/* Honeycomb style feature layout - Mobile optimized */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto ${
                    category.features.length === 3 ? "auto-rows-fr" : ""
                  }`}
                >
                  {category.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        category.features.length === 3 && index === 2
                          ? "md:col-span-2 md:flex md:justify-center md:max-w-[calc(50%-1rem)] mx-auto"
                          : index % 2 === 0
                          ? "md:transform md:translate-y-10"
                          : ""
                      }`}
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div
                            className={`p-2.5 md:p-3 rounded-lg ${category.color.replace(
                              "gradient-to-r",
                              "gradient-to-br"
                            )} text-white`}
                          >
                            {React.cloneElement(feature.icon, {
                              className: "h-5 w-5 md:h-6 md:w-6",
                            })}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 break-words">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 bg-[#E6F0F5]/50 -z-5"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 C80,10 150,50 200,20 C250,0 300,20 350,10 C400,0 450,30 500,15 C550,0 600,15 650,30 C700,45 750,20 800,40 L800,100 L0,100 Z' fill='%23FFFFFF'/%3E%3C/svg%3E\")",
          maskSize: "800px 100px",
          maskRepeat: "repeat-x",
        }}
      ></div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default KeyFeatures;
