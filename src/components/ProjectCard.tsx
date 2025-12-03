import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-[#0D1117] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300 hover:transform hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent opacity-60" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#4F8CFF]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-[#4F8CFF] rounded-full hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={24} />
          </a>
          <Link
            to={project.liveLink}
            className="p-3 bg-white text-[#4F8CFF] rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink size={24} />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl mb-3 group-hover:text-[#4F8CFF] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-[#9CA3AF] mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#4F8CFF]/10 text-[#4F8CFF] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to={`/project/${project.id}`}
            className="flex-1 px-4 py-2 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-lg transition-colors text-center"
          >
            View Details
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[#4F8CFF] text-[#4F8CFF] hover:bg-[#4F8CFF] hover:text-white rounded-lg transition-colors"
            title="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
