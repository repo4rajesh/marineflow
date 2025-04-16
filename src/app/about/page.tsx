'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const advantages = [
  {
    title: 'Maritime Expertise',
    description: 'Co-founder\'s 20 years of maritime industry experience along with extensive network in the maritime sector.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Specialized Team',
    description: 'Inhouse Laytime and Maritime Analyst and operators team with deep industry knowledge.',
    icon: UserGroupIcon,
  },
  {
    title: 'Proven Track Record',
    description: 'Founding team members as serial Entrepreneurs built 7 figure ARR business with successful exits.',
    icon: ChartBarIcon,
  },
  {
    title: 'Technical Excellence',
    description: 'Built AI and SaaS solutions that scaled to multi-million dollar businesses, serving Fortune 500 clients.',
    icon: CpuChipIcon,
  },
  {
    title: 'Global Presence',
    description: 'Co-located in-house team with global presence in USA, Mumbai, Singapore, and Indore for maritime and IT operations.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Compliance Focus',
    description: 'Deep understanding of maritime regulations and compliance requirements across global jurisdictions.',
    icon: DocumentCheckIcon,
  },
];

export default function AboutPage() {
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
              About Us
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Transforming Maritime Operations with AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              At MarineFlow AI, we're revolutionizing the maritime industry through advanced artificial intelligence and machine learning technologies. Our platform provides comprehensive solutions for vessel tracking, performance optimization, and regulatory compliance.
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
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Our Solutions
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
                Our Advantages
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
            >
              Why Choose MarineFlow AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              MarineFlow AI combines maritime expertise with cutting-edge technology to deliver solutions that drive real business value.
            </motion.p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-x-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <advantage.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{advantage.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                Our Team
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
            >
              Meet the Leadership
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Our leadership team brings together decades of experience in maritime operations, technology, and business development.
            </motion.p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {[
              {
                name: 'Rajesh Sharma',
                role: 'Co-Founder & CEO',
                bio: '20+ years of maritime industry experience with extensive network in the maritime sector.',
                imageUrl: '/images/team/rajesh.jpg',
              },
              {
                name: 'Sanjay Sharma',
                role: 'Co-Founder & CTO',
                bio: 'Serial entrepreneur with successful exits from AI and SaaS businesses serving Fortune 500 clients.',
                imageUrl: '/images/team/sanjay.jpg',
              },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-6">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-600">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
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
              At MarineFlow, we're committed to transforming the maritime industry through innovative AI solutions.
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