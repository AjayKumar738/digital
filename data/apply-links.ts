// Cloud Sheet for Credit Card Apply Links
// This file can be easily updated to change apply links
// Format: Card ID -> Official Bank Application URL

export const applyLinks: Record<string, string> = {
  // Lifetime Free Cards
  'indusind-tiger': 'https://www.indusind.com/india/english/personal/cards/credit-cards/tiger-credit-card.html',
  'idfc-millennia': 'https://www.idfcfirstbank.com/credit-cards/millennia-credit-card',
  
  // UPI Credit Cards
  'yes-bank-kiwi': 'https://www.yesbank.in/credit-cards/kiwi-credit-card',
  
  // Cashback Cards
  'sbi-cashback': 'https://www.sbicard.com/en/personal/credit-cards/rewards/sbi-cashback-credit-card.page',
  'tata-neu-hdfc': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-hdfc-bank-credit-card',
  
  // Luxury Cards
  'icici-times-black': 'https://www.icicibank.com/credit-card/times-black-credit-card',
  
  // Travel Cards
  'axis-atlas': 'https://www.axisbank.com/retail/cards/credit-card/atlas-credit-card',
  'hsbc-travelone': 'https://www.hsbc.co.in/credit-cards/products/travelone-credit-card/',
  
  // Lounge Access Cards
  'hdfc-marriott-bonvoy': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/marriott-bonvoy-credit-card',
  
  // Fuel Cards
  'rbl-xtra-indian-oil': 'https://www.rblbank.com/credit-cards/xtra-indian-oil-fuel-card',
  'sbi-bpcl-octane': 'https://www.sbicard.com/en/personal/credit-cards/fuel/sbi-bpcl-octane-credit-card.page',
  'idfc-hp-power-plus': 'https://www.idfcfirstbank.com/credit-cards/hp-power-plus-credit-card',
  
  // Business Cards
  'hdfc-biz': 'https://www.hdfcbank.com/business/cards/credit-cards',
  
  // Forex Cards
  'scapia': 'https://scapia.com/credit-card',
  
  // Additional Cards
  'indusind-tiger-cc': 'https://www.indusind.com/india/english/personal/cards/credit-cards/tiger-credit-card.html',
  'idfc-millennia-credit-card': 'https://www.idfcfirstbank.com/credit-cards/millennia-credit-card',
  'yes-bank-kiwi-credit-card': 'https://www.yesbank.in/credit-cards/kiwi-credit-card',
  'sbi-cashback-credit-card': 'https://www.sbicard.com/en/personal/credit-cards/rewards/sbi-cashback-credit-card.page',
  'tata-neu-hdfc-credit-card': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-hdfc-bank-credit-card',
  'icici-times-black-credit-card': 'https://www.icicibank.com/credit-card/times-black-credit-card',
  'axis-atlas-credit-card': 'https://www.axisbank.com/retail/cards/credit-card/atlas-credit-card',
  'hsbc-travelone-credit-card': 'https://www.hsbc.co.in/credit-cards/products/travelone-credit-card/',
  'hdfc-marriott-bonvoy-credit-card': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/marriott-bonvoy-credit-card',
  'rbl-xtra-indian-oil-fuel-card': 'https://www.rblbank.com/credit-cards/xtra-indian-oil-fuel-card',
  'sbi-bpcl-octane-credit-card': 'https://www.sbicard.com/en/personal/credit-cards/fuel/sbi-bpcl-octane-credit-card.page',
  'idfc-hp-power-plus-credit-card': 'https://www.idfcfirstbank.com/credit-cards/hp-power-plus-credit-card',
  'hdfc-biz-credit-cards': 'https://www.hdfcbank.com/business/cards/credit-cards',
  'scapia-credit-card': 'https://scapia.com/credit-card'
};

// Helper function to get apply link for a card
export function getApplyLink(cardId: string): string {
  return applyLinks[cardId] || '#';
}

// Helper function to check if apply link exists
export function hasApplyLink(cardId: string): boolean {
  return !!(applyLinks[cardId] && applyLinks[cardId] !== '#');
}

// Bank-specific apply link patterns (for easy updates)
export const bankApplyPatterns = {
  'HDFC Bank': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/',
  'SBI': 'https://www.sbicard.com/en/personal/credit-cards/',
  'ICICI Bank': 'https://www.icicibank.com/credit-card/',
  'Axis Bank': 'https://www.axisbank.com/retail/cards/credit-card/',
  'IDFC First Bank': 'https://www.idfcfirstbank.com/credit-cards/',
  'YES Bank': 'https://www.yesbank.in/credit-cards/',
  'IndusInd Bank': 'https://www.indusind.com/india/english/personal/cards/credit-cards/',
  'RBL Bank': 'https://www.rblbank.com/credit-cards/',
  'HSBC Bank': 'https://www.hsbc.co.in/credit-cards/',
  'Federal Bank': 'https://scapia.com/credit-card'
};

// Instructions for updating links:
/*
TO UPDATE APPLY LINKS:

1. Find the card ID in the applyLinks object above
2. Replace the URL with the new official bank application URL
3. Save the file
4. The changes will be reflected immediately across the website

EXAMPLE:
'idfc-millennia': 'https://www.idfcfirstbank.com/credit-cards/millennia-credit-card',

CHANGE TO:
'idfc-millennia': 'https://www.idfcfirstbank.com/credit-cards/new-millennia-credit-card',

All Apply Now buttons will automatically use the new URL.
*/ 