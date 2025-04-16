'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  GlobeAltIcon,
  BeakerIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Vessel Tracking",
    description: "Real-time monitoring and tracking of vessels worldwide using advanced AI algorithms.",
    icon: TruckIcon,
  },
  {
    title: "Security & Defense",
    description: "Enhanced maritime security with AI-powered threat detection and response systems.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Environmental Monitoring",
    description: "Comprehensive environmental monitoring and protection solutions for marine ecosystems.",
    icon: BeakerIcon,
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics and insights for maritime operations and decision-making.",
    icon: ChartBarIcon,
  },
  {
    title: "Global Coverage",
    description: "Worldwide coverage with real-time data and monitoring capabilities.",
    icon: GlobeAltIcon,
  },
  {
    title: "Cloud Integration",
    description: "Seamless cloud integration for secure data storage and accessibility.",
    icon: CloudIcon,
  },
];

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive maritime intelligence solutions powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 