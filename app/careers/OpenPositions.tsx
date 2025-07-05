import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const OpenPositions = () => {
  return (
    <section id="positions" className="py-24 bg-[#F5FDFF]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full mb-4">
            Career Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl mb-4 lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center text-center">
            Join Our Talented Team
          </h2>
          <p className="section-subtitle">
            We&apos;re seeking talented individuals to join our innovative team.
            Apply now and be part of our journey!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold drop-shadow-md text-[#003C46] mb-4">
            Are You The Right Person?
          </h3>
          <p className="text-[#5B5B5B] mb-6">
            We&apos;re always looking for passionate, creative individuals who
            want to make a difference. If you think you&apos;d be a great fit
            for our company culture and have skills that could contribute to our
            mission, we&apos;d love to hear from you!
          </p>

          <Button
            variant="ghost"
            className="justify-between border border-[#0098AF]/20 hover:bg-[#0098AF]/5 text-[#0098AF]"
            onClick={() =>
              document
                .getElementById("application")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Submit your application
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
