'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ClockIcon, 
  ChartBarIcon, 
  DocumentTextIcon,
  UserIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Automated Laytime Calculations',
    description: 'Reduce manual errors and save time with our AI-powered calculations.',
    icon: ClockIcon,
  },
  {
    name: 'Real-Time Data Analysis',
    description: 'Stay ahead with up-to-date insights and comprehensive data analytics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Customizable Reporting',
    description: 'Get reports tailored to your needs, supporting thorough Auditing processes.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Compliance and Accuracy',
    description: 'Ensure contract adherence with precision with RBAC.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'User-Friendly Interface',
    description: 'Simple, intuitive, and easy to use platform for all users.',
    icon: UserIcon,
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI-driven solutions streamline the entire process, ensuring precision, efficiency, and compliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg p-2 mb-4">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
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
          <Link 
            href="/features" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Full Feature List & Roadmap
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Target Market Section */}
        <div className="mt-32">
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who Can Benefit?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dry Bulk Operators',
                desc: 'Bulk carriers transporting commodities like coal, grain, iron ore, and fertilizers.'
              },
              {
                title: 'Oil and Gas Tanker Operators',
                desc: 'Tankers transporting crude oil, refined petroleum products, and gas. Need accurate NOR handling and AI-based demurrage mitigation.'
              },
              {
                title: 'Shipowners and Charterers',
                desc: 'Entities responsible for leasing vessels under time, voyage, or bareboat charters. Require real-time laytime tracking.'
              },
              {
                title: 'Brokers & Traders',
                desc: 'Cargo brokers, commodity traders, and shipping logistics firms managing global shipments. Require AI-driven invoice generation.'
              },
              {
                title: 'Maritime Agencies',
                desc: 'Port authorities and terminal operators dealing with vessel turnaround times and port operations.'
              },
              {
                title: 'Maritime Law Firms',
                desc: 'Legal professionals handling maritime contracts, dispute resolution, and compliance matters.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 