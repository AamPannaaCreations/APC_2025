"use client";

import { useEffect, useState } from "react";
import { WorkshopStats } from "@/components/admin/workshop/workshop-stats";
import { WorkshopTable } from "@/components/admin/workshop/workshop-table";
import { CreateWorkshopDialog } from "@/components/admin/workshop/create-workshop-dialog";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";

interface Workshop {
  _id: string;
  title: string;
  description: string;
  date: string;
  duration?: string;
  instructor?: string;
  capacity?: number;
  price?: number;
}

interface Stats {
  total: number;
  upcoming: number;
  past: number;
  totalRegistrations: number;
}

export default function AdminWorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    upcoming: 0,
    past: 0,
    totalRegistrations: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch("/api/workshop", {
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        setWorkshops(data.workshops);
        setStats(data.stats);
      } else {
        toast.error("Failed to fetch workshops");
      }
    } catch (error) {
      console.error("Error fetching workshops:", error);
      toast.error("Failed to fetch workshops");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchWorkshops();
    toast.success("Workshops refreshed");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this workshop?")) {
      return;
    }

    try {
      const response = await fetch(`/api/workshop/delete-workshop/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Workshop deleted successfully");
        fetchWorkshops();
      } else {
        toast.error("Failed to delete workshop");
      }
    } catch (error) {
      console.error("Error deleting workshop:", error);
      toast.error("Failed to delete workshop");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading workshops...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Workshops</h1>
        <div className="flex gap-2">
          <Button onClick={handleRefresh} variant="outline" disabled={refreshing}>
            <RefreshCcw
              className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <CreateWorkshopDialog />
        </div>
      </div>

      <WorkshopStats
        total={stats.total}
        upcoming={stats.upcoming}
        past={stats.past}
        totalRegistrations={stats.totalRegistrations}
      />

      <div className="rounded-lg border">
        <WorkshopTable workshops={workshops} onDelete={handleDelete} />
      </div>
    </div>
  );
}