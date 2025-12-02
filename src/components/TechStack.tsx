import React from 'react';
import { motion } from 'motion/react';

export function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'HTML', icon: 'HTML' },
        { name: 'CSS', icon: 'CSS' },
        { name: 'Tailwind CSS', icon: '🎨' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'Python', icon: '🐍' },
      ],
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
        { name: 'npm', icon: '📦' },
        { name: 'Chrome Extensions', icon: '🧩' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 lg:px-8 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">
            Tech <span className="text-[#4F8CFF]">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-[#4F8CFF] mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-600 dark:text-[#9CA3AF] max-w-2xl mx-auto mb-16">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl mb-8 text-center md:text-left">
                <span className="text-[#4F8CFF]">//</span> {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-[#161B22] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-center text-gray-700 dark:text-[#E2E8F0]">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#4F8CFF]/10 to-[#00AEEF]/10 rounded-2xl p-8 border border-[#4F8CFF]/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#4F8CFF] mb-2">5+</div>
              <p className="text-gray-600 dark:text-[#9CA3AF]">Years Learning</p>
            </div>
            <div>
              <div className="text-4xl text-[#4F8CFF] mb-2">15+</div>
              <p className="text-gray-600 dark:text-[#9CA3AF]">Technologies</p>
            </div>
            <div>
              <div className="text-4xl text-[#4F8CFF] mb-2">∞</div>
              <p className="text-gray-600 dark:text-[#9CA3AF]">Passion for Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
