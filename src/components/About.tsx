'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  DocumentCheckIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

/* Commented out for future use
const teamMembers = [
  {
    name: 'Manish Rathore',
    role: 'CEO',
    image: '/images/team/manish.jpg'
  },
  {
    name: 'Dyan P',
    role: 'CTO',
    image: '/images/team/dyan.jpg'
  },
  {
    name: 'Prashant Hegu',
    role: 'COO',
    image: '/images/team/prashant.jpg'
  },
  {
    name: 'Rajesh Rathore',
    role: 'Global Head of Digital Transf. & Technology',
    image: '/images/team/rajesh.jpg'
  },
  {
    name: 'Amit Shrivastava',
    role: 'Global Head of AI & Innovation',
    image: '/images/team/amit-s.jpg'
  },
  {
    name: 'Capt. Ram Kumar',
    role: 'Global Head of Maritime Strategy',
    image: '/images/team/ram.jpg'
  },
  {
    name: 'Amit M.',
    role: 'Global Head of Product & Delivery',
    image: '/images/team/amit-m.jpg'
  },
  {
    name: 'Ravi Singh',
    role: 'VP of Customer Success & Strategy',
    image: '/images/team/ravi.jpg'
  },
  {
    name: 'Ankit Godha',
    role: 'Chief of Governance, Compliance & QA',
    image: '/images/team/ankit.jpg'
  }
];
*/

const benefits = [
  {
    title: 'Enhanced Efficiency',
    description: 'Streamline operations and reduce manual tasks with AI-powered automation.',
    icon: ChartBarIcon,
  },
  {
    title: 'Intelligent Insights',
    description: 'Make data-driven decisions with advanced analytics and predictive modeling.',
    icon: CpuChipIcon,
  },
  {
    title: 'Improved Compliance',
    description: 'Stay ahead of regulatory requirements with automated compliance monitoring.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Global Connectivity',
    description: 'Connect with maritime partners worldwide through our integrated platform.',
    icon: GlobeAltIcon,
  },
];

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image
                src="/images/about-3d.svg"
                alt="MarineFlow AI Solutions"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-700">Global Solutions</span>
            </div>
          </motion.div>
          
          <div>
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
              MarineFlow AI provides end-to-end solutions for maritime operations, from vessel tracking to document management. Our platform is designed to streamline workflows, enhance decision-making, and drive operational excellence.
            </motion.p>
            
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-x-3"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50">
                    <benefit.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 