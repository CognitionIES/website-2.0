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
      <BackgroundGrid className="-z-10" />

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-medium tracking-tight lg:text-6xl font-semibold text-[#003C46] mb-6 leading-tight animate-fade-in-up"
          >
            Intelligent After-Sales <br />
            All-in-One
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-[#5b5b5b] mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100"
          >
            AI-powered platform unifying claims, Configue Price Quote (CPQ), and
            repair workflows.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="bg-[#0098af] w-1/2 text-white px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2;  group"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.youtube.com/@AuxentiosTechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00b4d8] text-white px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:bg-[#0098af] focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/50 focus:ring-offset-2;
  "
            >
              Explore
            </a>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-10 text-center animate-fade-in-up delay-300">
            <div className="flex justify-center items-center space-x-6">
              <div className="text-center">
                <p className="text-xl font-bold text-[#0098af]">5/5</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-[#0098af]">
                  4.6/5
                </p>
                <p className="text-sm text-[#5b5b5b]">
                  (Early Adopters)
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
