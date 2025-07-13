import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, existsSync, appendFileSync } from 'fs';
import { join } from 'path';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  city: string;
  monthlyIncome: string;
  preferredCardType: string;
  timestamp: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const customerData: CustomerData = {
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      city: body.city || '',
      monthlyIncome: body.monthlyIncome || '',
      preferredCardType: body.preferredCardType || '',
      timestamp: new Date().toISOString(),
      source: body.source || 'footer'
    };

    // Create CSV headers if file doesn't exist
    const csvHeaders = [
      'Name',
      'Email',
      'Phone',
      'City',
      'Monthly Income',
      'Preferred Card Type',
      'Timestamp',
      'Source'
    ];

    // Define the file path
    const filePath = join(process.cwd(), 'customer-data.csv');

    // Create file with headers if it doesn't exist
    if (!existsSync(filePath)) {
      writeFileSync(filePath, csvHeaders.join(',') + '\n');
    }

    // Append customer data
    const csvRow = [
      `"${customerData.name}"`,
      `"${customerData.email}"`,
      `"${customerData.phone}"`,
      `"${customerData.city}"`,
      `"${customerData.monthlyIncome}"`,
      `"${customerData.preferredCardType}"`,
      `"${customerData.timestamp}"`,
      `"${customerData.source}"`
    ].join(',');

    appendFileSync(filePath, csvRow + '\n');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Customer data collected successfully',
        downloadUrl: '/api/download-credit-cards'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error collecting customer data:', error);
    return NextResponse.json(
      { error: 'Failed to collect customer data' },
      { status: 500 }
    );
  }
} 