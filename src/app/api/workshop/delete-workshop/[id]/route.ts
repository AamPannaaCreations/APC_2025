import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
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