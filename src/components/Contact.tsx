import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white dark:bg-[#0D1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">
            Get In <span className="text-[#4F8CFF]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#4F8CFF] mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-600 dark:text-[#9CA3AF] max-w-2xl mx-auto mb-16">
            I'm open to freelance projects, collaborations, and full-time opportunities. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-[#E2E8F0]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-gray-300 dark:border-[#4F8CFF]/20 rounded-xl focus:outline-none focus:border-[#4F8CFF] transition-colors text-gray-900 dark:text-[#E2E8F0]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-[#E2E8F0]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-gray-300 dark:border-[#4F8CFF]/20 rounded-xl focus:outline-none focus:border-[#4F8CFF] transition-colors text-gray-900 dark:text-[#E2E8F0]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-[#E2E8F0]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-[#161B22] border border-gray-300 dark:border-[#4F8CFF]/20 rounded-xl focus:outline-none focus:border-[#4F8CFF] transition-colors resize-none text-gray-900 dark:text-[#E2E8F0]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-4 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F8CFF]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed mb-8">
                Whether you have a question, a project idea, or just want to say hi, 
                I'll try my best to get back to you as soon as possible.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="https://github.com/kingieX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="p-3 bg-[#4F8CFF]/10 rounded-lg group-hover:bg-[#4F8CFF] transition-colors">
                  <Github className="w-6 h-6 text-[#4F8CFF] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-[#E2E8F0]">GitHub</div>
                  <div className="text-sm text-gray-500 dark:text-[#9CA3AF]">github.com/kingieX</div>
                </div>
              </a>

              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#4F8CFF]/20 hover:border-[#4F8CFF] transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="p-3 bg-[#4F8CFF]/10 rounded-lg group-hover:bg-[#4F8CFF] transition-colors">
                  <Mail className="w-6 h-6 text-[#4F8CFF] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-[#E2E8F0]">Email</div>
                  <div className="text-sm text-gray-500 dark:text-[#9CA3AF]">contact@example.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#4F8CFF]/20 opacity-50">
                <div className="p-3 bg-[#4F8CFF]/10 rounded-lg">
                  <Linkedin className="w-6 h-6 text-[#4F8CFF]" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-[#E2E8F0]">LinkedIn</div>
                  <div className="text-sm text-gray-500 dark:text-[#9CA3AF]">Coming soon</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-br from-[#4F8CFF]/10 to-[#00AEEF]/10 rounded-xl border border-[#4F8CFF]/20">
              <h4 className="mb-3">Availability</h4>
              <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                Currently available for freelance projects and open to full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
