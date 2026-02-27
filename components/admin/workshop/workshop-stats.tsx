import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

interface WorkshopStatsProps {
  loading?: boolean;
  total: number;
  upcoming: number;
  past: number;
  totalRegistrations: number;
}

export function WorkshopStats({
  loading,
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
          {loading ? <Spinner className="h-6 w-6" /> : total}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Workshops</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-blue-600">
          {loading ? <Spinner className="h-6 w-6" /> : upcoming}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Workshops</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-gray-600">
          {loading ? <Spinner className="h-6 w-6" /> : past}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Registrations</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-green-600">
          {loading ? <Spinner className="h-6 w-6" /> : totalRegistrations}
        </CardContent>
      </Card>
    </div>
  );
}
