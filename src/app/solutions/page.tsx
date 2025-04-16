'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'AI-Powered Laytime Calculation',
    description: 'Simplify laytime calculations with intelligent automation and document comparisons.',
    icon: ChartBarIcon,
  },
  {
    title: 'Real-Time Dashboard & Analytics',
    description: 'Access operational data instantly and generate comprehensive reports.',
    icon: CpuChipIcon,
  },
  {
    title: 'Agentic AI Knowledge Base',
    description: 'Create a maritime knowledge base and leverage AI for recommendations.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Certificate Management System',
    description: 'Manage vessel certifications and automate compliance checks.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Customizable Email Templates',
    description: 'Use pre-defined templates for consistent communication.',
    icon: UserGroupIcon,
  },
  {
    title: 'Predictive Analytics',
    description: 'Anticipate operational needs and make proactive decisions.',
    icon: ChartBarIcon,
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-gradient-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gradient sm:text-6xl"
            >
              Our Solutions
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Maritime Operations Transformed by AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Discover how MarineFlow AI's comprehensive suite of solutions is revolutionizing maritime operations through cutting-edge artificial intelligence and machine learning technologies.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
              >
                Book a demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Learn more about us
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/o94deYnIKWY"
                title="MarineFlow AI Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                Our Solutions
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
            >
              Comprehensive Maritime Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Explore our suite of AI-powered solutions designed to transform maritime operations and drive business value.
            </motion.p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-x-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <solution.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{solution.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your maritime operations with AI?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
            >
              Book a demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 