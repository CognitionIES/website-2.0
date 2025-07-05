import React from "react";
import { Users, Target, TrendingUp } from "lucide-react";

const ExpertiseHighlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-white" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#003c46]/4 to-transparent rounded-full blur-3xl" />

        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left column - Main content */}
            <div className="lg:col-span-7">
              <div className="mb-6 text-sm font-semibold text-[#003c46] tracking-wider uppercase flex items-center gap-2">
                <div className="w-8 h-px bg-[#003c46]" />
                Proven Capability
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight">
                Trusted to Build Teams
                <span className="block font-semibold bg-gradient-to-br from-[#003c46] to-[#1c7a8a] bg-clip-text text-transparent">
                  From the Ground Up
                </span>
              </h2>

              <div className="mb-8">
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  We successfully assembled and managed a dedicated team of 30+
                  professionals for a global client—proving our ability to scale
                  with your ambitions.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  From initial recruitment to ongoing leadership, we build
                  cohesive teams that deliver exceptional results while
                  integrating seamlessly with your existing operations.
                </p>
              </div>

              {/* Key achievements */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#003c46]/10 rounded-xl group-hover:bg-[#003c46] transition-colors duration-300">
                      <Users className="h-6 w-6 text-[#003c46] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-[#003c46]">30+</div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Team Members Managed
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#003c46]/10 rounded-xl group-hover:bg-[#003c46] transition-colors duration-300">
                      <Target className="h-6 w-6 text-[#003c46] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-[#003c46]">65+</div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Years Combined Experience
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#003c46]/10 rounded-xl group-hover:bg-[#003c46] transition-colors duration-300">
                      <TrendingUp className="h-6 w-6 text-[#003c46] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-[#003c46]">
                      100%
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Project Success Rate
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Visual elements */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main feature card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-[0_20px_40px_-12px_rgba(0,60,70,0.15)] border border-slate-200/50 transform lg:translate-x-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#003c46]/5 text-[#003c46] text-sm font-medium rounded-full mb-4">
                      <div className="w-2 h-2 bg-[#003c46] rounded-full" />
                      Case Study Highlight
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Global Fintech Platform
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Built a complete engineering organization from scratch,
                      delivering a complex multi-region platform serving
                      millions of users.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">
                        Placeholder Data
                      </span>
                      <span className="text-sm font-semibold text-[#003c46]">
                        Data{" "}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">
                        Placeholder Data
                      </span>
                      <span className="text-sm font-semibold text-[#003c46]">
                        Data
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">
                        Placeholder Data
                      </span>
                      <span className="text-sm font-semibold text-[#003c46]">
                        Data
                      </span>
                    </div>
                  </div>
                </div>

                {/* Background accent cards */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#003c46]/8 to-[#1c7a8a]/8 rounded-2xl rotate-[-12deg]" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-[#1c7a8a]/6 to-transparent rounded-xl rotate-12" />

                {/* Floating metrics */}
                <div className="absolute top-12 -left-8 bg-white rounded-xl p-4 shadow-lg border border-slate-200/50 transform -rotate-6">
                  <div className="text-lg font-bold text-[#003c46]">98%</div>
                  <div className="text-xs text-slate-600">Client Retention</div>
                </div>

                <div className="absolute bottom-16 -left-16 bg-white rounded-xl p-4 shadow-lg border border-slate-200/50 transform rotate-6">
                  <div className="text-lg font-bold text-[#003c46]">150+</div>
                  <div className="text-xs text-slate-600">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseHighlight;
