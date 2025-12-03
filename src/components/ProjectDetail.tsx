import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#4F8CFF] hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#4F8CFF] hover:text-[#00AEEF] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-[#9CA3AF] mb-6">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#4F8CFF]/10 text-[#4F8CFF] rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              View on GitHub
            </a>
            <Link
              to={project.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={24} />
              Launch app
            </Link>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-[#161B22] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20"
          >
            <h2 className="text-2xl mb-4 text-[#4F8CFF]">Problem</h2>
            <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-[#161B22] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20"
          >
            <h2 className="text-2xl mb-4 text-[#4F8CFF]">Solution</h2>
            <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6">About This Project</h2>
          <p className="text-lg text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Role & Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 bg-gradient-to-br from-[#4F8CFF]/10 to-[#00AEEF]/10 rounded-2xl p-8 border border-[#4F8CFF]/20"
        >
          <h2 className="text-2xl mb-4">My Role</h2>
          <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
            {project.role}
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#4F8CFF]/20"
              >
                <CheckCircle2 className="w-6 h-6 text-[#4F8CFF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-[#E2E8F0]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F8CFF]/50"
          >
            <Github size={24} />
            Explore the Code
          </a>
        </motion.div>
      </div>
    </div>
  );
}
