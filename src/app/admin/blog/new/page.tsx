// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card } from '@/components/ui/card';
// import { toast } from 'react-hot-toast';
// import Image from 'next/image';
// import { FaArrowLeft } from 'react-icons/fa';
// import dynamic from 'next/dynamic';
// import ReactQuill from 'react-quill-new';
// import 'react-quill-new/dist/quill.snow.css';

// export default function CreateBlog() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState<string>('');
//   const [formData, setFormData] = useState({
//     title: '',
//     excerpt: '',
//     content: '',
//     creator: '',
//     tags: '',
//     featured: false,
//     img: ''
//   });

//   const modules = {
//     toolbar: [
//       [{ 'header': [1, 2, 3, false] }],
//       ['bold', 'italic', 'underline', 'strike'],
//       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//       [{ 'color': [] }, { 'background': [] }],
//       ['link', 'image'],
//       ['clean']
//     ],
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const uploadData = new FormData();
//     uploadData.append('file', file);

//     try {
//       const res = await fetch('/api/upload', {
//         method: 'POST',
//         body: uploadData
//       });
//       const data = await res.json();

//       if (data.success) {
//         setFormData(prev => ({ ...prev, img: data.url }));
//         setImagePreview(data.url);
//         toast.success('Image uploaded successfully');
//       }
//     } catch (error) {
//       toast.error('Image upload failed');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           tags: formData.tags.split(',').map(tag => tag.trim())
//         })
//       });

//       if (res.ok) {
//         toast.success('Blog created successfully');
//         router.push('/admin');
//       } else {
//         toast.error('Failed to create blog');
//       }
//     } catch (error) {
//       toast.error('An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <Button
//         variant="ghost"
//         onClick={() => router.push('/admin')}
//         className="mb-4 flex items-center gap-2"
//       >
//         <FaArrowLeft /> Back to Dashboard
//       </Button>

//       <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>

//       <Card className="p-6">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 font-medium">Title *</label>
//             <Input
//               required
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               placeholder="Enter blog title"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Featured Image *</label>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mb-2"
//               required={!imagePreview}
//             />
//             {imagePreview && (
//               <div className="mt-4">
//                 <Image
//                   src={imagePreview}
//                   alt="Preview"
//                   width={400}
//                   height={300}
//                   className="rounded border"
//                 />
//               </div>
//             )}
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Excerpt *</label>
//             <Input
//               required
//               value={formData.excerpt}
//               onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//               placeholder="Brief description"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Content *</label>
//             <ReactQuill
//               theme="snow"
//               value={formData.content}
//               onChange={(content) => setFormData({ ...formData, content })}
//               modules={modules}
//               className="bg-white"
//               style={{ minHeight: '300px' }}
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Creator *</label>
//             <Input
//               required
//               value={formData.creator}
//               onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
//               placeholder="Author name"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Tags</label>
//             <Input
//               value={formData.tags}
//               onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
//               placeholder="UI/UX, Design, Ideas (comma separated)"
//             />
//           </div>

//           <div className="flex items-center gap-2 p-4 bg-gray-50 rounded">
//             <input
//               type="checkbox"
//               id="featured"
//               checked={formData.featured}
//               onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
//               className="w-4 h-4"
//             />
//             <label htmlFor="featured" className="font-medium cursor-pointer">
//               Mark as Featured Post
//             </label>
//           </div>

//           <div className="flex gap-4 pt-4">
//             <Button type="submit" disabled={loading} className="w-full">
//               {loading ? 'Creating...' : 'Create Blog Post'}
//             </Button>
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => router.push('/admin')}
//               className="w-full"
//             >
//               Cancel
//             </Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// }







// "use client";

// import { useState } from "react";
// import BlogEditor from "@/components/admin/blog/BlogEditor";

// export default function CreateBlogPage() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     mainImage: "",
//     content: "",
//     tags: "",
//   });

//   const handleCreate = async () => {
//     const res = await fetch("/api/blogs", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({
//         ...form,
//         tags: form.tags.split(",").map(t => t.trim()),
//       }),
//     });

//     const blog = await res.json();
//     window.location.href = `/blog/${blog._id}`;
//   };

//   return (
//     <BlogEditor
//       form={form}
//       setForm={setForm}
//       onSubmit={handleCreate}
//       buttonText="Publish"
//     />
//   );
// }



























// Minimal working version - V1

// "use client";

// import { useState } from "react";
// import BlogEditor from "@/components/admin/blog/BlogEditor";
// import { uploadToCloudinary } from "@/lib/uploadImage";

// export default function CreateBlogPage() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     mainImage: "",
//     content: null,
//     tags: "",
//   });

//   const handleImageUpload = async (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (!e.target.files?.[0]) return;

//     const url = await uploadToCloudinary(e.target.files[0]);
//     setForm(prev => ({ ...prev, mainImage: url }));
//   };

//   const handleCreate = async () => {
//     const res = await fetch("/api/blogs/create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         tags: form.tags.split(",").map(t => t.trim()),
//       }),
//     });

//     const blog = await res.json();
//     window.location.href = `/blogT/${blog.slug}`;
//   };

//   return (
//     <>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//       />

//       {form.mainImage && (
//         <img
//           src={form.mainImage}
//           className="rounded-xl my-4"
//         />
//       )}

//       <BlogEditor
//         form={form}
//         setForm={setForm}
//         onSubmit={handleCreate}
//         buttonText="Publish"
//       />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/blog/BlogEditor";
import { uploadToCloudinary } from "@/lib/uploadImage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { FaArrowLeft, FaUpload, FaTrash } from "react-icons/fa";
import Image from "next/image";

export default function CreateBlogPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    mainImage: "",
    content: "",
    tags: "",
  });

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    const uploadToast = toast.loading("Uploading image...");

    try {
      const url = await uploadToCloudinary(e.target.files[0]);
      setForm(prev => ({ ...prev, mainImage: url }));
      toast.success("Image uploaded successfully!", { id: uploadToast });
    } catch (error) {
      toast.error("Failed to upload image", { id: uploadToast });
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleCreate = async () => {
    if (!form.title || !form.description || !form.mainImage || !form.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    setCreating(true);
    const createToast = toast.loading("Creating blog post...");

    try {
      const res = await fetch("/api/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to create blog");

      const blog = await res.json();
      toast.success("Blog post created successfully!", { id: createToast });
      setTimeout(() => {
        window.location.href = `/blogT/${blog.slug}`;
      }, 500);
    } catch (error) {
      toast.error("Failed to create blog post", { id: createToast });
      console.error(error);
      setCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/admin")}
            className="mb-4 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold">Create New Blog Post</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Fill in the details below to publish your blog post
          </p>
        </div>

        <Card className="p-6 mb-6">
          {/* Image Upload Section */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold">
              Featured Image *
            </label>
            
            {!form.mainImage ? (
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaUpload className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      {uploading ? "Uploading..." : "Click to upload image"}
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </label>
              </div>
            ) : (
              <div className="relative group">
                <Image
                  src={form.mainImage}
                  alt="Preview"
                  width={800}
                  height={400}
                  className="rounded-lg w-full object-cover max-h-[400px]"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setForm(prev => ({ ...prev, mainImage: "" }))}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash className="mr-2" /> Remove
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Blog Editor */}
        <Card className="p-6">
          <BlogEditor
            form={form}
            setForm={setForm}
            onSubmit={handleCreate}
            buttonText={creating ? "Creating..." : "Publish Blog Post"}
            disabled={creating || uploading}
          />
        </Card>
      </div>
    </div>
  );
}