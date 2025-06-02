'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// This would typically come from your database
const allPosts = [
  {
    title: 'The Future of Maritime Technology',
    excerpt: 'Exploring how AI is transforming the maritime industry with advanced automation, predictive analytics, and intelligent decision-making systems.',
    image: '/blog/maritime-tech.jpg',
    date: 'March 20, 2024',
    author: 'John Doe',
    slug: 'future-of-maritime-technology',
    category: 'Technology'
  },
  {
    title: 'Optimizing Port Operations with AI',
    excerpt: 'Discover how artificial intelligence is revolutionizing port operations, reducing wait times, and improving overall efficiency in maritime logistics.',
    image: '/blog/port-operations.jpg',
    date: 'March 18, 2024',
    author: 'Jane Smith',
    slug: 'optimizing-port-operations',
    category: 'Operations'
  },
  {
    title: 'Sustainable Shipping Practices',
    excerpt: 'Learn about the latest sustainable practices in maritime shipping and how technology is helping reduce environmental impact.',
    image: '/blog/sustainable-shipping.jpg',
    date: 'March 15, 2024',
    author: 'Mike Johnson',
    slug: 'sustainable-shipping-practices',
    category: 'Sustainability'
  },
  // Add more posts here
];

const categories = ['All', 'Technology', 'Operations', 'Sustainability', 'Regulations', 'Industry News'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search query and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <main className="min-h-screen bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Maritime Insights & News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stay informed with the latest trends, technologies, and developments in the maritime industry.
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-x-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 