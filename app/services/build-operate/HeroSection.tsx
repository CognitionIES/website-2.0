
"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#F5FDFF] to-[#99D5DF]/30 relative overflow-hidden" aria-labelledby="hero-section-title">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0098AF]/6 via-[#007B8F]/4 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#007B8F]/8 via-[#0098AF]/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 id="hero-section-title" className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#003C46] mb-8 leading-tight">
              Engineering Solutions
              <span className="block font-semibold bg-gradient-to-br from-[#0098AF] via-[#007B8F] to-[#0098AF] bg-clip-text text-transparent">
                From Vision to Reality
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#5B5B5B] font-roboto max-w-4xl leading-relaxed mb-8">
              End-to-end delivery with dedicated teams you can trust. From initial concept through ongoing operations, we transform your boldest ideas into scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="group relative overflow-hidden px-8 py-3 bg-[#0098AF] text-white rounded-xl font-medium font-roboto transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0098AF] to-[#007B8F] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </Link>
              <button className="group flex items-center gap-3 px-8 py-3 text-[#0098AF] rounded-xl font-medium font-roboto border border-[#0098AF]/20 hover:border-[#0098AF]/40 hover:bg-[#0098AF]/5 transition-all duration-300">
                View Our Process
                <ArrowUpRight className="h-4 w-4 text-[#5B5B5B] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0098AF]" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#003C46]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0098AF]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium font-roboto rounded-full mb-4 border border-[#0098AF]/20">
                <div className="w-2 h-2 bg-[#0098AF] rounded-full animate-pulse" />
                Proven at Scale
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-[#003C46] mb-3">Global Team Leadership</h3>
              <p className="text-sm font-roboto text-[#5B5B5B] leading-relaxed">
                Built and managed 50+ member teams for global clients, delivering complex projects with speed and precision.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gradient-to-br from-[#F5FDFF] to-white rounded-xl border border-[#003C46]/10">
                  <div className="text-2xl font-bold font-montserrat text-[#0098AF] mb-1">150+</div>
                  <div className="text-xs font-roboto text-[#5B5B5B]">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#F5FDFF] to-white rounded-xl border border-[#003C46]/10">
                  <div className="text-2xl font-bold font-montserrat text-[#0098AF] mb-1">5+</div>
                  <div className="text-xs font-roboto text-[#5B5B5B]">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0098AF]/6 to-[#007B8F]/6 rounded-2xl rotate-[-12deg] blur-sm" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-[#007B8F]/8 to-transparent rounded-xl rotate-12 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
