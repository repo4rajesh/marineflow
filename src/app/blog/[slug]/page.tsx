'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log('Fetching post with slug:', params.slug);
        const response = await fetch(`/api/blog/${params.slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        console.log('Received post data:', data);
        setPost(data);
      } catch (err) {
        setError('Error loading post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-center text-red-600">
            {error || 'Post not found'}
          </div>
        </div>
      </div>
    );
  }

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
              {post.category.name}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-x-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
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