'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-gradient-light">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <section className="py-24 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              The Impact of Inefficient Maritime Operations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The maritime industry faces significant challenges that impact operational efficiency and financial performance
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Operational Inefficiencies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-semibold">1</span>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">40% of maritime companies</span> struggle with inefficient laytime calculations, leading to operational delays and financial losses.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-semibold">2</span>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Manual processing of laytime claims takes an average of <span className="font-semibold text-gray-900">4-5 days</span>, often causing disputes and financial risks.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-semibold">3</span>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Fragmented documentation (SoF, recaps, Contracts etc.) significantly <span className="font-semibold text-gray-900">slows decision making</span> and operational efficiency.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Impact</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-3xl font-bold text-blue-600 mb-2">$4 Billion</p>
                  <p className="text-gray-600">
                    Annual demurrage and detention costs incurred due to miscalculations and delays
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    These inefficiencies lead to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Increased operational costs
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Extended processing times
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Higher risk of disputes
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Testimonials />
      <CaseStudies />
    </main>
  );
} 