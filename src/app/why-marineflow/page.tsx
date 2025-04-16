'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalculatorIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  DocumentCheckIcon, 
  EnvelopeIcon, 
  ChartPieIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI-Powered Laytime Calculation',
    description: 'Simplify laytime calculations with intelligent automation. Process digitized SoF, Recap, and Addendum documents seamlessly. Compare documents side by side with original versions for unmatched accuracy.',
    icon: CalculatorIcon,
  },
  {
    title: 'Real-Time Dashboard, Analytics, and Reporting',
    description: 'Access critical operational data instantly on an intuitive dashboard. Gain actionable insights with real-time analytics. Generate comprehensive reports to make data-driven decisions.',
    icon: ChartBarIcon,
  },
  {
    title: 'Agentic AI Knowledge Base and Co-Pilot',
    description: 'Tap into the power of AI to create a robust maritime knowledge base. Leverage the AI Co-Pilot for smart recommendations, task assistance, and workflow optimization. Ensure your team has access to accurate and timely information, always.',
    icon: CpuChipIcon,
  },
  {
    title: 'AI-Powered Certificate Management System (CMS)',
    description: 'Manage vessel certifications effortlessly. Automate certificate tracking, reminders, and compliance checks. Ensure no document expiry or compliance gap disrupts operations.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Customizable Email Templates',
    description: 'Save time with pre-defined, customizable email templates. Maintain consistency and professionalism in communications. Streamline email workflows for smoother collaboration.',
    icon: EnvelopeIcon,
  },
  {
    title: 'Predictive Analytics',
    description: 'Stay ahead by anticipating operational needs and challenges. Predict vessel availability, port schedules, and cargo requirements with AI-powered insights. Make proactive decisions to optimize time and resources.',
    icon: ChartPieIcon,
  },
];

const advantages = [
  {
    title: 'Agentic AI Integration',
    description: 'A technology that learns, adapts, and evolves with your operations, ensuring continuous improvement.',
  },
  {
    title: 'End-to-End Automation',
    description: 'From laytime calculations to document processing, minimize manual intervention and errors.',
  },
  {
    title: 'User-Centric Design',
    description: 'Easy to use and fully customizable to meet your unique maritime needs.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Designed to grow with your business, handling everything from small fleets to large-scale global operations.',
  },
];

export default function WhyMarineFlow() {
  return (
    <main className="bg-gradient-light">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                  Agentic AI Technology
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-gradient sm:text-5xl lg:text-6xl"
              >
                Why MarineFlow AI?
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                MarineFlow AI is powered by <span className="font-semibold text-blue-600">Agentic AI Technology</span>, a revolutionary framework designed to enhance maritime operations with intelligence, precision, and unparalleled efficiency.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <Link
                  href="/contact"
                  className="group rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 inline-flex items-center gap-2"
                >
                  Book a demo
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src="/images/why-marineflow-hero.svg"
                  alt="MarineFlow AI Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-700">AI-Powered</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-x-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Sets MarineFlow AI Apart?
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-gradient-light p-8 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-lg font-semibold leading-7 text-blue-600">{advantage.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Embrace the Future of Maritime Operations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              MarineFlow AI, powered by <span className="font-semibold text-blue-600">Agentic AI Technology</span>, is more than a tool—it's your partner in navigating the complexities of the maritime industry.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg font-semibold text-blue-600"
            >
              Efficiency. Accuracy. Compliance. Powered by AI.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
} 