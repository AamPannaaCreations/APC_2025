"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OutputData } from "@editorjs/editorjs";
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
  content: OutputData | null;
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
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    params.then(({ id }) => setBlogId(id));
  }, [params]);

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
          content: blog.content as OutputData,
          tags: blog.tags.join(", "),
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load blog");
        router.push("/admin/blog");
      } finally {
        setFetching(false);
      }
    };

    fetchBlog();
  }, [blogId, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    const uploadToast = toast.loading("Uploading image...");

    try {
      const url = await uploadToCloudinary(e.target.files[0]);
      setForm((prev) => prev && { ...prev, mainImage: url });
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

    if (!form.title || !form.description || !form.mainImage || !form.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    const updateToast = toast.loading("Updating blog...");

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          mainImage: form.mainImage,
          content: form.content,
          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to update");

      toast.success("Blog updated!", { id: updateToast });
      setTimeout(() => router.push("/admin/blog"), 500);
    } catch (error) {
      toast.error("Update failed", { id: updateToast });
      console.error(error);
      setLoading(false);
    }
  };

  // if (fetching) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  //         <p className="text-muted-foreground">Loading blog...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (!form) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Blog Post</h1>
          <p className="text-muted-foreground mt-1">
            Update your blog post details
          </p>
        </div>
        <Button variant="ghost" onClick={() => router.push("/admin/blog")}>
          <FaArrowLeft className="mr-2" /> Back
        </Button>
      </div>

      <Card className="p-6">
        <label className="block text-lg font-semibold mb-4">
          Featured Image *
        </label>

        {!form.mainImage ? (
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-primary transition-colors">
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
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FaUpload className="text-2xl text-primary" />
              </div>
              <div>
                <p className="text-lg font-medium">
                  {uploading ? "Uploading..." : "Click to upload image"}
                </p>
                <p className="text-sm text-muted-foreground">
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
              onClick={() =>
                setForm((prev) => prev && { ...prev, mainImage: "" })
              }
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaTrash className="mr-2" /> Remove
            </Button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <BlogEditor
          form={form}
          setForm={(newForm) => setForm(newForm)}
          onSubmit={handleUpdate}
          buttonText={loading ? "Updating..." : "Update Blog Post"}
          disabled={loading || uploading}
        />
      </Card>
    </div>
  );
}
