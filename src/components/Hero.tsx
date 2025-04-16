'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Maritime Intelligence Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI-powered solutions for maritime monitoring, security, and environmental protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all transform hover:shadow-lg hover:shadow-blue-500/20"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-white transition-all transform hover:shadow-lg hover:shadow-gray-500/20"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - 3D visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full w-full">
              <Image
                src="/images/hero-3d.svg"
                alt="MarineFlow AI Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
} 