"use client";

import { motion } from "framer-motion";
import { Download, Mail, Eye } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Balazs Hetenyi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            Software Engineer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Senior Software Developer at the Wellcome Sanger Institute, building
            tools for world-leading genomics research while shipping my own
            products on the side.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </a>

            <a
              href="/B_Hetenyi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-200 text-gray-500 dark:text-white hover:border-gray-500 dark:hover:border-white hover:text-gray-900 dark:hover:text-gray-100 font-medium rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/balazshetenyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/balazs-hetenyi-b45251173/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-8 w-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
