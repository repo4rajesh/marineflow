'use client';

import { motion } from 'framer-motion';
import { 
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const roadmapFeatures = [
  {
    title: "Intelligent Data Management",
    description: "Centralized dashboard with AI Summary for email, WhatsApp, Skype data (TCT, Charterer, Shipper, Voyage, Receiver, Ship info).",
    icon: ServerIcon,
    details: [
      "AI-powered data extraction from multiple sources",
      "Real-time synchronization of communication channels",
      "Automated document classification and processing"
    ]
  },
  {
    title: "Enhanced Operational Workflow",
    description: "Digital VO Task Manager with checklists, automated email features, templates, and Certificate Management.",
    icon: CogIcon,
    details: [
      "Digital VO Task Manager with checklists",
      "Automated email features and templates",
      "Certificate Management system"
    ]
  },
  {
    title: "Streamlined Port & Financial Operations",
    description: "Efficient PDA management, integrated Invoice processing, and proactive Port Alerts.",
    icon: GlobeAltIcon,
    details: [
      "Automated PDA management system",
      "Integrated invoice processing",
      "Real-time port alerts and notifications"
    ]
  },
  {
    title: "Optimized Freight & Voyage Planning",
    description: "Smart Freight Calculator, route optimization, Laytime Compare, and Predictive Analytics for demurrage.",
    icon: ChartBarIcon,
    details: [
      "Smart Freight Calculator with route optimization",
      "Advanced Laytime Compare functionality",
      "Predictive Analytics for demurrage prevention"
    ]
  },
  {
    title: "Strategic Trade & Risk Management",
    description: "Integrated tools for informed oil/ship trading and hedging decisions.",
    icon: ShieldCheckIcon,
    details: [
      "Advanced risk assessment tools",
      "Market analysis and trading insights",
      "Automated hedging recommendations"
    ]
  },
  {
    title: "Automated Contract Handling",
    description: "Efficient Contract Automation for charter parties with Maker/Checker workflow and Email Draft functionality.",
    icon: DocumentTextIcon,
    details: [
      "Smart contract automation system",
      "Maker/Checker workflow implementation",
      "Automated email draft generation"
    ]
  }
];

const integrationFeatures = [
  {
    title: "Integrated Platform & Support",
    description: "Utility portal, KnowledgeBase, Help/User Guide, secure RBAC, potential 3rd Party Integration, and Round the clock support.",
    icon: ComputerDesktopIcon
  },
  {
    title: "Actionable Insights & Analytics",
    description: "Powerful Analytics for insights on Cost Savings (Analytics), SOF Data Compare/Visibility, and Case management functionalities.",
    icon: ChartBarIcon
  },
  {
    title: "Continuous Updates & Improvements",
    description: "Regular platform updates with new features and improvements based on user feedback and industry needs.",
    icon: ArrowPathIcon
  },
  {
    title: "Collaborative Features",
    description: "Enhanced team collaboration tools with role-based access control and audit trails.",
    icon: UserGroupIcon
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Product Features & Roadmap
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our comprehensive suite of features and upcoming developments designed to revolutionize maritime operations.
          </motion.p>
        </div>
      </div>

      {/* Future Roadmap Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Future Roadmap
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {roadmapFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg p-2 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-400">
                          <span className="mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Integration & Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg p-2 mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 