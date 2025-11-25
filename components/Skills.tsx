"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "⚙️" },
        { name: "SQL", icon: "🗄️" },
        { name: "JavaScript", icon: "📜" },
        { name: "TypeScript", icon: "📘" },
        { name: "HTML/CSS", icon: "🎨" }
      ],
      color: "from-primary to-secondary"
    },
    {
      title: "Frameworks & Libraries",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        { name: "Spring Boot", icon: "🍃" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Flask", icon: "🧪" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "TailwindCSS", icon: "🎐" },
        { name: "PyTorch", icon: "🔥" },
        { name: "TensorFlow", icon: "🤖" }
      ],
      color: "from-primary to-secondary"
    },
    {
      title: "Developer Tools",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      skills: [
        { name: "Git", icon: "🔀" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Apache Pulsar", icon: "⚡" },
        { name: "AWS", icon: "☁️" },
        { name: "VS Code", icon: "💻" },
        { name: "Eclipse", icon: "🌘" }
      ],
      color: "from-primary to-secondary"
    },
    {
      title: "Systems & Concepts",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: "Microservices", icon: "🔌" },
        { name: "Distributed Systems", icon: "🌐" },
        { name: "Event-Driven", icon: "📡" },
        { name: "Agentic AI", icon: "🤖" },
        { name: "Machine Learning", icon: "🧠" },
        { name: "Cloud Computing", icon: "☁️" },
        { name: "RESTful APIs", icon: "🔗" },
        { name: "Data Structures", icon: "📊" }
      ],
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 right-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl bottom-0 left-0 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="relative group/skill"
                    >
                      <div className="px-5 py-3 bg-dark-50/80 backdrop-blur-sm rounded-xl text-gray-200 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:text-white transition-all duration-300 cursor-default border border-dark-50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
