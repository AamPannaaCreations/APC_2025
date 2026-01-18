import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import mongoose from 'mongoose';
import { Workshop } from '@/models/workshop';
import { WorkshopRegistration } from '@/models/workshopRegistrations';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { id } = params;
    
    const deletedWorkshop = await Workshop.findByIdAndDelete(id);
    
    if (!deletedWorkshop) {
      return NextResponse.json(
        { error: 'Workshop not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Workshop deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting workshop:', error);
    return NextResponse.json(
      { error: 'Failed to delete workshop' },
      { status: 500 }
    );
  }
}