'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';

export default function NewHome() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.4] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Revolutionize Maritime Operations with{' '}
              <span className="text-blue-600">AI-Powered Solutions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto"
            >
              Transform your dry bulk and tanker vessel operations with intelligent automation for demurrage claims, laytime calculations, and complete digital transformation. Reduce manual errors by 90% and increase operational efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
              >
                Request Demo
              </Link>
              <Link
                href="/features"
                className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 ring-2 ring-inset ring-blue-700 hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                View Features
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Three Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Complete AI-Powered Maritime Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Transform your maritime operations with our comprehensive suite of AI-powered tools designed specifically for the shipping industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: AI-Powered Laytime/Demurrage Claims Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Laytime/Demurrage Claims Automation</h3>
              <p className="text-gray-600 mb-6">Automate complex demurrage calculations with AI precision, reducing manual errors and processing time by 90%.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Automated calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Error reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Fast processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Compliance tracking</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card 2: Web-Based Manual Laytime Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web-Based Manual Laytime Calculator</h3>
              <p className="text-gray-600 mb-6">Intuitive calculator for manual laytime calculations with built-in industry standard formulas and validations.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Industry standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Real-time validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Export capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Audit trail</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card 3: AI Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Summary</h3>
              <p className="text-gray-600 mb-6">Intelligent summarization of complex maritime documents, contracts, and operational reports using advanced NLP.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Document analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Key insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Time saving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Multilingual support</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card 4: AI Powered Copilot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Powered Copilot</h3>
              <p className="text-gray-600 mb-6">Your intelligent maritime assistant that helps with decision-making, compliance, and operational efficiency.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">24/7 assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Expert guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Real-time advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Learning system</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card 5: AI Powered Knowledge Base */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Powered Knowledge Base</h3>
              <p className="text-gray-600 mb-6">Comprehensive maritime knowledge repository with intelligent search and recommendation capabilities.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Instant search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Smart recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Regular updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Expert content</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card 6: AI Powered Vessel Certificates Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Powered Vessel Certificates Management</h3>
              <p className="text-gray-600 mb-6">Automated tracking, renewal reminders, and compliance management for all vessel certificates and documentation.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Automated tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Renewal alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Digital storage</span>
                </li>
              </ul>
              <Link href="/features" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Trusted by Maritime Professionals Worldwide
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              See what industry leaders are saying about MarineFlow.AI's impact on their operations.
            </p>
          </div>

          {/* Overall Rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-900">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">Based on 200+ reviews</p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                quote: "MarineFlow AI's innovative approach has transformed how we handle laytime calculations. This AI-powered solutions have significantly improved efficiency.",
                author: "Captain Ram",
                title: "Maritime Strategist",
                company: ""
              },
              {
                quote: "The platform's ability to streamline operations and provide real-time insights has been invaluable to our maritime business. MarineFlow AI is truly revolutionizing the industry.",
                author: "Pankaj Patil",
                title: "Maritime Operations Expert",
                company: ""
              },
              {
                quote: "As someone deeply involved in maritime technology, I can attest to MarineFlow AI's commitment to innovation and excellence. Their solutions are cutting-edge and practical.",
                author: "Biswajit Malakar",
                title: "Maritime Technology Specialist",
                company: ""
              },
              {
                quote: "The integration of AI in maritime operations through MarineFlow has opened new possibilities for efficiency and optimization. Their platform is a game-changer for the industry.",
                author: "Durgesh Bathwal",
                title: "Maritime Innovation Leader",
                company: ""
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  {testimonial.company && (
                    <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">{testimonial.company}</Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
            Featured Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "White Paper",
                title: "The Complete Guide to AI in Maritime Operations",
                description: "Comprehensive analysis of AI applications in shipping, demurrage claims, and vessel management with real-world case studies.",
                fileSize: "2.1 MB PDF",
                icon: "📄"
              },
              {
                type: "Case Study",
                title: "Pacific Shipping Reduces Claims Processing Time by 85%",
                description: "How a major shipping company transformed their demurrage claims process using MarineFlow.AI automation tools.",
                fileSize: "1.8 MB PDF",
                icon: "📊"
              },
              {
                type: "Webinar",
                title: "Digital Transformation Strategies for Modern Shipping",
                description: "60-minute recorded webinar featuring industry experts discussing practical approaches to maritime digitalization.",
                fileSize: "Video Recording",
                icon: "🎥"
              },
              {
                type: "eBook",
                title: "Laytime Calculations: From Manual to Automated",
                description: "Step-by-step guide covering traditional calculation methods and the transition to AI-powered automation.",
                fileSize: "3.2 MB PDF",
                icon: "📚"
              },
              {
                type: "Technical Guide",
                title: "API Integration Handbook for Maritime Systems",
                description: "Developer documentation for integrating MarineFlow.AI APIs with existing maritime management systems.",
                fileSize: "1.5 MB PDF",
                icon: "⚙️"
              },
              {
                type: "Industry Report",
                title: "Maritime Technology Trends 2024",
                description: "Annual report analyzing emerging technologies, market trends, and future outlook for the maritime industry.",
                fileSize: "4.7 MB PDF",
                icon: "📈"
              }
            ].map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {download.icon}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {download.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{download.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{download.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{download.fileSize}</span>
                  <Link href="#" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition inline-flex items-center gap-1">
                    Download ↓
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">Request a Demo</Link>
            <Link href="/pricing" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
