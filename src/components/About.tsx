import React from "react";
import { Code2, Database, Chrome, Zap, Users, Target } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const whatIDo = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and intuitive user interfaces",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating scalable server-side applications",
    },
    {
      icon: Zap,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications",
    },
    {
      icon: Chrome,
      title: "Chrome Extensions",
      description: "Developing browser extensions and tools",
    },
    {
      icon: Zap,
      title: "API & Microservices",
      description: "Designing robust and efficient APIs",
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and readable code",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Building inclusive experiences",
    },
    {
      icon: Target,
      title: "Usability",
      description: "Focusing on user experience",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-[#161B22]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">
            About <span className="text-[#4F8CFF]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#4F8CFF] mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NDM1NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#4F8CFF]/20 rounded-full filter blur-3xl -z-10" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-[#9CA3AF] leading-relaxed">
              I'm a software engineer passionate about building scalable,
              intuitive solutions using JavaScript, TypeScript, React, React
              Native, Next.js, Python and modern tools. I enjoy solving complex
              problems, collaborating on meaningful projects, and constantly
              learning new technologies.
            </p>

            <div className="bg-white dark:bg-[#0D1117] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20">
              <h3 className="text-xl mb-4 text-[#4F8CFF]">
                Currently Working On
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Improving React/Next.js full-stack skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Building better mobile applications with React Native
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Expanding open-source contributions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Learning advanced backend development with Node.js and
                    Python
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Exploring cloud services and DevOps practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Enhancing UI/UX design skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Building personal projects to experiment with new tech
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Networking with other developers and tech communities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4F8CFF] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-[#9CA3AF]">
                    Staying updated with industry trends and best practices
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-center">
            What I <span className="text-[#4F8CFF]">Do</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#0D1117] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <item.icon className="w-12 h-12 text-[#4F8CFF] mb-4" />
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-center">
            Core <span className="text-[#4F8CFF]">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#4F8CFF]/10 to-[#00AEEF]/10 rounded-xl p-6 border border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-[#4F8CFF] mb-3" />
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
