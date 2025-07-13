'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ShoppingCart, Sparkles, CreditCard, Search, Filter, Clock, TrendingUp } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { creditCards } from '@/data/credit-cards';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'HDFC Credit Cards',
    'Cashback Cards',
    'Travel Rewards',
    'Zero Annual Fee'
  ]);
  const router = useRouter();

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Best Credit Cards', href: '/credit-cards', icon: '💳' },
    { name: 'All Credit Cards', href: '/all-credit-cards', icon: '🃏' },
    { name: 'Compare Cards', href: '/compare', icon: '⚖️' },
    { name: 'Tools', href: '/tools', icon: '🛠️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  // Generate search suggestions from actual card data
  const searchSuggestions = [
    { text: 'HDFC', category: 'Bank', count: creditCards.filter(card => card.bank.includes('HDFC')).length },
    { text: 'Cashback', category: 'Type', count: creditCards.filter(card => card.cardType === 'Cashback').length },
    { text: 'Travel', category: 'Type', count: creditCards.filter(card => card.cardType === 'Travel').length },
    { text: 'Zero Annual Fee', category: 'Feature', count: creditCards.filter(card => card.annualFee === 0).length },
    { text: 'Lounge', category: 'Benefit', count: creditCards.filter(card => card.loungeAccess).length },
    { text: 'Fuel', category: 'Category', count: creditCards.filter(card => card.cardType === 'Fuel').length },
    { text: 'Business', category: 'Type', count: creditCards.filter(card => card.cardType === 'Business').length },
    { text: 'Premium', category: 'Tier', count: creditCards.filter(card => card.cardType === 'Luxury').length },
    { text: 'UPI', category: 'Feature', count: creditCards.filter(card => card.upiRewards).length },
    { text: 'SBI', category: 'Bank', count: creditCards.filter(card => card.bank.includes('SBI')).length },
    { text: 'Rewards', category: 'Type', count: creditCards.filter(card => card.cardType === 'Rewards').length },
    { text: 'Forex', category: 'Type', count: creditCards.filter(card => card.cardType === 'Forex').length }
  ];

  // Get real-time search results
  const getSearchResults = (query: string) => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    const results = creditCards.filter(card => {
      // Check if any field contains the search query
      const nameMatch = card.name.toLowerCase().includes(lowerQuery);
      const bankMatch = card.bank.toLowerCase().includes(lowerQuery);
      const typeMatch = card.cardType.toLowerCase().includes(lowerQuery);
      const categoryMatch = card.bestSpendCategory.toLowerCase().includes(lowerQuery);
      
      // Check category array if it exists
      const categoryArrayMatch = card.category && Array.isArray(card.category) && 
        card.category.some(cat => cat.toLowerCase().includes(lowerQuery));
      
      // Check tags array if it exists
      const tagsMatch = card.tags && Array.isArray(card.tags) && 
        card.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      
      return nameMatch || bankMatch || typeMatch || categoryMatch || categoryArrayMatch || tagsMatch;
    }).slice(0, 5); // Limit to 5 results
    
    return results;
  };

  const searchResults = getSearchResults(searchQuery);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setRecentSearches(prev => {
        const newSearches = [query, ...prev.filter(s => s !== query)].slice(0, 5);
        return newSearches;
      });
      setSearchQuery('');
      setShowSearchModal(false);
      toast.success(`Searching for: ${query}`);
      // Navigate to credit cards page with search parameter
      router.push(`/credit-cards?search=${encodeURIComponent(query)}`);
    }
  };

  const handleQuickSearch = (suggestion: string) => {
    // Use only the keyword for searching
    handleSearch(suggestion);
  };

  const handleCardClick = (cardId: string) => {
    setShowSearchModal(false);
    setSearchQuery('');
    router.push(`/card/${cardId}`);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <motion.h1 
                  className="text-xl font-bold text-gradient-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  CrediBundl
                </motion.h1>
                <p className="text-xs text-gray-600">Smart Credit Solutions</p>
              </div>
            </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
                <motion.a
                key={item.name}
                href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
            ))}
          </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Search Button */}
              <motion.button
                onClick={() => setShowSearchModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-all duration-200 border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">Search</span>
                <kbd className="hidden sm:inline text-xs bg-white px-1 rounded">⌘K</kbd>
              </motion.button>

          {/* Mobile Menu Button */}
              <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
              <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                  <motion.a
                  key={item.name}
                  href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Search Modal */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
            onClick={() => setShowSearchModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search credit cards, banks, features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  autoFocus
                />
                <button 
                  onClick={() => handleSearch(searchQuery)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Search
                </button>
              </div>

                            {/* Real-time Search Results */}
              {searchQuery && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Search className="h-4 w-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-700">
                      {searchResults.length > 0 
                        ? `Search Results (${searchResults.length})` 
                        : 'No cards found'
                      }
                    </h3>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((card) => (
                        <motion.button
                          key={card.id}
                          onClick={() => handleCardClick(card.id)}
                          className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-200"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                              <CreditCard className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="font-medium text-gray-700">{card.name}</div>
                              <div className="text-sm text-gray-500">{card.bank} • {card.cardType}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                              {card.rating}⭐
                            </div>
                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {card.bestSpendCategory}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 mb-2">
                        <Search className="h-12 w-12 mx-auto" />
                      </div>
                      <p className="text-gray-500 font-medium">No credit cards found for "{searchQuery}"</p>
                      <p className="text-sm text-gray-400 mt-1">Try searching for different keywords like bank names, card types, or features</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Test Search Results - Remove this after testing */}
              {searchQuery && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg text-xs">
                  <p><strong>Test:</strong> Query: "{searchQuery}", Results: {searchResults.length}</p>
                  <p>Available cards: {creditCards.length}</p>
                  <p>Sample cards: {creditCards.slice(0, 3).map(c => c.name).join(', ')}</p>
                </div>
              )}
              


              {/* Recent Searches */}
              {recentSearches.length > 0 && !searchQuery && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-700">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickSearch(search)}
                        className="px-3 py-1 bg-gray-100 hover:bg-purple-100 text-gray-700 rounded-full text-sm transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {search}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Suggestions */}
              {!searchQuery && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-700">Popular Searches</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {searchSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickSearch(suggestion.text)}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-200"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium text-gray-700">{suggestion.text}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            {suggestion.category}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {suggestion.count} cards
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Filters */}
              {!searchQuery && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-700">Quick Filters</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Cashback', 'Travel', 'Fuel', 'Business', 'Premium', 'Rewards', 'Forex', 'No Annual Fee'].map((filter) => (
                      <motion.button
                        key={filter}
                        onClick={() => handleQuickSearch(filter)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {filter}
                      </motion.button>
                    ))}
              </div>
            </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 