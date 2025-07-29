import React from "react";

import { Globe, Monitor, Users } from "lucide-react";

const JobSeekerSection = () => {
  return (
    <section
      className="py-16  relative overflow-hidden"
      style={{
        background: `linear-gradient(45deg, #003C46 0%, #007B8F 100%)`,
      }}
    >
      {/* Circuit pattern overlay */}
      <div className="absolute  inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400"></svg>
      </div>

      <div className="max-w-7xl mx-auto  px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#F5FDFF",
            }}
          >
            Advanced Tools & Technology
          </h2>
          <p
            className="text-xl max-w-7xl mx-auto leading-relaxed"
            style={{ color: "#99D5DF" }}
          >
            Leveraging cutting-edge technology to deliver superior recruitment
            outcomes
          </p>
        </div>

        {/* Staggered hexagonal containers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            // {
            //   title: "AI-Powered Matching",
            //   description:
            //     "Advanced algorithms match candidates to roles with 95% accuracy, analyzing skills, culture fit, and career aspirations for optimal placements.",
            //   icon: <Search size={32} />,
            // },
            {
              title: "Placeholder",
              description: "Placeholder Description.",
              icon: <Globe size={32} />,
            },
            {
              title: "ATS Integration",
              description:
                "Seamless integration with leading Applicant Tracking Systems like BambooHR and Lever for streamlined workflow management.",
              icon: <Monitor size={32} />,
            },
            {
              title: "CRM Systems",
              description:
                "Salesforce-powered relationship management ensures personalized service and long-term partnership success with every client.",
              icon: <Users size={32} />,
            },
            {
              title: "Placeholder",
              description: "Placeholder Description.",
              icon: <Globe size={32} />,
            },
          ].map((tool, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-105 transform ${
                index % 2 === 0 ? "mt-8" : ""
              } group cursor-pointer`}
              style={{
                backgroundColor: "rgba(245, 253, 255, 0.05)",
                border: "1px solid rgba(153, 213, 223, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0, 152, 175, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                style={{ color: "#99D5DF" }}
              >
                {tool.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#F5FDFF",
                }}
              >
                {tool.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "#99D5DF" }}
              >
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSeekerSection;
