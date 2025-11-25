"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-dark-100/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl top-1/4 left-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-1/4 right-0 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card group hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-4xl">
                      👨‍💻
                    </div>
                    <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I'm a Software Development Engineer at Boomi with a passion for building scalable,
                    distributed systems and intelligent automation solutions. With an 8.3 CGPA in Information
                    Science Engineering from B.M.S College of Engineering, I bring both academic excellence
                    and real-world experience to every project.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My expertise spans across full-stack development, event-driven architectures, and AI/ML.
                    I've contributed to critical features in enterprise-grade products and won recognition for
                    innovative AI agent development. I'm constantly exploring new technologies and methodologies
                    to solve complex problems efficiently.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card group hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-3xl">
                      🎓
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Education
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">B.E Information Science Engineering</h4>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p>B.M.S College of Engineering, Bengaluru</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="px-3 py-1 bg-dark-50 rounded-lg text-gray-400">Jun 2021 - Jun 2025</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg text-primary font-semibold border border-primary/30">
                          8.3 CGPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card group hover:shadow-2xl hover:shadow-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-3xl">
                      🏆
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Certifications
                    </h3>
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">Professional API Design</span>
                    </li>
                    <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">Associate Event Streams</span>
                    </li>
                    <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">Associate Integration Developer</span>
                    </li>
                    <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">Agentic AI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
