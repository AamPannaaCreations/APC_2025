"use client";

import { useEffect, useState } from "react";
import { EmployeeStats } from "@/components/admin/employee/employee-stats";
import { EmployeeTable } from "@/components/admin/employee/employee-table";
import { CreateEmployeeDialog } from "@/components/admin/employee/create-employee-dialog";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";

interface Employee {
  _id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  salary: number;
  joiningDate: string;
  status: "active" | "inactive";
}

interface Stats {
  total: number;
  active: number;
  inactive: number;
}

export default function AdminEmployeePage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    active: 0,
    inactive: 0,
  });
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/employee", {
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        setEmployees(data.employees);
        setStats(data.stats);
      } else {
        toast.error("Failed to fetch employees");
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    setRefreshing(true);
    await fetchEmployees();
    toast.success("Employees refreshed");
  };

  const handleEdit = (employee: Employee) => {
    // TODO: Implement edit functionality
    console.log("Edit employee:", employee);
    toast.success("Edit functionality coming soon");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      const response = await fetch(`/api/employee/delete-employee/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Employee deleted successfully");
        fetchEmployees();
      } else {
        toast.error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employees</h1>
        <div className="flex gap-2">
          <Button
            onClick={handleRefresh}
            variant="outline"
            disabled={refreshing}
          >
            <RefreshCcw
              className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <CreateEmployeeDialog />
        </div>
      </div>

      <EmployeeStats
        loading={loading}
        total={stats.total}
        active={stats.active}
        inactive={stats.inactive}
      />

      <div className="rounded-lg border">
        {loading ? (
          <div className=" h-40 flex items-center justify-center gap-4 [--radius:1.2rem]">
            <Badge>
              <Spinner data-icon="inline-start" />
              Syncing
            </Badge>
          </div>
        ) : (
          <EmployeeTable
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
