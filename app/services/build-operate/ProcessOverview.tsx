import React, { useEffect, useRef } from "react";
import {
  Search,
  Compass,
  Hammer,
  Settings,
  ArrowRight,
  ArrowDown,
  Clock,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "Deep dive into your vision and requirements to create a comprehensive roadmap.",
    icon: Search,
    duration: "2-3 weeks",
    output: "Strategic Foundation",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=faces",
    imageAlt: "Workshop or team planning session",
  },
  {
    id: 2,
    title: "Engineering & Design",
    description:
      "Architect robust solutions with scalable design patterns and cutting-edge technology.",
    icon: Compass,
    duration: "3-4 weeks",
    output: "System Architecture",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Blueprints, sketches, or design mockups",
  },
  {
    id: 3,
    title: "Build Execution",
    description:
      "Dedicated teams delivering incremental value through iterative sprints.",
    icon: Hammer,
    duration: "8-16 weeks",
    output: "Production Ready",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Development or teamwork in action",
  },
  {
    id: 4,
    title: "Operations & Support",
    description:
      "24/7 monitoring, optimization, and support to ensure peak performance.",
    icon: Settings,
    duration: "Ongoing",
    output: "Continuous Excellence",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Monitoring dashboards or support collaboration",
  },
];

type ProcessStepType = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  output: string;
  image: string;
  imageAlt: string;
};

interface ProcessStepProps {
  step: ProcessStepType;
  isReverse?: boolean;
  isCenter?: boolean;
  index: number;
}

const ProcessStep = ({
  step,
  isReverse = false,
  isCenter = false,
  index,
}: ProcessStepProps) => {
  const stepRef = useRef(null);
  const IconComponent = step.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (isCenter) {
    return (
      <div
        ref={stepRef}
        className="opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="text-center space-y-8">
          {/* Step Badge */}

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl md:text-4xl font-light text-foreground">
              {step.title.split("&").map((part, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="font-medium text-[hsl(184,100%,14%)]">
                      {part.trim()}
                    </span>
                  ) : (
                    part
                  )}
                </span>
              ))}
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Info Capsules */}
            <div className="flex items-center justify-center gap-4">
              <div className="bg-background border border-border rounded-full px-6 py-3 shadow-[0_10px_30px_-5px_hsl(184,20%,20%,0.15)] hover:shadow-[0_0_60px_hsl(184,60%,35%,0.3)] transition-all duration-300">
                <div className="text-xs text-muted-foreground mb-1">
                  Duration
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {step.duration}
                </div>
              </div>
              <div className="bg-[hsl(184,100%,14%,0.05)] border border-[hsl(184,100%,14%,0.2)] rounded-full px-6 py-3 hover:bg-[hsl(184,100%,14%,0.1)] transition-all duration-300">
                <div className="text-xs text-[hsl(184,100%,14%,0.7)] mb-1">
                  Output
                </div>
                <div className="text-sm font-semibold text-[hsl(184,100%,14%)]">
                  {step.output}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative max-w-4xl mx-auto group">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_hsl(184,100%,14%,0.25)] border border-border/40 group-hover:shadow-[0_0_60px_hsl(184,60%,35%,0.3)] transition-all duration-700">
              <Image
                src={step.image}
                alt={step.imageAlt}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(184,100%,14%,0.1)] rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(184,60%,35%,0.2)] rounded-2xl rotate-12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={stepRef}
      className="opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isReverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content Side */}
        <div
          className={`space-y-8 ${
            isReverse ? "lg:col-start-2 text-right" : ""
          }`}
        >
          {/* Step Header */}
          <div
            className={`flex items-center gap-6 ${
              isReverse ? "justify-end" : ""
            }`}
          >
            <div className={`relative group ${isReverse ? "order-2" : ""}`}>
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(184,100%,14%)] to-[hsl(184,60%,35%)] rounded-2xl flex items-center justify-center shadow-[0_0_60px_hsl(184,60%,35%,0.3)] hover:scale-110 hover:rotate-6 transition-all duration-500">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-[hsl(184,60%,35%)] rounded-xl flex items-center justify-center text-white font-bold text-base shadow-[0_25px_50px_-12px_hsl(184,100%,14%,0.25)] group-hover:scale-110 transition-transform duration-300">
                0{step.id}
              </div>
            </div>

            {/* Connector Line */}
            <div
              className={`flex-1 h-px bg-gradient-to-r ${
                isReverse
                  ? "from-transparent to-[hsl(184,100%,14%,0.3)]"
                  : "from-[hsl(184,100%,14%,0.3)] to-transparent"
              } ${isReverse ? "order-1" : ""}`}
            />
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              {step.title.split("&").map((part, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="font-medium text-[hsl(184,100%,14%)]">
                      {part.trim()}
                    </span>
                  ) : (
                    part
                  )}
                </span>
              ))}
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {step.description}
            </p>
          </div>

          {/* Info Capsules */}
          <div
            className={`flex items-center gap-6 ${
              isReverse ? "justify-end" : ""
            }`}
          >
            <div className="bg-background border border-border rounded-full px-6 py-3 shadow-[0_10px_30px_-5px_hsl(184,20%,20%,0.15)] hover:shadow-[0_0_60px_hsl(184,60%,35%,0.3)] transition-all duration-300 group">
              <div className="text-xs text-muted-foreground mb-1 flex items-center gap-2">
                <Clock className="h-3 w-3" />
                Duration
              </div>
              <div className="text-base font-semibold text-foreground">
                {step.duration}
              </div>
            </div>
            <div className="bg-[hsl(184,100%,14%,0.05)] border border-[hsl(184,100%,14%,0.2)] rounded-full px-6 py-3 hover:bg-[hsl(184,100%,14%,0.1)] transition-all duration-300 group">
              <div className="text-xs text-[hsl(184,100%,14%,0.7)] mb-1 flex items-center gap-2">
                <Timer className="h-3 w-3" />
                Output
              </div>
              <div className="text-base font-semibold text-[hsl(184,100%,14%)]">
                {step.output}
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={`relative group ${isReverse ? "lg:col-start-1" : ""}`}>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_hsl(184,100%,14%,0.25)] border border-border/40 group-hover:shadow-[0_0_60px_hsl(184,60%,35%,0.3)] transition-all duration-700">
            <Image
              src={step.image}
              alt={step.imageAlt}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating accent elements */}
          <div
            className={`absolute -bottom-8 w-24 h-24 bg-[hsl(184,100%,14%,0.1)] rounded-3xl blur-xl ${
              isReverse ? "-right-8" : "-left-8"
            }`}
          />
          <div
            className={`absolute -top-6 w-16 h-16 bg-[hsl(184,60%,35%,0.2)] rounded-2xl rotate-12 ${
              isReverse ? "-left-6" : "-right-6"
            }`}
          />
        </div>
      </div>

      {/* Step Connector */}
      {index < processSteps.length - 1 && (
        <div className="flex justify-center mt-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[hsl(184,100%,14%)] rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-[hsl(184,100%,14%)] via-[hsl(184,100%,14%,0.5)] to-[hsl(184,100%,14%,0.2)]"></div>
            <ArrowDown className="h-6 w-6 text-[hsl(184,100%,14%,0.6)]" />
            <div className="w-16 h-px bg-gradient-to-r from-[hsl(184,100%,14%,0.2)] via-[hsl(184,100%,14%,0.5)] to-[hsl(184,100%,14%)]"></div>
            <div className="w-3 h-3 bg-[hsl(184,100%,14%)] rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProcessOverviewMinimal = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-background to-slate-50/50 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[20%] w-96 h-96 bg-[hsl(184,100%,14%,0.04)] rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] w-[500px] h-[500px] bg-[hsl(184,100%,14%,0.03)] rounded-full blur-3xl" />
        <div className="absolute top-[60%] right-[10%] w-32 h-32 bg-[hsl(184,60%,35%,0.2)] rounded-2xl rotate-45 blur-xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(184, 100%, 14%) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="max-w-5xl mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-[hsl(184,100%,14%)] mb-8 uppercase tracking-wider">
            <div className="w-3 h-3 bg-[hsl(184,100%,14%)] rounded-full animate-pulse" />
            Our Process
            <div className="w-16 h-px bg-gradient-to-r from-[hsl(184,100%,14%,0.4)] to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[0.9] tracking-tight">
            From vision to reality,
            <br />
            <span className="font-medium bg-gradient-to-br from-[hsl(184,100%,14%)] to-[hsl(184,60%,35%)] bg-clip-text text-transparent">
              one strategic step at a time
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            Our proven methodology ensures clarity, quality, and continuous
            value delivery throughout your project journey.
          </p>
        </div>

        {/* Process Steps - Asymmetrical Staggered Layout */}
        <div className="space-y-12 md:space-y-16">
          {processSteps.map((step, index) => {
            if (index === 1) {
              // Step 2 - Center featured layout
              return (
                <ProcessStep
                  key={step.id}
                  step={step}
                  isCenter={true}
                  index={index}
                />
              );
            }

            return (
              <ProcessStep
                key={step.id}
                step={step}
                isReverse={index % 2 === 1}
                index={index}
              />
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
                Ready to transform your <br />
                <span className="font-medium text-[hsl(184,100%,14%)]">
                  vision into reality?
                </span>
              </h3>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss your project and create a roadmap for
                success.
              </p>
            </div>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-4 px-12 py-4 bg-gradient-to-br from-[hsl(184,100%,14%)] to-[hsl(184,60%,35%)] text-white rounded-2xl shadow-[0_0_60px_hsl(184,60%,35%,0.3)] hover:shadow-[0_25px_50px_-12px_hsl(184,100%,14%,0.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <span className="text-lg font-medium">Start Your Project</span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </Link>
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-12 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[hsl(184,100%,14%)] rounded-full" />
                <span>4 Proven Steps</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[hsl(184,100%,14%)] rounded-full" />
                <span>End-to-End Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[hsl(184,100%,14%)] rounded-full" />
                <span>Continuous Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverviewMinimal;
