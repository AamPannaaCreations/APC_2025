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
  time?: string;
  duration?: string;
  platform?: string;
  instructor?: string;
  capacity?: number;
  enrolled?: number;
  price?: number;
  topics?: string[];
  status?: string;
}

interface WorkshopTableProps {
  workshops: Workshop[];
  onDelete?: (id: string) => void;
}

export function WorkshopTable({ workshops, onDelete }: WorkshopTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Enrollment</TableHead>
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
              <TableCell className="font-medium">
                <div>
                  <p className="font-semibold">{workshop.title}</p>
                  <p className="text-sm text-gray-500 w-60 line-clamp-1">
                    {workshop.description}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <p>{formatDate(workshop.date)}</p>
                  {workshop.time && (
                    <p className="text-gray-500">{workshop.time}</p>
                  )}
                </div>
              </TableCell>
              <TableCell>{workshop.platform || "N/A"}</TableCell>
              <TableCell>{workshop.instructor}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <p>
                    {workshop.enrolled || 0} / {workshop.capacity}
                  </p>
                  <p className="text-gray-500">
                    {workshop.capacity
                      ? Math.round(
                          ((workshop.enrolled || 0) / workshop.capacity) * 100,
                        )
                      : 0}
                    % filled
                  </p>
                </div>
              </TableCell>
              <TableCell>₹{workshop.price?.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    new Date(workshop.date) > new Date()
                      ? "default"
                      : "secondary"
                  }
                >
                  {new Date(workshop.date) > new Date() ? "Upcoming" : "Past"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {onDelete && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(workshop._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
