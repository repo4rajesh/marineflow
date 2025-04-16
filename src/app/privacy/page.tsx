'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last updated: March 15, 2024
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-400">
                MarineFlow.ai ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our maritime operations platform and related services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
              <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Name and contact information</li>
                <li>Company details and role</li>
                <li>Login credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Usage Information</h3>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Platform usage statistics</li>
                <li>Feature interaction data</li>
                <li>Performance analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Process payments and transactions</li>
                <li>Send administrative communications</li>
                <li>Provide customer support</li>
                <li>Analyze platform usage and performance</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
              <p className="text-gray-400">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
              <p className="text-gray-400">
                You have the right to:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2 mt-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Receive a copy of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: privacy@marineflow.ai</p>
                <p>Address: USA | Mumbai | Singapore | Indore</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 