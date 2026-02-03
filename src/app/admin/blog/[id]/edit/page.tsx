// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useEffect, useState } from "react";
// import BlogEditor from "@/components/admin/blog/BlogEditor";
// import { uploadToCloudinary } from "@/lib/uploadImage";

// type BlogForm = {
//   title: string;
//   description: string;
//   mainImage: string;
//   content: any;
//   tags: string;
// };

// export default function EditBlogPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const [form, setForm] = useState<BlogForm | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch existing blog
//   useEffect(() => {
//     fetch(`/api/blogs/${params.id}`)
//       .then(res => res.json())
//       .then(blog =>
//         setForm({
//           title: blog.title,
//           description: blog.description,
//           mainImage: blog.mainImage,
//           content: blog.content,
//           tags: blog.tags.join(", "),
//         })
//       );
//   }, [params.id]);

//   const handleImageUpload = async (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (!e.target.files?.[0]) return;
//     const url = await uploadToCloudinary(e.target.files[0]);
//     setForm(prev => prev && { ...prev, mainImage: url });
//   };

//   const handleUpdate = async () => {
//     if (!form) return;

//     setLoading(true);

//     const res = await fetch(`/api/blogs/${params.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         tags: form.tags.split(",").map(t => t.trim()),
//       }),
//     });

//     const updated = await res.json();
//     setLoading(false);

//     window.location.href = `/blog/${updated.slug}`;
//   };

//   if (!form) return <p>Loading...</p>;

//   return (
//     <div className="space-y-6">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//       />

//       {form.mainImage && (
//         <img
//           src={form.mainImage}
//           className="rounded-xl max-h-64"
//         />
//       )}

//       <BlogEditor
//         form={form}
//         setForm={setForm}
//         onSubmit={handleUpdate}
//         buttonText={loading ? "Updating..." : "Update"}
//       />
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/blog/BlogEditor";
import { uploadToCloudinary } from "@/lib/uploadImage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { FaArrowLeft, FaUpload, FaTrash } from "react-icons/fa";
import Image from "next/image";

type BlogForm = {
  title: string;
  description: string;
  mainImage: string;
  content: string;
  tags: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function EditBlogPage({ params }: PageProps) {
  const router = useRouter();
  const [blogId, setBlogId] = useState<string>("");
  const [form, setForm] = useState<BlogForm | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Unwrap params (Next.js 15)
  useEffect(() => {
    params.then(({ id }) => setBlogId(id));
  }, [params]);

  // Fetch existing blog
  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${blogId}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        
        const blog = await res.json();
        setForm({
          title: blog.title,
          description: blog.description,
          mainImage: blog.mainImage,
          content: blog.content,
          tags: blog.tags.join(", "),
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load blog");
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    const uploadToast = toast.loading("Uploading image...");

    try {
      const url = await uploadToCloudinary(e.target.files[0]);
      setForm(prev => prev && { ...prev, mainImage: url });
      toast.success("Image uploaded!", { id: uploadToast });
    } catch (error) {
      toast.error("Upload failed", { id: uploadToast });
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdate = async () => {
    if (!form || !blogId) return;

    setLoading(true);
    const updateToast = toast.loading("Updating blog...");

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to update");

      const updated = await res.json();
      toast.success("Blog updated!", { id: updateToast });
      
      setTimeout(() => {
        router.push(`/admin/blog`);
      }, 500);
    } catch (error) {
      toast.error("Update failed", { id: updateToast });
      console.error(error);
      setLoading(false);
    }
  };

  if (!form) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Blog Post</h1>
          <p className="text-muted-foreground mt-1">
            Update your blog post details
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={() => router.push("/admin/blog")}
        >
          <FaArrowLeft className="mr-2" /> Back
        </Button>
      </div>

      {/* Image Upload */}
      <Card className="p-6">
        <label className="block text-lg font-semibold mb-4">
          Featured Image *
        </label>
        
        {!form.mainImage ? (
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <FaUpload className="mx-auto text-4xl mb-3 text-muted-foreground" />
              <p className="text-lg">
                {uploading ? "Uploading..." : "Click to upload"}
              </p>
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
              onClick={() => setForm(prev => prev && { ...prev, mainImage: "" })}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition"
            >
              <FaTrash className="mr-2" /> Remove
            </Button>
          </div>
        )}
      </Card>

      {/* Editor */}
      <Card className="p-6">
        <BlogEditor
          form={form}
          setForm={setForm}
          onSubmit={handleUpdate}
          buttonText={loading ? "Updating..." : "Update Blog Post"}
          disabled={loading || uploading}
        />
      </Card>
    </div>
  );
}