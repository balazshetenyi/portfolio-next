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
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a Senior Software Developer at the Wellcome Sanger
                Institute, where I build the software infrastructure that
                supports world-leading genomics and cancer research. In practice
                that means full-stack platforms in React and Python - document
                management systems, Elasticsearch-powered search across
                scientific literature, and secure data pipelines that help
                researchers and clinical curators work with the COSMIC cancer
                variant database.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Outside of Sanger, I design and ship my own products. Recipify -
                an AI-powered recipe generator - is live on the App Store and
                Google Play. SmartLet is a full-stack rental marketplace
                handling bookings, Stripe payments, and in-app messaging.
                Building these end-to-end keeps me sharp across the full stack,
                from React Native and serverless backends to real-world
                deployment and monetisation.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I also mentor developers at OpenClassrooms, guiding students
                from first principles through to production-ready applications.
                I care about writing software that solves real problems, is
                maintainable by the next person, and holds up under real-world
                conditions.
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
