import React from "react";
import { Youtube } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";

const VideoShowcase = () => {
  return (
    <section className="py-6 md:py-8 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5]/30 to-white -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-36 h-36 bg-[#00b4d8]/10 rounded-full blur-xl -z-5"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#0098af]/10 rounded-full blur-xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-5"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-2">
            How ServiceCPQ in Action
          </h2>
          <p className="text-[#5b5b5b] mb-2">
            Experience our platform&apos;s capabilities through this quick
            demonstration
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements around the video */}
          <div className="absolute -top-4 -left-5 bg-[#0098af] text-white p-2 rounded-lg shadow-lg animate-subtle-bounce z-10">
            <Youtube className="h-5 w-5" />
          </div>

          <div
            className="absolute bottom-5 -right-6 bg-[#00b4d8] text-white p-2 rounded-lg shadow-lg animate-subtle-bounce z-10"
            style={{ animationDelay: "0.5s" }}
          >
            <Youtube className="h-5 w-5" />
          </div>

          {/* Video container with aspect ratio */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 bg-black">
            {/* 16:9 aspect ratio wrapper */}
            <div className="relative pt-[54.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/zq4nEzGR85M"
                title="ServiceCPQ Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Caption */}
          <p className="text-sm text-[#5b5b5b] text-center mt-4 mb-8">
            A comprehensive walkthrough of our AI-powered after-sales platform
          </p>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 bg-[#E6F0F5]/60 -z-5"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 C80,10 150,50 200,20 C250,0 300,20 350,10 C400,0 450,30 500,15 C550,0 600,15 650,30 C700,45 750,20 800,40 L800,100 L0,100 Z' fill='%23FFFFFF'/%3E%3C/svg%3E\")",
          maskSize: "800px 100px",
          maskRepeat: "repeat-x",
        }}
      ></div>
    </section>
  );
};

export default VideoShowcase;
