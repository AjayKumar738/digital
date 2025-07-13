import { Metadata } from 'next';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Credit Card Comparison Tool | CrediBundl',
  description: 'Compare credit cards side by side with dynamic calculations. Input your monthly spend and see real-time cashback, savings, and fee waivers for every card.',
  keywords: 'credit card comparison, compare cards, cashback calculator, rewards, annual fee, savings',
};

export default function ComparePage() {
  return <ComparisonTable />;
} 