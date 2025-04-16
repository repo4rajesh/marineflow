'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: "Port of Singapore Authority",
    description: "Implementing AI-driven vessel tracking and port management system resulting in 30% improved efficiency in berth allocation and reduced waiting times.",
    metrics: ["30% efficiency increase", "20% cost reduction", "45% faster berthing"],
    category: "Port Management"
  },
  {
    title: "Mediterranean Shipping Company",
    description: "Deploying predictive maintenance and route optimization solutions across a fleet of 100 vessels, leading to significant fuel savings and reduced downtime.",
    metrics: ["15% fuel savings", "40% less downtime", "ROI in 8 months"],
    category: "Fleet Operations"
  },
  {
    title: "Dubai Maritime City",
    description: "Enhanced maritime security and environmental monitoring through AI-powered surveillance and analytics platform.",
    metrics: ["24/7 monitoring", "90% faster response", "50% better compliance"],
    category: "Maritime Security"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how leading maritime organizations are transforming their operations with MarineFlow AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {study.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {study.title}
                    </h3>
                  </div>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  {study.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 