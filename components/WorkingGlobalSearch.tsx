'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, CreditCard, Star, TrendingUp, ArrowRight, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getApplyLink } from '@/data/apply-links';
import toast from 'react-hot-toast';
import ApplyButton from './ApplyButton';

interface SearchResult {
  id: string;
  type: 'card' | 'category' | 'tool' | 'page';
  title: string;
  subtitle?: string;
  description?: string;
  rating?: number;
  href: string;
  icon?: React.ReactNode;
}

export default function WorkingGlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search categories and tools
  const searchCategories = [
    { name: 'Lifetime Free Cards', href: '/category/lifetime-free', icon: '🎉' },
    { name: 'Cashback Cards', href: '/category/cashback', icon: '💰' },
    { name: 'Travel Cards', href: '/category/travel', icon: '✈️' },
    { name: 'Fuel Cards', href: '/category/fuel', icon: '⛽' },
    { name: 'Luxury Cards', href: '/category/luxury', icon: '👑' },
    { name: 'Business Cards', href: '/category/business', icon: '💼' },
  ];

  const searchTools = [
    { name: 'Card Comparison Tool', href: '/compare', icon: '⚖️' },
    { name: 'EMI Calculator', href: '/tools', icon: '🧮' },
    { name: 'Reward Calculator', href: '/tools', icon: '🎯' },
    { name: 'Lounge Access Checker', href: '/tools', icon: '🏢' },
  ];

  const searchPages = [
    { name: 'All Credit Cards', href: '/credit-cards', icon: '💳' },
    { name: 'Digital Products', href: '/digital-products', icon: '📱' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
  ];

  // Sample credit cards for testing
  const sampleCards = [
    { id: 'indusind-tiger', name: 'IndusInd Tiger CC', bank: 'IndusInd Bank', rating: 4.2, bestSpendCategory: 'All Purchases', slug: 'indusind-tiger' },
    { id: 'sbi-cashback', name: 'SBI Cashback Credit Card', bank: 'State Bank of India', rating: 4.1, bestSpendCategory: 'Online Shopping', slug: 'sbi-cashback' },
    { id: 'tata-neu-hdfc', name: 'Tata Neu HDFC Credit Card', bank: 'HDFC Bank', rating: 4.3, bestSpendCategory: 'Tata Brands', slug: 'tata-neu-hdfc' },
  ];

  // Generate search results
  const generateSearchResults = (query: string): SearchResult[] => {
    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search sample credit cards
    sampleCards.forEach(card => {
      if (
        card.name.toLowerCase().includes(lowerQuery) ||
        card.bank.toLowerCase().includes(lowerQuery) ||
        card.bestSpendCategory.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          id: `card-${card.id}`,
          type: 'card',
          title: card.name,
          subtitle: card.bank,
          description: `Best for ${card.bestSpendCategory}`,
          rating: card.rating,
          href: `/card/${card.slug}`,
          icon: <CreditCard className="w-5 h-5" />
        });
      }
    });

    // Search categories
    searchCategories.forEach(category => {
      if (category.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `category-${category.name}`,
          type: 'category',
          title: category.name,
          description: 'Credit card category',
          href: category.href,
          icon: <span className="text-2xl">{category.icon}</span>
        });
      }
    });

    // Search tools
    searchTools.forEach(tool => {
      if (tool.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `tool-${tool.name}`,
          type: 'tool',
          title: tool.name,
          description: 'Interactive tool',
          href: tool.href,
          icon: <span className="text-2xl">{tool.icon}</span>
        });
      }
    });

    // Search pages
    searchPages.forEach(page => {
      if (page.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          id: `page-${page.name}`,
          type: 'page',
          title: page.name,
          description: 'Website page',
          href: page.href,
          icon: <span className="text-2xl">{page.icon}</span>
        });
      }
    });

    return results.slice(0, 10); // Limit to 10 results
  };

  // Handle search input
  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    setSelectedIndex(-1);
    
    if (value.trim().length > 0) {
      setIsLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        const results = generateSearchResults(value);
        setSearchResults(results);
        setIsLoading(false);
      }, 200);
    } else {
      setSearchResults([]);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        handleResultClick(searchResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    toast.success(`Navigating to ${result.title}...`);
    router.push(result.href);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search with Ctrl/Cmd + K
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      
      // Close search with Escape
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      {/* Search Button */}
      <button 
        onClick={() => setIsSearchOpen(true)}
        className="p-2 text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              {/* Search Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search credit cards, categories, tools..."
                      value={searchQuery}
                      onChange={(e) => handleSearchInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-10 pr-20 py-3 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-lg"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <kbd className="px-2 py-1 text-xs font-semibold text-secondary-400 bg-secondary-100 border border-secondary-200 rounded">
                        ⌘K
                      </kbd>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
                    <p className="text-secondary-500 mt-2">Searching...</p>
                  </div>
                ) : searchQuery.trim().length > 0 ? (
                  searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleResultClick(result)}
                          className={`p-4 rounded-lg cursor-pointer transition-all ${
                            selectedIndex === index
                              ? 'bg-primary-50 border-2 border-primary-200'
                              : 'hover:bg-gray-50 border-2 border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                              {result.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-secondary-900 truncate">
                                  {result.title}
                                </h3>
                                {result.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-warning-400 fill-current" />
                                    <span className="text-sm font-medium text-secondary-600">
                                      {result.rating.toFixed(1)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              {result.subtitle && (
                                <p className="text-sm text-secondary-500 mt-1">
                                  {result.subtitle}
                                </p>
                              )}
                              {result.description && (
                                <p className="text-xs text-secondary-400 mt-1">
                                  {result.description}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {result.type === 'card' && (
                                <div onClick={(e) => e.stopPropagation()}>
                                  <ApplyButton
                                    cardName={result.title}
                                    bankName={result.subtitle || ''}
                                    applyLink={getApplyLink(result.id.replace('card-', ''))}
                                    size="sm"
                                    variant="primary"
                                  />
                                </div>
                              )}
                              <ArrowRight className="w-4 h-4 text-secondary-400" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <Search className="w-12 h-12 text-secondary-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        No results found
                      </h3>
                      <p className="text-secondary-500">
                        Try searching for credit cards, categories, or tools
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Popular Searches */}
                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Popular Searches
                        </h3>
                        <div className="space-y-2">
                          {['Lifetime Free', 'Cashback', 'Travel', 'Fuel'].map((term) => (
                            <button
                              key={term}
                              onClick={() => handleSearchInput(term)}
                              className="block w-full text-left p-2 rounded-lg hover:bg-gray-50 text-secondary-600 hover:text-primary-600 transition-colors"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                          <Filter className="w-4 h-4" />
                          Quick Actions
                        </h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Compare Cards', href: '/compare' },
                            { name: 'All Credit Cards', href: '/credit-cards' },
                            { name: 'Tools', href: '/tools' }
                          ].map((action) => (
                            <button
                              key={action.name}
                              onClick={() => {
                                router.push(action.href);
                                setIsSearchOpen(false);
                              }}
                              className="block w-full text-left p-2 rounded-lg hover:bg-gray-50 text-secondary-600 hover:text-primary-600 transition-colors"
                            >
                              {action.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 