'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { FaEdit, FaTrash, FaPlus, FaStar } from 'react-icons/fa';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  img: string;
  creator: string;
  date: string;
  featured: boolean;
  tags: string[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        toast.success('Blog deleted successfully');
        setBlogs(blogs.filter(blog => blog._id !== id));
      } else {
        toast.error('Failed to delete blog');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog Management</h1>
          <p className="text-muted-foreground">Manage all your blog posts</p>
        </div>
        <Button 
          onClick={() => router.push('/admin/blog/new')}
          className="flex items-center gap-2 hover:cursor-pointer"
        >
          <FaPlus /> Post New Blog
        </Button>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Image</th>
                <th className="text-left p-4 font-semibold">Title</th>
                <th className="text-left p-4 font-semibold">Creator</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Tags</th>
                <th className="text-center p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-muted-foreground">
                    No blogs found. Create your first blog post!
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                    </td>
                    <td className="p-4">
                      <div className="max-w-xs">
                        <p className="font-semibold truncate">{blog.title}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {blog.excerpt}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">{blog.creator}</td>
                    <td className="p-4 whitespace-nowrap">
                      {new Date(blog.date).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      {blog.featured ? (
                        <span className="flex items-center gap-1 text-yellow-600">
                          <FaStar /> Featured
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Regular</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags?.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags?.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{blog.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/edit/${blog._id}`)}
                          className="flex items-center gap-1"
                        >
                          <FaEdit /> Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(blog._id)}
                          className="flex items-center gap-1"
                        >
                          <FaTrash /> Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {blogs.length > 0 && (
          <div className="mt-6 text-sm text-muted-foreground">
            Total Posts: {blogs.length}
          </div>
        )}
      </Card>
    </div>
  );
}