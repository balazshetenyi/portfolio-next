"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Wellcome Sanger Institute",
      location: "Cambridge, UK (Non-profit) - Hybrid",
      period: "Nov 2024 - Present",
      description: [
        "Leading frontend initiatives for large-scale research platforms using React + TypeScript, improving reliability and maintainability.",
        "Partnering with UX and product teams to design and deliver user-centric features.",
        "Introducing component reusability and performance optimisations that reduced load times by 30%.",
        "Mentoring junior developers and contributed to code reviews and knowledge sharing.",
        "Helping refine and extend the internal design system for consistent, accessible UIs.",
      ],
      stack:
        "React, TypeScript, Next.js, Python, Django, Docker, AWS, OpenStack, GitLab",
    },
    {
      title: "Software Developer",
      company: "Wellcome Sanger Institute",
      location: "Cambridge, UK (Non-profit) - Hybrid",
      period: "Nov 2022 - Nov 2024",
      description: [
        "Built and maintained complex web apps in React, focusing on clean code and long-term maintainability.",
        "Collaborated with product managers to iterate quickly on new feature concepts and experiments.",
        "Wrote comprehensive unit and integration tests, improving reliability across releases.",
        "Automated data processing pipelines, reducing manual intervention and boosting efficiency.",
        "Collaborated in Agile teams to deliver high-quality features on time.",
      ],
      stack:
        "React, TypeScript, Next.js, Python, Django, Docker, AWS, OpenStack, GitLab",
    },
    {
      title: "Web/Software Development Mentor (Part-Time)",
      company: "OpenClassrooms International",
      location: "UK",
      period: "Nov 2022 - Present",
      description: [
        "Guiding students through building JavaScript, React, and Node.js applications, with a focus on modular design and best practices.",
        "Supporting projects involving frontend architecture, API integration, and cloud deployment.",
        "Highlighting the importance of scalability, testing, and agile collaboration.",
      ],
      stack:
        "HTML, CSS, JavaScript, TypeScript, React, Python, C#, REST API, Node.JS, SQL, MongoDB",
    },
    {
      title: "Full-Stack Software Developer",
      company: "Passle Ltd.",
      location: "Oxford, UK (SaaS)",
      period: "May 2021 - Nov 2022",
      description: [
        "Delivered customer-facing features in a commercial SaaS platform, collaborating closely with product and design teams.",
        "Worked across the stack with Angular, TypeScript, and .NET, building secure and reliable solutions.",
        "Gained early exposure to multi-team collaboration in a growing codebase.",
      ],
      stack: "Angular, TypeScript, C#, .NET MVC, MongoDB",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="mr-1 h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {experience.stack && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tech Stack:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {experience.stack}
                      </p>
                    </div>
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
