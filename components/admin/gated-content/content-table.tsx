import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2, Power, ExternalLink } from "lucide-react";

interface GatedContent {
  _id: string;
  title: string;
  description: string;
  contentType: string;
  category: string;
  status: "active" | "inactive" | "draft";
  accessCount: number;
  createdAt: string;
}

interface ContentTableProps {
  contents: GatedContent[];
  onViewLeads: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, status: string) => void;
}

export function ContentTable({
  contents,
  onViewLeads,
  onDelete,
  onToggleStatus,
}: ContentTableProps) {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      active: "default",
      inactive: "destructive",
      draft: "secondary",
    };

    return (
      <Badge variant={variants[status] || "default"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      pdf: "bg-red-100 text-red-800",
      ppt: "bg-orange-100 text-orange-800",
      doc: "bg-blue-100 text-blue-800",
      video: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800",
    };

    return (
      <Badge className={colors[type] || ""}>
        {type.toUpperCase()}
      </Badge>
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Leads</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contents.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center text-muted-foreground">
              No content found
            </TableCell>
          </TableRow>
        ) : (
          contents.map((content) => (
            <TableRow key={content._id}>
              <TableCell className="font-medium max-w-xs">
                <div>
                  <div className="font-medium">{content.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {content.description}
                  </div>
                </div>
              </TableCell>
              <TableCell>{getTypeBadge(content.contentType)}</TableCell>
              <TableCell>{content.category}</TableCell>
              <TableCell>{getStatusBadge(content.status)}</TableCell>
              <TableCell>
                <span className="font-semibold">{content.accessCount}</span>
              </TableCell>
              <TableCell>
                {new Date(content.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewLeads(content._id)}
                    title="View Leads"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(`/content/${content._id}`, "_blank")}
                    title="Preview"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onToggleStatus(content._id, content.status)}
                    title={content.status === "active" ? "Deactivate" : "Activate"}
                  >
                    <Power
                      className={`h-4 w-4 ${
                        content.status === "active" ? "text-green-600" : "text-gray-400"
                      }`}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(content._id)}
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}