import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Employee } from '@/models/employee';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const { name, email, phone, position, department, salary, joiningDate } = body;

    // Validate required fields
    if (!name || !email || !phone || !position || !department || !salary || !joiningDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if employee with email already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return NextResponse.json(
        { error: 'Employee with this email already exists' },
        { status: 400 }
      );
    }

    // Create employee in database
    const employee = await Employee.create({
      name,
      email,
      phone,
      position,
      department,
      salary,
      joiningDate: new Date(joiningDate),
      status: "active"
    });

    return NextResponse.json(
      { message: 'Employee created successfully', employee },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating employee:', error);
    return NextResponse.json(
      { error: 'Failed to create employee' },
      { status: 500 }
    );
  }
}