'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, CreditCard, Calculator, TrendingUp, Check, X } from 'lucide-react';
import { creditCards } from '@/data/credit-cards';
import { getApplyLink } from '@/data/apply-links';
import { CreditCard as CreditCardType } from '@/types/credit-card';
import toast from 'react-hot-toast';
import ApplyButton from './ApplyButton';

export default function ComparisonTool() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [monthlySpend, setMonthlySpend] = useState(50000);
  const [showAllCards, setShowAllCards] = useState(false);

  const availableCards = showAllCards ? creditCards : creditCards.slice(0, 12);
  const selectedCardObjects = creditCards.filter(card => selectedCards.includes(card.id));

  const calculations = useMemo(() => {
    return selectedCardObjects.map(card => {
      const monthlyCashback = (monthlySpend * card.rewardRate) / 100;
      const annualCashback = monthlyCashback * 12;
      const isFeeWaived = monthlySpend * 12 >= card.annualFeeWaiverSpend;
      const netAnnualSavings = annualCashback - (isFeeWaived ? 0 : card.annualFee);
      const effectiveRewardRate = ((netAnnualSavings / (monthlySpend * 12)) * 100);

      return {
        cardId: card.id,
        monthlyCashback,
        annualCashback,
        isFeeWaived,
        netAnnualSavings,
        effectiveRewardRate
      };
    });
  }, [selectedCardObjects, monthlySpend]);

  const handleCardToggle = (cardId: string) => {
    setSelectedCards(prev => {
      if (prev.includes(cardId)) {
        return prev.filter(id => id !== cardId);
      } else if (prev.length < 4) {
        return [...prev, cardId];
      } else {
        toast.error('You can compare up to 4 cards at a time');
        return prev;
      }
    });
  };

  const bestCard = calculations.length > 0 ? 
    calculations.reduce((best, current) => 
      current.netAnnualSavings > best.netAnnualSavings ? current : best
    ) : null;

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
              Credit Card Comparison Tool
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Compare credit cards side by side and calculate your potential savings. 
              Find the best card for your spending habits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Monthly Spend Input */}
      <section className="bg-white py-8 border-b border-secondary-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4 text-center">
              Enter Your Monthly Spending
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex-1 max-w-md">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Monthly Credit Card Spend (₹)
                </label>
                <input
                  type="number"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
                  placeholder="50000"
                  min="1000"
                  max="1000000"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-secondary-600 mb-1">Annual Spend</p>
                <p className="text-2xl font-bold text-primary-600">
                  ₹{(monthlySpend * 12).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Selection */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-secondary-900">
              Select Cards to Compare ({selectedCards.length}/4)
            </h2>
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {showAllCards ? 'Show Less' : 'Show All Cards'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-3 p-2 rounded-lg border-2 cursor-pointer transition-all
                  ${selectedCards.includes(card.id) ? 'border-primary-500 bg-primary-50 shadow-md' : 'border-gray-200 hover:border-primary-300 bg-white'}
                `}
                onClick={() => handleCardToggle(card.id)}
              >
                <div className="relative">
                  <img src={card.imageUrl} alt={card.name} className="w-12 h-8 rounded-md object-cover border border-gray-100" />
                  <input
                    type="checkbox"
                    checked={selectedCards.includes(card.id)}
                    readOnly
                    className="absolute -top-2 -right-2 w-4 h-4 accent-primary-500 bg-white border-2 border-primary-500 rounded-full shadow"
                    tabIndex={-1}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span 
                      className="font-semibold truncate text-secondary-900 text-sm hover:text-primary-600 cursor-pointer transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/card/${card.slug}`;
                      }}
                    >
                      {card.name}
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> {card.rating}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 truncate">{card.bank}</div>
                  <div className="text-xs text-primary-600 font-medium">{card.bestSpendCategory}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Results */}
      {selectedCards.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
                Comparison Results
              </h2>
              {bestCard && (
                <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-success-600" />
                    <span className="font-semibold text-success-800">
                      Best Choice: {creditCards.find(c => c.id === bestCard.cardId)?.name}
                    </span>
                  </div>
                  <p className="text-success-700 text-sm mt-1">
                    Highest net annual savings of ₹{bestCard.netAnnualSavings.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {selectedCardObjects.map((card, index) => {
                  const calculation = calculations.find(calc => calc.cardId === card.id);
                  if (!calculation) return null;

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-card border border-secondary-100 overflow-hidden"
                    >
                      {/* Card Header */}
                      <div className="p-6 border-b border-secondary-100">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-secondary-900 mb-1 flex items-center gap-2">
                              <span 
                                className="hover:text-primary-600 cursor-pointer transition-colors duration-200"
                                onClick={() => window.location.href = `/card/${card.slug}`}
                              >
                                {card.name}
                              </span>
                              <span className="flex items-center gap-1 text-warning-500 font-medium">
                                <Star className="w-4 h-4 text-warning-400 fill-current" />
                                <span className="text-sm">{card.rating}</span>
                              </span>
                            </h3>
                            <p className="text-sm text-secondary-500 mb-2">
                              {card.bank}
                            </p>
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
                          <div className="w-16 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Calculations */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Monthly Cashback:</span>
                            <span className="font-semibold text-success-600">
                              ₹{calculation.monthlyCashback.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Annual Cashback:</span>
                            <span className="font-semibold text-success-600">
                              ₹{calculation.annualCashback.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Annual Fee:</span>
                            <span className="font-semibold">
                              {calculation.isFeeWaived ? 'Waived' : `₹${card.annualFee}`}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Net Annual Savings:</span>
                            <span className="font-semibold text-primary-600">
                              ₹{calculation.netAnnualSavings.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Effective Reward Rate:</span>
                            <span className="font-semibold text-primary-600">
                              {calculation.effectiveRewardRate.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {card.category.slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-secondary-600">
                            Best for: {card.bestSpendCategory}
                          </div>
                          <ApplyButton
                            cardName={card.name}
                            bankName={card.bank}
                            applyLink={getApplyLink(card.id)}
                            size="sm"
                            variant="primary"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {selectedCards.length === 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Calculator className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Select Cards to Compare
              </h3>
              <p className="text-secondary-600 mb-6">
                Choose up to 4 credit cards from the list above to see a detailed comparison 
                with calculations based on your monthly spending.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 