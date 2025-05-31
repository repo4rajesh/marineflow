'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TruckIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

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

export default function MaritimeIndustry() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-teal-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-x-4">
                <div className="rounded-lg bg-teal-50 p-2">
                  <item.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 