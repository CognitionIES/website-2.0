"use client";

import React from "react";
import Hero from "./hero";
import Features from "./features";
//import Problems from "./problem";
//import Benefits from "./benefits";
//import Integration from "./integeration";
import CTA from "./CTA";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import VideoShowcase from "./videoShowcase";
import Partner from "./partner";
import WhyChoose from "./whyChooseUs";
import Industries from "./industries";

const Index = () => {
  return (
    <div>
      <MegaMenu />
      <Hero />
      <main className=" ">
        <Partner />
        <Features />
        <VideoShowcase />
        {/* <Benefits /> */}
        <Industries />
        {/* <Integration /> */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#009af]/5 rounded-l-[100px] -z-10"></div>
          <WhyChoose />
        </div>{" "}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
