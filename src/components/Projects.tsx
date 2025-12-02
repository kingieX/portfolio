import React from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-[#161B22]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">
            Featured <span className="text-[#4F8CFF]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#4F8CFF] mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-600 dark:text-[#9CA3AF] max-w-2xl mx-auto mb-16">
            A showcase of my recent work and open-source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Open Source Contributions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl mb-8 text-center">
            Open Source <span className="text-[#4F8CFF]">Contributions</span>
          </h3>
          
          <div className="bg-white dark:bg-[#0D1117] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20">
            <p className="text-center text-gray-600 dark:text-[#9CA3AF] mb-6">
              I actively contribute to open-source projects and collaborate with developers worldwide
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/kingieX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F8CFF]/50"
              >
                View All Repositories
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
