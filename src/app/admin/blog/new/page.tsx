"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OutputData } from "@editorjs/editorjs";
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
  const [form, setForm] = useState<{
    title: string;
    description: string;
    mainImage: string;
    content: OutputData | null;
    tags: string;
  }>({
    title: "",
    description: "",
    mainImage: "",
    content: null,
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
          title: form.title,
          description: form.description,
          mainImage: form.mainImage,
          content: form.content,
          tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to create blog");

      const blog = await res.json();
      toast.success("Blog post created successfully!", { id: createToast });

      console.log("Created blog To check slug is present or not:", blog);

        setTimeout(() => {
        if (blog.slug) {
          router.push(`/blogT/${blog.slug}`);
        } else {
          router.push("/admin/blog");
        }
      }, 1000);

    } catch (error) {
      toast.error("Failed to create blog post", { id: createToast });
      console.error(error);
      setCreating(false);
    }
  };

    const handleImageRemove = async () => {
    if (!form.mainImage) return;

    const deleteToast = toast.loading("Removing image...");

    try {
      // Extract public ID from Cloudinary URL
      // URL format: https://res.cloudinary.com/{cloud_name}/image/upload/{public_id}.{extension}
      const urlParts = form.mainImage.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      const publicId = lastPart.split(".")[0];

      // Call delete API
      await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      setForm(prev => ({ ...prev, mainImage: "" }));
      toast.success("Image removed successfully!", { id: deleteToast });
    } catch (error) {
      toast.error("Failed to remove image", { id: deleteToast });
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
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
                  onClick={handleImageRemove}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash className="mr-2" /> Remove
                </Button>
              </div>
            )}
          </div>
        </Card>

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