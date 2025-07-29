"use client";

import { ArrowLeft, UserCheck, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F5FDFF]">
      {/* Header */}
      <section className="relative py-16 bg-[#F5FDFF] ">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services/staffing"
            className="inline-flex items-center text-[#0098AF] hover:text-[#0098AF]/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Staffing Services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#0098AF]/10 rounded-xl flex items-center justify-center mr-6">
                <UserCheck className="w-8 h-8 text-[#0098AF]" />
              </div>
              <h1 className="text-5xl font-bold text-[#003C46]">
                Contract-to-Hire
              </h1>
            </div>
            <p className="text-xl text-[#5B5B5B] leading-relaxed">
              Flexible staffing that transitions to permanent. Evaluate talent
              through contract work before making long-term commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What We Do */}
            <div>
              <h2 className="text-3xl font-bold text-[#003C46] mb-8">
                What We Do
              </h2>
              <div className="space-y-6">
                <p className="text-[#5B5B5B] leading-relaxed">
                  Contract-to-hire provides the perfect balance between
                  flexibility and commitment. Start with a contract arrangement
                  that allows both you and the candidate to evaluate the fit
                  before transitioning to permanent employment.
                </p>
                <p className="text-[#5B5B5B] leading-relaxed">
                  This approach reduces hiring risks while providing immediate
                  access to skilled professionals who can contribute to your
                  projects from day one.
                </p>
              </div>
            </div>

            {/* Why Choose Contract-to-Hire */}
            <div>
              <h2 className="text-3xl font-bold text-[#003C46] mb-8">
                Why Choose This Model
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    text: "Reduced hiring risk through trial period",
                  },
                  {
                    icon: Zap,
                    text: "Immediate access to skilled professionals",
                  },
                  {
                    icon: TrendingUp,
                    text: "Evaluate performance before permanent offer",
                  },
                  {
                    icon: UserCheck,
                    text: "Candidates can assess company culture",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[#0098AF]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#0098AF]" />
                    </div>
                    <span className="text-[#5B5B5B]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-[#0098AF]/5 to-[#007B8F]/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#003C46] mb-6">
              Ready to Try Before You Buy?
            </h2>
            <p className="text-[#5B5B5B] text-lg mb-8 max-w-2xl mx-auto">
              Reduce hiring risks with our contract-to-hire model that benefits
              both employers and candidates.
            </p>
            <Button size="lg" className="bg-[#0098AF] hover:bg-[#0098AF]/90">
              Explore Contract Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
