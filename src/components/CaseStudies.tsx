'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const caseStudies = [
  {
    title: "Global Shipping Optimization",
    description: "How a major shipping company reduced fuel consumption by 18% using MarineFlow AI's route optimization algorithms.",
    image: "/images/case-study-1.jpg",
    results: [
      "18% reduction in fuel consumption",
      "12% faster delivery times",
      "25% reduction in carbon emissions"
    ]
  },
  {
    title: "Environmental Protection",
    description: "A marine conservation project that used MarineFlow AI to track and protect endangered species in the Pacific Ocean.",
    image: "/images/case-study-2.jpg",
    results: [
      "40% improvement in species detection",
      "Successful protection of 3 endangered species",
      "Creation of 2 new marine protected areas"
    ]
  },
  {
    title: "Port Security Enhancement",
    description: "Implementation of MarineFlow AI's security systems at a major international port to prevent unauthorized access.",
    image: "/images/case-study-3.jpg",
    results: [
      "99.9% detection rate of security threats",
      "60% reduction in false alarms",
      "30% faster response times to incidents"
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications of MarineFlow AI technology
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="space-y-3">
                  {study.results.map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{result}</span>
                    </motion.div>
                  ))}
                </div>
                
                <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  Read Full Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 