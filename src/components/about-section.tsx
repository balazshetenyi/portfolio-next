"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Senior Software Developer at the Wellcome Sanger Institute
                with over 4 years of experience building scalable, reliable
                software solutions. My work spans from data-driven cloud systems
                to intuitive user interfaces, always with a focus on creating
                user-centred technology.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise includes AWS cloud architecture, Python
                development, full-stack web applications, and modern JavaScript
                frameworks. I'm passionate about mentoring developers and
                contributing to software engineering education, helping teams
                grow and deliver exceptional products.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in writing clean,
                maintainable code that solves real-world problems.
              </p>
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Balazs Hetenyi"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
