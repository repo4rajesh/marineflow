'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CursorArrowRaysIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
  SparklesIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const currentFeatures = [
  {
    title: "AI-Powered Laytime & Predictive Analytics",
    description: "AI-powered laytime automation with predictive analytics for smarter Dry Bulk and Tanker decisions.",
    icon: CpuChipIcon,
    color: "blue"
  },
  {
    title: "Real-Time Dashboards & Reporting",
    description: "Real-time dashboards and customizable reports for full operational visibility, auditing, and compliance.",
    icon: ChartBarIcon,
    color: "green"
  },
  {
    title: "Digitised Documentation & Smart Communication",
    description: "Get reports tailored to your needs, supporting thorough Auditing processes.",
    icon: DocumentTextIcon,
    color: "amber"
  },
  {
    title: "Intuitive Interface with Actionable Insights",
    description: "User-friendly interface, actionable analytics for cost savings and operational clarity.",
    icon: CursorArrowRaysIcon,
    color: "purple"
  },
  {
    title: "AI-Powered Knowledge & Compliance Tools",
    description: "AI-powered knowledge base & co-pilot + AI-powered CMS = Empowered, efficient team & effortless certification management.",
    icon: BookOpenIcon,
    color: "indigo"
  }
];

const futureRoadmapLeft = [
  {
    title: "Streamlined Port & Financial Operations",
    description: "Efficient PDA management, integrated invoice processing, Holiday Calendar Integration, and proactive port alerts for smoother scheduling and financial clarity.",
    icon: BuildingOfficeIcon,
    color: "blue"
  },
  {
    title: "Optimized Freight & Voyage Planning with Predictive Insights",
    description: "Smart Freight Calculators, route optimization, Laytime Compare, and a comprehensive Estimate Calculator powered by Predictive Analytics—all tailored to reduce demurrage and improve voyage planning.",
    icon: TruckIcon,
    color: "green"
  },
  {
    title: "Strategic Trade & Risk Management",
    description: "Integrated tools for smarter oil and ship trading, with hedging decision support built to manage volatility and maximize returns.",
    icon: ShieldCheckIcon,
    color: "amber"
  },
  {
    title: "Intelligent Data Management",
    description: "Centralized dashboard featuring AI-generated summaries of communications across email, WhatsApp, and Skype—covering TCTs, charterers, shippers, voyages, receivers, and ship info.",
    icon: ServerIcon,
    color: "indigo"
  }
];

const futureRoadmapRight = [
  {
    title: "Enhanced Operational Workflow & Certificate Management",
    description: "Digitized VO Task Manager with checklists, automated email templates, and upcoming enhancements in Certificate Management for smoother compliance operations.",
    icon: CogIcon,
    color: "purple"
  },
  {
    title: "Sustainable Operations & Decarbonization Initiatives",
    description: "MarineFlow AI is committed to decarbonization through smarter voyage planning, fuel-efficiency strategies, and ESG-aligned tools for a greener maritime future.",
    icon: SparklesIcon,
    color: "green"
  },
  {
    title: "Automated Contract Handling",
    description: "Contract automation for charter parties, complete with Maker/Checker workflows and streamlined Email Draft functionality.",
    icon: DocumentCheckIcon,
    color: "blue"
  },
  {
    title: "Integrated Platform & Support",
    description: "Unified portal with secure RBAC, KnowledgeBase, Help/User Guide, potential 3rd-party integrations, and 24/7 support to ensure continuous uptime and user assistance.",
    icon: UserGroupIcon,
    color: "teal"
  }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; icon: string }> = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    green: { bg: "bg-green-100", icon: "text-green-600" },
    amber: { bg: "bg-amber-100", icon: "text-amber-600" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600" },
    indigo: { bg: "bg-indigo-100", icon: "text-indigo-600" },
    teal: { bg: "bg-teal-100", icon: "text-teal-600" }
  };
  return colors[color] || colors.blue;
};

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-20 sm:pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.4] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
                Features & Capabilities
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Why Choose Us?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto"
            >
              Discover how MarineFlow AI's comprehensive suite of features can transform your maritime operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Current Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-10 h-10 ${colors.icon}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
                Future Roadmap
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4"
            >
              FUTURE ROADMAP
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              Exciting features and enhancements coming soon to further revolutionize your maritime operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {futureRoadmapLeft.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`w-10 h-10 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {futureRoadmapRight.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`w-10 h-10 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Maritime Operations?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 max-w-2xl mx-auto mb-8"
          >
            Get started with MarineFlow.AI today and experience the power of AI-driven maritime solutions.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2">
              Request a Demo
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
