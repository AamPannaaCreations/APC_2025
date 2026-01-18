import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Employee } from '@/models/employee';

export async function GET() {
  try {
    await connectDB();
    
    const employees = await Employee.find({}).sort({ createdAt: -1 }).lean();
    
    const activeEmployees = employees.filter(e => e.status === "active").length;
    const inactiveEmployees = employees.filter(e => e.status === "inactive").length;
    
    const stats = {
      total: employees.length,
      active: activeEmployees,
      inactive: inactiveEmployees,
    };
    
    return NextResponse.json({
      employees: JSON.parse(JSON.stringify(employees)),
      stats,
    });
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}