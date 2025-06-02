'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PostForm from '@/components/blog/PostForm';

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  categoryId: string;
  tagIds: string[];
  publishedAt: string;
}

export default function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching post with ID:', params.slug); // Debug log
        const [postRes, categoriesRes, tagsRes] = await Promise.all([
          fetch(`/api/blog/${params.slug}`),
          fetch('/api/categories'),
          fetch('/api/tags'),
        ]);

        if (!postRes.ok) {
          const errorData = await postRes.json();
          throw new Error(errorData.error || 'Failed to fetch post');
        }

        if (!categoriesRes.ok || !tagsRes.ok) {
          throw new Error('Failed to fetch categories or tags');
        }

        const [postData, categoriesData, tagsData] = await Promise.all([
          postRes.json(),
          categoriesRes.json(),
          tagsRes.json(),
        ]);

        console.log('Received post data:', postData); // Debug log

        // Transform the post data to match the expected format
        const transformedPost = {
          ...postData,
          tagIds: postData.tags.map((tag: { id: string }) => tag.id),
        };

        setPost(transformedPost);
        setCategories(categoriesData);
        setTags(tagsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Error loading post data');
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchData();
    }
  }, [session, params.slug]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {error || 'Post not found'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
          <p className="mt-4 text-lg text-gray-600">
            Update the details of your blog post below.
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <PostForm
              post={post}
              categories={categories}
              tags={tags}
              isEditing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 