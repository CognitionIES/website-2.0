import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  alt: string;
  icon: React.ReactNode;
  theme: "jobseeker" | "employer";
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  alt,
  icon,
  theme,
}) => {
  const isJobSeeker = theme === "jobseeker";

  return (
    <div className="relative mb-8 group">
      <div
        className={`
        rounded-3xl border-4 overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-[1.02]
        animate-scale-in shadow-lg ${
          isJobSeeker ? "border-[#0098af]" : "border-[#00b4d8]"
        }
      `}
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={500}
          height={500}
          className="object-cover w-full h-64 md:h-72"
        />

        {/* Overlay with gradient */}
        <div
          className={`
          absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300
          ${
            isJobSeeker
              ? "bg-gradient-to-br from-[#E6F0F5] to-[#0098af]/50"
              : "bg-gradient-to-br from-[#003C46] to-[#00b4d8]/50"
          }
        `}
        />
      </div>

      {/* Icon circle */}
      <div
        className={`
        absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white
        animate-pulse-subtle shadow-lg transform transition-transform duration-300 group-hover:scale-110
        ${isJobSeeker ? "bg-[#0098af]" : "bg-[#00b4d8]"}
      `}
      >
        {icon}
      </div>
    </div>
  );
};

export default ImageCard;
