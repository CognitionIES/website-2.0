/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const ProjectNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "overview", label: "Overview" },
    { id: "approach", label: "Approach" },
    { id: "results", label: "Results" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
      const currentScrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= currentScrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      window.scrollTo({ top: element.offsetTop - 20, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "relative group flex items-center",
              activeSection === section.id
                ? "text-brand-teal"
                : "text-brand-gray"
            )}
          >
            <div className="hidden group-hover:block absolute right-full mr-2 px-2 py-1 text-sm text-brand-darkGray bg-white rounded shadow-md">
              {section.label}
            </div>
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSection === section.id
                  ? "bg-brand-orange scale-125"
                  : "bg-brand-gray/50 group-hover:bg-brand-teal"
              )}
            />
          </button>
        ))}
      </nav>

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-brand-teal text-white shadow-lg hover:bg-brand-orange transition-all duration-300 transform",
          showScrollToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default ProjectNavigation;
