"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer I",
      company: "Boomi",
      icon: "💼",
      location: "Bengaluru",
      period: "Jun 2025 – Present",
      description: [
        "Spearheaded development of critical features in Boomi's Event Streams product using Java, Spring Boot, and Apache Pulsar, enhancing scalability and real-time messaging capabilities",
        "Developed a proactive monitoring agent that sends weekly token expiry status emails to customers, preventing workflow disruptions and improving operational reliability",
        "Ensured synchronization between Pulsar namespaces and SQL database to maintain consistency of token metadata such as expiry dates"
      ],
      color: "from-primary to-secondary",
      current: true
    },
    {
      title: "Software Engineering Intern",
      company: "Boomi",
      icon: "🚀",
      location: "Bengaluru",
      period: "Feb 2025 – Jun 2025",
      description: [
        "Contributed to the Boomi Agent Studio team by building AI agents to automate enterprise workflows, leveraging Agentic AI, Retrieval-Augmented Generation (RAG), and Amazon OpenSearch for vector similarity search",
        "Integrated LLMs including Claude Haiku and Sonnet via Amazon Bedrock for advanced language reasoning",
        "Developed a full data analysis and visualization agent using Boomi DataHub, Salesforce, Google Sheets, and Grafana; secured a Top 3 position in the Boomi Agent Hackathon"
      ],
      color: "from-primary to-secondary",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-dark-100/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl -left-48 top-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl -right-48 bottom-1/4 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-3xl shadow-2xl ring-4 ring-dark-100 ${exp.current ? 'animate-pulse' : ''}`}>
                      {exp.icon}
                    </div>
                    {exp.current && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse ring-4 ring-dark-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="card group relative overflow-hidden"
                    >
                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`}></div>

                      {/* Background glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <p className="text-xl text-white font-semibold">{exp.company}</p>
                            </div>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Location and period */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-primary font-semibold">{exp.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-3">
                          {exp.description.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex gap-3 text-gray-300 leading-relaxed"
                            >
                              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
