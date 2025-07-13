# Apply Links Management Guide

## Overview
This website uses a centralized cloud sheet system to manage all credit card apply links. All "Apply Now" buttons throughout the website automatically use these links.

## File Location
- **Main Data File:** `data/apply-links.ts`
- **Credit Card Data:** `data/credit-cards.ts`

## How to Update Apply Links

### Method 1: Update Individual Links
1. Open `data/apply-links.ts`
2. Find the card ID you want to update
3. Replace the URL with the new official bank application URL
4. Save the file

**Example:**
```typescript
// Before
'idfc-millennia': 'https://www.idfcfirstbank.com/credit-cards/millennia-credit-card',

// After
'idfc-millennia': 'https://www.idfcfirstbank.com/credit-cards/new-millennia-credit-card',
```

### Method 2: Update Bank Patterns
For bulk updates, you can modify the `bankApplyPatterns` object:

```typescript
export const bankApplyPatterns = {
  'HDFC Bank': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/',
  'SBI': 'https://www.sbicard.com/en/personal/credit-cards/',
  // ... other banks
};
```

## Card ID Reference

### Lifetime Free Cards
- `indusind-tiger` - IndusInd Tiger CC
- `idfc-millennia` - IDFC Millennia Credit Card

### UPI Credit Cards
- `yes-bank-kiwi` - YES Bank Kiwi Credit Card

### Cashback Cards
- `sbi-cashback` - SBI Cashback Credit Card
- `tata-neu-hdfc` - Tata Neu HDFC Credit Card

### Luxury Cards
- `icici-times-black` - ICICI Times Black Credit Card

### Travel Cards
- `axis-atlas` - Axis Atlas Credit Card
- `hsbc-travelone` - HSBC TravelOne

### Lounge Access Cards
- `hdfc-marriott-bonvoy` - HDFC Marriott Bonvoy Credit Card

### Fuel Cards
- `rbl-xtra-indian-oil` - RBL XTRA - Indian Oil Fuel Card
- `sbi-bpcl-octane` - SBI BPCL Octane Credit Card
- `idfc-hp-power-plus` - IDFC HP Power Plus Credit Card

### Business Cards
- `hdfc-biz` - HDFC Biz Credit Cards

### Forex Cards
- `scapia` - Scapia Credit Card

## Where Apply Buttons Appear

1. **Credit Card Categories** - Each card in category sections
2. **Featured Cards** - Top 6 popular cards
3. **Comparison Table** - Every card in the comparison tool
4. **Individual Card Pages** - Detailed card pages
5. **Search Results** - Cards found through search

## Features

### Automatic Updates
- All Apply Now buttons automatically use the latest links
- No need to update multiple files
- Changes are reflected immediately

### Analytics Tracking
- All apply clicks are logged to console
- Success toasts show which bank is being redirected to
- Links open in new tabs for better user experience

### Error Handling
- If a link doesn't exist, it defaults to '#'
- Helper functions check if links are valid
- Graceful fallbacks for missing links

## Best Practices

1. **Always use official bank URLs** - Never use affiliate links without disclosure
2. **Test links regularly** - Bank URLs can change
3. **Keep backups** - Save old URLs in case you need to revert
4. **Update systematically** - Use the patterns for bulk updates

## Troubleshooting

### Link Not Working?
1. Check if the card ID exists in `apply-links.ts`
2. Verify the URL is correct and accessible
3. Test the link in a new tab
4. Check browser console for errors

### Button Not Appearing?
1. Ensure the ApplyButton component is imported
2. Check that all required props are provided
3. Verify the card data has the correct ID

### Multiple Links for Same Card?
- Use the most specific link (e.g., direct card page)
- Avoid generic bank homepages
- Prefer application-specific URLs

## Support

For questions or issues with apply links:
1. Check this guide first
2. Review the `data/apply-links.ts` file
3. Test the specific link that's not working
4. Update the link and test again 