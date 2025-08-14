"use client";
import Image from "next/image";
import sizeImage from "@/constants/images/hero/careers-hero.png";
import { Users, Target, TrendingUp } from "lucide-react";

export default function ExpertiseHighlight() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      aria-labelledby="expertise-highlight-title"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#003C46]/10 to-transparent rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2
              id="expertise-highlight-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#003C46] mb-8 leading-tight"
            >
              Trusted to Build Teams{" "}
              <span className="text-[#0098AF]">From the Ground Up</span>
            </h2>
            <div className="mb-8 flex flex-col">
              <p className="text-base md:text-lg font-roboto text-[#5B5B5B] leading-relaxed mb-6">
                We successfully assembled and managed a dedicated team of 50+
                professionals for a global client—proving our ability to scale
                with your ambitions.
              </p>
              <p className="text-base md:text-lg font-roboto text-[#5B5B5B] leading-relaxed">
                From initial recruitment to ongoing leadership, we build
                cohesive teams that deliver exceptional results while
                integrating seamlessly with your existing operations.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#003C46]/10 rounded-xl group-hover:bg-[#003C46] transition-colors duration-300">
                    <Users className="h-6 w-6 text-[#003C46] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-bold font-montserrat text-[#003C46]">
                    50+
                  </div>
                </div>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  Team Members Managed
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#003C46]/10 rounded-xl group-hover:bg-[#003C46] transition-colors duration-300">
                    <Target className="h-6 w-6 text-[#003C46] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-bold font-montserrat text-[#003C46]">
                    65+
                  </div>
                </div>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  Years Combined Experience
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#003C46]/10 rounded-xl group-hover:bg-[#003C46] transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-[#003C46] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-bold font-montserrat text-[#003C46]">
                    100%
                  </div>
                </div>
                <p className="text-sm font-roboto text-[#5B5B5B] font-medium">
                  Project Success Rate
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <Image
              src={sizeImage}
              alt="Team collaboration illustration"
              className="w-full h-[370px] object-cover rounded-lg shadow-lg"
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
