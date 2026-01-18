import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EmployeeStatsProps {
  total: number;
  active: number;
  inactive: number;
}

export function EmployeeStats({ total, active, inactive }: EmployeeStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
          {total}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-green-600">
          {active}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inactive Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-gray-600">
          {inactive}
        </CardContent>
      </Card>
    </div>
  );
}