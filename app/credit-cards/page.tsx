'use client';

import { creditCards } from '@/data/credit-cards';
import { getApplyLink } from '@/data/apply-links';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Home, Star, TrendingUp, Award, Zap, Search, Filter } from 'lucide-react';
import CardImage from '@/components/CardImage';
import ApplyButton from '@/components/ApplyButton';
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';

export default function CreditCardsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    upiRewards: false,
    loungeAccess: false,
    noAnnualFee: false,
  });
  
  // Initialize search query from URL parameter
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);
  
  const handleApplyNow = (cardName: string) => {
    // Add actual affiliate link redirect here
  };

  // Enhanced filter cards based on search query and filters
  const filteredCards = useMemo(() => {
    return creditCards.filter(card => {
      const lowerQuery = searchQuery.toLowerCase();
      
      // Enhanced search matching
      const matchesSearch = !searchQuery || 
        card.name.toLowerCase().includes(lowerQuery) ||
        card.bank.toLowerCase().includes(lowerQuery) ||
        card.cardType.toLowerCase().includes(lowerQuery) ||
        card.bestSpendCategory.toLowerCase().includes(lowerQuery) ||
        card.category.some(cat => cat.toLowerCase().includes(lowerQuery)) ||
        card.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        card.description.toLowerCase().includes(lowerQuery);
      
      // Enhanced filter matching
      const matchesFilters = (!selectedFilters.upiRewards || card.upiRewards) &&
                           (!selectedFilters.loungeAccess || card.loungeAccess) &&
                           (!selectedFilters.noAnnualFee || card.annualFee === 0);
      
      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, selectedFilters]);

  const handleFilterToggle = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    // Update URL with search parameter
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.push(`/credit-cards?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">


        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Best Cashback & Rewards Credit Cards
            </h1>
            <TrendingUp className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Compare the top cashback and rewards credit cards in India. Find the best card for your spending habits and maximize your savings on every purchase.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="text-secondary-700 font-medium mb-2 block">Search Credit Cards</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by card name, bank, type, or best for..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="lg:col-span-2">
              <label className="text-secondary-700 font-medium mb-2 block">Quick Filters</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleFilterToggle('upiRewards')}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilters.upiRewards
                      ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                      : 'bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  UPI Rewards
                </button>
                <button
                  onClick={() => handleFilterToggle('loungeAccess')}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilters.loungeAccess
                      ? 'bg-orange-100 text-orange-700 border-2 border-orange-300'
                      : 'bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  ✈️ Lounge Access
                </button>
                <button
                  onClick={() => handleFilterToggle('noAnnualFee')}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilters.noAnnualFee
                      ? 'bg-green-100 text-green-700 border-2 border-green-300'
                      : 'bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  🎉 Lifetime Free
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-secondary-600">
              Showing <span className="font-semibold text-primary-600">{filteredCards.length}</span> of {creditCards.length} credit cards
              {searchQuery && (
                <span className="ml-2 text-sm text-gray-500">
                  for "{searchQuery}"
                </span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Enhanced Card Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
              >
              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {card.rating.toFixed(1)} ⭐
                </div>
              </div>

              {/* Card Image Section */}
              <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardImage
                  cardName={card.name}
                  bankName={card.bank}
                  cardType={card.cardType}
                  className="w-full h-full relative z-10"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-sm text-secondary-500 font-medium">{card.bank}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(card.rating)
                            ? 'text-warning-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                    <span className="text-sm text-secondary-500">({card.reviewCount} reviews)</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary-600">
                        Best for: {card.bestSpendCategory}
                  </span>
                </div>
                    <div className="flex flex-wrap gap-1">
                      {card.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rewards Summary */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-secondary-700">Reward Rate</span>
                      <span className="text-lg font-bold text-primary-600">
                        {card.rewardRate}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-secondary-500">Annual Fee</span>
                      <span className={`text-sm font-medium ${
                        card.annualFee === 0 ? 'text-green-600' : 'text-secondary-600'
                      }`}>
                      {card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}
                      </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/card/${card.slug}`)}
                      className="flex-1 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    View Details
                  </button>
                    <ApplyButton
                      cardName={card.name}
                      bankName={card.bank}
                      applyLink={getApplyLink(card.id)}
                      size="md"
                      variant="primary"
                      className="flex-1"
                    />
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No cards found
              </h3>
              <p className="text-gray-500 mb-4">
                {searchQuery 
                  ? `No credit cards match your search for "${searchQuery}". Try different keywords or browse all cards.`
                  : 'No credit cards match your current filters. Try adjusting your search criteria.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilters({
                    upiRewards: false,
                    loungeAccess: false,
                    noAnnualFee: false,
                  });
                }}
                className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all duration-200"
              >
                Clear Search
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 