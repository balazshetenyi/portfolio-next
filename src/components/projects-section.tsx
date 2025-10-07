"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Community Notice Board App",
      description:
        "A React Native mobile application with real-time notifications and community engagement features. Built with modern mobile development practices and seamless user experience.",
      techStack: ["React Native", "Supabase", "TypeScript", "Expo"],
      githubUrl: "https://github.com/balazs/community-board",
      liveUrl: "https://community-board.app",
      featured: true,
    },
    {
      title: "SmartLet Property Management Platform",
      description:
        "Full-stack web application for property management with automated workflows, tenant communication, and financial tracking. Streamlines property operations for landlords.",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      githubUrl: "https://github.com/balazs/smartlet",
      liveUrl: "https://smartlet-demo.com",
      featured: true,
    },
    {
      title: "Hétenyi-Bau Construction Website",
      description:
        "A fully responsive company website designed and developed for a local construction business, Hétenyi-Bau. The site presents the company's services, portfolio, and contact information in a modern, mobile-friendly layout. I built the entire site architecture, implemented SEO-optimised metadata, and ensured high Lighthouse performance scores. This project highlights my ability to deliver polished production-ready websites for real clients.",
      techStack: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
      githubUrl: null,
      liveUrl: "https://www.hetenyi-bau.hu/",
      featured: false,
    },
    {
      title: "Transfer Learning Investigation",
      description:
        "Machine learning research project investigating transfer learning techniques for image classification. Achieved 95% accuracy improvement over baseline models.",
      techStack: ["Python", "TensorFlow", "Jupyter", "Scikit-learn", "Pandas"],
      githubUrl: "https://github.com/balazs/transfer-learning",
      liveUrl: null,
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
