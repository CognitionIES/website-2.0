/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import plantImage from "@/constants/images/home/our-services/plant.jpg";
import productImage from "@/constants/images/home/our-services/product-2.jpg";
import saasImage from "@/constants/images/home/our-services/saas.jpg";
import { ArrowUpRight, Settings, Factory, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Staffing & Recruitment",
    description:
      "Quickly access skilled talent and build high-performing teams. We connect you with experts to drive growth and deliver results.",
    image: productImage,
    href: "/services/staffing",
    icon: Settings,
    metrics: { projects: "150+", satisfaction: "98%" },
  },
  {
    id: "02",
    title: "Build & Operate",
    description:
      "We don’t just recruit—we take ownership. From team building to full-scale operations management, we ensure performance, compliance, and scalability without overloading your internal teams.",
    image: plantImage,
    href: "/services/build-operate",
    icon: Factory,
  },
  {
    id: "03",
    title: "SaaS Solutions (ServiceCPQ)",
    description:
      "Streamline quoting and delivery with ServiceCPQ, our SaaS platform designed to simplify complex workflows and accelerate your business.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    icon: Monitor,
    metrics: { projects: "100+", satisfaction: "99%" },
  },
];

// Define the type for the service object
type Service = (typeof services)[number];
type ServiceCardProps = {
  service: Service;
  index: number;
  onHover: (index: number | null) => void;
};

const ServiceCard = ({ service, index, onHover }: ServiceCardProps) => {
  const IconComponent = service.icon;
  return (
    <div
      className={`group relative transition-all duration-500 ${
        index === 1 ? "md:translate-y-12" : ""
      } ${index === 2 ? "md:-translate-y-6" : ""}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Enhanced main card with premium details */}
      <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/60 transition-all duration-500  hover:-translate-y-3 hover:border-[#0098af]/20">
        {/* Inner shadow for inset feel */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

        {/* Premium accent border */}
        <div className="absolute inset-0 rounded-2xl border border-[#0098af]/5" />

        {/* Header with number and icon */}
        <div className="relative p-8 pb-0">
          <div className="flex items-start justify-between mb-6">
            <div className="text-6xl font-light text-[#0098af]/8 leading-none drop-shadow-sm">
              {service.id}
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0098af]/8 to-[#0098af]/5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0098af] group-hover:to-[#007c90] group-hover:scale-110 group-hover:shadow-[0_8px_20px_-4px_rgba(0,152,175,0.3)]">
              <IconComponent className="h-6 w-6 text-[#0098af] transition-colors group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Enhanced image section with link */}
        <Link
          href={service.href}
          aria-label={`Learn more about ${service.title}`}
          className="relative mx-8 mb-6 h-48 block overflow-hidden rounded-xl"
        >
          <Image
            src={service.image}
            alt={service.title}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0098af]/30 via-[#0098af]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        {/* Enhanced content */}
        <div className="p-8 pt-0">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-semibold text-[#0f172a] leading-tight">
              {service.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0098af] group-hover:scale-110" />
          </div>

          <p className="text-slate-600 text-justify leading-relaxed mb-">
            {service.description}
          </p>

          {/* Enhanced CTA with micro-interactions */}
          <div className="flex items-center justify-between">
            <Link
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="text-sm font-medium text-[#0098af] hover:text-[#007c90] transition-all duration-300 hover:translate-x-1"
            >
              Learn More
            </Link>
            <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#0098af]/30 transition-colors duration-300" />
            <div className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
              Premium Service
            </div>
          </div>
        </div>

        {/* Enhanced accent line with animation */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from (#0098af]/0 via-[#0098af] to-[#0098af]/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0098af]/0 to-[#0098af]/0 group-hover:from-[#0098af]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-24  relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4">
        {/* Minimal header */}
        <div className="mb-12">
          <div className="">
            <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
              <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
                Services
              </p>
            </div>
            <h2 className="max-w-7xl text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46]">
              Engineering Excellence Through
              <span className="block font-semibold bg-gradient-to-br from-[#003c46] to-[#1c7a8a] bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-sm py-4 sm:text-sm md:text-base text-justify text-gray-650 leading-relaxed">
              We deliver precision-crafted solutions that transform challenges
              into competitive advantages, backed by decades of engineering
              expertise and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onHover={setActiveService}
            />
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-24 text-center">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#003c46] to-transparent mb-8" />
          <p className="text-sm text-[#64748b]">
            Ready to transform your business? Let&apos;s discuss your next
            project.
          </p>
          <Link
            href="/contact"
            aria-label="Start your project"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0098af] px-8 py-3 text-sm font-semibold text-gray-50 transition-all hover:bg-[#5b5b5b] hover:shadow-[0_0_60px_rgba(28,122,138,0.3)]"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
