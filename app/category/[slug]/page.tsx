import { Metadata } from 'next';
import { creditCards } from '@/data/credit-cards';
import { CardCategory } from '@/types/credit-card';
import CategoryPage from '@/components/CategoryPage';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Helper function to normalize category names for matching
function normalizeCategory(category: string): string {
  return category.toLowerCase().replace(/[%\s]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// Helper function to check if a card matches the category slug
function cardMatchesCategory(card: any, categorySlug: string): boolean {
  return card.category.some((cat: string) => {
    // Handle special cases
    if (categorySlug === 'forex' && cat === '0% Forex') return true;
    if (categorySlug === 'business' && cat === 'Business') return true;
    
    // Normal matching
    return normalizeCategory(cat) === categorySlug;
  });
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.slug;
  const categoryCards = creditCards.filter(card => 
    cardMatchesCategory(card, category)
  );

  // Get the category name from the first matched card
  const categoryName = categoryCards[0]?.category.find(cat => {
    if (category === 'forex' && cat === '0% Forex') return true;
    if (category === 'business' && cat === 'Business') return true;
    return normalizeCategory(cat) === category;
  }) || 'Credit Cards';

  return {
    title: `Best ${categoryName} in India 2024 | CrediBundl`,
    description: `Compare the best ${categoryName.toLowerCase()} in India. Find cards with high rewards, low fees, and exclusive benefits. Apply online with instant approval.`,
    keywords: `${categoryName.toLowerCase()}, credit cards, compare cards, apply online, rewards, cashback`,
  };
}

export default function CategoryPageRoute({ params }: CategoryPageProps) {
  const category = params.slug;
  const categoryCards = creditCards.filter(card => 
    cardMatchesCategory(card, category)
  );

  // Get the category name from the first matched card
  const categoryName = categoryCards[0]?.category.find(cat => {
    if (category === 'forex' && cat === '0% Forex') return true;
    if (category === 'business' && cat === 'Business') return true;
    return normalizeCategory(cat) === category;
  }) || 'Credit Cards';

  return (
    <CategoryPage 
      categoryName={categoryName}
      cards={categoryCards}
      categorySlug={category}
    />
  );
} 