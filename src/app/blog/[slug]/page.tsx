'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// This would typically come from your database
const blogPost = {
  title: 'The Future of Maritime Technology',
  content: `
    <p>The maritime industry is undergoing a significant transformation, driven by the rapid advancement of artificial intelligence and automation technologies. This revolution is not just changing how ships operate; it's reshaping the entire maritime ecosystem.</p>

    <h2>The Rise of AI in Maritime Operations</h2>
    <p>Artificial Intelligence is becoming increasingly integral to maritime operations. From predictive maintenance to route optimization, AI systems are helping shipping companies make better decisions and operate more efficiently.</p>

    <h2>Key Technological Innovations</h2>
    <ul>
      <li>Autonomous vessels and remote monitoring systems</li>
      <li>AI-powered predictive maintenance</li>
      <li>Smart port operations and automated cargo handling</li>
      <li>Advanced weather routing and fuel optimization</li>
    </ul>

    <h2>The Impact on Maritime Safety</h2>
    <p>One of the most significant benefits of these technological advancements is the improvement in maritime safety. AI systems can predict potential issues before they occur, reducing the risk of accidents and improving overall operational safety.</p>

    <h2>Looking Ahead</h2>
    <p>As we look to the future, it's clear that technology will continue to play a crucial role in shaping the maritime industry. Companies that embrace these innovations will be better positioned to succeed in an increasingly competitive market.</p>
  `,
  image: '/blog/maritime-tech.jpg',
  date: 'March 20, 2024',
  author: 'John Doe',
  category: 'Technology',
  readingTime: '5 min read'
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-gradient-light">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
              {blogPost.category}
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{blogPost.readingTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
          <div className="flex items-center gap-x-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{blogPost.author}</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Facebook
            </button>
          </div>
        </motion.div>
      </article>
    </main>
  );
} 