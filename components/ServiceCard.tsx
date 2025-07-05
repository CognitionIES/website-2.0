import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentType } from "react";

interface ServiceProps {
  icon: ComponentType<{ className?: string }> | IconProp; // Support both component and FontAwesome icon
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  id: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Render the icon based on its type
  const IconComponent = ({ className }: { className?: string }) => {
    // Check if the icon is a FontAwesome icon (IconProp is an array or object with specific properties)
    if (
      service.icon &&
      typeof service.icon === "object" &&
      "iconName" in service.icon
    ) {
      return <FontAwesomeIcon icon={service.icon as IconProp} className={className} />;
    }
    // Treat it as a React component (e.g., Tabler or Lucide)
    const Component = service.icon as ComponentType<{ className?: string }>;
    return <Component className={className} />;
  };

  return (
    <Link
      href={`/services/plant-engineering/details#${service.id}`}
      className="block"
    >
      <div
        className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Service image */}
        <Image
          src={service.image}
          alt={service.title}
          width={300}
          height={300}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10">
          <IconComponent className="w-5 h-5 text-[#0098af]" />
        </div>

        {/* Content container */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 bg-gradient-to-t from-[#0098af | via-[#00A4B4]/50 to-transparent opacity-90">
          {/* Title with dynamic upward animation */}
          <h3 className="text-2xl font-semibold mb-2 transition-transform duration-300 ease-in-out translate-y-0 group-hover:opacity-0">
            {service.title}
          </h3>

          {/* Description container */}
          <div className="absolute left-6 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-transform ease-in-out transition-opacity duration-300 delay-100">
            <p className="text-2xl font-semibold">{service.title}</p>
            <p className="text-base">{service.description}</p>
          </div>
        </div>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0098af] via-[#0098af]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}