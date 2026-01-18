import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Admin } from '@/models/admin';

const ALLOW_SIGNUP = process.env.ALLOW_ADMIN_SIGNUP === 'true';

export async function GET() {
  try {
    await connectDB();
    
    // Check if any admin exists
    const adminCount = await Admin.countDocuments();
    
    // Allow signup if no admins exist OR if explicitly allowed via env
    const allowed = adminCount === 0 || ALLOW_SIGNUP;
    
    return NextResponse.json({
      allowed,
      message: allowed 
        ? 'Signup is available' 
        : 'Signup is disabled. Admin already exists.',
    });
  } catch (error) {
    console.error('Check signup error:', error);
    return NextResponse.json(
      { error: 'Failed to check signup availability' },
      { status: 500 }
    );
  }
}