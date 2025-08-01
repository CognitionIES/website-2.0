import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Project } from "@/constants/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full">
      <Card className="h-full">
        <div className="relative overflow-hidden">
          <div className="relative h-48 lg:h-60 overflow-hidden group">
            <Image
              src={project.image}
              alt={`${project.title} project visual`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#E6F0F5] text-[#0098AF] text-sm font-medium rounded-full">
            {project.category}
          </div>

          <h3 className="text-xl font-semibold text-[#003C46] leading-tight">
            {project.title}
          </h3>

          <p className="text-[#5B5B5B] text-base leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-[#0098AF] font-medium hover:text-[#007B8F] transition-all duration-200 group hover:gap-3"
          >
            View in Detail
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </Card>
    </div>
  );
}
