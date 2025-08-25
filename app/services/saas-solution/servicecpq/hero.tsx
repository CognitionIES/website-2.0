"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0098af]/30 to-[#00b4d8]/30 -z-10" />

      {/* Subtle pattern overlay */}
      <BackgroundGrid className="-z-10 opacity-50" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#003C46] mb-6 leading-tight animate-fade-in-up">
            Intelligent After-Sales <br />
            All-in-One Platform
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#5b5b5b] mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
            AI-powered platform unifying claims, Configure Price Quote (CPQ),
            and repair workflows for seamless service management.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="bg-[#0098af] w-full sm:w-auto text-white px-8 py-3 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2 group font-medium shadow-md hover:shadow-lg"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10" />
    </section>
  );
};

export default Hero;
