import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};
const RecentProjects = () => {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    <section
      id="recent-projects"
      ref={setRef}
      className="py-20 bg-[#F5FDFF] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#0098AF] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#0098AF] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003C46] mb-16 text-center transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Recent Projects
        </h2>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IT talent deployment team"
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                  height={80}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div
                  className={`inline-block text-sm font-semibold text-[#0098AF] mb-3 px-3 py-1 bg-[#0098AF]/10 rounded-full transition-all duration-300 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  IT Staffing
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold text-[#003C46] mb-3 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  IT Talent Deployment
                </h3>
                <h4
                  className={`text-lg font-semibold text-[#5B5B5B] mb-6 transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Recruitment Support for Software Development Team
                </h4>
                <p
                  className={`text-[#5B5B5B] mb-8 leading-relaxed transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  Successfully recruited and deployed a team of skilled full-stack
                  developers (React & Node.js) for a growing IT company. Ensured
                  quick turnaround, seamless onboarding, and end-to-end
                  compliance support.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("project-overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`inline-flex items-center space-x-3 bg-[#0098AF] text-white px-8 py-4 rounded-xl hover:bg-[#007B8F] transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <span className="font-semibold">View in Detail</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecentProjects;
