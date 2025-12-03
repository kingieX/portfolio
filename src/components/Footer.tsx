import React from "react";
import {
  Github,
  Heart,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#161B22] border-t border-gray-200 dark:border-[#4F8CFF]/20 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl mb-3">
              <span className="text-[#4F8CFF]">{"<"}</span>
              kingieX
              <span className="text-[#4F8CFF]">{"/>"}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
              Building innovative solutions with modern web technologies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-600 dark:text-[#9CA3AF] hover:text-[#4F8CFF] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("tech-stack");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-600 dark:text-[#9CA3AF] hover:text-[#4F8CFF] transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-600 dark:text-[#9CA3AF] hover:text-[#4F8CFF] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-600 dark:text-[#9CA3AF] hover:text-[#4F8CFF] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/kingieX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github
                  size={20}
                  className="text-gray-600 dark:text-[#E2E8F0]"
                />
              </a>
              <a
                href="https://linkedin.com/in/chima-kingsley-nnachi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="text-gray-600 dark:text-[#E2E8F0]"
                />
              </a>
              <a
                href="https://x.com/ObaTheDeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="X"
              >
                <Twitter
                  size={20}
                  className="text-gray-600 dark:text-[#E2E8F0]"
                />
              </a>
              {/* <a
                href="mailto:chimakingsley216@gmail.com"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-600 dark:text-[#E2E8F0]" />
              </a> */}
              <a
                href="https://wa.me/2349036381640"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone
                  size={20}
                  className="text-gray-600 dark:text-[#E2E8F0]"
                />
              </a>
              <a
                href="https://www.youtube.com/@AdiKlinex-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#0D1117] rounded-lg border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube
                  size={20}
                  className="text-gray-600 dark:text-[#E2E8F0]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-[#4F8CFF]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-[#9CA3AF]">
          <p>© {currentYear} Nnachi Chima Kingsley. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <Heart size={16} className="text-[#4F8CFF]" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
