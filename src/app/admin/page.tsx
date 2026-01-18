"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, NotebookPen, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

interface DashboardStats {
  employees: {
    total: number;
    active: number;
    inactive: number;
  };
  workshops: {
    total: number;
    upcoming: number;
    past: number;
    totalRegistrations: number;
  };
  blogs: {
    total: number;
    featured: number;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    employees: { total: 0, active: 0, inactive: 0 },
    workshops: { total: 0, upcoming: 0, past: 0, totalRegistrations: 0 },
    blogs: { total: 0, featured: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const [employeesRes, workshopsRes, blogsRes] = await Promise.all([
        fetch("/api/employee"),
        fetch("/api/workshop"),
        fetch("/api/blogs"),
      ]);

      if (employeesRes.ok) {
        const employeeData = await employeesRes.json();
        setStats((prev) => ({ ...prev, employees: employeeData.stats }));
      }

      if (workshopsRes.ok) {
        const workshopData = await workshopsRes.json();
        setStats((prev) => ({ ...prev, workshops: workshopData.stats }));
      }

      if (blogsRes.ok) {
        const blogData = await blogsRes.json();
        const total = blogData.data.length;
        const featured = blogData.data.filter((b: any) => b.featured).length;
        setStats((prev) => ({ ...prev, blogs: { total, featured } }));
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin panel</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.employees.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.employees.active} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workshops</CardTitle>
            <NotebookPen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.workshops.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.workshops.upcoming} upcoming
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogs.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.blogs.featured} featured
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Workshop Registrations
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.workshops.totalRegistrations}
            </div>
            <p className="text-xs text-muted-foreground">Total registrations</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/admin/employee">
          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Manage Employees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View and manage all employees
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/workshop">
          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <NotebookPen className="h-5 w-5" />
                Manage Workshops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create and manage workshops
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/blog">
          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Manage Blogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Write and publish blog posts
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Employee Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Active Employees</span>
              <span className="text-sm font-bold">{stats.employees.active}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Inactive Employees</span>
              <span className="text-sm font-bold">
                {stats.employees.inactive}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workshop Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Upcoming Workshops</span>
              <span className="text-sm font-bold">
                {stats.workshops.upcoming}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Past Workshops</span>
              <span className="text-sm font-bold">{stats.workshops.past}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}