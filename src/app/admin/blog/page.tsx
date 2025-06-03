'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  createdAt: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
}

export default function BlogList() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 5;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts for page:', currentPage);
        const response = await fetch(`/api/blog?page=${currentPage}&limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log('Received data:', data);
        setPosts(data.posts);
        setTotalPosts(data.total);
        setTotalPages(Math.ceil(data.total / postsPerPage));
      } catch (err) {
        setError('Error loading posts');
        console.error('Error loading posts:', err);
      } finally {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchPosts();
    }
  }, [status, currentPage]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      setError('Error deleting post');
      console.error('Error deleting post:', err);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-full mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl text-gray-700">
                <h2 className="leading-relaxed">Blog Posts</h2>
              </div>
              <div className="flex-grow"></div>
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                New Post
              </Link>
            </div>

            {error && (
              <div className="mt-4 rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {post.image && (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="h-12 w-12 object-cover rounded"
                              />
                            )}
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">
                                {post.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Link
                              href={`/admin/blog/${post.slug}/edit`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {post.author.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              {post.category.name}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pagination */}
            {totalPosts > 0 && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{(currentPage - 1) * postsPerPage + 1}</span> to{' '}
                      <span className="font-medium">
                        {Math.min(currentPage * postsPerPage, totalPosts)}
                      </span>{' '}
                      of <span className="font-medium">{totalPosts}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            currentPage === index + 1
                              ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 