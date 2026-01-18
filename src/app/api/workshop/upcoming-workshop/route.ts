import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Workshop } from '@/models/workshop';

    
export async function GET() {
  try {
    await connectDB();
    
    const now = new Date();
    
    // Find all workshops where date is greater than current date
    const upcomingWorkshops = await Workshop.find({
      date: { $gt: now }
    })
    .sort({ date: 1 }) // Sort by date ascending (earliest first)
    .lean();
    
    return NextResponse.json(
      {
        success: true,
        count: upcomingWorkshops.length,
        workshops: JSON.parse(JSON.stringify(upcomingWorkshops))
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching upcoming workshops:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch upcoming workshops' 
      },
      { status: 500 }
    );
  }
}