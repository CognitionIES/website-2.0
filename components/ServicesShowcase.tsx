/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import saasImage from "@/constants/images/home/our-services/saas.jpg";
import {
  ArrowUpRight,
  Settings,
  Factory,
  Monitor,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"; // Added ArrowLeft, ArrowRight
import buildImage from "@/constants/images/build-operate/hero.jpg";
import Image from "next/image";
import Link from "next/link";
import staffImage from "@/constants/images/home/staffing.jpg";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Recruitment & Resourcing",
    description:
      "Quickly access skilled talent and build high-performing teams. We connect you with experts to drive growth and deliver results.",
    image: staffImage,
    href: "/services/recruitment-resourcing",
    icon: Settings,
    metrics: { projects: "150+", satisfaction: "98%" },
  },
  {
    id: "02",
    title: "Engineering Services",
    description:
      "Turn ideas into reality with scalable engineering expertise. From product design to offshore delivery, we provide end-to-end solutions that ensure precision, cost-efficiency, and faster project execution.",
    image: buildImage,
    href: "/services/engineering-serivces",
    icon: Factory,
  },
  {
    id: "03",
    title: "SaaS Solutions (ServiceCPQ)",
    description:
      "Streamline quoting & delivery with ServiceCPQ, our SaaS platform designed to simplify complex workflows and accelerate your business.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    icon: Monitor,
    metrics: { projects: "100+", satisfaction: "99%" },
  },
];

type Service = (typeof services)[number];
type ServiceCardProps = {
  service: Service;
  index: number;
  onHover?: (index: number | null) => void;
};

const ServiceCard = ({ service, index, onHover }: ServiceCardProps) => {
  const IconComponent = service.icon;
  return (
    <motion.div
      className="group relative transition-all duration-500"
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/60 transition-all duration-500 hover:-translate-y-3 hover:border-[#0098AF]/30 hover:shadow-[0_8px_20px_rgba(0,152,175,0.2)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl border border-[#0098AF]/10" />
        <div className="relative p-8 pb-0">
          <div className="flex items-start justify-between mb-6">
            <div className="text-6xl font-light text-[#0098AF]/10 leading-none drop-shadow-sm transition-colors duration-300 group-hover:text-[#0098AF]/80">
              {service.id}
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0098AF]/10 to-[#007A8C]/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0098AF] group-hover:to-[#007A8C] group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(0,152,175,0.3)]">
              <IconComponent className="h-6 w-6 text-[#0098AF] transition-colors group-hover:text-white" />
            </div>
          </div>
        </div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0098AF]/40 via-[#0098AF]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
        <div className="p-8 pt-0">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-semibold text-[#0F172A] leading-tight">
              {service.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0098AF] group-hover:scale-110" />
          </div>
          <p className="text-slate-600 text-justify leading-relaxed mb-4">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <Link
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="relative text-sm font-medium text-[#0098AF] bg-[#0098AF]/10 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#0098AF]/20 hover:text-[#007A8C] hover:shadow-[0_4px_12px_rgba(0,152,175,0.2)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0098AF]/50 focus:ring-offset-2 z-10"
            >
              Learn More
              <span className="absolute inset-0 rounded-full bg-[#0098AF]/0 group-hover:bg-[#0098AF]/10 transition-all duration-300" />
            </Link>
            <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#0098AF]/40 transition-colors duration-300" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0098AF]/0 via-[#0098AF] to-[#0098AF]/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0098AF]/0 to-[#0098AF]/0 group-hover:from-[#0098AF]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Slider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = services.length;

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Arrow key handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextSlide();
      } else if (event.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {services.map((service, index) => (
          <div key={service.id} className="w-full flex-shrink-0">
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
      {/* Arrow Buttons for Mobile View */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={goToPrevSlide}
          className="p-2 bg-[#0098AF]/80 text-white rounded-full m-2 hover:bg-[#007A8C] transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={goToNextSlide}
          className="p-2 bg-[#0098AF]/80 text-white rounded-full m-2 hover:bg-[#007A8C] transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
      {/* Dot Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#0098AF] scale-125"
                : "bg-slate-300 hover:bg-[#0098AF]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-12 lg:py-16 relative bg-gradient-to-b from-[#FFF] to-[#E6F0F5]/80">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-10 right-10 w-64 h-64 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
            <p className="text-xs font-medium tracking-wider text-[#0098AF] uppercase">
              Services
            </p>
          </div>
          <h2 className="max-w-7xl text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46]">
            Scalable Solutions for{" "}
            <span className="font-semibold bg-gradient-to-br from-[#003C46] to-[#1C7A8A] bg-clip-text text-transparent">
              Smarter Tomorrow
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed">
            From recruiting the right talent to building dedicated teams and
            deploying powerful SaaS tools, we help you grow with confidence.
          </p>
        </div>
        <div className="md:hidden">
          <Slider children={undefined} />
        </div>
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onHover={setActiveService}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748B]">
            Ready to transform your business? Let&apos;s discuss your next
            project.
          </p>
          <Link
            href="/contact"
            aria-label="Start your project"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0098AF] px-8 py-3 text-sm font-semibold text-gray-50 transition-all hover:bg-[#007A8C] hover:shadow-[0_0_60px_rgba(28,122,138,0.3)]"
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
