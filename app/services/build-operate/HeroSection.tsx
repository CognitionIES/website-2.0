import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50/40 to-slate-100/60 relative overflow-hidden">
      {/* Enhanced Premium Background Pattern */}
      <div className="absolute inset-0">
        {/* Primary sophisticated gradient layers */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0098af]/6 via-[#007c90]/4 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#007c90]/8 via-[#0098af]/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Premium SVG Background Pattern */}
        <svg
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0098af" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#007c90" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#5b5b5b" stopOpacity="0.06" />
            </linearGradient>
            <pattern
              id="heroGrid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="40"
                cy="40"
                r="1.5"
                fill="#0098af"
                fillOpacity="0.3"
              />
              <circle
                cx="20"
                cy="20"
                r="0.8"
                fill="#007c90"
                fillOpacity="0.2"
              />
              <circle
                cx="60"
                cy="20"
                r="0.8"
                fill="#5b5b5b"
                fillOpacity="0.15"
              />
            </pattern>
            <pattern
              id="engineeringPattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <g
                fill="none"
                stroke="#0098af"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              >
                <path d="M10 10h100v100H10z" />
                <path d="M20 20h80v80H20z" />
                <path d="M30 30h60v60H30z" />
                <line x1="60" y1="10" x2="60" y2="110" />
                <line x1="10" y1="60" x2="110" y2="60" />
              </g>
            </pattern>
          </defs>

          {/* Sophisticated wave patterns */}
          <path
            d="M0,150 Q300,80 600,150 T1200,150 L1200,400 Q900,330 600,400 T0,400 Z"
            fill="url(#heroGradient)"
          />
          <path
            d="M0,250 Q400,180 800,250 T1600,250 L1600,500 Q1200,430 800,500 T0,500 Z"
            fill="#0098af"
            fillOpacity="0.03"
          />
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
          <rect width="100%" height="100%" fill="url(#engineeringPattern)" />

          {/* Premium geometric elements */}
          <circle cx="120" cy="120" r="40" fill="#0098af" fillOpacity="0.06" />
          <circle cx="1080" cy="200" r="30" fill="#007c90" fillOpacity="0.08" />
          <polygon
            points="950,80 980,120 920,120"
            fill="#5b5b5b"
            fillOpacity="0.15"
          />
          <rect
            x="80"
            y="350"
            width="50"
            height="50"
            fill="#0098af"
            fillOpacity="0.05"
            transform="rotate(30 105 375)"
          />
        </svg>

        {/* Enhanced floating abstract elements */}
        <div className="absolute top-32 left-1/4 w-40 h-40 bg-gradient-to-br from-[#0098af]/5 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-32 h-32 bg-gradient-to-tl from-[#007c90]/6 to-transparent rounded-3xl rotate-45 blur-xl" />
        <div className="absolute top-1/2 right-24 w-24 h-24 bg-gradient-to-br from-[#0098af]/8 to-transparent rounded-full blur-lg animate-pulse delay-1000" />

        {/* Additional premium elements */}
        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-gradient-to-br from-[#5b5b5b]/4 to-transparent rounded-2xl rotate-12 blur-sm" />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-tl from-[#0098af]/6 to-transparent rounded-full blur-lg animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 lg:py-20 ">
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left column - Enhanced Content */}
              <div className="lg:col-span-7">
                <div className="mb-8 text-sm font-semibold text-[#0098af] tracking-wider uppercase flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-r from-[#0098af] to-[#007c90]" />
                  Build & Operate
                  <div className="w-4 h-4 bg-[#0098af]/15 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#0098af] rounded-full animate-pulse" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5b5b5b] mb-8 leading-tight">
                  Engineering Solutions
                  <span className="block font-semibold bg-gradient-to-br from-[#0098af] via-[#007c90] to-[#0098af] bg-clip-text text-transparent drop-shadow-sm">
                    From Vision to Reality
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl">
                  End-to-end delivery with dedicated teams you can trust. From
                  initial concept through ongoing operations, we transform your
                  boldest ideas into scalable solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative overflow-hidden px-10 py-2 bg-[#0098af] text-white rounded-xl font-medium transition-all duration-700 hover:shadow-[0_20px_40px_-10px_rgba(0,152,175,0.4)] hover:-translate-y-2 ">
                    <Link href="/contact">
                      <span className="relative z-10 flex items-center gap-2">
                        Start Your Project
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0098af] to-[#007c90] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      {/* Button glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0098af] to-[#007c90] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10" />
                    </Link>
                  </button>

                  <button className="group flex items-center gap-3 px-10 py-4 text-[#0098af] rounded-xl font-medium border border-[#0098af]/20 hover:border-[#0098af]/40 transition-all duration-700 hover:bg-[#0098af]/5 hover:-translate-y-1 backdrop-blur-sm bg-white/80">
                    View Our Process
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0098af]" />
                  </button>
                </div>
              </div>

              {/* Right column - Enhanced Visual element */}
              <div className="lg:col-span-5 pr-12 relative">
                <div className="relative">
                  {/* Enhanced main visual card */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_40px_-12px_rgba(0,152,175,0.2)] border border-white/60 transform lg:translate-x-8 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-12px_rgba(0,152,175,0.3)] group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0098af]/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0098af]/8 text-[#0098af] text-sm font-medium rounded-full mb-4 border border-[#0098af]/20">
                        <div className="w-2 h-2 bg-[#0098af] rounded-full animate-pulse" />
                        Proven at Scale
                      </div>
                      <h3 className="text-2xl font-semibold text-[#5b5b5b] mb-3">
                        Global Team Leadership
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Built and managed 30+ member teams for global clients,
                        delivering complex projects with speed and precision.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#0098af]/5 group-hover:to-white transition-all duration-300 border border-slate-100">
                        <div className="text-3xl font-bold text-[#0098af] mb-1">
                          150+
                        </div>
                        <div className="text-xs text-slate-600">
                          Projects Delivered
                        </div>
                      </div>
                      <div className="text-center p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#0098af]/5 group-hover:to-white transition-all duration-300 border border-slate-100">
                        <div className="text-3xl font-bold text-[#0098af] mb-1">
                          5+
                        </div>
                        <div className="text-xs text-slate-600">
                          Years Experience
                        </div>
                      </div>
                    </div>

                    {/* Enhanced accent line */}
                    <div className="h-px w-full bg-gradient-to-r from-[#0098af]/0 via-[#0098af]/30 to-[#0098af]/0 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  {/* Enhanced background accent cards */}
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#0098af]/6 to-[#007c90]/6 rounded-3xl rotate-[-12deg] blur-sm" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-[#007c90]/8 to-transparent rounded-2xl rotate-12 blur-sm" />

                  {/* Enhanced floating metrics */}
                  <div className="absolute top-16 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-[0_8px_25px_-8px_rgba(0,152,175,0.2)] border border-white/60 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="text-xl font-bold text-[#0098af]">98%</div>
                    <div className="text-xs text-slate-600">Success Rate</div>
                  </div>

                  <div className="absolute bottom-20 -left-10 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-[0_8px_25px_-8px_rgba(0,152,175,0.2)] border border-white/60 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="text-xl font-bold text-[#0098af]">30+</div>
                    <div className="text-xs text-slate-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
