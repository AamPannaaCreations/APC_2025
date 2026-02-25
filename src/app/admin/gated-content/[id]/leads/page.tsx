"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Download } from "lucide-react";
import toast from "react-hot-toast";


interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  designation?: string;
  country?: string;
  ipAddress: string;
  accessedAt: string;
}


export default function ContentLeadsPage() {
  const params = useParams();
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, [params.id]);

  const fetchLeads = async () => {
    try {
      const response = await fetch(`/api/gated-content/${params.id}/leads`);

      if (response.ok) {
        const data = await response.json();
        setLeads(data.leads);
      } else {
        toast.error("Failed to fetch leads");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Designation", "Country", "IP Address", "Accessed At"];
    const rows = leads.map((lead) => [
      lead.name,
      lead.email,
      lead.phone,
      lead.company || "",
      lead.designation || "",
      lead.country || "",
      lead.ipAddress,
      new Date(lead.accessedAt).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${params.id}-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Leads exported successfully");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/admin/gated-content")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Content Leads</h1>
            <p className="text-sm text-muted-foreground">
              Total leads: {leads.length}
            </p>
          </div>
        </div>
        <Button onClick={exportToCSV} disabled={leads.length === 0}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Accessed At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  No leads yet
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead._id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.company || "-"}</TableCell>
                  <TableCell>{lead.designation || "-"}</TableCell>
                  <TableCell>{lead.country || "-"}</TableCell>
                  <TableCell className="font-mono text-xs">{lead.ipAddress}</TableCell>
                  <TableCell>
                    {new Date(lead.accessedAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}