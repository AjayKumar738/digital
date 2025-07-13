'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  CreditCard, 
  Check, 
  X, 
  TrendingUp, 
  Calculator,
  Shield,
  Gift,
  Plane,
  ShoppingBag,
  Users,
  Calendar,
  DollarSign
} from 'lucide-react';
import { CreditCard as CreditCardType } from '@/types/credit-card';
import { getApplyLink } from '@/data/apply-links';
import toast from 'react-hot-toast';
import CardImage from './CardImage';
import ApplyButton from './ApplyButton';

interface CardReviewProps {
  card: CreditCardType;
}

export default function CardReview({ card }: CardReviewProps) {
  const [monthlySpend, setMonthlySpend] = useState(50000);
  const [showCalculator, setShowCalculator] = useState(false);

  const calculations = {
    monthlyCashback: (monthlySpend * card.rewardRate) / 100,
    annualCashback: ((monthlySpend * card.rewardRate) / 100) * 12,
    isFeeWaived: monthlySpend * 12 >= card.annualFeeWaiverSpend,
    netAnnualSavings: (((monthlySpend * card.rewardRate) / 100) * 12) - (monthlySpend * 12 >= card.annualFeeWaiverSpend ? 0 : card.annualFee),
    effectiveRewardRate: (((((monthlySpend * card.rewardRate) / 100) * 12) - (monthlySpend * 12 >= card.annualFeeWaiverSpend ? 0 : card.annualFee)) / (monthlySpend * 12)) * 100
  };

  const handleApplyNow = () => {
    toast.success(`Redirecting to apply for ${card.name}...`);
    // Add actual affiliate link redirect here
  };

  const handleCompare = () => {
    // Add current card to comparison selection
    const currentSelection = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    if (!currentSelection.includes(card.id)) {
      currentSelection.push(card.id);
      localStorage.setItem('selectedCards', JSON.stringify(currentSelection));
    }
    
    toast.success('Added to comparison tool...');
    // Navigate to comparison tool with this card pre-selected
    window.location.href = '/compare';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8 md:py-10">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-medium rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
                    {card.bank}
                  </span>
                  {card.category.map((cat) => (
                    <span key={cat} className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
                      {cat}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  {card.name}
                </h1>
                <p className="text-base text-primary-100 mb-4">
                  {card.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
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
                    <span className="text-primary-100 text-xs">
                      {card.rating} ({card.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-primary-100 text-xs">
                      {card.rewardRate}% reward rate
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <ApplyButton
                    cardName={card.name}
                    bankName={card.bank}
                    applyLink={getApplyLink(card.id)}
                    size="lg"
                    variant="primary"
                    className="flex-1"
                  />
                  <button 
                    onClick={handleCompare}
                    className="bg-gradient-to-r from-transparent to-white/20 hover:from-white/10 hover:to-white/30 text-white font-semibold text-base px-4 py-2 rounded-lg flex items-center gap-2 border border-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Compare with Other Cards
                  </button>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-56 h-32 bg-white rounded-2xl shadow-2xl p-2 transform hover:scale-105 transition-transform duration-300"
              >
                <CardImage
                  cardName={card.name}
                  bankName={card.bank}
                  cardType={card.cardType}
                  className="w-full h-full rounded-xl hover:shadow-lg transition-shadow duration-200"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1 text-sm">Reward Rate</h3>
                <p className="text-lg font-bold text-green-600">{card.rewardRate}%</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1 text-sm">Annual Fee</h3>
                <p className="text-lg font-bold text-blue-600">
                  {card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}
                </p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1 text-sm">Lounge Access</h3>
                <p className="text-lg font-bold text-orange-600">
                  {card.loungeAccess ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1 text-sm">UPI Rewards</h3>
                <p className="text-lg font-bold text-purple-600">
                  {card.upiRewards ? 'Yes' : 'No'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Calculator Section */}
      <section className="py-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-secondary-900">
                  Calculate Your Savings
                </h2>
                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="flex items-center gap-1 text-primary-600 hover:text-primary-700 bg-gradient-to-r from-primary-50 to-purple-50 px-2 py-1 rounded-lg text-xs transition-all duration-200 hover:shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  {showCalculator ? 'Hide Calculator' : 'Show Calculator'}
                </button>
              </div>

              {showCalculator && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-secondary-700 mb-1">
                        Monthly Credit Card Spend (₹)
                      </label>
                      <input
                        type="number"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none shadow-sm hover:shadow-md transition-shadow duration-200 text-sm"
                        placeholder="50000"
                        min="1000"
                        max="1000000"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-secondary-600">Annual Spend</p>
                      <p className="text-lg font-bold text-primary-600">
                        ₹{(monthlySpend * 12).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="p-2 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                      <p className="text-xs text-secondary-600">Monthly Cashback</p>
                      <p className="text-base font-bold text-green-600">
                        ₹{calculations.monthlyCashback.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                      <p className="text-xs text-secondary-600">Annual Cashback</p>
                      <p className="text-base font-bold text-green-600">
                        ₹{calculations.annualCashback.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                      <p className="text-xs text-secondary-600">Annual Fee</p>
                      <p className="text-base font-bold text-orange-600">
                        {calculations.isFeeWaived ? 'Waived' : `₹${card.annualFee}`}
                      </p>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                      <p className="text-xs text-secondary-600">Net Annual Savings</p>
                      <p className="text-base font-bold text-primary-600">
                        ₹{calculations.netAnnualSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Pros and Cons */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Pros
                </h2>
                <div className="space-y-2">
                  {card.pros.map((pro, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-secondary-700 text-sm">{pro}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  Cons
                </h2>
                <div className="space-y-2">
                  {card.cons.map((con, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-secondary-700 text-sm">{con}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Eligibility */}
      <section className="py-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg font-semibold text-secondary-900 mb-3 text-center">
                Eligibility Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white bg-gradient-to-br from-white to-blue-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Age</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">
                    {card.eligibility.minAge} - {card.eligibility.maxAge} years
                  </p>
                </div>
                <div className="bg-white bg-gradient-to-br from-white to-green-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Income</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">
                    Minimum ₹{card.eligibility.minIncome.toLocaleString()}/year
                  </p>
                </div>
                <div className="bg-white bg-gradient-to-br from-white to-purple-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Employment</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">
                    {card.eligibility.employmentType.join(', ')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Rewards Breakdown */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg font-semibold text-secondary-900 mb-3 text-center">
                Reward Rates by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Fuel</h3>
                  <p className="text-lg font-bold text-orange-600">{card.rewards.fuel}%</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Groceries</h3>
                  <p className="text-lg font-bold text-green-600">{card.rewards.groceries}%</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Dining</h3>
                  <p className="text-lg font-bold text-purple-600">{card.rewards.dining}%</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Travel</h3>
                  <p className="text-lg font-bold text-blue-600">{card.rewards.travel}%</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Online</h3>
                  <p className="text-lg font-bold text-pink-600">{card.rewards.online}%</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-semibold text-secondary-900 mb-1 text-xs">Other</h3>
                  <p className="text-lg font-bold text-gray-600">{card.rewards.other}%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits */}
      <section className="py-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg font-semibold text-secondary-900 mb-3 text-center">
                Additional Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white bg-gradient-to-br from-white to-green-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Welcome Bonus</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">{card.benefits.welcomeBonus}</p>
                </div>
                <div className="bg-white bg-gradient-to-br from-white to-blue-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Milestone Rewards</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">{card.benefits.milestoneRewards}</p>
                </div>
                <div className="bg-white bg-gradient-to-br from-white to-orange-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Airport Lounge</h3>
                  </div>
                  <p className="text-secondary-700 text-sm">{card.benefits.airportLounge}</p>
                </div>
                <div className="bg-white bg-gradient-to-br from-white to-purple-50 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-secondary-900 text-sm">Insurance</h3>
                  </div>
                  <div className="space-y-1">
                    {card.benefits.insurance.map((insurance, index) => (
                      <p key={index} className="text-secondary-700 text-xs">• {insurance}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Ready to Apply for {card.name}?
              </h2>
              <p className="text-base text-primary-100 mb-4">
                Get exclusive offers and instant approval when you apply through CrediBundl
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <ApplyButton
                  cardName={card.name}
                  bankName={card.bank}
                  applyLink={getApplyLink(card.id)}
                  size="lg"
                  variant="primary"
                  className="flex-1"
                />
                <button 
                  onClick={handleCompare}
                  className="bg-gradient-to-r from-transparent to-white/20 hover:from-white/10 hover:to-white/30 text-white font-semibold text-base px-4 py-2 rounded-lg flex items-center gap-2 border border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  Compare with Other Cards
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 