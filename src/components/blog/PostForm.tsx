'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Editor } from '@tinymce/tinymce-react';
import { useDropzone } from 'react-dropzone';
import { useSession } from 'next-auth/react';

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
}

interface PostFormProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    categoryId: string;
    tagIds: string[];
  };
  categories: Category[];
  tags: Tag[];
  isEditing?: boolean;
}

export default function PostForm({ post, categories, tags, isEditing = false }: PostFormProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const editorRef = useRef<any>(null);
  const [formData, setFormData] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    image: post?.image || '',
    categoryId: post?.categoryId || '',
    tagIds: post?.tagIds || [],
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();
        setFormData(prev => ({ ...prev, image: data.url }));
      } catch (err) {
        setError('Error uploading image');
        console.error('Error uploading image:', err);
      } finally {
        setUploading(false);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!session?.user?.id) {
      setError('You must be logged in to create or edit posts');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/blog${isEditing ? `/${post?.id}` : ''}`, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          authorId: session.user.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save post');
      }

      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError('Error saving post');
      console.error('Error saving post:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, tagIds: selectedOptions }));
  };

  const handleEditorChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          required
          value={formData.slug}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <Editor
          tinymceScriptSrc="/tinymce/tinymce/js/tinymce/tinymce.min.js"
          onInit={(_evt, editor) => editorRef.current = editor}
          value={formData.content}
          onEditorChange={handleEditorChange}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
          Excerpt
        </label>
        <textarea
          name="excerpt"
          id="excerpt"
          rows={3}
          required
          value={formData.excerpt}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Featured Image
        </label>
        <div
          {...getRootProps()}
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${
            isDragActive ? 'border-blue-500 bg-blue-50' : ''
          }`}
        >
          <div className="space-y-1 text-center">
            <input {...getInputProps()} />
            {formData.image ? (
              <div className="relative">
                <img
                  src={formData.image}
                  alt="Featured"
                  className="mx-auto h-32 w-auto object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFormData(prev => ({ ...prev, image: '' }));
                  }}
                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </>
            )}
          </div>
        </div>
        {uploading && (
          <p className="mt-2 text-sm text-gray-500">Uploading...</p>
        )}
      </div>

      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="categoryId"
          id="categoryId"
          required
          value={formData.categoryId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tagIds" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <select
          name="tagIds"
          id="tagIds"
          multiple
          value={formData.tagIds}
          onChange={handleTagChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading || uploading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
} 