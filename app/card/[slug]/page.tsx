import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { creditCards } from '@/data/credit-cards';
import CardReview from '@/components/CardReview';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return creditCards.map((card) => ({
    slug: card.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const card = creditCards.find(c => c.slug === params.slug);
  
  if (!card) {
    return {
      title: 'Card Not Found | CrediBundl',
    };
  }

  return {
    title: `${card.name} Review - ${card.bank} Credit Card | CrediBundl`,
    description: `${card.name} credit card review. ${card.description} Annual fee: ₹${card.annualFee}, Reward rate: ${card.rewardRate}%. Apply now for exclusive offers.`,
    keywords: `${card.name}, ${card.bank} credit card, credit card review, ${card.category.join(', ')}, apply credit card`,
    openGraph: {
      title: `${card.name} Review - ${card.bank} Credit Card`,
      description: card.description,
      type: 'article',
    },
  };
}

export default function CardPage({ params }: PageProps) {
  const card = creditCards.find(c => c.slug === params.slug);
  
  if (!card) {
    notFound();
  }

  return <CardReview card={card} />;
} 