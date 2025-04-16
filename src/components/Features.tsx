'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ClockIcon, 
  ChartBarIcon, 
  DocumentTextIcon,
  UserIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  TruckIcon,
  CogIcon,
  DocumentChartBarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  BoltIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI-Powered Laytime Calculation',
    description: 'Simplify laytime calculations with intelligent automation. Process digitized SoF, Recap, and Addendum documents seamlessly. Compare documents side by side with original versions for unmatched accuracy.',
    icon: ClockIcon,
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

const targetMarket = [
  {
    title: 'Dry Bulk Operators',
    description: 'Optimize cargo loading, vessel scheduling, and route planning for maximum efficiency.',
    icon: TruckIcon,
  },
  {
    title: 'Container Lines',
    description: 'Enhance container tracking, terminal operations, and fleet management capabilities.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Tanker Companies',
    description: 'Improve safety, compliance, and operational efficiency for liquid cargo operations.',
    icon: ChartBarIcon,
  },
  {
    title: 'Port Authorities',
    description: 'Streamline port operations, vessel traffic management, and resource allocation.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Maritime Law Firms',
    description: 'Access comprehensive maritime data and analytics to support legal proceedings.',
    icon: ScaleIcon,
  },
  {
    title: 'Ship Management Companies',
    description: 'Optimize fleet management, crew scheduling, and maintenance planning.',
    icon: UserGroupIcon,
  },
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
          >
            Powerful Features for Maritime Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            MarineFlow AI provides a comprehensive suite of tools designed specifically for the maritime industry.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
          >
            Designed for the Maritime Industry
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            MarineFlow AI serves a wide range of maritime stakeholders with specialized solutions.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {targetMarket.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-gradient-light p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-x-4">
                <div className="rounded-lg bg-blue-50 p-2">
                  <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Link to Features Page */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Link 
              href="/features" 
              className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-500 transition-colors"
            >
              View Full Feature List & Roadmap
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
            >
              Book a demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 