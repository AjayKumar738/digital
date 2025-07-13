export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  slug: string;
  description: string;
  cardType: CardType;
  rewardType: RewardType;
  bestSpendCategory: string;
  rewardRate: number;
  upiRewards: boolean;
  rupaySupport?: boolean;
  loungeAccess: boolean;
  annualFee: number;
  annualFeeWaiverSpend: number;
  imageUrl: string;
  applyLink: string;
  features: string[];
  pros: string[];
  cons: string[];
  eligibility: {
    minIncome: number;
    minAge: number;
    maxAge: number;
    employmentType: string[];
  };
  rewards: {
    fuel: number;
    groceries: number;
    dining: number;
    travel: number;
    online: number;
    other: number;
  };
  benefits: {
    welcomeBonus: string;
    milestoneRewards: string;
    airportLounge: string;
    concierge: boolean;
    insurance: string[];
  };
  category: CardCategory[];
  tags: string[];
  rating: number;
  reviewCount: number;
  lastUpdated: string;
}

export type CardType = 
  | 'Cashback'
  | 'Rewards'
  | 'Travel'
  | 'Fuel'
  | 'Business'
  | 'Luxury'
  | 'Forex'
  | 'Lounge Access';

export type RewardType = 
  | 'Cashback'
  | 'Reward Points'
  | 'Miles'
  | 'Co-branded Points'
  | 'Cashback + Points'
  | 'Hotel Points';

export type CardCategory = 
  | 'Lifetime Free'
  | 'Repay UPI'
  | 'UPI Credit Cards'
  | 'Cashback'
  | 'Luxury'
  | '0% Forex'
  | 'Travel'
  | 'Lounge Access'
  | 'Fuel'
  | 'Business'
  | 'Business Credit Cards';

export interface CardComparison {
  monthlySpend: number;
  cards: CreditCard[];
  calculations: CardCalculation[];
}

export interface CardCalculation {
  cardId: string;
  monthlyCashback: number;
  annualCashback: number;
  isFeeWaived: boolean;
  netAnnualSavings: number;
  effectiveRewardRate: number;
}

export interface FilterOptions {
  cardType: CardType[];
  rewardType: RewardType[];
  annualFee: {
    min: number;
    max: number;
  };
  rewardRate: {
    min: number;
    max: number;
  };
  upiRewards: boolean | null;
  loungeAccess: boolean | null;
  categories: CardCategory[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  featuredImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface DigitalProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  category: string;
  features: string[];
  downloadUrl: string;
  salesPage: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: 'email' | 'whatsapp';
} 