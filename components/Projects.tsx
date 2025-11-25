"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "QuickChat",
      subtitle: "Real-Time Messaging Platform",
      icon: "💬",
      description: "A full-stack MERN application featuring secure RESTful API with JWT authentication, real-time messaging with Socket.io, and modern responsive UI.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "TailwindCSS", "Daisy UI"],
      highlights: [
        "Implemented JWT authentication for secure user authorization",
        "Integrated Socket.io for bidirectional, real-time messaging",
        "Built user presence indicators (online/offline status)",
        "Designed efficient MongoDB schemas for persistent chat history"
      ],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      link: "https://github.com/Pruthvirajj2"
    },
    {
      title: "Accident Detection System",
      subtitle: "AI-Powered Safety Solution",
      icon: "🚨",
      description: "A hybrid CNN+GRU deep learning model for real-time accident detection from video streams, with automated emergency notification system.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Twilio API"],
      highlights: [
        "Achieved 94% accuracy using hybrid CNN+GRU architecture",
        "Implemented real-time video stream processing with OpenCV",
        "Integrated Twilio API for automatic SMS alerts to emergency services",
        "Supports both CCTV surveillance and file upload validation"
      ],
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      link: "https://github.com/Pruthvirajj2"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl top-0 left-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-0 animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient border bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}></div>

                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative">
                  {/* Project icon and title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg text-4xl group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                        {project.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-base">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-gray-300 text-sm"
                        >
                          <span className="text-primary mt-0.5 text-lg">✓</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-dark-50/80 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-200 border border-dark-50 group-hover:border-primary/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
