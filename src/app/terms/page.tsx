'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms of Service
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
              <h2 className="text-3xl font-bold text-white mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-400">
                By accessing or using MarineFlow.ai's platform and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">2. Service Description</h2>
              <p className="text-gray-400 mb-4">
                MarineFlow.ai provides an AI-powered maritime operations platform that includes:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Automated laytime calculations</li>
                <li>Real-time data analytics</li>
                <li>Document processing and management</li>
                <li>Maritime operations optimization</li>
                <li>Reporting and analytics tools</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">3. User Accounts</h2>
              <p className="text-gray-400 mb-4">
                To access our services, you must:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Register for an account with accurate information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">4. Subscription and Payments</h2>
              <p className="text-gray-400 mb-4">
                Our services are provided on a subscription basis. By subscribing, you agree to:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2">
                <li>Pay all applicable fees when due</li>
                <li>Provide accurate billing information</li>
                <li>Accept our pricing and payment terms</li>
                <li>Review and comply with subscription cancellation policies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">5. Intellectual Property</h2>
              <p className="text-gray-400 mb-4">
                All content, features, and functionality of our platform are owned by MarineFlow.ai and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-400">
                Users may not:
              </p>
              <ul className="list-disc text-gray-400 ml-6 space-y-2 mt-4">
                <li>Copy or modify the platform or its content</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Use our intellectual property without permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">6. Data Usage and Privacy</h2>
              <p className="text-gray-400 mb-4">
                Your use of our services is also governed by our Privacy Policy. By using MarineFlow.ai, you agree to our collection and use of information as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-400">
                MarineFlow.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">8. Changes to Terms</h2>
              <p className="text-gray-400">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">9. Contact Information</h2>
              <p className="text-gray-400">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: legal@marineflow.ai</p>
                <p>Address: USA | Mumbai | Singapore | Indore</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 