import { CreditCard } from '@/types/credit-card';

export const creditCards: CreditCard[] = [
  // Lifetime Free Cards
  {
    id: 'indusind-tiger',
    name: 'IndusInd Tiger CC',
    bank: 'IndusInd Bank',
    slug: 'indusind-tiger-cc',
    description: 'A lifetime free credit card with comprehensive rewards on all purchases and exclusive merchant offers.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 0,
    annualFeeWaiverSpend: 0,
    imageUrl: '/cards/indusind-tiger.jpg',
    applyLink: 'https://www.indusind.com/india/english/personal/cards/credit-cards/tiger-credit-card.html',
    features: [
      'Lifetime Free',
      '2X rewards on all purchases',
      'Exclusive merchant offers',
      'No joining fee',
      'Welcome bonus'
    ],
    pros: [
      'No annual fee',
      'Good rewards on all spends',
      'Exclusive offers',
      'No joining fee'
    ],
    cons: [
      'No airport lounge access',
      'Limited UPI rewards'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '5,000 reward points',
      milestoneRewards: '10,000 points on ₹1 lakh annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Lifetime Free'],
    tags: ['no-fee', 'rewards', 'all-spends'],
    rating: 4.2,
    reviewCount: 156,
    lastUpdated: '2024-01-09'
  },
  {
    id: 'idfc-millennia',
    name: 'IDFC Millennia Credit Card',
    bank: 'IDFC First Bank',
    slug: 'idfc-millennia-credit-card',
    description: 'A lifetime free credit card offering 5% cashback on online shopping and 1% on all other spends with UPI rewards.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'Online Shopping',
    rewardRate: 5,
    upiRewards: true,
    loungeAccess: false,
    annualFee: 0,
    annualFeeWaiverSpend: 0,
    imageUrl: '/cards/idfc-millennia.svg',
    applyLink: 'https://www.idfcfirstbank.com/credit-cards/millennia-credit-card',
    features: [
      'Lifetime Free',
      '5% cashback on online shopping',
      '1% cashback on all other spends',
      'UPI transactions earn rewards',
      'No joining fee'
    ],
    pros: [
      'No annual fee',
      'High cashback on online shopping',
      'UPI rewards',
      'No joining fee'
    ],
    cons: [
      'No airport lounge access',
      'Limited offline rewards'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 5,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first transaction',
      milestoneRewards: '₹500 on ₹10,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Lifetime Free'],
    tags: ['no-fee', 'cashback', 'online-shopping'],
    rating: 4.0,
    reviewCount: 89,
    lastUpdated: '2024-01-10'
  },

  // UPI Credit Cards
  {
    id: 'yes-bank-kiwi',
    name: 'YES Bank Kiwi Credit Card',
    bank: 'YES Bank',
    slug: 'yes-bank-kiwi-credit-card',
    description: 'A UPI-enabled credit card offering cashback on UPI transactions and comprehensive rewards.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'UPI Transactions',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/yes-bank-kiwi.jpg',
    applyLink: 'https://www.yesbank.in/credit-cards/kiwi-credit-card',
    features: [
      'UPI-enabled credit card',
      'RuPay network compatibility',
      '2% cashback on UPI transactions',
      '1% cashback on other spends',
      'No fuel surcharge',
      'Welcome bonus'
    ],
    pros: [
      'UPI rewards',
      'No fuel surcharge',
      'Good welcome bonus',
      'Easy to use'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access',
      'Limited offline rewards'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first UPI transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly UPI spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['UPI Credit Cards'],
    tags: ['upi', 'cashback', 'digital-payments', 'rupay'],
    rating: 3.8,
    reviewCount: 78,
    lastUpdated: '2024-01-07'
  },

  // Cashback Cards
  {
    id: 'sbi-cashback',
    name: 'SBI Cashback Credit Card',
    bank: 'State Bank of India',
    slug: 'sbi-cashback-credit-card',
    description: 'A cashback credit card offering 5% cashback on online shopping and 1% on all other spends with annual fee waiver on ₹1 lakh spend.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'Online Shopping',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 999,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/sbi-cashback.svg',
    applyLink: 'https://www.sbicard.com/en/personal/credit-cards/rewards/sbi-cashback-credit-card.page',
    features: [
      '5% cashback on online shopping',
      '1% cashback on all other spends',
      'No fuel surcharge',
      'Welcome bonus'
    ],
    pros: [
      'High cashback on online shopping',
      'No fuel surcharge',
      'Good welcome bonus',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 5,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹2,000 cashback on ₹10,000 spend',
      milestoneRewards: '₹1,000 on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover', 'Purchase protection']
    },
    category: ['Cashback'],
    tags: ['cashback', 'online-shopping', 'sbi'],
    rating: 4.1,
    reviewCount: 234,
    lastUpdated: '2024-01-08'
  },
  {
    id: 'tata-neu-hdfc',
    name: 'Tata Neu HDFC Credit Card',
    bank: 'HDFC Bank',
    slug: 'tata-neu-hdfc-credit-card',
    description: 'A co-branded credit card offering exclusive rewards on Tata brands and comprehensive benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Tata Brands',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/tata-neu-hdfc.jpg',
    applyLink: '#',
    features: [
      '5X rewards on Tata brands',
      '1X rewards on other spends',
      'Welcome bonus',
      'No fuel surcharge',
      'Exclusive Tata offers'
    ],
    pros: [
      'High rewards on Tata brands',
      'No fuel surcharge',
      'Exclusive offers',
      'Good welcome bonus'
    ],
    cons: [
      'Annual fee',
      'Limited rewards on non-Tata brands',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹1,000 NeuCoins on first transaction',
      milestoneRewards: '₹500 NeuCoins on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['tata', 'rewards', 'co-branded'],
    rating: 4.3,
    reviewCount: 189,
    lastUpdated: '2024-01-06'
  },

  // Luxury Cards
  {
    id: 'icici-times-black',
    name: 'ICICI Times Black Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-times-black-credit-card',
    description: 'A premium credit card offering exclusive dining and entertainment benefits with comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Dining & Entertainment',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 2500,
    annualFeeWaiverSpend: 200000,
    imageUrl: '/cards/icici-times-black.jpg',
    applyLink: '#',
    features: [
      '4X rewards on dining & entertainment',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High rewards on dining',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'High annual fee',
      'High income requirement',
      'Limited UPI rewards'
    ],
    eligibility: {
      minIncome: 1200000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '20,000 reward points',
      milestoneRewards: '10,000 points on ₹1 lakh annual spend',
      airportLounge: 'Unlimited domestic visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'dining', 'entertainment', 'premium'],
    rating: 4.5,
    reviewCount: 67,
    lastUpdated: '2024-01-12'
  },

  // Travel Cards
  {
    id: 'axis-atlas',
    name: 'Axis Atlas Credit Card',
    bank: 'Axis Bank',
    slug: 'axis-atlas-credit-card',
    description: 'A premium travel credit card offering accelerated rewards on travel and hotel bookings with comprehensive travel benefits.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel & Hotels',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 5000,
    annualFeeWaiverSpend: 250000,
    imageUrl: '/cards/axis-atlas.jpg',
    applyLink: '#',
    features: [
      '5X rewards on travel & hotels',
      '2X rewards on other spends',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    pros: [
      'High rewards on travel',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    cons: [
      'High annual fee',
      'High income requirement',
      'Limited UPI rewards'
    ],
    eligibility: {
      minIncome: 1500000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 5,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '25,000 reward points',
      milestoneRewards: '15,000 points on ₹1.5 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Travel'],
    tags: ['travel', 'hotels', 'premium', 'lounge-access'],
    rating: 4.6,
    reviewCount: 45,
    lastUpdated: '2024-01-13'
  },
  {
    id: 'hsbc-travelone',
    name: 'HSBC TravelOne',
    bank: 'HSBC Bank',
    slug: 'hsbc-travelone',
    description: 'A travel-focused credit card offering rewards on travel and dining with airport lounge access.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel & Dining',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 1500,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/hsbc-travelone.jpg',
    applyLink: '#',
    features: [
      '3X rewards on travel & dining',
      '1X rewards on other spends',
      'Airport lounge access',
      'Travel insurance',
      'Welcome bonus'
    ],
    pros: [
      'Good rewards on travel & dining',
      'Airport lounge access',
      'Travel insurance',
      'Reasonable annual fee'
    ],
    cons: [
      'Annual fee',
      'Limited UPI rewards',
      'Moderate income requirement'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 3,
      travel: 3,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '10,000 reward points',
      milestoneRewards: '5,000 points on ₹50,000 annual spend',
      airportLounge: '4 complimentary visits per year',
      concierge: false,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'dining', 'lounge-access'],
    rating: 4.2,
    reviewCount: 98,
    lastUpdated: '2024-01-05'
  },

  // Lounge Access Cards
  {
    id: 'hdfc-marriott-bonvoy',
    name: 'HDFC Marriott Bonvoy Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-marriott-bonvoy-credit-card',
    description: 'A premium credit card offering Marriott Bonvoy points, airport lounge access, and hotel benefits.',
    cardType: 'Lounge Access',
    rewardType: 'Hotel Points',
    bestSpendCategory: 'Hotels & Travel',
    rewardRate: 6,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 3000,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/hdfc-marriott-bonvoy.jpg',
    applyLink: '#',
    features: [
      '6X Marriott Bonvoy points on hotels',
      '2X points on other spends',
      'Airport lounge access',
      'Hotel status benefits',
      'Concierge services'
    ],
    pros: [
      'High hotel rewards',
      'Airport lounge access',
      'Hotel status benefits',
      'Concierge services'
    ],
    cons: [
      'Annual fee',
      'Limited UPI rewards',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 1000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 6,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '50,000 Marriott Bonvoy points',
      milestoneRewards: '25,000 points on ₹2 lakh annual spend',
      airportLounge: 'Unlimited domestic visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Lounge Access'],
    tags: ['hotels', 'marriott', 'lounge-access', 'premium'],
    rating: 4.4,
    reviewCount: 34,
    lastUpdated: '2024-01-14'
  },

  // Fuel Cards
  {
    id: 'rbl-xtra-indian-oil',
    name: 'RBL XTRA - Indian Oil Fuel Card',
    bank: 'RBL Bank',
    slug: 'rbl-xtra-indian-oil-fuel-card',
    description: 'A fuel credit card offering cashback on fuel purchases at Indian Oil outlets with additional rewards.',
    cardType: 'Fuel',
    rewardType: 'Cashback',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/rbl-xtra-indian-oil.jpg',
    applyLink: '#',
    features: [
      '3% cashback on fuel at Indian Oil',
      '1% cashback on other spends',
      'No fuel surcharge',
      'Welcome bonus',
      'Fuel price protection'
    ],
    pros: [
      'High fuel cashback',
      'No fuel surcharge',
      'Fuel price protection',
      'Good welcome bonus'
    ],
    cons: [
      'Limited to Indian Oil outlets',
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹500 cashback on first fuel transaction',
      milestoneRewards: '₹200 on ₹10,000 monthly fuel spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'indian-oil', 'cashback'],
    rating: 3.9,
    reviewCount: 145,
    lastUpdated: '2024-01-03'
  },
  {
    id: 'sbi-bpcl-octane',
    name: 'SBI BPCL Octane Credit Card',
    bank: 'State Bank of India',
    slug: 'sbi-bpcl-octane-credit-card',
    description: 'A fuel credit card offering rewards on fuel purchases at BPCL outlets with comprehensive benefits.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/sbi-bpcl-octane.jpg',
    applyLink: '#',
    features: [
      '4X rewards on fuel at BPCL',
      '1X rewards on other spends',
      'No fuel surcharge',
      'Welcome bonus',
      'Fuel price protection'
    ],
    pros: [
      'High fuel rewards',
      'No fuel surcharge',
      'Fuel price protection',
      'Good welcome bonus'
    ],
    cons: [
      'Limited to BPCL outlets',
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 4,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '1,000 reward points',
      milestoneRewards: '500 points on ₹10,000 monthly fuel spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'bpcl', 'rewards'],
    rating: 4.0,
    reviewCount: 167,
    lastUpdated: '2024-01-04'
  },
  {
    id: 'idfc-hp-power-plus',
    name: 'IDFC HP Power Plus Credit Card',
    bank: 'IDFC First Bank',
    slug: 'idfc-hp-power-plus-credit-card',
    description: 'A fuel credit card offering rewards on fuel purchases at HP outlets with additional benefits.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/idfc-hp-power-plus.jpg',
    applyLink: '#',
    features: [
      '3X rewards on fuel at HP',
      '1X rewards on other spends',
      'No fuel surcharge',
      'Welcome bonus',
      'Fuel price protection'
    ],
    pros: [
      'Good fuel rewards',
      'No fuel surcharge',
      'Fuel price protection',
      'Welcome bonus'
    ],
    cons: [
      'Limited to HP outlets',
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '500 reward points',
      milestoneRewards: '250 points on ₹8,000 monthly fuel spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'hp', 'rewards'],
    rating: 3.7,
    reviewCount: 89,
    lastUpdated: '2024-01-02'
  },

  // Business Cards
  {
    id: 'hdfc-biz',
    name: 'HDFC Biz Credit Cards',
    bank: 'HDFC Bank',
    slug: 'hdfc-biz-credit-cards',
    description: 'A business credit card offering rewards on business expenses with comprehensive business benefits.',
    cardType: 'Business',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Business Expenses',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 2000,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/hdfc-biz.jpg',
    applyLink: '#',
    features: [
      '2X rewards on business expenses',
      '1X rewards on other spends',
      'Airport lounge access',
      'Business expense tracking',
      'Welcome bonus'
    ],
    pros: [
      'Business expense rewards',
      'Airport lounge access',
      'Expense tracking',
      'Good welcome bonus'
    ],
    cons: [
      'Annual fee',
      'Limited UPI rewards',
      'Business focus only'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Self-employed', 'Business owner']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '10,000 reward points',
      milestoneRewards: '5,000 points on ₹1 lakh annual business spend',
      airportLounge: '4 complimentary visits per year',
      concierge: false,
      insurance: ['Business travel insurance', 'Personal accident cover']
    },
    category: ['Business'],
    tags: ['business', 'expenses', 'lounge-access'],
    rating: 4.1,
    reviewCount: 56,
    lastUpdated: '2024-01-01'
  },

  // 0% Forex Cards
  {
    id: 'scapia',
    name: 'Scapia Credit Card',
    bank: 'Federal Bank',
    slug: 'scapia-credit-card',
    description: 'A forex credit card with 0% forex markup, airport lounge access, and travel-focused rewards.',
    cardType: 'Forex',
    rewardType: 'Reward Points',
    bestSpendCategory: 'International Travel',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 0,
    annualFeeWaiverSpend: 0,
    imageUrl: '/cards/scapia.svg',
    applyLink: '#',
    features: [
      '0% forex markup',
      '2X rewards on international spends',
      'Airport lounge access',
      'No annual fee',
      'Travel insurance'
    ],
    pros: [
      'No forex markup',
      'No annual fee',
      'Airport lounge access',
      'Travel insurance'
    ],
    cons: [
      'Limited domestic rewards',
      'No UPI rewards',
      'Limited merchant offers'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 2,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '10,000 reward points',
      milestoneRewards: '5,000 points on ₹25,000 international spend',
      airportLounge: '4 complimentary visits per year',
      concierge: false,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['0% Forex', 'Travel'],
    tags: ['forex', 'travel', 'no-fee', 'lounge-access'],
    rating: 4.4,
    reviewCount: 123,
    lastUpdated: '2024-01-11'
  },

  // Additional HDFC Bank Cards
  {
    id: 'hdfc-millennia',
    name: 'HDFC Bank Millennia Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-bank-millennia-credit-card',
    description: 'A premium credit card offering comprehensive rewards on all spends with exclusive lifestyle benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 1000,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/hdfc-millennia.jpg',
    applyLink: '#',
    features: [
      '3X rewards on all spends',
      'Airport lounge access',
      'Welcome bonus',
      'Lifestyle benefits',
      'Concierge services'
    ],
    pros: [
      'High rewards on all spends',
      'Airport lounge access',
      'Lifestyle benefits',
      'Concierge services'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 3,
      dining: 3,
      travel: 3,
      online: 3,
      other: 3
    },
    benefits: {
      welcomeBonus: '15,000 reward points',
      milestoneRewards: '10,000 points on ₹1 lakh annual spend',
      airportLounge: '4 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Lifetime Free'],
    tags: ['rewards', 'lifestyle', 'lounge-access'],
    rating: 4.3,
    reviewCount: 234,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-regalia-gold',
    name: 'HDFC Bank Regalia Gold Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-bank-regalia-gold-credit-card',
    description: 'A premium credit card offering exclusive dining and travel benefits with comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Dining & Travel',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 2500,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/hdfc-regalia-gold.jpg',
    applyLink: '#',
    features: [
      '4X rewards on dining & travel',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High rewards on dining & travel',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'High annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 1200000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 4,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '25,000 reward points',
      milestoneRewards: '15,000 points on ₹1.5 lakh annual spend',
      airportLounge: 'Unlimited domestic visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'dining', 'travel', 'premium'],
    rating: 4.5,
    reviewCount: 89,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-indianoil',
    name: 'IndianOil HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    slug: 'indianoil-hdfc-bank-credit-card',
    description: 'A co-branded fuel credit card offering rewards on fuel purchases at IndianOil outlets.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/hdfc-indianoil.jpg',
    applyLink: '#',
    features: [
      '3X rewards on fuel at IndianOil',
      '1X rewards on other spends',
      'No fuel surcharge',
      'Welcome bonus',
      'Fuel price protection'
    ],
    pros: [
      'High fuel rewards',
      'No fuel surcharge',
      'Fuel price protection',
      'Welcome bonus'
    ],
    cons: [
      'Limited to IndianOil outlets',
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '1,000 reward points',
      milestoneRewards: '500 points on ₹10,000 monthly fuel spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'indianoil', 'rewards'],
    rating: 3.8,
    reviewCount: 156,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-moneyback',
    name: 'HDFC MoneyBack Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-moneyback-credit-card',
    description: 'A cashback credit card offering rewards on all spends with easy redemption.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/hdfc-moneyback.jpg',
    applyLink: '#',
    features: [
      '2% cashback on all spends',
      'Easy redemption',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Simple cashback structure',
      'Easy redemption',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['cashback', 'simple', 'wide-acceptance'],
    rating: 4.0,
    reviewCount: 189,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'tata-neu-infinity-hdfc',
    name: 'Tata Neu Infinity HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    slug: 'tata-neu-infinity-hdfc-bank-credit-card',
    description: 'A premium co-branded credit card offering exclusive rewards on Tata brands and comprehensive benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Tata Brands',
    rewardRate: 6,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 1500,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/tata-neu-infinity-hdfc.jpg',
    applyLink: '#',
    features: [
      '6X rewards on Tata brands',
      '2X rewards on other spends',
      'Airport lounge access',
      'Welcome bonus',
      'Exclusive Tata offers'
    ],
    pros: [
      'High rewards on Tata brands',
      'Airport lounge access',
      'Exclusive offers',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'Limited rewards on non-Tata brands',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 6,
      other: 2
    },
    benefits: {
      welcomeBonus: '₹2,000 NeuCoins on first transaction',
      milestoneRewards: '₹1,000 NeuCoins on ₹50,000 monthly spend',
      airportLounge: '4 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['tata', 'rewards', 'premium', 'lounge-access'],
    rating: 4.4,
    reviewCount: 67,
    lastUpdated: '2024-01-15'
  },

  // Additional SBI Cards
  {
    id: 'sbi-simplyclick',
    name: 'SBI SimplyCLICK Credit Card',
    bank: 'State Bank of India',
    slug: 'sbi-simplyclick-credit-card',
    description: 'A credit card designed for online shopping with enhanced rewards on e-commerce transactions.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Online Shopping',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 999,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/sbi-simplyclick.jpg',
    applyLink: '#',
    features: [
      '5X rewards on online shopping',
      '2X rewards on dining & movies',
      '1X rewards on other spends',
      'Welcome bonus',
      'No fuel surcharge'
    ],
    pros: [
      'High rewards on online shopping',
      'Good dining rewards',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 2,
      travel: 1,
      online: 5,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['online-shopping', 'dining', 'rewards'],
    rating: 4.2,
    reviewCount: 345,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'sbi-card-elite',
    name: 'SBI Card ELITE',
    bank: 'State Bank of India',
    slug: 'sbi-card-elite',
    description: 'A premium credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 5000,
    annualFeeWaiverSpend: 200000,
    imageUrl: '/cards/sbi-card-elite.jpg',
    applyLink: '#',
    features: [
      '4X rewards on lifestyle spends',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'High annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 1500000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 4,
      online: 4,
      other: 2
    },
    benefits: {
      welcomeBonus: '30,000 reward points',
      milestoneRewards: '20,000 points on ₹2 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'lifestyle', 'premium', 'lounge-access'],
    rating: 4.6,
    reviewCount: 78,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'sbi-card-prime',
    name: 'SBI Card PRIME',
    bank: 'State Bank of India',
    slug: 'sbi-card-prime',
    description: 'A premium credit card offering comprehensive rewards and exclusive benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 3000,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/sbi-card-prime.jpg',
    applyLink: '#',
    features: [
      '3X rewards on all spends',
      'Airport lounge access',
      'Welcome bonus',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High rewards on all spends',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 3,
      dining: 3,
      travel: 3,
      online: 3,
      other: 3
    },
    benefits: {
      welcomeBonus: '20,000 reward points',
      milestoneRewards: '15,000 points on ₹1.5 lakh annual spend',
      airportLounge: '8 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Travel'],
    tags: ['rewards', 'premium', 'lounge-access'],
    rating: 4.4,
    reviewCount: 123,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'sbi-bpcl-credit-card',
    name: 'SBI BPCL Credit Card',
    bank: 'State Bank of India',
    slug: 'sbi-bpcl-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on BPCL fuel purchases and UPI transactions.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/sbi-bpcl-credit-card.jpg',
    applyLink: '#',
    features: [
      '3X rewards on BPCL fuel purchases',
      '1X rewards on other spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'High rewards on fuel purchases',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance',
      'Easy redemption'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'bpcl', 'co-branded', 'rewards', 'rupay', 'upi'],
    rating: 4.0,
    reviewCount: 189,
    lastUpdated: '2024-01-15'
  },

  // Additional ICICI Bank Cards
  {
    id: 'icici-coral',
    name: 'ICICI Bank Coral Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-bank-coral-credit-card',
    description: 'A credit card offering comprehensive rewards on all spends with lifestyle benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/icici-coral.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'Welcome bonus',
      'Lifestyle benefits',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Good rewards on all spends',
      'Lifestyle benefits',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '5,000 reward points',
      milestoneRewards: '2,500 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['rewards', 'lifestyle', 'wide-acceptance'],
    rating: 4.0,
    reviewCount: 456,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'icici-rubyx',
    name: 'ICICI Bank Rubyx Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-bank-rubyx-credit-card',
    description: 'A premium credit card offering exclusive dining and entertainment benefits.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Dining & Entertainment',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 2000,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/icici-rubyx.jpg',
    applyLink: '#',
    features: [
      '4X rewards on dining & entertainment',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High rewards on dining & entertainment',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '15,000 reward points',
      milestoneRewards: '10,000 points on ₹1 lakh annual spend',
      airportLounge: '4 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Luxury'],
    tags: ['luxury', 'dining', 'entertainment', 'lounge-access'],
    rating: 4.3,
    reviewCount: 234,
    lastUpdated: '2024-01-15'
  },

  // Additional ICICI Bank Cards (continued)
  {
    id: 'amazon-pay-icici',
    name: 'Amazon Pay ICICI Credit Card',
    bank: 'ICICI Bank',
    slug: 'amazon-pay-icici-credit-card',
    description: 'A co-branded credit card offering exclusive rewards on Amazon purchases and other spends.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'Amazon Shopping',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 0,
    annualFeeWaiverSpend: 0,
    imageUrl: '/cards/amazon-pay-icici.jpg',
    applyLink: '#',
    features: [
      '5% cashback on Amazon purchases',
      '2% cashback on other spends',
      'No annual fee',
      'Welcome bonus',
      'Amazon Prime benefits'
    ],
    pros: [
      'High cashback on Amazon',
      'No annual fee',
      'Amazon Prime benefits',
      'Good welcome bonus'
    ],
    cons: [
      'Limited to Amazon rewards',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 5,
      other: 2
    },
    benefits: {
      welcomeBonus: '₹1,000 Amazon voucher on first transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['amazon', 'cashback', 'no-fee', 'online-shopping'],
    rating: 4.5,
    reviewCount: 567,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'icici-emeralde-private-metal',
    name: 'ICICI Emeralde Private Metal Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-emeralde-private-metal-credit-card',
    description: 'A premium metal credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 6,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 12000,
    annualFeeWaiverSpend: 300000,
    imageUrl: '/cards/icici-emeralde-private-metal.jpg',
    applyLink: '#',
    features: [
      '6X rewards on lifestyle spends',
      '3X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Very high annual fee',
      'Very high income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 3000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 3,
      dining: 6,
      travel: 6,
      online: 6,
      other: 3
    },
    benefits: {
      welcomeBonus: '50,000 reward points',
      milestoneRewards: '25,000 points on ₹3 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'metal-card', 'premium', 'lounge-access'],
    rating: 4.7,
    reviewCount: 45,
    lastUpdated: '2024-01-15'
  },

  // Axis Bank Cards
  {
    id: 'flipkart-axis-bank',
    name: 'Flipkart Axis Bank Credit Card',
    bank: 'Axis Bank',
    slug: 'flipkart-axis-bank-credit-card',
    description: 'A co-branded credit card offering exclusive rewards on Flipkart purchases and other spends.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'Flipkart Shopping',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/flipkart-axis-bank.jpg',
    applyLink: '#',
    features: [
      '5% cashback on Flipkart purchases',
      '1% cashback on other spends',
      'Welcome bonus',
      'No fuel surcharge',
      'Flipkart Plus benefits'
    ],
    pros: [
      'High cashback on Flipkart',
      'Flipkart Plus benefits',
      'No fuel surcharge',
      'Good welcome bonus'
    ],
    cons: [
      'Annual fee',
      'Limited to Flipkart rewards',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 5,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹1,000 Flipkart voucher on first transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['flipkart', 'cashback', 'online-shopping'],
    rating: 4.3,
    reviewCount: 234,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'axis-ace',
    name: 'Axis Bank ACE Credit Card',
    bank: 'Axis Bank',
    slug: 'axis-bank-ace-credit-card',
    description: 'A credit card offering comprehensive rewards on all spends with UPI benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/axis-ace.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'UPI transactions earn rewards',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'UPI rewards',
      'Good rewards on all spends',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access',
      'Limited offline rewards'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '5,000 reward points',
      milestoneRewards: '2,500 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['UPI Credit Cards'],
    tags: ['upi', 'rewards', 'wide-acceptance'],
    rating: 4.1,
    reviewCount: 189,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'axis-magnus-burgundy',
    name: 'Axis Bank Magnus for Burgundy Credit Card',
    bank: 'Axis Bank',
    slug: 'axis-bank-magnus-burgundy-credit-card',
    description: 'A premium credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 10000,
    annualFeeWaiverSpend: 250000,
    imageUrl: '/cards/axis-magnus-burgundy.jpg',
    applyLink: '#',
    features: [
      '5X rewards on lifestyle spends',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'High annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 2000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 5,
      travel: 5,
      online: 5,
      other: 2
    },
    benefits: {
      welcomeBonus: '40,000 reward points',
      milestoneRewards: '20,000 points on ₹2.5 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'lifestyle', 'premium', 'lounge-access'],
    rating: 4.6,
    reviewCount: 67,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'axis-select',
    name: 'Axis Bank SELECT Credit Card',
    bank: 'Axis Bank',
    slug: 'axis-bank-select-credit-card',
    description: 'A premium credit card offering comprehensive rewards and exclusive benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 3000,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/axis-select.jpg',
    applyLink: '#',
    features: [
      '3X rewards on all spends',
      'Airport lounge access',
      'Welcome bonus',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High rewards on all spends',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 3,
      dining: 3,
      travel: 3,
      online: 3,
      other: 3
    },
    benefits: {
      welcomeBonus: '25,000 reward points',
      milestoneRewards: '15,000 points on ₹1.5 lakh annual spend',
      airportLounge: '8 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Travel'],
    tags: ['rewards', 'premium', 'lounge-access'],
    rating: 4.4,
    reviewCount: 123,
    lastUpdated: '2024-01-15'
  },

  // American Express Cards
  {
    id: 'amex-platinum-travel',
    name: 'American Express Platinum Travel Credit Card',
    bank: 'American Express',
    slug: 'american-express-platinum-travel-credit-card',
    description: 'A premium travel credit card offering exclusive travel benefits and comprehensive rewards.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel & Hotels',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 5000,
    annualFeeWaiverSpend: 200000,
    imageUrl: '/cards/amex-platinum-travel.jpg',
    applyLink: '#',
    features: [
      '4X rewards on travel & hotels',
      '2X rewards on other spends',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    pros: [
      'High travel rewards',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    cons: [
      'Annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 1000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 4,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '30,000 reward points',
      milestoneRewards: '15,000 points on ₹2 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'hotels', 'premium', 'lounge-access'],
    rating: 4.5,
    reviewCount: 89,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'amex-membership-rewards',
    name: 'American Express Membership Rewards® Credit Card',
    bank: 'American Express',
    slug: 'american-express-membership-rewards-credit-card',
    description: 'A credit card offering flexible reward points that can be redeemed for various benefits.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 1500,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/amex-membership-rewards.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'Flexible redemption options',
      'Welcome bonus',
      'No fuel surcharge',
      'Global acceptance'
    ],
    pros: [
      'Flexible rewards',
      'Global acceptance',
      'No fuel surcharge',
      'Good welcome bonus'
    ],
    cons: [
      'Annual fee',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '10,000 reward points',
      milestoneRewards: '5,000 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['rewards', 'flexible', 'global-acceptance'],
    rating: 4.2,
    reviewCount: 156,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'amex-platinum',
    name: 'American Express Platinum Card',
    bank: 'American Express',
    slug: 'american-express-platinum-card',
    description: 'A premium credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 5,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 50000,
    annualFeeWaiverSpend: 500000,
    imageUrl: '/cards/amex-platinum.jpg',
    applyLink: '#',
    features: [
      '5X rewards on lifestyle spends',
      '3X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Very high annual fee',
      'Very high income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 5000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 3,
      dining: 5,
      travel: 5,
      online: 5,
      other: 3
    },
    benefits: {
      welcomeBonus: '100,000 reward points',
      milestoneRewards: '50,000 points on ₹5 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover', 'Purchase protection']
    },
    category: ['Luxury'],
    tags: ['luxury', 'lifestyle', 'premium', 'lounge-access'],
    rating: 4.8,
    reviewCount: 23,
    lastUpdated: '2024-01-15'
  },

  // IndusInd Bank Cards
  {
    id: 'indusind-legend',
    name: 'IndusInd Bank Legend Credit Card',
    bank: 'IndusInd Bank',
    slug: 'indusind-bank-legend-credit-card',
    description: 'A premium credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 3000,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/indusind-legend.jpg',
    applyLink: '#',
    features: [
      '4X rewards on lifestyle spends',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 4,
      online: 4,
      other: 2
    },
    benefits: {
      welcomeBonus: '20,000 reward points',
      milestoneRewards: '10,000 points on ₹1.5 lakh annual spend',
      airportLounge: '8 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Luxury'],
    tags: ['luxury', 'lifestyle', 'premium', 'lounge-access'],
    rating: 4.3,
    reviewCount: 78,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'indusind-avios-visa-infinite',
    name: 'IndusInd Bank Avios Visa Infinite Credit Card',
    bank: 'IndusInd Bank',
    slug: 'indusind-bank-avios-visa-infinite-credit-card',
    description: 'A premium credit card offering British Airways Avios points and travel benefits.',
    cardType: 'Travel',
    rewardType: 'Miles',
    bestSpendCategory: 'Travel & Hotels',
    rewardRate: 3,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 5000,
    annualFeeWaiverSpend: 200000,
    imageUrl: '/cards/indusind-avios-visa-infinite.jpg',
    applyLink: '#',
    features: [
      '3X Avios points on travel & hotels',
      '1X points on other spends',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    pros: [
      'British Airways Avios points',
      'Airport lounge access',
      'Travel insurance',
      'Concierge services'
    ],
    cons: [
      'Annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 1200000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 3,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '25,000 Avios points',
      milestoneRewards: '10,000 points on ₹2 lakh annual spend',
      airportLounge: 'Unlimited domestic and international visits',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'avios', 'premium', 'lounge-access'],
    rating: 4.4,
    reviewCount: 45,
    lastUpdated: '2024-01-15'
  },

  // IDFC FIRST Bank Additional Cards
  {
    id: 'idfc-wealth',
    name: 'IDFC FIRST Wealth Credit Card',
    bank: 'IDFC First Bank',
    slug: 'idfc-first-wealth-credit-card',
    description: 'A premium credit card offering exclusive lifestyle benefits and comprehensive rewards.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Lifestyle',
    rewardRate: 4,
    upiRewards: false,
    loungeAccess: true,
    annualFee: 2500,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/idfc-wealth.jpg',
    applyLink: '#',
    features: [
      '4X rewards on lifestyle spends',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services',
      'Premium insurance'
    ],
    pros: [
      'High lifestyle rewards',
      'Airport lounge access',
      'Concierge services',
      'Premium benefits'
    ],
    cons: [
      'Annual fee',
      'High income requirement',
      'No UPI rewards'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 4,
      online: 4,
      other: 2
    },
    benefits: {
      welcomeBonus: '20,000 reward points',
      milestoneRewards: '10,000 points on ₹1.5 lakh annual spend',
      airportLounge: '8 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Luxury'],
    tags: ['luxury', 'lifestyle', 'premium', 'lounge-access'],
    rating: 4.3,
    reviewCount: 67,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'idfc-wow',
    name: 'IDFC FIRST WoW Credit Card',
    bank: 'IDFC First Bank',
    slug: 'idfc-first-wow-credit-card',
    description: 'A secured credit card offering rewards on all spends with easy approval.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: false,
    loungeAccess: false,
    annualFee: 0,
    annualFeeWaiverSpend: 0,
    imageUrl: '/cards/idfc-wow.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'No annual fee',
      'Easy approval',
      'Welcome bonus',
      'Wide acceptance'
    ],
    pros: [
      'No annual fee',
      'Easy approval',
      'Good rewards',
      'Wide acceptance'
    ],
    cons: [
      'Secured card',
      'No UPI rewards',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 200000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Lifetime Free'],
    tags: ['secured', 'no-fee', 'rewards', 'easy-approval'],
    rating: 3.8,
    reviewCount: 234,
    lastUpdated: '2024-01-15'
  },

  // HDFC Bank RuPay Cards
  {
    id: 'tata-neu-infinity-hdfc',
    name: 'Tata Neu Infinity HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    slug: 'tata-neu-infinity-hdfc-bank-credit-card',
    description: 'A premium RuPay credit card offering exclusive rewards on Tata brands and UPI transactions.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Tata Brands',
    rewardRate: 5,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 1500,
    annualFeeWaiverSpend: 150000,
    imageUrl: '/cards/tata-neu-infinity-hdfc.jpg',
    applyLink: '#',
    features: [
      '5X rewards on Tata brands',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Exclusive Tata offers'
    ],
    pros: [
      'High rewards on Tata brands',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Exclusive offers'
    ],
    cons: [
      'Annual fee',
      'Limited rewards on non-Tata brands',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹2,000 NeuCoins on first transaction',
      milestoneRewards: '₹1,000 NeuCoins on ₹50,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['tata', 'rewards', 'rupay', 'upi', 'premium'],
    rating: 4.5,
    reviewCount: 156,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-upi-rupay',
    name: 'HDFC Bank UPI RuPay Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-bank-upi-rupay-credit-card',
    description: 'A RuPay credit card specifically designed for UPI transactions with comprehensive rewards.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'UPI Transactions',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/hdfc-upi-rupay.jpg',
    applyLink: '#',
    features: [
      'UPI-enabled credit card',
      'RuPay network compatibility',
      '2% cashback on UPI transactions',
      '1% cashback on other spends',
      'No fuel surcharge',
      'Welcome bonus'
    ],
    pros: [
      'UPI transaction support',
      'RuPay network compatibility',
      'Good cashback on UPI',
      'No fuel surcharge',
      'Easy to use'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access',
      'Limited offline rewards'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first UPI transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly UPI spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['UPI Credit Cards'],
    tags: ['upi', 'cashback', 'rupay', 'digital-payments'],
    rating: 4.2,
    reviewCount: 89,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'indianoil-hdfc',
    name: 'IndianOil HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    slug: 'indianoil-hdfc-bank-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on IndianOil fuel purchases and UPI transactions.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/indianoil-hdfc.jpg',
    applyLink: '#',
    features: [
      '3X rewards on IndianOil fuel purchases',
      'UPI transaction support',
      'RuPay network compatibility',
      '1X rewards on other spends',
      'No fuel surcharge',
      'Welcome bonus'
    ],
    pros: [
      'High rewards on fuel purchases',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'indianoil', 'co-branded', 'rupay', 'upi'],
    rating: 4.0,
    reviewCount: 145,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-moneyback-plus',
    name: 'HDFC Bank MoneyBack+ Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-bank-moneyback-plus-credit-card',
    description: 'A RuPay credit card offering cashback on all spends with UPI transaction support.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/hdfc-moneyback-plus.jpg',
    applyLink: '#',
    features: [
      '2% cashback on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Good cashback on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['cashback', 'rupay', 'upi', 'wide-acceptance'],
    rating: 4.1,
    reviewCount: 234,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'hdfc-freedom-rupay',
    name: 'HDFC Freedom RuPay Credit Card',
    bank: 'HDFC Bank',
    slug: 'hdfc-freedom-rupay-credit-card',
    description: 'A RuPay credit card offering freedom of rewards on all spends with UPI transaction support.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/hdfc-freedom-rupay.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Good rewards on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '5,000 reward points',
      milestoneRewards: '2,500 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['rewards', 'rupay', 'upi', 'wide-acceptance'],
    rating: 4.0,
    reviewCount: 189,
    lastUpdated: '2024-01-15'
  },

  // SBI Card RuPay Cards
  {
    id: 'irctc-sbi-platinum',
    name: 'IRCTC SBI Platinum Credit Card',
    bank: 'State Bank of India',
    slug: 'irctc-sbi-platinum-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on IRCTC bookings and UPI transactions.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/irctc-sbi-platinum.jpg',
    applyLink: '#',
    features: [
      '3X rewards on IRCTC bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      '1X rewards on other spends',
      'Welcome bonus',
      'No fuel surcharge'
    ],
    pros: [
      'High rewards on IRCTC bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 3,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'irctc', 'co-branded', 'rupay', 'upi'],
    rating: 4.1,
    reviewCount: 167,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'yatra-sbi-rupay',
    name: 'Yatra SBI RuPay Credit Card',
    bank: 'State Bank of India',
    slug: 'yatra-sbi-rupay-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on Yatra bookings and UPI transactions.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/yatra-sbi-rupay.jpg',
    applyLink: '#',
    features: [
      '3X rewards on Yatra bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      '1X rewards on other spends',
      'Welcome bonus',
      'No fuel surcharge'
    ],
    pros: [
      'High rewards on Yatra bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 3,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'yatra', 'co-branded', 'rupay', 'upi'],
    rating: 4.0,
    reviewCount: 134,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'simplysave-sbi',
    name: 'SimplySAVE SBI Card',
    bank: 'State Bank of India',
    slug: 'simplysave-sbi-card',
    description: 'A RuPay credit card offering simple savings on all spends with UPI transaction support.',
    cardType: 'Cashback',
    rewardType: 'Cashback',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/simplysave-sbi.jpg',
    applyLink: '#',
    features: [
      '2% cashback on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Simple cashback structure',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '₹1,000 cashback on first transaction',
      milestoneRewards: '₹500 on ₹25,000 monthly spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['cashback', 'rupay', 'upi', 'wide-acceptance'],
    rating: 4.0,
    reviewCount: 198,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'irctc-sbi-rupay',
    name: 'IRCTC SBI RuPay Credit Card',
    bank: 'State Bank of India',
    slug: 'irctc-sbi-rupay-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on IRCTC bookings and UPI transactions.',
    cardType: 'Travel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Travel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/irctc-sbi-rupay.jpg',
    applyLink: '#',
    features: [
      '3X rewards on IRCTC bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      '1X rewards on other spends',
      'Welcome bonus',
      'No fuel surcharge'
    ],
    pros: [
      'High rewards on IRCTC bookings',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 1,
      groceries: 1,
      dining: 1,
      travel: 3,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Travel'],
    tags: ['travel', 'irctc', 'co-branded', 'rupay', 'upi'],
    rating: 4.1,
    reviewCount: 145,
    lastUpdated: '2024-01-15'
  },

  // ICICI Bank RuPay Cards
  {
    id: 'icici-hpcl-super-saver',
    name: 'ICICI HPCL Super Saver Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-hpcl-super-saver-credit-card',
    description: 'A co-branded RuPay credit card offering exclusive rewards on HPCL fuel purchases and UPI transactions.',
    cardType: 'Fuel',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Fuel',
    rewardRate: 3,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/icici-hpcl-super-saver.jpg',
    applyLink: '#',
    features: [
      '3X rewards on HPCL fuel purchases',
      'UPI transaction support',
      'RuPay network compatibility',
      '1X rewards on other spends',
      'No fuel surcharge',
      'Welcome bonus'
    ],
    pros: [
      'High rewards on fuel purchases',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 3,
      groceries: 1,
      dining: 1,
      travel: 1,
      online: 1,
      other: 1
    },
    benefits: {
      welcomeBonus: '2,000 reward points',
      milestoneRewards: '1,000 points on ₹25,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Fuel'],
    tags: ['fuel', 'hpcl', 'co-branded', 'rupay', 'upi'],
    rating: 4.0,
    reviewCount: 123,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'icici-coral-rupay',
    name: 'ICICI Coral RuPay Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-coral-rupay-credit-card',
    description: 'A RuPay credit card offering comprehensive rewards on all spends with UPI transaction support.',
    cardType: 'Rewards',
    rewardType: 'Reward Points',
    bestSpendCategory: 'All Purchases',
    rewardRate: 2,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: false,
    annualFee: 500,
    annualFeeWaiverSpend: 50000,
    imageUrl: '/cards/icici-coral-rupay.jpg',
    applyLink: '#',
    features: [
      '2X rewards on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'Welcome bonus',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    pros: [
      'Good rewards on all spends',
      'UPI transaction support',
      'RuPay network compatibility',
      'No fuel surcharge',
      'Wide acceptance'
    ],
    cons: [
      'Annual fee',
      'No airport lounge access'
    ],
    eligibility: {
      minIncome: 300000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 2,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '5,000 reward points',
      milestoneRewards: '2,500 points on ₹50,000 annual spend',
      airportLounge: 'Not available',
      concierge: false,
      insurance: ['Personal accident cover']
    },
    category: ['Cashback'],
    tags: ['rewards', 'rupay', 'upi', 'wide-acceptance'],
    rating: 4.1,
    reviewCount: 178,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'icici-rubyx-rupay',
    name: 'ICICI Rubyx RuPay Credit Card',
    bank: 'ICICI Bank',
    slug: 'icici-rubyx-rupay-credit-card',
    description: 'A premium RuPay credit card offering exclusive dining and entertainment benefits with UPI transaction support.',
    cardType: 'Luxury',
    rewardType: 'Reward Points',
    bestSpendCategory: 'Dining & Entertainment',
    rewardRate: 4,
    upiRewards: true,
    rupaySupport: true,
    loungeAccess: true,
    annualFee: 2000,
    annualFeeWaiverSpend: 100000,
    imageUrl: '/cards/icici-rubyx-rupay.jpg',
    applyLink: '#',
    features: [
      '4X rewards on dining & entertainment',
      'UPI transaction support',
      'RuPay network compatibility',
      '2X rewards on other spends',
      'Airport lounge access',
      'Concierge services'
    ],
    pros: [
      'High rewards on dining & entertainment',
      'UPI transaction support',
      'RuPay network compatibility',
      'Airport lounge access',
      'Concierge services'
    ],
    cons: [
      'Annual fee',
      'High income requirement'
    ],
    eligibility: {
      minIncome: 800000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-employed']
    },
    rewards: {
      fuel: 2,
      groceries: 2,
      dining: 4,
      travel: 2,
      online: 2,
      other: 2
    },
    benefits: {
      welcomeBonus: '15,000 reward points',
      milestoneRewards: '10,000 points on ₹1 lakh annual spend',
      airportLounge: '4 complimentary visits per year',
      concierge: true,
      insurance: ['Travel insurance', 'Personal accident cover']
    },
    category: ['Luxury'],
    tags: ['luxury', 'dining', 'entertainment', 'rupay', 'upi', 'lounge-access'],
    rating: 4.3,
    reviewCount: 89,
    lastUpdated: '2024-01-15'
  }
]; 