"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Integration = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-[#0098af]/20 to-white">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-semibold text-[#003C46] mb-6">
              Works With Your Tools
            </h2>
            <p className="text-[#5b5b5b] text-lg mb-8">
              Connect to SAP, Salesforce, and other key systems for a unified
              approach.
            </p>

            <div className="space-y-4">
              <IntegrationFeature text="Seamless integration" />
              <IntegrationFeature text="Regular updates" />
              <IntegrationFeature text="24/7 support" />
            </div>

            <div className="flex items-center mt-10">
                <Link href="/contact">
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    Talk To Our Specialist
                  </Button>
                </Link>
              </div>
          </div>

          <div className="lg:pl-12 animate-fade-in-up animation-delay: 200ms">
            <div className="bg-[#E6F0F5]/30 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold font-medium tracking-tight text-[#003C46] mb-6">
                Key Integrations
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <IntegrationLogo name="SAP" />
                <IntegrationLogo name="Salesforce" />
                <IntegrationLogo name="Dynamics" />
                <IntegrationLogo name="Oracle" />
                <IntegrationLogo name="ServiceNow" />
                <IntegrationLogo name="Workday" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationFeature = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <CheckCircle className="text-[#0098af] mr-3 h-5 w-5" />
      <p className="text-[#5b5b5b]">{text}</p>
    </div>
  );
};

const IntegrationLogo = ({ name }: { name: string }) => {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm p-4 text-center rounded-lg hover:scale-105 transition-transform">
      <p className="font-medium text-[#003C46]">{name}</p>
    </div>
  );
};

export default Integration;
