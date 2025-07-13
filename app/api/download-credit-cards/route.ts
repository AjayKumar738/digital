import { NextRequest, NextResponse } from 'next/server';
import { creditCards } from '@/data/credit-cards';
import { getApplyLink } from '@/data/apply-links';

export async function GET() {
  try {
    // Create CSV content
    const headers = [
      'Card Name',
      'Bank',
      'Card Type',
      'Reward Type',
      'Reward Rate (%)',
      'Annual Fee (₹)',
      'Fee Waiver Spend (₹)',
      'UPI Rewards',
      'Lounge Access',
      'Best Spend Category',
      'Rating',
      'Review Count',
      'Welcome Bonus',
      'Milestone Rewards',
      'Airport Lounge',
      'Concierge',
      'Insurance',
      'Min Income (₹)',
      'Age Range',
      'Employment Type',
      'Fuel Rewards (%)',
      'Groceries Rewards (%)',
      'Dining Rewards (%)',
      'Travel Rewards (%)',
      'Online Rewards (%)',
      'Other Rewards (%)',
      'Features',
      'Pros',
      'Cons',
      'Apply Link',
      'Last Updated'
    ];

    const rows = creditCards.map(card => [
      card.name,
      card.bank,
      card.cardType,
      card.rewardType,
      card.rewardRate,
      card.annualFee,
      card.annualFeeWaiverSpend,
      card.upiRewards ? 'Yes' : 'No',
      card.loungeAccess ? 'Yes' : 'No',
      card.bestSpendCategory,
      card.rating,
      card.reviewCount,
      card.benefits.welcomeBonus,
      card.benefits.milestoneRewards,
      card.benefits.airportLounge,
      card.benefits.concierge ? 'Available' : 'Not Available',
      card.benefits.insurance.join(', '),
      card.eligibility.minIncome,
      `${card.eligibility.minAge}-${card.eligibility.maxAge} years`,
      card.eligibility.employmentType.join(', '),
      card.rewards.fuel,
      card.rewards.groceries,
      card.rewards.dining,
      card.rewards.travel,
      card.rewards.online,
      card.rewards.other,
      card.features.join('; '),
      card.pros.join('; '),
      card.cons.join('; '),
      getApplyLink(card.id),
      card.lastUpdated
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    // Create response with CSV file
    const response = new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="credit-cards-guide.csv"',
        'Cache-Control': 'no-cache'
      }
    });

    return response;
  } catch (error) {
    console.error('Error generating CSV:', error);
    return NextResponse.json(
      { error: 'Failed to generate credit card guide' },
      { status: 500 }
    );
  }
} 