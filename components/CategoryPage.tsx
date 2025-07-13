'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, CreditCard, Filter, SortAsc, SortDesc, Search, Eye } from 'lucide-react';
import { CreditCard as CreditCardType } from '@/types/credit-card';
import { getApplyLink } from '@/data/apply-links';
import toast from 'react-hot-toast';
import CardImage from './CardImage';
import ApplyButton from './ApplyButton';
import { useRouter } from 'next/navigation';

interface CategoryPageProps {
  categoryName: string;
  cards: CreditCardType[];
  categorySlug: string;
}

type SortOption = 'rating' | 'rewardRate' | 'annualFee' | 'name';
type SortOrder = 'asc' | 'desc';

export default function CategoryPage({ categoryName, cards, categorySlug }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedFilters, setSelectedFilters] = useState({
    upiRewards: false,
    loungeAccess: false,
    noAnnualFee: false,
  });

  const filteredAndSortedCards = useMemo(() => {
    let filtered = cards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          card.bank.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilters = (!selectedFilters.upiRewards || card.upiRewards) &&
                           (!selectedFilters.loungeAccess || card.loungeAccess) &&
                           (!selectedFilters.noAnnualFee || card.annualFee === 0);
      
      return matchesSearch && matchesFilters;
    });

    filtered.sort((a, b) => {
      let aValue: any = a[sortBy];
      let bValue: any = b[sortBy];
      
      if (sortBy === 'name') {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [cards, searchQuery, sortBy, sortOrder, selectedFilters]);

  const handleApplyNow = (cardName: string) => {
    toast.success(`Redirecting to apply for ${cardName}...`);
    // Add actual affiliate link redirect here
  };

  const handleViewDetails = (card: CreditCardType) => {
    window.location.href = `/card/${card.slug}`;
  };

  const handleCompareCards = () => {
    toast.success('Opening comparison tool...');
    // Navigate to comparison tool
    window.location.href = '/compare';
  };

  const toggleFilter = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Best {categoryName} in India
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Compare and apply for the best {categoryName.toLowerCase()} with exclusive offers, 
              high rewards, and instant approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCompareCards}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Compare All Cards
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-8 border-b border-secondary-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="rewardRate">Sort by Reward Rate</option>
                <option value="annualFee">Sort by Annual Fee</option>
                <option value="name">Sort by Name</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-3 border border-secondary-200 rounded-lg hover:border-primary-500 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => toggleFilter('upiRewards')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedFilters.upiRewards 
                  ? 'bg-primary-100 border-primary-500 text-primary-700' 
                  : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary-300'
              }`}
            >
              UPI Rewards
            </button>
            <button
              onClick={() => toggleFilter('loungeAccess')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedFilters.loungeAccess 
                  ? 'bg-primary-100 border-primary-500 text-primary-700' 
                  : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary-300'
              }`}
            >
              Lounge Access
            </button>
            <button
              onClick={() => toggleFilter('noAnnualFee')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedFilters.noAnnualFee 
                  ? 'bg-primary-100 border-primary-500 text-primary-700' 
                  : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary-300'
              }`}
            >
              No Annual Fee
            </button>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
              {filteredAndSortedCards.length} Credit Cards Found
            </h2>
            <p className="text-secondary-600">
              Showing {categoryName.toLowerCase()} with the best rewards and benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Animated Top Badge */}
                

                {/* Card Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 mb-1 cursor-pointer"
                        onClick={() => handleViewDetails(card)}
                      >
                        {card.name}
                      </h3>
                      <p className="text-sm text-secondary-500 mb-2 group-hover:text-secondary-700 transition-colors duration-300">
                        {card.bank}
                      </p>
                      {/* Category Tags Row - moved here, below card name and bank */}
                      <div className="mb-2">
                        <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg inline-block">
                          {card.category[0]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(card.rating)
                                  ? 'text-warning-400 fill-current'
                                  : 'text-secondary-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-secondary-500">
                          {card.rating} ({card.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-16 h-10 flex items-center justify-center rounded-lg shadow-md bg-gradient-to-r from-primary-400 to-primary-600 group-hover:scale-105 transition-transform duration-300"
                    >
                      <CardImage cardName={card.name} bankName={card.bank} className="w-full h-auto rounded-md hover:shadow-lg transition-shadow duration-200" />
                    </motion.div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                        <span className="text-secondary-600">Reward:</span>
                        <span className="font-semibold text-success-600">{card.rewardRate}%</span>
                      </div>
                      <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                        <span className="text-secondary-600">Fee:</span>
                        <span className="font-semibold">{card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}</span>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded ${card.upiRewards ? 'bg-purple-50' : 'bg-gray-50'}`}> 
                        <span className="text-secondary-600">UPI:</span>
                        <span className={`font-semibold ${card.upiRewards ? 'text-success-600' : 'text-secondary-400'}`}>{card.upiRewards ? 'Yes' : 'No'}</span>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded ${card.loungeAccess ? 'bg-orange-50' : 'bg-gray-50'}`}> 
                        <span className="text-secondary-600">Lounge:</span>
                        <span className={`font-semibold ${card.loungeAccess ? 'text-success-600' : 'text-secondary-400'}`}>{card.loungeAccess ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {/* Feature Badges */}
                    {card.upiRewards && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full hover:bg-purple-200 transition-colors duration-200">
                        💳 UPI Rewards
                      </span>
                    )}
                    {card.loungeAccess && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full hover:bg-orange-200 transition-colors duration-200">
                        ✈️ Lounge Access
                      </span>
                    )}
                    {card.annualFee === 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full hover:bg-green-200 transition-colors duration-200">
                        🎉 Lifetime Free
                      </span>
                    )}
                    {/* Removed category tags from here, now above in header */}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-secondary-600">
                      Best: {card.bestSpendCategory}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewDetails(card)}
                        className="bg-gradient-to-r from-secondary-200 to-secondary-100 hover:from-primary-100 hover:to-primary-50 text-primary-700 font-semibold text-xs px-3 py-1 rounded-lg flex items-center gap-1 shadow transition-all duration-200 transform hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                      <ApplyButton
                        cardName={card.name}
                        bankName={card.bank}
                        applyLink={getApplyLink(card.id)}
                        size="sm"
                        variant="primary"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredAndSortedCards.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 text-lg">
                No credit cards found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilters({ upiRewards: false, loungeAccess: false, noAnnualFee: false });
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 