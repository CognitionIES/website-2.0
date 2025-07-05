// FeaturedImage.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturedImageProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export function FeaturedImage({ image }: FeaturedImageProps) {
  return (
    <div className="bg-[#99d5df] shadow-sm flex flex-col items-center gap-4 min-h-[400px] p-4">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-gray-700">{image.title}</p>
        <ArrowRight className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
}