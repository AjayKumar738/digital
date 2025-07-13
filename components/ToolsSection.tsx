'use client';

import { motion } from 'framer-motion';
import { Calculator, CreditCard, Plane, TrendingUp, BarChart3, Zap, Award, TrendingUp as TrendingUpIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { creditCards } from '@/data/credit-cards';
import mammoth from 'mammoth';
import Papa from 'papaparse';

const tools = [
  {
    id: 'card-comparison',
    name: 'Card Comparison Tool',
    description: 'Compare credit cards side-by-side with dynamic calculations',
    icon: BarChart3,
    color: 'from-blue-400 to-blue-600',
    features: ['Monthly spend input', 'Real-time calculations', 'Savings comparison', 'Fee waiver check']
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator',
    description: 'Calculate EMI for credit card purchases and balance transfers',
    icon: Calculator,
    color: 'from-green-400 to-green-600',
    features: ['EMI calculation', 'Interest rate comparison', 'Payment schedule', 'Total cost analysis']
  },
  {
    id: 'lounge-checker',
    name: 'Lounge Access Checker',
    description: 'Find airport lounges accessible with your credit card',
    icon: Plane,
    color: 'from-purple-400 to-purple-600',
    features: ['Airport search', 'Lounge details', 'Access requirements', 'Guest policy']
  },
  {
    id: 'reward-calculator',
    name: 'Reward Calculator',
    description: 'Calculate potential rewards based on your spending patterns',
    icon: TrendingUp,
    color: 'from-orange-400 to-orange-600',
    features: ['Spending categories', 'Reward rates', 'Annual projections', 'Card recommendations']
  },
  {
    id: 'statement-analyzer',
    name: 'Statement Analyzer',
    description: 'Analyze your credit card statement for better insights',
    icon: CreditCard,
    color: 'from-red-400 to-red-600',
    features: ['Spending analysis', 'Category breakdown', 'Reward tracking', 'Optimization tips']
  },
  {
    id: 'ai-recommendation',
    name: 'AI Card Recommendation',
    description: 'Get personalized credit card suggestions using AI',
    icon: Zap,
    color: 'from-indigo-400 to-indigo-600',
    features: ['Smart matching', 'Personalized results', 'Spending analysis', 'Best card suggestions']
  }
];

export default function ToolsSection() {
  const [openTool, setOpenTool] = useState<string | null>(null);
  const [emiAmount, setEmiAmount] = useState(10000);
  const [emiRate, setEmiRate] = useState(15);
  const [emiMonths, setEmiMonths] = useState(12);
  const [selectedCardId, setSelectedCardId] = useState<string>('');
  const [loungeAirport, setLoungeAirport] = useState('');
  const spendCategories = ['fuel', 'groceries', 'dining', 'travel', 'online', 'other'] as const;
  type SpendCategory = typeof spendCategories[number];
  const [rewardSpend, setRewardSpend] = useState<Record<SpendCategory, number>>({
    fuel: 0, groceries: 0, dining: 0, travel: 0, online: 0, other: 0
  });
  const airports = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata'];

  // Card Comparison Tool state
  const [compareSelected, setCompareSelected] = useState<string[]>([]);
  // Statement Analyzer state
  const [statementText, setStatementText] = useState('');
  const [statementResult, setStatementResult] = useState<any>(null);
  // AI Card Recommendation state
  const [aiAnswers, setAiAnswers] = useState({ spend: 50000, category: 'Online Shopping', travel: false });
  const [aiResult, setAiResult] = useState<any>(null);

  // Find selected card object
  const selectedCard = creditCards.find(card => card.id === selectedCardId);

  // Typical interest rates (example values, can be improved with real data)
  const cardInterestRates: Record<string, number> = {
    'idfc-millennia': 36,
    'sbi-cashback': 42,
    'scapia': 36,
    // ...add more as needed
  };

  // When card changes, auto-fill interest rate
  useEffect(() => {
    if (selectedCardId && cardInterestRates[selectedCardId]) {
      setEmiRate(cardInterestRates[selectedCardId]);
    }
  }, [selectedCardId]);

  // Card Comparison Tool logic
  const compareCards = creditCards.filter(card => compareSelected.includes(card.id));

  // Statement Analyzer logic (simple CSV parser)
  function analyzeStatement(text: string) {
    const lines = text.split('\n').filter(Boolean);
    let total = 0;
    let categories: Record<string, number> = {};
    lines.forEach(line => {
      const [desc, amountStr, cat] = line.split(',');
      const amount = Number(amountStr);
      if (!isNaN(amount)) {
        total += amount;
        categories[cat] = (categories[cat] || 0) + amount;
      }
    });
    setStatementResult({ total, categories });
  }

  // AI Card Recommendation logic
  function recommendCards() {
    // Simple logic: pick top 3 cards matching category and high rating
    const matches = creditCards
      .filter(card => card.bestSpendCategory.toLowerCase().includes(aiAnswers.category.toLowerCase()))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
    setAiResult(matches);
  }

  // Enhanced Statement Analyzer: file upload and parsing
  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    let text = '';
    if (file.type === 'application/pdf') {
      // PDF parsing
      const arrayBuffer = await file.arrayBuffer();
      const pdfjsLib = await import('pdfjs-dist');
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += (content.items as any[]).map((item: any) => item.str).join(' ') + '\n';
      }
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // DOCX parsing
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      text = result.value;
    } else if (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel') {
      // CSV parsing
      const csvText = await file.text();
      text = csvText;
    } else if (file.type.startsWith('text/')) {
      // TXT parsing
      text = await file.text();
    } else {
      toast.error('Unsupported file type. Please upload PDF, DOCX, CSV, or TXT.');
      return;
    }
    setStatementText(text);
    analyzeStatement(text);
  }

  // Enhanced rewards calculation for statement
  function estimateRewards(categories: Record<string, number>, card: typeof creditCards[number]) {
    if (!card) return 0;
    let total = 0;
    for (const cat of Object.keys(categories)) {
      const key = cat.toLowerCase();
      const spend = categories[cat];
      let rate = 0;
      if (key.includes('fuel')) rate = card.rewards.fuel;
      else if (key.includes('grocery')) rate = card.rewards.groceries;
      else if (key.includes('dining')) rate = card.rewards.dining;
      else if (key.includes('travel')) rate = card.rewards.travel;
      else if (key.includes('online')) rate = card.rewards.online;
      else rate = card.rewards.other;
      total += (spend * rate) / 100;
    }
    return total;
  }

  // Credit score tips based on analysis
  function getCreditScoreTips(total: number, categories: Record<string, number>) {
    const tips = [];
    if (total > 100000) tips.push('Keep your credit utilization below 30% of your limit for a better score.');
    if (categories['fuel'] || categories['travel']) tips.push('Diversify your spend across categories for a healthier profile.');
    tips.push('Always pay your credit card bill on time to avoid late fees and negative score impact.');
    tips.push('Consider having a mix of card types (cashback, travel, rewards) for a stronger profile.');
    return tips;
  }

  const handleToolClick = (toolId: string) => {
    setOpenTool(toolId);
  };

  // EMI Calculation logic
  const emi = emiAmount > 0 && emiRate > 0 && emiMonths > 0
    ? (emiAmount * emiRate / 1200 * Math.pow(1 + emiRate / 1200, emiMonths)) /
      (Math.pow(1 + emiRate / 1200, emiMonths) - 1)
    : 0;
  const totalPayment = emi * emiMonths;
  const totalInterest = totalPayment - emiAmount;

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
              Credit Card Tools
            </h2>
            <TrendingUpIcon className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools to help you make informed decisions about credit cards, calculate savings, and optimize your spending
          </p>
        </motion.div>

        {/* Enhanced Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleToolClick(tool.id)}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2 h-full">
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Free Tool
                    </div>
                  </div>

                  {/* Header Section */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-secondary-500">{tool.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {tool.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          className="text-center p-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
                        >
                          <span className="text-xs font-medium text-secondary-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105">
                      Use {tool.name}
                      <Zap className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EMI Calculator Modal */}
        {openTool === 'emi-calculator' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">EMI Calculator</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Select Credit Card</label>
                  <select
                    value={selectedCardId}
                    onChange={e => setSelectedCardId(e.target.value)}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">-- Choose a Card --</option>
                    {creditCards.map(card => (
                      <option key={card.id} value={card.id}>{card.name} ({card.bank})</option>
                    ))}
                  </select>
                </div>
                {selectedCard && (
                  <div className="flex items-center gap-3 my-2">
                    <img src={selectedCard.imageUrl} alt={selectedCard.name} className="w-12 h-8 rounded-md object-cover border border-gray-100" />
                    <span className="font-semibold text-secondary-900">{selectedCard.name}</span>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={emiAmount}
                    onChange={e => setEmiAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    min={1000}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    value={emiRate}
                    onChange={e => setEmiRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    min={1}
                    max={100}
                  />
                  <span className="text-xs text-secondary-500">{selectedCard ? 'Typical for this card, can be edited' : 'Enter your card rate'}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Tenure (months)</label>
                  <input
                    type="number"
                    value={emiMonths}
                    onChange={e => setEmiMonths(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    min={1}
                    max={120}
                  />
                </div>
              </form>
              <div className="mt-6 bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-lg font-semibold text-primary-700 mb-2">Monthly EMI: <span className="text-2xl">₹{emi ? emi.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'}</span></div>
                <div className="text-sm text-secondary-700">Total Payment: <span className="font-bold">₹{emi ? totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'}</span></div>
                <div className="text-sm text-secondary-700">Total Interest: <span className="font-bold">₹{emi ? totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'}</span></div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Lounge Access Checker Modal */}
        {openTool === 'lounge-checker' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">Lounge Access Checker</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Select Credit Card</label>
                  <select
                    value={selectedCardId}
                    onChange={e => setSelectedCardId(e.target.value)}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">-- Choose a Card --</option>
                    {creditCards.map(card => (
                      <option key={card.id} value={card.id}>{card.name} ({card.bank})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Select Airport</label>
                  <select
                    value={loungeAirport}
                    onChange={e => setLoungeAirport(e.target.value)}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">-- Choose an Airport --</option>
                    {airports.map(airport => (
                      <option key={airport} value={airport}>{airport}</option>
                    ))}
                  </select>
                </div>
              </form>
              {selectedCard && loungeAirport && (
                <div className="mt-6 bg-blue-50 rounded-xl p-4 text-center">
                  {selectedCard.loungeAccess ? (
                    <div className="text-lg font-semibold text-green-700">✅ {selectedCard.name} offers lounge access at {loungeAirport} airport.</div>
                  ) : (
                    <div className="text-lg font-semibold text-red-600">❌ {selectedCard.name} does not offer lounge access at {loungeAirport} airport.</div>
                  )}
                  <div className="text-xs text-secondary-500 mt-2">(Check card T&Cs for specific lounge partners.)</div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Reward Calculator Modal */}
        {openTool === 'reward-calculator' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">Reward Calculator</h2>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Select Credit Card</label>
                  <select
                    value={selectedCardId}
                    onChange={e => setSelectedCardId(e.target.value)}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">-- Choose a Card --</option>
                    {creditCards.map(card => (
                      <option key={card.id} value={card.id}>{card.name} ({card.bank})</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {spendCategories.map(cat => (
                    <div key={cat}>
                      <label className="block text-xs font-medium text-secondary-700 mb-1 capitalize">{cat} Spend (₹/mo)</label>
                      <input
                        type="number"
                        value={rewardSpend[cat]}
                        onChange={e => setRewardSpend({ ...rewardSpend, [cat]: Number(e.target.value) })}
                        className="w-full px-2 py-1 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none text-sm"
                        min={0}
                      />
                    </div>
                  ))}
                </div>
              </form>
              {selectedCard && (
                <div className="mt-6 bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-primary-700 mb-2">Estimated Annual Rewards</div>
                  <div className="text-2xl font-bold text-green-700 mb-1">
                    ₹{(
                      (rewardSpend.fuel * (selectedCard.rewards.fuel || 0) +
                        rewardSpend.groceries * (selectedCard.rewards.groceries || 0) +
                        rewardSpend.dining * (selectedCard.rewards.dining || 0) +
                        rewardSpend.travel * (selectedCard.rewards.travel || 0) +
                        rewardSpend.online * (selectedCard.rewards.online || 0) +
                        rewardSpend.other * (selectedCard.rewards.other || 0)) * 12 / 100
                    ).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-secondary-500">(Assuming reward rate applies to each category. Actual rewards may vary.)</div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Card Comparison Tool Modal */}
        {openTool === 'card-comparison' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">Card Comparison Tool</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary-700 mb-1">Select up to 4 cards</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {creditCards.map(card => (
                    <button
                      key={card.id}
                      className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all text-xs ${compareSelected.includes(card.id) ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300 bg-white'}`}
                      onClick={() => setCompareSelected(prev => prev.includes(card.id) ? prev.filter(id => id !== card.id) : prev.length < 4 ? [...prev, card.id] : prev)}
                    >
                      <img src={card.imageUrl} alt={card.name} className="w-8 h-6 rounded object-cover border" />
                      <span className="truncate">{card.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {compareCards.length > 0 && (
                <div className="overflow-x-auto rounded-xl shadow bg-blue-50 p-4">
                  <table className="min-w-full text-xs text-center">
                    <thead>
                      <tr>
                        <th className="p-2">Card</th>
                        <th className="p-2">Bank</th>
                        <th className="p-2">Reward Rate</th>
                        <th className="p-2">Annual Fee</th>
                        <th className="p-2">Lounge Access</th>
                        <th className="p-2">Official Site</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareCards.map(card => (
                        <tr key={card.id} className="bg-white rounded-lg shadow mb-2">
                          <td className="p-2 flex items-center gap-2"><img src={card.imageUrl} alt={card.name} className="w-8 h-6 rounded object-cover border" />{card.name}</td>
                          <td className="p-2">{card.bank}</td>
                          <td className="p-2 text-green-700 font-bold">{card.rewardRate}%</td>
                          <td className="p-2">{card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}</td>
                          <td className="p-2">{card.loungeAccess ? 'Yes' : 'No'}</td>
                          <td className="p-2"><a href={card.applyLink} target="_blank" rel="noopener" className="text-primary-600 underline">Check</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Statement Analyzer Modal */}
        {openTool === 'statement-analyzer' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">Statement Analyzer</h2>
              <input
                type="file"
                accept=".pdf,.docx,.csv,.txt"
                className="mb-3 block w-full"
                onChange={handleFileUpload}
              />
              <textarea
                className="w-full h-24 border border-secondary-200 rounded-lg p-2 mb-2"
                placeholder="Paste your statement CSV or text here (desc,amount,category)"
                value={statementText}
                onChange={e => setStatementText(e.target.value)}
              />
              <button
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg mb-4"
                onClick={() => analyzeStatement(statementText)}
              >Analyze</button>
              {statementResult && (
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-primary-700 mb-2">Total Spend: ₹{statementResult.total.toLocaleString()}</div>
                  <div className="mb-2">Category Breakdown:</div>
                  <ul className="text-left text-sm mb-2">
                    {Object.entries(statementResult.categories).map(([cat, amt]) => (
                      <li key={cat}>{cat}: ₹{(amt as number).toLocaleString()}</li>
                    ))}
                  </ul>
                  <div className="mb-2">
                    <label className="block text-xs font-medium text-secondary-700 mb-1">Estimate Rewards with Card:</label>
                    <select
                      value={selectedCardId}
                      onChange={e => setSelectedCardId(e.target.value)}
                      className="w-full px-2 py-1 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none text-sm mb-2"
                    >
                      <option value="">-- Choose a Card --</option>
                      {creditCards.map(card => (
                        <option key={card.id} value={card.id}>{card.name} ({card.bank})</option>
                      ))}
                    </select>
                    {selectedCard && (
                      <div className="text-green-700 font-bold text-sm">Estimated Rewards: ₹{estimateRewards(statementResult.categories, selectedCard).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                    )}
                  </div>
                  <div className="mt-4 text-left">
                    <div className="font-semibold text-primary-700 mb-1">Credit Score Improvement Tips:</div>
                    <ul className="list-disc list-inside text-xs text-secondary-700">
                      {getCreditScoreTips(statementResult.total, statementResult.categories).map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* AI Card Recommendation Modal */}
        {openTool === 'ai-recommendation' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                onClick={() => setOpenTool(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary-700 text-center">AI Card Recommendation</h2>
              <form className="space-y-3 mb-4" onSubmit={e => { e.preventDefault(); recommendCards(); }}>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Monthly Spend (₹)</label>
                  <input
                    type="number"
                    value={aiAnswers.spend}
                    onChange={e => setAiAnswers(a => ({ ...a, spend: Number(e.target.value) }))}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    min={1000}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Main Spend Category</label>
                  <select
                    value={aiAnswers.category}
                    onChange={e => setAiAnswers(a => ({ ...a, category: e.target.value }))}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option>Online Shopping</option>
                    <option>Dining</option>
                    <option>Travel</option>
                    <option>Fuel</option>
                    <option>Groceries</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={aiAnswers.travel}
                    onChange={e => setAiAnswers(a => ({ ...a, travel: e.target.checked }))}
                    id="travel-check"
                  />
                  <label htmlFor="travel-check" className="text-sm text-secondary-700">I travel frequently</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg mt-2"
                >Get Recommendations</button>
              </form>
              {aiResult && (
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-primary-700 mb-2">Top Card Recommendations</div>
                  {aiResult.map((card: any) => (
                    <div key={card.id} className="flex items-center gap-3 mb-3 bg-white rounded-lg p-2 shadow">
                      <img src={card.imageUrl} alt={card.name} className="w-10 h-7 rounded object-cover border" />
                      <div className="flex-1 text-left">
                        <div className="font-bold text-secondary-900">{card.name}</div>
                        <div className="text-xs text-secondary-600">{card.bank}</div>
                        <div className="text-xs text-green-700">Best for: {card.bestSpendCategory}</div>
                        <a href={card.applyLink} target="_blank" rel="noopener" className="text-primary-600 underline text-xs">Check on official site</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need More Advanced Tools?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Access premium tools and advanced analytics to maximize your credit card benefits and savings.
            </p>
            <button
              onClick={() => window.location.href = '/tools'}
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Tools
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 