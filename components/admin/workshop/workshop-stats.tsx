import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkshopStatsProps {
  total: number;
  upcoming: number;
  past: number;
  totalRegistrations: number;
}

export function WorkshopStats({
  total,
  upcoming,
  past,
  totalRegistrations,
}: WorkshopStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Workshops</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
          {total}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Workshops</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-blue-600">
          {upcoming}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Workshops</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-gray-600">
          {past}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Registrations</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-green-600">
          {totalRegistrations}
        </CardContent>
      </Card>
    </div>
  );
}