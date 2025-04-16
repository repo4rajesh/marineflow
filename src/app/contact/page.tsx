'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    title: "Website",
    value: "www.marineflow.ai",
    icon: GlobeAltIcon,
  },
  {
    title: "Office Locations",
    value: "USA | Mumbai | Singapore | Indore",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Support Hours",
    value: "24/7 Global Support",
    icon: ClockIcon,
  },
  {
    title: "Chat Support",
    value: "Available on our platform",
    icon: ChatBubbleLeftRightIcon,
  }
];

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Get in touch with our team for support, inquiries, or to learn more about MarineFlow AI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section with Two Columns */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm ring-1 ring-blue-100 hover:ring-blue-200 transition-all duration-200 card-hover"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <p className="mt-1 text-gray-600 whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-blue-100 self-start"
              >
                <h2 className="text-2xl font-bold text-gradient mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 