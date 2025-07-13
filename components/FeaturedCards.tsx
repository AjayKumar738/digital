'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight, TrendingUp, Award, Zap } from 'lucide-react';
import { creditCards } from '@/data/credit-cards';
import { getApplyLink } from '@/data/apply-links';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import CardImage from './CardImage';
import ApplyButton from './ApplyButton';

export default function FeaturedCards() {
  const featuredCards = creditCards
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const router = useRouter();

  const handleApplyNow = (cardName: string) => {
    toast.success(`Redirecting to apply for ${cardName}...`);
    // Add actual affiliate link redirect here
  };

  const handleViewAllCards = () => {
    router.push('/credit-cards');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Most Popular Credit Cards
            </h2>
            <TrendingUp className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Discover India's top-rated credit cards with the highest rewards, lowest fees, and best benefits
          </p>
        </motion.div>

        {/* Compact Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
            >
              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  #{index + 1} Popular
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
                  <h3 
                    className="text-lg font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer"
                    onClick={() => router.push(`/card/${card.slug}`)}
                  >
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
                  <span className="text-sm font-semibold text-secondary-700">
                    {card.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-secondary-500">
                    ({card.reviewCount} reviews)
                  </span>
                </div>
                {/* Best For Block */}
                <div className="mb-3">
                  <div className="bg-purple-50 rounded-xl py-3 px-2 text-center">
                    <div className="text-xs font-bold text-purple-700 mb-1">Best For</div>
                    <div className="text-base font-bold text-purple-800 leading-tight">{card.bestSpendCategory}</div>
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-xs font-semibold text-blue-700 mb-1">Reward Rate</div>
                    <div className="text-lg font-bold text-blue-800">{card.rewardRate}%</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-xs font-semibold text-green-700 mb-1">Annual Fee</div>
                    <div className="text-lg font-bold text-green-800">
                      {card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}
                    </div>
                  </div>
                </div>

                {/* Quick Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.upiRewards && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      <Zap className="w-3 h-3" />
                      UPI Rewards
                    </span>
                  )}
                  {card.loungeAccess && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      ✈️ Lounge Access
                    </span>
                  )}
                  {card.annualFee === 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      🎉 Lifetime Free
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/card/${card.slug}`)}
                    className="flex-1 bg-white border-2 border-primary-500 text-primary-600 font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-primary-50 hover:border-primary-600"
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={handleViewAllCards}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Credit Cards
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 