import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Employee } from '@/models/employee';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    const body = await request.json();
    
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { ...body, joiningDate: body.joiningDate ? new Date(body.joiningDate) : undefined },
      { new: true }
    );
    
    if (!updatedEmployee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Employee updated successfully', employee: updatedEmployee },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating employee:', error);
    return NextResponse.json(
      { error: 'Failed to update employee' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    
    if (!deletedEmployee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Employee deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json(
      { error: 'Failed to delete employee' },
      { status: 500 }
    );
  }
}