"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { toast } from "react-hot-toast";
import {
  FaSearch,
  FaTrash,
  FaUserCheck,
  FaUserTimes,
  FaDownload,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

type Subscriber = {
  _id: string;
  email: string;
  name: string;
  isActive: boolean;
  isVerified: boolean;
  subscribedAt: string;
  unsubscribedAt?: string;
  source: string;
};

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  useEffect(() => {
    fetchSubscribers();
  }, []);

  useEffect(() => {
    filterSubscribers();
  }, [searchQuery, subscribers]);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe");
      const data = await res.json();

      if (data.success) {
        setSubscribers(data.subscribers || []);
        calculateStats(data.subscribers || []);
      }
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (subs: Subscriber[]) => {
    setStats({
      total: subs.length,
      active: subs.filter((s) => s.isActive).length,
      inactive: subs.filter((s) => !s.isActive).length,
    });
  };

  const filterSubscribers = () => {
    if (!searchQuery.trim()) {
      setFilteredSubscribers(subscribers);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = subscribers.filter(
      (sub) =>
        sub.email.toLowerCase().includes(query) ||
        sub.name?.toLowerCase().includes(query) ||
        sub.source.toLowerCase().includes(query),
    );
    setFilteredSubscribers(filtered);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const deleteToast = toast.loading("Deleting subscriber...");

    try {
      const res = await fetch(`/api/subscribe/${deleteId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      toast.success("Subscriber deleted successfully", { id: deleteToast });
      fetchSubscribers();
    } catch (error) {
      toast.error("Failed to delete subscriber", { id: deleteToast });
    } finally {
      setDeleteId(null);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const statusToast = toast.loading("Updating status...");

    try {
      const res = await fetch(`/api/subscribe/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      if (!res.ok) throw new Error("Failed to update");

      toast.success("Status updated successfully", { id: statusToast });
      fetchSubscribers();
    } catch (error) {
      toast.error("Failed to update status", { id: statusToast });
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ["Email", "Name", "Status", "Source", "Subscribed Date"].join(","),
      ...filteredSubscribers.map((sub) =>
        [
          sub.email,
          sub.name || "",
          sub.isActive ? "Active" : "Inactive",
          sub.source,
          new Date(sub.subscribedAt).toLocaleDateString(),
        ].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Exported to CSV");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Newsletter Subscribers</h1>
          <p className="text-muted-foreground mt-2">
            Manage your email subscribers and send newsletters
          </p>
        </div>
        <Button onClick={exportToCSV} className="gap-2">
          <FaDownload />
          Export CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Subscribers
            </CardTitle>
            <FaUsers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Subscribers
            </CardTitle>
            <FaUserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.active}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unsubscribed</CardTitle>
            <FaUserTimes className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.inactive}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by email, name, or source..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <FaEnvelope />
              Send Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Subscribers Table */}
      <Card>
        <CardContent className="pt-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="text-lg">Loading subscribers...</div>
            </div>
          ) : filteredSubscribers.length === 0 ? (
            <div className="text-center py-8">
              <FaUsers className="mx-auto text-4xl text-muted-foreground mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                No subscribers found
              </h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "No subscribers yet"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Subscribed</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers.map((sub) => (
                    <TableRow key={sub._id}>
                      <TableCell className="font-medium">{sub.email}</TableCell>
                      <TableCell>{sub.name || "-"}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Badge
                            variant={sub.isActive ? "default" : "secondary"}
                            className="w-fit"
                          >
                            {sub.isActive ? "Active" : "Inactive"}
                          </Badge>
                          {sub.isVerified && (
                            <Badge variant="outline" className="w-fit text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{sub.source}</Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(sub.subscribedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleToggleStatus(sub._id, sub.isActive)
                            }
                          >
                            {sub.isActive ? (
                              <FaUserTimes className="text-red-600" />
                            ) : (
                              <FaUserCheck className="text-green-600" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(sub._id)}
                          >
                            <FaTrash className="text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this subscriber from the database.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
