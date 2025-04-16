'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const advantages = [
  {
    title: "Maritime Expertise",
    description: "Co-founder's 20 years of maritime industry experience along with extensive network in the maritime sector."
  },
  {
    title: "Specialized Team",
    description: "Inhouse Laytime and Maritime Analyst and operators team with deep industry knowledge."
  },
  {
    title: "Proven Track Record",
    description: "Founding team members as serial Entrepreneurs built 7 figure ARR business with successful exits."
  },
  {
    title: "Technical Excellence",
    description: "Built AI and SaaS solutions that scaled to multi-million dollar businesses, serving Fortune 500 clients."
  },
  {
    title: "Global Presence",
    description: "Co-located in-house team with global presence in USA, Mumbai, Singapore, and Indore for maritime and IT operations."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <div className="mb-24">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Problem We're Solving
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-400 mb-6">
                Manual laytime and demurrage calculations in the maritime industry are error-prone, leading to frequent disputes and financial losses globally.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>40% of maritime companies struggle with inefficient laytime calculations, leading to operational delays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>$4 billion in demurrage and detention costs are incurred every year due to miscalculations and delays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Manual processing of laytime claims takes an average of 4-5 days—often causing disputes and financial risks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fragmented Documentation (SoF, recaps, Contracts etc.) slows decision making and increases error rates</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/about-3d.svg"
                alt="Maritime Industry Challenges"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Solution Overview */}
        <div className="mb-24">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Solution
          </motion.h2>
          <motion.div
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              MarineFlow.ai is a cutting-edge AI-Powered SaaS platform, seamlessly integrating thousands of trained SoF, Recap, load/discharge port data, and all NOR clauses—delivering unmatched accuracy and efficiency in laytime automation.
            </p>
          </motion.div>
        </div>

        {/* Unfair Advantages */}
        <div>
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Unfair Advantages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section - Commented out for future use
        <div>
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
} 