"use client";

import { motion } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "pruthvirajbhovi@gmail.com",
      link: "mailto:pruthvirajbhovi@gmail.com",
      emoji: "📧",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/pruthviraj-chandru24",
      link: "https://linkedin.com/in/pruthviraj-chandru24",
      emoji: "💼",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "GitHub",
      value: "github.com/Pruthvirajj2",
      link: "https://github.com/Pruthvirajj2",
      emoji: "💻",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "from-gray-700 to-gray-500"
    },
    {
      name: "Phone",
      value: "843-168-8146",
      link: "tel:843-168-8146",
      emoji: "📱",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-dark-100/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 right-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl bottom-0 left-0 animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of these channels!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.link}
                target={contact.name !== "Phone" ? "_blank" : undefined}
                rel={contact.name !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="card group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${contact.color}`}></div>

                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="flex items-center gap-5 relative">
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${contact.color} text-white group-hover:shadow-2xl group-hover:shadow-${contact.color}/30 transition-all duration-300 group-hover:scale-110 text-4xl`}>
                    {contact.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                      {contact.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-primary transition-colors duration-300 font-medium">
                      {contact.value}
                    </p>
                  </div>
                  <svg
                    className="w-8 h-8 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a
              href="/Pruthvi-resume (1).pdf"
              download
              className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 group"
            >
              <svg className="w-7 h-7 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 pt-8 border-t border-dark-50 text-center text-gray-400"
          >
            <p className="text-lg">© 2025 Pruthviraj Chandru. Built with Next.js & Tailwind CSS.</p>
            <p className="mt-2 text-gray-500">Designed with passion for innovation and excellence.</p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
