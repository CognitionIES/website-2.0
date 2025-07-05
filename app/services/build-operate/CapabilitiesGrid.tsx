import React from "react";
import { MapPin, Compass, Hammer, Settings } from "lucide-react";

const capabilities: Capability[] = [
  {
    id: 1,
    title: "Strategic Planning",
    description:
      "Comprehensive roadmapping and architecture design for scalable, future-ready solutions.",
    icon: MapPin,
    size: "large",
    position: "top-left",
  },
  {
    id: 2,
    title: "Detailed Engineering",
    description:
      "Deep technical expertise across modern stacks and emerging technologies.",
    icon: Compass,
    size: "medium",
    position: "top-right",
  },
  {
    id: 3,
    title: "Build Execution",
    description:
      "Agile delivery with dedicated teams focused on quality and speed.",
    icon: Hammer,
    size: "medium",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Operations Optimization",
    description:
      "Continuous monitoring, performance tuning, and reliability engineering.",
    icon: Settings,
    size: "large",
    position: "bottom-right",
  },
];

type Capability = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  size: "large" | "medium";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability }) => {
  const IconComponent = capability.icon;

  const getCardClasses = () => {
    const baseClasses =
      "group relative overflow-hidden bg-white rounded-2xl border transition-all duration-700 hover:-translate-y-3";

    const sizeClasses = {
      large: "p-8 md:p-10",
      medium: "p-6 md:p-8",
    };

    const positionClasses = {
      "top-left":
        "border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] lg:translate-y-0 lg:-translate-x-4",
      "top-right":
        "border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] lg:translate-y-12 lg:translate-x-4",
      "bottom-left":
        "border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] lg:-translate-y-8 lg:-translate-x-6",
      "bottom-right":
        "border-[#003c46]/20 shadow-[0_15px_35px_-8px_rgba(0,60,70,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,60,70,0.3)] lg:translate-y-4 lg:translate-x-2 bg-gradient-to-br from-white to-slate-50/50",
    };

    return `${baseClasses} ${sizeClasses[capability.size]} ${
      positionClasses[capability.position]
    }`;
  };

  const getGridClasses = () => {
    const gridClasses = {
      large: "md:col-span-2 lg:col-span-2",
      medium: "md:col-span-1 lg:col-span-1",
    };
    return gridClasses[capability.size];
  };

  const isFeatured = capability.position === "bottom-right";

  return (
    <div className={getGridClasses()}>
      <div className={getCardClasses()}>
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#003c46]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#003c46] text-white text-xs font-medium rounded-full">
            Core Focus
          </div>
        )}

        <div className="relative">
          {/* Icon and number */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                  capability.size === "large" || isFeatured
                    ? "w-20 h-20 bg-gradient-to-br from-[#003c46] to-[#1c7a8a] text-white"
                    : "w-16 h-16 bg-[#003c46]/8 text-[#003c46] group-hover:bg-[#003c46] group-hover:text-white"
                }`}
              >
                <IconComponent
                  className={
                    capability.size === "large" || isFeatured
                      ? "h-10 w-10"
                      : "h-8 w-8"
                  }
                />
              </div>
              <div className="text-4xl font-light text-[#003c46]/10 leading-none">
                {String(capability.id).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`font-semibold text-slate-900 mb-3 leading-tight ${
              capability.size === "large" || isFeatured
                ? "text-2xl md:text-3xl"
                : "text-xl md:text-2xl"
            }`}
          >
            {capability.title}
          </h3>

          {/* Highlight */}
          <div className="inline-block px-3 py-1 bg-[#003c46]/5 text-[#003c46] text-sm font-medium rounded-full mb-4">
            {capability.title.split(" ")[0]} Excellence
          </div>

          {/* Description */}
          <p
            className={`text-slate-600 leading-relaxed mb-6 ${
              capability.size === "large" || isFeatured
                ? "text-base md:text-lg"
                : "text-sm md:text-base"
            }`}
          >
            {capability.description}
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 text-[#003c46] font-medium hover:gap-3 transition-all duration-300">
            Learn More
            <div className="w-5 h-5 bg-[#003c46]/10 rounded-full flex items-center justify-center group-hover:bg-[#003c46] transition-colors duration-300">
              <div className="w-2 h-2 bg-[#003c46] rounded-full group-hover:bg-white transition-colors duration-300" />
            </div>
          </button>

          {/* Accent line */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-[#003c46]/0 via-[#003c46]/20 to-[#003c46]/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
};

const CapabilitiesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#003c46]/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1c7a8a]/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative">
          {/* Header */}
          <div className="mb-20 max-w-4xl">
            <div className="mb-6 text-sm font-semibold text-[#003c46] tracking-wider uppercase flex items-center gap-2">
              <div className="w-8 h-px bg-[#003c46]" />
              Core Capabilities
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight">
              Full-Spectrum
              <span className="block font-semibold bg-gradient-to-br from-[#003c46] to-[#1c7a8a] bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              From strategic planning to ongoing operations, our comprehensive
              capabilities ensure your projects succeed at every stage.
            </p>
          </div>

          {/* Capabilities Grid - Asymmetrical Layout matching WhyChooseUs */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Top row - 2 cards */}
            <div className="md:col-span-1">
              <CapabilityCard capability={capabilities[0]} index={0} />
            </div>
            <div className="md:col-span-1">
              <CapabilityCard capability={capabilities[1]} index={1} />
            </div>

            {/* Bottom row - 1 card left, 1 featured card right */}
            <div className="md:col-span-1 lg:row-start-2">
              <CapabilityCard capability={capabilities[2]} index={2} />
            </div>

            {/* Featured card - spans differently on different screens */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-start-1 lg:row-end-3 lg:self-center">
              <CapabilityCard capability={capabilities[3]} index={3} />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-[0_8px_25px_-8px_rgba(0,60,70,0.15)]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003c46]">4</div>
                <div className="text-xs text-slate-600">Core Capabilities</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003c46]">360°</div>
                <div className="text-xs text-slate-600">Coverage</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003c46]">100%</div>
                <div className="text-xs text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesGrid;
