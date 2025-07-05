import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Code2, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  features: string[];
  client: string;
  duration: string;
  technologies: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  inView,
}) => {
  const isEven = index % 2 === 0;
  const delay = index * 0.2;

  return (
    <div
      className={`grid grid-cols-1 ${
        isEven
          ? "md:grid-cols-[1fr_1.2fr]"
          : "md:grid-cols-[1.2fr_1fr] md:[direction:rtl]"
      } gap-8 md:gap-12 transition-all duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden group shadow-lg md:[direction:ltr]">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent z-10"></div>

        {project.featured && (
          <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
            Featured
          </div>
        )}

        <Image
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute bottom-6 left-6 right-6 z-10 md:[direction:ltr]">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col space-y-6 md:[direction:ltr]">
        <div className="hidden md:block">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-600 leading-relaxed">{project.description}</p>

        <div className="space-y-1">
          <h4 className="font-semibold text-slate-800">Key Features</h4>
          <ul className="space-y-2 mt-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-cyan-600 rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-slate-600">
          <div className="flex items-center">
            <Building2 className="w-4 h-4 text-cyan-600 mr-2" />
            <span>
              <strong>Client:</strong> {project.client}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-cyan-600 mr-2" />
            <span>
              <strong>Duration:</strong> {project.duration}
            </span>
          </div>
          <div className="flex items-center">
            <Code2 className="w-4 h-4 text-cyan-600 mr-2" />
            <span>
              <strong>Tech:</strong> {project.technologies.join(", ")}
            </span>
          </div>
        </div>

        <div className="pt-4">
          <Link href={`/projects/${project.slug}`}>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 hover:translate-x-1">
              View Case Study
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
