import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

const ClosingCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <section className="py-12 mb-12 relative overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#003c46] to-[#1c7a8a]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/3 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6 text-sm font-semibold text-white/80 tracking-wider uppercase flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-white/40" />
              Ready to Start
              <div className="w-8 h-px bg-white/40" />
            </div>

            <h2 className="text-7xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
              Ready to Build{" "}
              <span className=" font-semibold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {" "}
                Together?
              </span>
            </h2>

            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Transform your vision into reality with a partner you can trust.
              Let&apos;s discuss how we can build and operate your next
              breakthrough solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative overflow-hidden px-8 py-4 bg-white text-[#003c46] rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_8px_25px_-8px_rgba(255,255,255,0.3)] ">
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Request a Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>

              <button className="group flex items-center gap-3 px-8 py-4 text-white rounded-xl font-medium border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center justify-center w-2 h-2 bg-green-400 rounded-full">
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
                </div>
                Available for immediate consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClosingCTA;
