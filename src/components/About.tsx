'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full w-full">
              <Image
                src="/images/about-3d.svg"
                alt="About MarineFlow AI"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About MarineFlow AI
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              MarineFlow AI is a leading provider of maritime intelligence solutions, combining cutting-edge artificial intelligence with deep industry expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">
                  Advanced AI-powered solutions for maritime monitoring and security
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">
                  Real-time data analysis and predictive analytics
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">
                  Comprehensive environmental monitoring and protection
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all transform hover:shadow-lg hover:shadow-blue-500/20"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 