"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import Image from "next/image";
import { FaEdit, FaTrash, FaPlus, FaSearch, FaFileAlt, FaTags } from "react-icons/fa";

interface Blog {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  slug: string;
  tags: string[];
  createdAt: string;
}

interface ApiResponse {
  blogs: Blog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export default function BlogDashboard() {
  const router = useRouter();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, [searchQuery]);

  const fetchBlogs = async () => {
    try {
      const url = searchQuery
        ? `/api/blogs?search=${encodeURIComponent(searchQuery)}`
        : "/api/blogs";
      
      const res = await fetch(url);
      const apiData: ApiResponse = await res.json();
      setData(apiData);
    } catch (error) {
      toast.error("Failed to fetch blogs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const deleteToast = toast.loading("Deleting blog...");

    try {
      const res = await fetch(`/api/blogs/${deleteId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Blog deleted successfully", { id: deleteToast });
        fetchBlogs();
      } else {
        toast.error("Failed to delete blog", { id: deleteToast });
      }
    } catch (error) {
      toast.error("An error occurred", { id: deleteToast });
    } finally {
      setDeleteId(null);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="text-2xl">Loading...</div>
  //     </div>
  //   );
  // }

  const blogs = data?.blogs || [];
  const pagination = data?.pagination;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage and organize all your blog posts
          </p>
        </div>
        <Button
          onClick={() => router.push("/admin/blog/new")}
          size="lg"
          className="flex items-center gap-2"
        >
          <FaPlus /> Create New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FaFileAlt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pagination?.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              {pagination?.totalPages || 0} pages in total
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Page</CardTitle>
            <FaFileAlt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogs.length}</div>
            <p className="text-xs text-muted-foreground">
              Page {pagination?.page || 1} of {pagination?.totalPages || 1}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Tags</CardTitle>
            <FaTags className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(blogs.flatMap(b => b.tags)).size}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all posts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
          <CardDescription>
            Search and manage your blog posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            {searchQuery && (
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </Button>
            )}
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center h-32 text-muted-foreground"
                    >
                      {searchQuery
                        ? "No blogs found matching your search."
                        : "No blogs yet. Create your first post!"}
                    </TableCell>
                  </TableRow>
                ) : (
                  blogs.map((blog) => (
                    <TableRow key={blog._id}>
                      <TableCell>
                        <Image
                          src={blog.mainImage}
                          alt={blog.title}
                          width={80}
                          height={60}
                          className="rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell>
                        <div className="max-w-md">
                          <p className="font-semibold truncate">{blog.title}</p>
                          <p className="text-sm text-muted-foreground truncate mt-1">
                            {blog.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {blog.tags?.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                          {blog.tags?.length > 3 && (
                            <Badge variant="outline">
                              +{blog.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              router.push(`/admin/blog/${blog._id}/edit`)
                            }
                          >
                            <FaEdit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => setDeleteId(blog._id)}
                          >
                            <FaTrash className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              blog post from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}