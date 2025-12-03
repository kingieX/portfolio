import React from "react";
import { Github, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#4F8CFF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-[#00AEEF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#4F8CFF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[#4F8CFF]/10 text-[#4F8CFF] text-sm mb-6">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            <span className="block text-gray-600 dark:text-[#9CA3AF]">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-[#4F8CFF] to-[#00AEEF] bg-clip-text text-transparent">
              Nnachi Chima Kingsley
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-[#9CA3AF] mb-8">
            Software Engineer / Full-Stack Developer
          </p>

          <p className="text-lg text-gray-600 dark:text-[#9CA3AF] max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate full-stack engineer building high-performance,
            user-focused solutions with JavaScript, TypeScript, React, React
            Native, Next.js, and Python.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F8CFF]/50"
            >
              View My Work
            </button>

            <a
              href="https://github.com/kingieX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-[#4F8CFF] text-gray-800 dark:text-[#E2E8F0] hover:bg-gray-100 dark:hover:bg-[#4F8CFF]/10 rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown size={32} className="text-[#4F8CFF]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Code-themed decoration */}
      <div className="absolute top-20 right-10 text-[#4F8CFF]/20 text-6xl hidden lg:block font-mono">
        {"{}"}
      </div>
      <div className="absolute bottom-20 left-10 text-[#4F8CFF]/20 text-6xl hidden lg:block font-mono">
        {"</>"}
      </div>
    </section>
  );
}
