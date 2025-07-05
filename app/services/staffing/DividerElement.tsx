import React from "react";

const DividerElement: React.FC = () => {
  return (
    <div className="relative hidden md:block w-12">
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#003C46] via-[#0098af] to-[#003C46]">
        {/* Central pulse dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#00b4d8] animate-pulse-subtle z-10">
          <div className="absolute inset-0 w-full h-full rounded-full bg-[#00b4d8] opacity-60 animate-ping"></div>
        </div>

        {/* Connection nodes */}
        {[...Array(7)].map((_, i) => (
          <React.Fragment key={i}>
            <div
              className="absolute w-3 h-3 rounded-full bg-[#0098af]"
              style={{
                top: `${10 + i * 13}%`,
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0.7,
              }}
            />
            
            {/* Left connection lines */}
            <div
              className="absolute h-0.5 bg-gradient-to-l from-[#0098af] to-transparent"
              style={{
                top: `${10 + i * 13}%`,
                left: "-20px",
                width: "20px",
                transform: "translateY(-50%)",
                opacity: i % 2 === 0 ? 0.6 : 0,
              }}
            />
            
            {/* Right connection lines */}
            <div
              className="absolute h-0.5 bg-gradient-to-r from-[#0098af] to-transparent"
              style={{
                top: `${10 + i * 13}%`,
                right: "-20px",
                width: "20px",
                transform: "translateY(-50%)",
                opacity: i % 2 === 1 ? 0.6 : 0,
              }}
            />
          </React.Fragment>
        ))}
      </div>
      
      {/* Animated path for connection visualization */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6,0 Q6,300 6,600"
          fill="none"
          stroke="#00b4d8"
          strokeWidth="0.5"
          strokeDasharray="5,5"
          strokeLinecap="round"
          className="path-animation"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default DividerElement;
