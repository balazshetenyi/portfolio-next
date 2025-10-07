"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "BSc (Honours) Computing & IT (Software Engineering)",
      institution: "The Open University",
      period: "Expected 2025",
      description:
        "Comprehensive study of software engineering principles, algorithms, data structures, machine laerning (ML), and modern development practices.",
      status: "In Progress",
    },
    {
      degree: "Foundation Degree in Software Development",
      institution: "OpenClassrooms International",
      period: "Completed 2021",
      description:
        "Intensive program covering full-stack development, project management, and industry best practices.",
      status: "Completed",
    },
  ];

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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Completed"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                          : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
