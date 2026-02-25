"use client";

import { useEffect, useState } from "react";
import { ContentStats } from "@/components/admin/gated-content/content-stats";
import { ContentTable } from "@/components/admin/gated-content/content-table";
import { CreateContentDialog } from "@/components/admin/gated-content/create-content-dialog";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";

interface GatedContent {
  _id: string;
  title: string;
  description: string;
  contentType: string;
  fileUrl: string;
  category: string;
  status: "active" | "inactive" | "draft";
  accessCount: number;
  createdAt: string;
}

interface Stats {
  total: number;
  active: number;
  inactive: number;
  totalAccesses: number;
}

export default function AdminGatedContentPage() {
  const [contents, setContents] = useState<GatedContent[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    active: 0,
    inactive: 0,
    totalAccesses: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchContents = async () => {
    try {
      const response = await fetch("/api/gated-content", {
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        setContents(data.contents);
        setStats(data.stats);
      } else {
        toast.error("Failed to fetch content");
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      toast.error("Failed to fetch content");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchContents();
    toast.success("Content refreshed");
  };

  const handleViewLeads = (contentId: string) => {
    window.location.href = `/admin/gated-content/${contentId}/leads`;
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this content?")) {
      return;
    }

    try {
      const response = await fetch(`/api/gated-content/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Content deleted successfully");
        fetchContents();
      } else {
        toast.error("Failed to delete content");
      }
    } catch (error) {
      console.error("Error deleting content:", error);
      toast.error("Failed to delete content");
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    try {
      const response = await fetch(`/api/gated-content/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        toast.success(`Content ${newStatus === "active" ? "activated" : "deactivated"}`);
        fetchContents();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading content...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gated Content</h1>
          <p className="text-sm text-muted-foreground">
            Manage your gated content and track lead generation
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleRefresh} variant="outline" disabled={refreshing}>
            <RefreshCcw
              className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <CreateContentDialog onSuccess={fetchContents} />
        </div>
      </div>

      <ContentStats
        total={stats.total}
        active={stats.active}
        inactive={stats.inactive}
        totalAccesses={stats.totalAccesses}
      />

      <div className="rounded-lg border">
        <ContentTable
          contents={contents}
          onViewLeads={handleViewLeads}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
}