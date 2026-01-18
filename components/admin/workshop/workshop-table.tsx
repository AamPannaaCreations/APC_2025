import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

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

interface WorkshopTableProps {
  workshops: Workshop[];
  onEdit?: (workshop: Workshop) => void;
  onDelete?: (id: string) => void;
}

export function WorkshopTable({
  workshops,
  onDelete,
}: WorkshopTableProps) {
  const getStatus = (date: string) => {
    const workshopDate = new Date(date);
    const now = new Date();

    if (workshopDate > now) {
      return "upcoming";
    } else if (workshopDate.toDateString() === now.toDateString()) {
      return "today";
    } else {
      return "past";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {workshops.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={8}
              className="text-center text-muted-foreground"
            >
              No workshops found
            </TableCell>
          </TableRow>
        ) : (
          workshops.map((workshop) => (
            <TableRow key={workshop._id}>
              <TableCell className="font-medium">{workshop.title}</TableCell>

              <TableCell>{formatDate(workshop.date)}</TableCell>

              <TableCell>{workshop.duration || "-"}</TableCell>

              <TableCell>{workshop.instructor || "-"}</TableCell>

              <TableCell>{workshop.capacity || "-"}</TableCell>

              <TableCell>
                {workshop.price ? `₹${workshop.price}` : "Free"}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    getStatus(workshop.date) === "upcoming"
                      ? "default"
                      : getStatus(workshop.date) === "today"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {getStatus(workshop.date)}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {onDelete && (
                  <Button
                    variant="default"
                    // size="icon"
                    onClick={() => onDelete(workshop._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  )} 
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
