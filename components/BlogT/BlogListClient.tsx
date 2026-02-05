"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { Suspense, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

type BlogCard = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainImage: string;
  tags: string[];
  createdAt: string;
};

type ApiResponse = {
  blogs: BlogCard[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
};

function BlogListContent({ initialData }: { initialData: ApiResponse }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "");
  const [data, setData] = useState<ApiResponse | null>(initialData);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1"),
  );

  const debouncedSearch = useDebounce(searchQuery, 500);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "9",
      });

      if (debouncedSearch) {
        params.append("search", debouncedSearch);
      }

      if (selectedTag) {
        params.append("tag", selectedTag);
      }

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const apiData: ApiResponse = await res.json();
      setData(apiData);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, selectedTag]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (selectedTag) params.set("tag", selectedTag);

    const queryString = params.toString();
    router.replace(`/blogT${queryString ? `?${queryString}` : ""}`, {
      scroll: false,
    });
  }, [currentPage, debouncedSearch, selectedTag, router]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
    setCurrentPage(1);
  };

  const blogs = data?.blogs || [];
  const pagination = data?.pagination;

  return (
    <>
      <Card className="mb-8">
        <CardContent className="pt-6 space-y-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blogs by title or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 h-12 text-base"
            />
          </div>

          {(searchQuery || selectedTag) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-2">
                  Search: {searchQuery}
                  <FaTimes
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                  />
                </Badge>
              )}
              {selectedTag && (
                <Badge variant="secondary" className="gap-2">
                  Tag: {selectedTag}
                  <FaTimes
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => {
                      setSelectedTag("");
                      setCurrentPage(1);
                    }}
                  />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {!loading && pagination && (
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {blogs.length > 0 ? (currentPage - 1) * 9 + 1 : 0}-
            {Math.min(currentPage * 9, pagination.total)} of {pagination.total}{" "}
            posts
          </p>
          <p className="text-sm text-muted-foreground">
            Page {pagination.page} of {pagination.totalPages}
          </p>
        </div>
      )}

      {blogs.length === 0 ? (
        <Card className="p-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">No blogs found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || selectedTag
                ? "No results match your filters. Try adjusting your search."
                : "No blog posts available yet."}
            </p>
            {(searchQuery || selectedTag) && (
              <Button onClick={clearFilters}>Clear Filters</Button>
            )}
          </div>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogT/${blog.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5 space-y-3">
                  <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.slice(0, 3).map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedTag(tag);
                          setCurrentPage(1);
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {!loading && pagination && pagination.totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-1">
            {[...Array(pagination.totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              const showPage =
                pageNum === 1 ||
                pageNum === pagination.totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

              const showEllipsis =
                (pageNum === currentPage - 2 && currentPage > 3) ||
                (pageNum === currentPage + 2 &&
                  currentPage < pagination.totalPages - 2);

              if (showEllipsis) {
                return (
                  <span
                    key={pageNum}
                    className="px-3 py-2 text-muted-foreground"
                  >
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(pageNum)}
                  className="w-10"
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination.totalPages}
          >
            <FaChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}

export default function BlogListClient({ initialData }: { initialData: ApiResponse }) {
  return (
    <Suspense
      fallback={
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      }
    >
      <BlogListContent initialData={initialData} />
    </Suspense>
  );
}
