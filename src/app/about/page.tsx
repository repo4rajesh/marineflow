'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  GlobeAltIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const achievements = [
  {
    title: "Global Impact",
    value: "40+",
    description: "Countries with active users",
    icon: GlobeAltIcon
  },
  {
    title: "Industry Experience",
    value: "20+",
    description: "Years of maritime expertise",
    icon: AcademicCapIcon
  },
  {
    title: "Team Size",
    value: "50+",
    description: "Maritime & tech experts",
    icon: UserGroupIcon
  },
  {
    title: "Enterprise Clients",
    value: "100+",
    description: "Satisfied customers globally",
    icon: BuildingOfficeIcon
  }
];

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "MarineFlow.ai was established with a vision to revolutionize maritime operations."
  },
  {
    year: "2022",
    title: "First Major Release",
    description: "Launched our core AI-powered laytime calculation platform."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opened offices in Singapore and expanded operations to 40+ countries."
  },
  {
    year: "2024",
    title: "Advanced AI Integration",
    description: "Introduced cutting-edge AI features for automated document processing."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About MarineFlow.ai
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionizing maritime operations through AI-powered solutions and industry expertise.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-8">
                To transform maritime operations through innovative AI solutions, making laytime calculations and maritime documentation processes more efficient, accurate, and accessible for businesses worldwide.
              </p>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-400">
                To become the global leader in maritime technology solutions, setting new standards for efficiency and accuracy in the shipping industry through continuous innovation and customer-centric development.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/about-3d.svg"
                alt="Maritime Innovation"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg p-2 mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.value}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-400">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 