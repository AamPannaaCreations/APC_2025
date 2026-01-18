import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const { title, description, date, duration, instructor, capacity, price } = body;

    // Validate required fields
    if (!title || !description || !date) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, and date are required' },
        { status: 400 }
      );
    }

    // Create workshop in database
    const workshop = await Workshop.create({
      title,
      description,
      date: new Date(date),
      duration,
      instructor,
      capacity,
      price
    });

    return NextResponse.json(
      { message: 'Workshop created successfully', workshop },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating workshop:', error);
    return NextResponse.json(
      { error: 'Failed to create workshop' },
      { status: 500 }
    );
  }
}