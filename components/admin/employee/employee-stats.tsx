import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

interface EmployeeStatsProps {
  loading: boolean;
  total: number;
  active: number;
  inactive: number;
}

export function EmployeeStats({ loading, total, active, inactive }: EmployeeStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
          {loading ? <Spinner className="h-6 w-6" /> : total}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-green-600">
          {loading ? <Spinner className="h-6 w-6" /> : active}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inactive Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-gray-600">
          {loading ? <Spinner className="h-6 w-6" /> : inactive}
        </CardContent>
      </Card>
    </div>
  );
}