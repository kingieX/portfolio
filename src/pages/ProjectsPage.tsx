import React from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-[#161B22] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="text-[#4F8CFF]">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-[#4F8CFF] mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Browse the full collection of my development work, experiments,
            hobbies, and open-source contributions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Back Home Button */}
        <div className="flex justify-center mt-20">
          <a
            href="/"
            className="px-8 py-4 bg-[#4F8CFF] text-white rounded-xl font-medium shadow-lg 
            transition-all duration-300 hover:bg-[#00AEEF] hover:scale-105 hover:shadow-[#4F8CFF]/40"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
