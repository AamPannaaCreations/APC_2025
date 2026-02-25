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
import { Edit, Trash2 } from "lucide-react";

interface Toolkit {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  condition: "good" | "fair" | "poor";
  purchaseDate: string;
  price: number;
  status: "available" | "in-use" | "maintenance";
}

interface ToolkitTableProps {
  toolkits: Toolkit[];
  onEdit: (toolkit: Toolkit) => void;
  onDelete: (id: string) => void;
}

export function ToolkitTable({ toolkits, onEdit, onDelete }: ToolkitTableProps) {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      available: "default",
      "in-use": "secondary",
      maintenance: "destructive",
    };

    return (
      <Badge variant={variants[status] || "default"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getConditionBadge = (condition: string) => {
    const colors: Record<string, string> = {
      good: "bg-green-100 text-green-800",
      fair: "bg-yellow-100 text-yellow-800",
      poor: "bg-red-100 text-red-800",
    };

    return (
      <Badge className={colors[condition] || ""}>
        {condition.charAt(0).toUpperCase() + condition.slice(1)}
      </Badge>
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Condition</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Purchase Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {toolkits.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8} className="text-center text-muted-foreground">
              No toolkits found
            </TableCell>
          </TableRow>
        ) : (
          toolkits.map((toolkit) => (
            <TableRow key={toolkit._id}>
              <TableCell className="font-medium">{toolkit.name}</TableCell>
              <TableCell>{toolkit.category}</TableCell>
              <TableCell>{toolkit.quantity}</TableCell>
              <TableCell>{getConditionBadge(toolkit.condition)}</TableCell>
              <TableCell>${toolkit.price.toFixed(2)}</TableCell>
              <TableCell>
                {new Date(toolkit.purchaseDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{getStatusBadge(toolkit.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(toolkit)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(toolkit._id)}
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