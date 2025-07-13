'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Plane, Fuel, Building, Crown, Globe, Car, Briefcase, Star, Award, TrendingUp, Zap } from 'lucide-react';
import toast from 'react-hot-toast';
import { creditCards } from '@/data/credit-cards';
import { getApplyLink } from '@/data/apply-links';
import CardImage from './CardImage';
import ApplyButton from './ApplyButton';

const categories = [
  {
    id: 'lifetime-free',
    name: 'Best Lifetime Free Credit Cards',
    description: 'No annual fee credit cards with great rewards',
    icon: CreditCard,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    cardNames: ['IndusInd Tiger CC', 'IDFC Millennia Credit Card'],
    slug: 'lifetime-free'
  },
  {
    id: 'upi-credit-cards',
    name: 'Best Repay UPI Credit Card',
    description: 'UPI-enabled credit cards for digital payments',
    icon: Zap,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    cardNames: ['YES Bank Kiwi Credit Card'],
    slug: 'upi-credit-cards'
  },
  {
    id: 'cashback',
    name: 'Best Cashback Cards',
    description: 'High cashback credit cards for maximum savings',
    icon: CreditCard,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    cardNames: ['SBI Cashback Credit Card', 'Tata Neu HDFC Credit Card'],
    slug: 'cashback'
  },
  {
    id: 'luxury',
    name: 'Best Luxury Card',
    description: 'Premium credit cards with exclusive benefits',
    icon: Crown,
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    cardNames: ['ICICI Times Black Credit Card'],
    slug: 'luxury'
  },
  {
    id: 'travel',
    name: 'Best Travel Cards',
    description: 'Credit cards optimized for travel and hotels',
    icon: Plane,
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    cardNames: ['Axis Atlas Credit Card', 'HSBC TravelOne'],
    slug: 'travel'
  },
  {
    id: 'lounge-access',
    name: 'Best Lounge Access Card',
    description: 'Credit cards with airport lounge access',
    icon: Plane,
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
    cardNames: ['HDFC Marriott Bonvoy Credit Card'],
    slug: 'lounge-access'
  },
  {
    id: 'fuel',
    name: 'Best Fuel Cards',
    description: 'Credit cards with fuel rewards and benefits',
    icon: Zap,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    cardNames: ['RBL XTRA - Indian Oil Fuel Card', 'SBI BPCL Octane Credit Card', 'IDFC HP Power Plus Credit Card'],
    slug: 'fuel'
  },
  {
    id: 'business',
    name: 'Best Business Credit Cards',
    description: 'Credit cards designed for business expenses',
    icon: Briefcase,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    cardNames: ['HDFC Biz Credit Cards'],
    slug: 'business'
  },
  {
    id: 'forex',
    name: 'Best 0% Forex Card',
    description: 'Credit cards with zero forex markup',
    icon: Globe,
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    cardNames: ['Scapia Credit Card'],
    slug: 'forex'
  }
];

// Helper to get cards by name
function getCardsByNames(names: string[]) {
  const foundCards = names
    .map((name) => {
      const card = creditCards.find((card) => card.name === name);
      return card;
    })
    .filter((card): card is NonNullable<typeof card> => Boolean(card));
  
  return foundCards;
}

export default function CreditCardCategories() {
  const handleCategoryClick = (categoryName: string, categorySlug: string) => {
    toast.success(`Opening ${categoryName}...`);
    // Navigate to category page
    window.location.href = `/category/${categorySlug}`;
  };

  const handleQuizClick = () => {
    toast.success('Starting credit card quiz...');
    // Add navigation to quiz page
    window.location.href = '/quiz';
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
              Credit Card Categories
            </h2>
            <TrendingUp className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore different types of credit cards and find the perfect match for your lifestyle and spending habits
          </p>
        </motion.div>

        {/* Enhanced Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const cardsInCategory = getCardsByNames(category.cardNames);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(category.name, category.slug)}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2 h-full bg-gradient-to-br from-white to-gray-50">
                  {/* Enhanced Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
                      {cardsInCategory.length} Cards
                    </div>
                  </div>

                  {/* Enhanced Header Section */}
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-sm text-secondary-500 group-hover:text-secondary-600 transition-colors duration-300">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Card Images Section with Names Below */}
                  {cardsInCategory.length > 0 && (
                    <div className="p-6">
                      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {cardsInCategory.map((card, cardIndex) => {
                          console.log(`Rendering card: ${card.name} in category: ${category.name}`);
                          console.log('Card data:', {
                            id: card.id,
                            name: card.name,
                            bank: card.bank,
                            cardType: card.cardType,
                            rating: card.rating,
                            bestSpendCategory: card.bestSpendCategory
                          });
                          return (
                            <motion.div
                              key={card.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: cardIndex * 0.1 }}
                              className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200"
                            >
                              <div className="flex flex-col items-center">
                                <div className="relative mb-2">
                                  <CardImage
                                    cardName={card.name}
                                    bankName={card.bank}
                                    cardType={card.cardType}
                                    className="w-28 h-18 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                                  />
                                  {/* Enhanced Card Rating Badge */}
                                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-warning-400 to-warning-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                    {card.rating.toFixed(1)} ⭐
                                  </div>
                                </div>
                                {/* Card Name Below Image */}
                                <div className="text-center">
                                  <h4 
                                    className="text-xs font-bold text-secondary-800 leading-tight max-w-24 hover:text-primary-600 cursor-pointer transition-colors duration-200"
                                    onClick={() => window.location.href = `/card/${card.slug}`}
                                  >
                                    {card.name}
                                  </h4>
                                  <p className="text-xs text-secondary-500 mt-1">
                                    {card.bank}
                                  </p>
                                  {/* Apply Now Button */}
                                  <div className="mt-2">
                                    <ApplyButton
                                      cardName={card.name}
                                      bankName={card.bank}
                                      applyLink={getApplyLink(card.id)}
                                      size="sm"
                                      variant="primary"
                                      className="w-full"
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Best For Blocks - Side by Side */}
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {cardsInCategory.map((card) => (
                          <div key={card.id} className="flex-shrink-0 bg-purple-50 rounded-xl py-3 px-3 text-center min-w-32">
                            <div className="text-xs font-bold text-purple-700 mb-1">Best For</div>
                            <div className="text-sm font-bold text-purple-800 leading-tight">{card.bestSpendCategory}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced Category Features */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cardsInCategory.some(card => card?.upiRewards) && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full hover:bg-purple-200 transition-colors duration-200">
                            <Zap className="w-3 h-3" />
                            UPI Rewards
                          </span>
                        )}
                        {cardsInCategory.some(card => card?.loungeAccess) && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full hover:bg-orange-200 transition-colors duration-200">
                            ✈️ Lounge Access
                          </span>
                        )}
                        {cardsInCategory.some(card => card?.annualFee === 0) && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full hover:bg-green-200 transition-colors duration-200">
                            🎉 Lifetime Free
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Fallback if no cards found */}
                  {cardsInCategory.length === 0 && (
                    <div className="p-6">
                      <div className="text-center text-gray-500">
                        <p>No cards found for this category</p>
                        <p className="text-sm">Looking for: {category.cardNames.join(', ')}</p>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Action Button */}
                  <div className="p-6 pt-0">
                    <button className="w-full bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      Explore {category.name}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Card to Choose?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Take our quick quiz to get personalized credit card recommendations based on your spending habits and preferences.
            </p>
            <button
              onClick={handleQuizClick}
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Take Credit Card Quiz
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 