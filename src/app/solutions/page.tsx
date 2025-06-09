'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import FAQ from '@/components/FAQ';

const solutions = [
  {
    title: 'Claims Management',
    description: 'Streamline your claims process with our robust platform designed for accuracy, transparency, and efficiency. We automates claim filing, tracking, and resolution reducing operational bottlenecks.',
    icon: ChartBarIcon,
  },
  {
    title: 'Regulatory Compliance Assistance',
    description: 'Navigating global maritime regulations can be complex. MarineFlow helps your business stay compliant with evolving standards, mitigating risks and ensuring smooth operations.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'System Integration',
    description: 'MarineFlow integrates effortlessly with your existing systems, creating a unified ecosystem for streamlined operations. From ERP to document management, We ensure seamless connectivity.',
    icon: CpuChipIcon,
  },
  {
    title: 'Data Analytics & Insights',
    description: 'Leverage actionable insights to make informed decisions. Our advanced analytics tools help identify trends, optimize processes, and improve operational efficiency.',
    icon: GlobeAltIcon,
  },
];

const faqs = [
  {
    question: 'What is MarineFlow, and how does it benefit my maritime business?',
    answer: 'MarineFlow is an innovative maritime claims management platform designed to simplify and automate the claims process. It benefits your business by streamlining operations, reducing manual errors, improving claim resolution speed, and ensuring compliance with maritime regulations.',
  },
  {
    question: 'Can MarineFlow integrate with our existing systems?',
    answer: 'Yes, MarineFlow is built to integrate seamlessly with your existing systems, including ERP, accounting, and document management platforms. Our team ensures a smooth setup and transition process tailored to your business needs.',
  },
  {
    question: 'Is MarineFlow compliant with global maritime regulations?',
    answer: 'Absolutely! MarineFlow is designed with a focus on global maritime standards and compliance requirements, making it easier for your business to meet international regulatory obligations.',
  },
  {
    question: 'How secure is the data on MarineFlow?',
    answer: 'We prioritize data security using industry-standard encryption, secure cloud storage, and regular audits. Your business and client data are safe with us, and we comply with global data protection regulations such as GDPR.',
  },
  {
    question: 'What kind of support does MarineFlow offer after implementation?',
    answer: 'MarineFlow provides comprehensive support, including 24/7 customer service, training sessions for your team, and regular updates to ensure optimal performance and adaptation to evolving industry needs.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-gradient-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Maritime Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                Transforming maritime operations through AI-powered solutions
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Our comprehensive suite of AI solutions is designed to address the unique challenges of maritime operations, from vessel performance optimization to predictive maintenance and route planning.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Book a Demo
                </Link>
                {/* <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  View Case Studies
                </Link> */}
              </motion.div>
            </div>

            {/* Right Column - Video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 w-full max-w-2xl mx-auto"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/o94deYnIKWY"
                  title="MarineFlow AI Solutions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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
              Specialized Solutions For You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              MarineFlow AI provides tailored solutions to address the unique challenges of the maritime industry.
            </motion.p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                FAQ
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Find answers to common questions about MarineFlow AI and how it can benefit your maritime business.
            </motion.p>
          </div>
          
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-x-4">
                    <div className="rounded-lg bg-blue-50 p-2 group-hover:bg-blue-100 transition-colors">
                      <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              At MarineFlow, we empower the maritime industry with innovative digital solutions that streamline claims management, optimize operations, and drive efficiency.
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