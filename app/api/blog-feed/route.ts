import { NextResponse } from 'next/server';

export async function GET() {
  // RSS fetching is temporarily disabled due to compatibility issues.
  return NextResponse.json({ items: [], error: 'Blog feed temporarily unavailable.' }, { status: 200 });
} 