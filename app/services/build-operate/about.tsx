import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

const bulletPoints = [
  {
    id: 1,
    title: "End-to-End Accountability",
    description:
      "Complete ownership from concept to deployment, ensuring seamless execution at every stage.",
    icon: CheckCircle,
    highlight: "Complete ownership",
    position: "top-left",
  },
  {
    id: 2,
    title: "Flexible Engagement Models",
    description:
      "Adaptable partnership structures that scale with your needs and business objectives.",
    icon: Target,
    highlight: "Adaptable partnership",
    position: "top-right",
  },
  {
    id: 3,
    title: "Dedicated Expert Teams",
    description:
      "Hand-picked specialists committed exclusively to your project's success.",
    icon: Users,
    highlight: "Hand-picked specialists",
    position: "middle-left",
  },
  {
    id: 4,
    title: "Proven Track Record",
    description:
      "Consistently delivering excellence across industries with measurable results.",
    icon: Award,
    highlight: "Measurable results",
    position: "middle-right",
  },
  {
    id: 5,
    title: "Scalable Expertise",
    description:
      "Successfully built and managed a 30+ member team for a global client, delivering complex projects with speed and precision.",
    icon: TrendingUp,
    highlight: "30+ member team",
    position: "bottom-center",
    featured: true,
  },
];

type BulletPoint = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
  position: string;
  featured?: boolean;
};

interface BulletCardProps {
  bullet: BulletPoint;
  index: number;
}

const BulletCard: React.FC<BulletCardProps> = ({ bullet }) => {
  const IconComponent = bullet.icon;

  const getCardClasses = () => {
    const baseClasses =
      "group relative overflow-hidden rounded-2xl bg-white border transition-all duration-700 hover:-translate-y-2";
    switch (bullet.position) {
      case "top-left":
        return `${baseClasses} border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] md:translate-x-0 lg:-translate-x-4`;
      case "top-right":
        return `${baseClasses} border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] md:translate-y-4 lg:translate-x-2`;
      case "middle-left":
        return `${baseClasses} border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] md:-translate-y-4 lg:-translate-x-4`;
      case "middle-right":
        return `${baseClasses} border-slate-200/60 shadow-[0_8px_25px_-5px_rgba(0,60,70,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(0,60,70,0.2)] md:translate-y-4 lg:translate-x-2`;
      case "bottom-center":
        return `${baseClasses} border-[#003c46]/20 shadow-[0_15px_35px_-8px_rgba(0,60,70,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,60,70,0.3)] md:col-span-2 lg:col-span-1 lg:translate-y-2 bg-gradient-to-br from-white to-slate-50/50`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className={getCardClasses()}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#003c46]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Featured badge */}
      {bullet.featured && (
        <div className="absolute top-4 right-12 px-3 py-1 bg-[#003c46]/10 text-gray-800 text-xs font-medium rounded-full">
          Featured
        </div>
      )}

      {/* Content */}
      <div className={bullet.featured ? "p-8" : "p-6"}>
        {/* Icon and number */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                bullet.featured
                  ? "h-14 w-14 bg-[#5b5b5b] text-white"
                  : "h-12 w-12 bg-[#5b5b5b]/8 text-[#5b5b5b] group-hover:bg-[#5b5b5b] group-hover:text-white"
              }`}
            >
              <IconComponent
                className={bullet.featured ? "h-7 w-7" : "h-6 w-6"}
              />
            </div>
            <div className="text-4xl font-light text-[#5b5b5b]/30 group-hover:text-[#5b5b5b] group-hover:font-semibold leading-none">
              {String(bullet.id).padStart(2, "0")}
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0098af]" />
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-slate-900 mb-3 leading-tight ${
            bullet.featured ? "text-2xl" : "text-xl"
          }`}
        >
          {bullet.title}
        </h3>

        {/* Highlight */}
        <div className="inline-block px-3 py-1 bg-[#003c46]/5 text-[#003c46] text-sm font-medium rounded-full mb-4">
          {bullet.highlight}
        </div>

        {/* Description */}
        <p
          className={`text-slate-600 leading-relaxed ${
            bullet.featured ? "text-base" : "text-sm"
          }`}
        >
          {bullet.description}
        </p>

        {/* Accent line */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#003c46]/0 via-[#003c46]/20 to-[#003c46]/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <section className="py-24  bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#003c46]/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1c7a8a]/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="mb-20 max-w-4xl">
            <div className="mb-6 text-sm font-semibold text-[#0098af] tracking-wider uppercase flex items-center gap-2">
              <div className="w-8 h-px bg-[#0098af]" />
              Why Choose Us
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight">
              A Partner You Can
              <span className="block font-semibold bg-gradient-to-br from-[#0098af] to-[#5b5b5b] bg-clip-text text-transparent">
                Rely On
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              When you choose us, you gain a committed partner who blends
              engineering expertise with the flexibility and scale needed to
              deliver your most ambitious projects. From building dedicated
              teams to managing every stage end-to-end, we&apos;re here to help
              you succeed.
            </p>
          </div>

          {/* Asymmetrical Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Top row - 2 cards */}
            <div className="md:col-span-1">
              <BulletCard bullet={bulletPoints[0]} index={0} />
            </div>
            <div className="md:col-span-1">
              <BulletCard bullet={bulletPoints[1]} index={1} />
            </div>

            {/* Middle row - 2 cards with offset */}
            <div className="md:col-span-1 lg:row-start-2">
              <BulletCard bullet={bulletPoints[2]} index={2} />
            </div>
            <div className="md:col-span-1 lg:row-start-2">
              <BulletCard bullet={bulletPoints[3]} index={3} />
            </div>

            {/* Featured card - spans differently on different screens */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-start-1 lg:row-end-3 lg:self-center">
              <BulletCard bullet={bulletPoints[4]} index={4} />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-[0_8px_25px_-8px_rgba(0,60,70,0.15)]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0098af]">150+</div>
                <div className="text-xs text-slate-600">Projects Delivered</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0098af]">98%</div>
                <div className="text-xs text-slate-600">
                  Client Satisfaction
                </div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0098af]">5+</div>
                <div className="text-xs text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
