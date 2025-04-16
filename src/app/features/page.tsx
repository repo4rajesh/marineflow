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
  ComputerDesktopIcon,
  ClockIcon,
  TruckIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  ClockIcon as ClockIcon2,
  TruckIcon as TruckIcon2
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';

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
      "Advanced freight calculation algorithms",
      "AI-powered route optimization",
      "Predictive analytics for demurrage"
    ]
  },
  {
    title: "Advanced Security & Compliance",
    description: "Enterprise-grade security with end-to-end encryption and compliance with maritime regulations.",
    icon: ShieldCheckIcon,
    details: [
      "End-to-end encryption",
      "Role-based access control",
      "Compliance monitoring and reporting"
    ]
  },
  {
    title: "Document Management System",
    description: "Comprehensive document handling with version control and automated processing.",
    icon: DocumentTextIcon,
    details: [
      "Automated document processing",
      "Version control and tracking",
      "Smart document search and retrieval"
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
    <>
      <main className="bg-gradient-light min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                Features & Roadmap
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Discover how MarineFlow AI's comprehensive suite of features can transform your maritime operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmapFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm ring-1 ring-blue-100 card-hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gradient">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-base font-semibold leading-7 text-blue-600">Coming Soon</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                Future Innovations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                We're constantly working on new features to enhance your maritime operations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm ring-1 ring-blue-100 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <ComputerDesktopIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gradient">AI-Powered Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Advanced analytics and predictive modeling for better decision-making and operational efficiency.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm ring-1 ring-blue-100 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <UserGroupIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gradient">Collaborative Workspace</h3>
                </div>
                <p className="text-gray-600">
                  Enhanced team collaboration features with real-time updates and shared workspaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 