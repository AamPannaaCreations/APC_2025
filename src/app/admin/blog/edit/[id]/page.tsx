'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function EditBlog({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [blogId, setBlogId] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    creator: '',
    tags: '',
    featured: false,
    img: ''
  });

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  useEffect(() => {
    params.then(({ id }) => {
      setBlogId(id);
      fetchBlog(id);
    });
  }, [params]);

  const fetchBlog = async (id: string) => {
    try {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      
      if (data.success) {
        const blog = data.data;
        setFormData({
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          creator: blog.creator,
          tags: blog.tags?.join(', ') || '',
          featured: blog.featured,
          img: blog.img
        });
        setImagePreview(blog.img);
      }
    } catch (error) {
      toast.error('Failed to fetch blog');
    } finally {
      setFetching(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData
      });
      const data = await res.json();
      
      if (data.success) {
        setFormData(prev => ({ ...prev, img: data.url }));
        setImagePreview(data.url);
        toast.success('Image uploaded successfully');
      }
    } catch (error) {
      toast.error('Image upload failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim())
        })
      });

      if (res.ok) {
        toast.success('Blog updated successfully');
        router.push('/admin');
      } else {
        toast.error('Failed to update blog');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading blog...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Button
        variant="ghost"
        onClick={() => router.push('/admin')}
        className="mb-4 flex items-center gap-2"
      >
        <FaArrowLeft /> Back to Dashboard
      </Button>

      <h1 className="text-4xl font-bold mb-8">Edit Blog Post</h1>
      
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Title *</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Featured Image *</label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-2"
            />
            {imagePreview && (
              <div className="mt-4">
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={400} 
                  height={300} 
                  className="rounded border" 
                />
              </div>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Excerpt *</label>
            <Input
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Content *</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              modules={modules}
              className="bg-white"
              style={{ minHeight: '300px' }}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Creator *</label>
            <Input
              required
              value={formData.creator}
              onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Tags</label>
            <Input
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="UI/UX, Design, Ideas"
            />
          </div>

          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="font-medium cursor-pointer">
              Mark as Featured Post
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Updating...' : 'Update Blog Post'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.push('/admin')}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
