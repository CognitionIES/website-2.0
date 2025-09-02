"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Cog,
  Cpu,
  Zap,
  Wrench,
  Shield,
  FlaskConical,
  FileText,
  Factory,
  Settings,
} from "lucide-react";

const plantServices = [
  {
    title: "Process Design & Optimization",
    description: "Advanced process engineering and optimization solutions",
    icon: <Cog className="h-8 w-8" />,
    features: [
      "Process flow development",
      "Equipment specification",
      "Safety system design",
      "Environmental compliance",
    ],
  },
  {
    title: "Industrial Automation",
    description: "Smart automation systems for enhanced efficiency",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      "PLC programming",
      "SCADA systems",
      "HMI development",
      "Control system integration",
    ],
  },
  {
    title: "Electrical Infrastructure",
    description: "Comprehensive electrical engineering solutions",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Power distribution",
      "Motor control centers",
      "Instrumentation design",
      "Safety systems",
    ],
  },
  {
    title: "Mechanical Systems",
    description: "Robust mechanical engineering and design",
    icon: <Wrench className="h-8 w-8" />,
    features: [
      "Equipment design",
      "Structural analysis",
      "Piping systems",
      "Material selection",
    ],
  },
  {
    title: "Safety & Compliance",
    description: "Comprehensive safety and regulatory compliance",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Hazard analysis",
      "Safety instrumented systems",
      "Regulatory compliance",
      "Risk assessment",
    ],
  },
];

const productServices = [
  {
    title: "Mechanical Design",
    description: "Innovative mechanical product development",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "3D modeling & simulation",
      "Design optimization",
      "Material analysis",
      "Tolerance engineering",
    ],
  },
  {
    title: "CAE & CFD Analysis",
    description: "Advanced computational engineering analysis",
    icon: <FlaskConical className="h-8 w-8" />,
    features: [
      "Finite element analysis",
      "Fluid dynamics simulation",
      "Thermal analysis",
      "Vibration analysis",
    ],
  },
  {
    title: "Electrical Engineering",
    description: "Cutting-edge electrical system design",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Circuit design",
      "PCB layout",
      "Power electronics",
      "EMC compliance",
    ],
  },
  {
    title: "Prototyping & Testing",
    description: "Rapid prototyping and validation services",
    icon: <Factory className="h-8 w-8" />,
    features: [
      "3D printing",
      "Functional testing",
      "Performance validation",
      "Design iteration",
    ],
  },
  {
    title: "Technical Documentation",
    description: "Comprehensive technical documentation",
    icon: <FileText className="h-8 w-8" />,
    features: [
      "Design specifications",
      "User manuals",
      "Manufacturing drawings",
      "Quality procedures",
    ],
  },
];

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="flex-shrink-0 w-80 rounded-3xl p-8"
      style={{
        backgroundImage:
          "linear-gradient(145deg, hsl(0, 0%, 100%), hsl(196, 100%, 98%))",
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)",
        border: "1px solid hsla(186, 67%, 85%, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-6">
        <motion.div
          className="p-4 rounded-2xl"
          style={{
            backgroundColor: "hsla(185, 100%, 34%, 0.1)",
            color: "hsl(185, 100%, 34%)",
          }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {service.icon}
        </motion.div>
        <div className="flex-1 space-y-6">
          {" "}
          {/* Increased space-y from 4 to 6 for better vertical rhythm */}
          <div>
            <h3
              className="text-xl font-bold mb-3 leading-tight"
              style={{ color: "hsl(184, 31%, 36%)" }}
            >
              {service.title}
            </h3>
            <p
              className="text-base leading-relaxed text-muted-foreground"
              style={{ color: "hsl(184, 31%, 36%)" }}
            >
              {service.description}
            </p>
          </div>
          <ul className="space-y-2">
            {" "}
            {/* Increased space-y from 2 to 3 for improved feature list spacing */}
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center text-sm leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                style={{ color: "hsl(184, 31%, 36%)" }}
              >
                <div
                  className="w-2 h-2 rounded-full mr-4"
                  style={{ backgroundColor: "hsl(185, 100%, 34%)" }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface ServiceSliderProps {
  title: string;
  services: typeof plantServices;
  direction: "left" | "right";
  description: string;
}

const ServiceSlider = ({
  title,
  services,
  direction,
  description,
}: ServiceSliderProps) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const cardWidth = 352; // Increased from 320 to 352 (w-80 is 320px, adding more margin for breathing room: 320 + 32px space-x)
  const singleSetWidth = services.length * cardWidth;

  useEffect(() => {
    const animateCarousel = async () => {
      if (!isHovered) {
        const initialX = direction === "left" ? 0 : -singleSetWidth;
        const endX = direction === "left" ? -singleSetWidth : 0;
        while (!isHovered) {
          await controls.start({
            x: endX,
            transition: {
              duration: services.length * 2.5, // Slightly slowed down for smoother, more deliberate scrolling
              ease: "linear",
            },
          });
          // Reset position instantly to create infinite loop
          await controls.start({
            x: initialX,
            transition: { duration: 0 },
          });
        }
      }
    };

    if (!isHovered) {
      animateCarousel();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [isHovered, controls, direction, singleSetWidth, services.length]);

  return (
    <div className="space-y-10">
      <div>
        <h3
          className="text-4xl font-bold tracking-tight leading-tight mt-4"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {title}
        </h3>
        <p
          className="text-lg mt-3 max-w-3xl leading-relaxed"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {description}
        </p>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex space-x-8"
          animate={controls}
          initial={{ x: direction === "left" ? 0 : -singleSetWidth }}
          style={{ width: `${singleSetWidth * 2}px` }} // Double width for seamless loop
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index % services.length}
            />
          ))}
        </motion.div>
        <div
          className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsla(196, 100%, 98%, 1), transparent)", // Enhanced opacity for better fade effect
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{
            backgroundImage:
              "linear-gradient(to left, hsla(196, 100%, 98%, 1), transparent)", // Enhanced opacity
          }}
        />
      </div>
    </div>
  );
};

export const ServicesSlider = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(186, 61%, 83%, 1), hsla(0, 0%, 98%, 1))", // Refined gradient for more natural flow
        }}
      />
      <div className="relative z-10 container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {" "}
        {/* Added responsive px for better edge spacing */}
        <div className="mb-8">
          {" "}
          {/* Increased mb for better header separation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#003C46] mb-6"
          >
            Our Engineering{" "}
            <span className="font-semibold bg-gradient-to-br from-[#003C46] to-[#1C7A8A] bg-clip-text text-transparent">
              Services Portfolio
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-7xl mx-auto leading-relaxed"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            Comprehensive engineering solutions spanning plant infrastructure
            and product development
          </motion.p>
        </div>
        <div className="space-y-2 lg:space-y-4">
          {" "}
          {/* Increased space-y for better slider separation on larger screens */}
          <ServiceSlider
            title="Plant Engineering Services"
            services={plantServices}
            direction="left"
            description="Optimizing industrial facilities with expertise in process design, automation, electrical infrastructure, mechanical systems, and safety compliance for enhanced efficiency and sustainability."
          />
          <ServiceSlider
            title="Product Engineering Services"
            services={productServices}
            direction="right"
            description="Transforming ideas into market-ready products through innovative mechanical design, advanced analysis, electrical engineering, prototyping, and comprehensive documentation."
          />
        </div>
      </div>
    </section>
  );
};
