'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Calculator, CreditCard, TrendingUp, DollarSign, Shield, BarChart3 } from 'lucide-react';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState('eligibility');

  const tools = [
    {
      id: 'eligibility',
      name: 'Credit Card Eligibility Checker',
      icon: CreditCard,
      description: 'Check if you qualify for credit cards based on your profile'
    },
    {
      id: 'rewards',
      name: 'Rewards Calculator',
      icon: TrendingUp,
      description: 'Calculate potential rewards and cashback from your spending'
    },
    {
      id: 'emi',
      name: 'EMI Calculator',
      icon: Calculator,
      description: 'Calculate monthly EMIs for credit card purchases'
    },
    {
      id: 'balance-transfer',
      name: 'Balance Transfer Calculator',
      icon: DollarSign,
      description: 'Compare balance transfer offers and savings'
    },
    {
      id: 'fee-waiver',
      name: 'Annual Fee Waiver Calculator',
      icon: Shield,
      description: 'Check if you can waive annual fees based on spending'
    },
    {
      id: 'credit-score',
      name: 'Credit Score Simulator',
      icon: BarChart3,
      description: 'Simulate how different actions affect your credit score'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Credit Card Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful calculators and tools to help you make informed credit card decisions
          </p>
        </div>

        {/* Tool Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                activeTool === tool.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  activeTool === tool.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Tool Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTool === 'eligibility' && <EligibilityChecker />}
          {activeTool === 'rewards' && <RewardsCalculator />}
          {activeTool === 'emi' && <EMICalculator />}
          {activeTool === 'balance-transfer' && <BalanceTransferCalculator />}
          {activeTool === 'fee-waiver' && <FeeWaiverCalculator />}
          {activeTool === 'credit-score' && <CreditScoreSimulator />}
        </div>
      </div>
    </div>
  );
}

// Eligibility Checker Component
function EligibilityChecker() {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    employment: 'salaried',
    creditScore: '',
    existingCards: '0'
  });

  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const score = calculateEligibilityScore(formData);
    setResult(score);
  };

  const calculateEligibilityScore = (data: any) => {
    let score = 0;
    
    // Age factor
    if (data.age >= 21 && data.age <= 65) score += 25;
    else if (data.age >= 18 && data.age < 21) score += 15;
    
    // Income factor
    if (data.income >= 500000) score += 30;
    else if (data.income >= 300000) score += 25;
    else if (data.income >= 150000) score += 20;
    else if (data.income >= 50000) score += 15;
    
    // Employment factor
    if (data.employment === 'salaried') score += 20;
    else if (data.employment === 'self-employed') score += 15;
    else score += 10;
    
    // Credit score factor
    if (data.creditScore >= 750) score += 25;
    else if (data.creditScore >= 650) score += 20;
    else if (data.creditScore >= 550) score += 15;
    
    // Existing cards factor
    const cards = parseInt(data.existingCards);
    if (cards === 0) score += 10;
    else if (cards <= 2) score += 5;
    else score -= 5;
    
    return Math.min(100, Math.max(0, score));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Card Eligibility Checker</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your age"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income (₹)</label>
            <input
              type="number"
              value={formData.income}
              onChange={(e) => setFormData({...formData, income: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter annual income"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
            <select
              value={formData.employment}
              onChange={(e) => setFormData({...formData, employment: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
              <option value="business">Business Owner</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Credit Score</label>
            <input
              type="number"
              value={formData.creditScore}
              onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter credit score (300-900)"
              min="300"
              max="900"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Existing Credit Cards</label>
            <select
              value={formData.existingCards}
              onChange={(e) => setFormData({...formData, existingCards: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="0">0 cards</option>
              <option value="1">1 card</option>
              <option value="2">2 cards</option>
              <option value="3">3+ cards</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Check Eligibility
        </button>
      </form>
      
      {result !== null && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Eligibility Result</h3>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ${
                    result >= 80 ? 'bg-green-500' : 
                    result >= 60 ? 'bg-yellow-500' : 
                    result >= 40 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{width: `${result}%`}}
                ></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">{result}%</span>
          </div>
          <p className="mt-4 text-gray-700">
            {result >= 80 ? 'Excellent! You have a high chance of approval.' :
             result >= 60 ? 'Good! You have a reasonable chance of approval.' :
             result >= 40 ? 'Fair. Consider improving your profile before applying.' :
             'Low eligibility. Focus on improving your credit profile first.'}
          </p>
        </div>
      )}
    </div>
  );
}

// Rewards Calculator Component
function RewardsCalculator() {
  const [spending, setSpending] = useState<{
    groceries: string;
    dining: string;
    travel: string;
    fuel: string;
    online: string;
    other: string;
  }>({
    groceries: '',
    dining: '',
    travel: '',
    fuel: '',
    online: '',
    other: ''
  });

  type CardResult = {
    name: string;
    rewards: Record<string, number>;
    annualFee: number;
    joiningFee: number;
    totalRewards: number;
    annualSavings: number;
    roi: number;
  };

  type ResultsType = {
    totalSpending: number;
    cardResults: CardResult[];
  };

  const [results, setResults] = useState<ResultsType | null>(null);

  const cards: CardResult[] = [
    {
      name: 'HDFC Regalia',
      rewards: {
        groceries: 2,
        dining: 4,
        travel: 4,
        fuel: 1,
        online: 2,
        other: 1
      },
      annualFee: 2500,
      joiningFee: 2500,
      totalRewards: 0,
      annualSavings: 0,
      roi: 0
    },
    {
      name: 'SBI SimplyCLICK',
      rewards: {
        groceries: 10,
        dining: 10,
        travel: 5,
        fuel: 1,
        online: 10,
        other: 1
      },
      annualFee: 999,
      joiningFee: 999,
      totalRewards: 0,
      annualSavings: 0,
      roi: 0
    },
    {
      name: 'ICICI Amazon Pay',
      rewards: {
        groceries: 2,
        dining: 2,
        travel: 2,
        fuel: 2,
        online: 5,
        other: 1
      },
      annualFee: 0,
      joiningFee: 0,
      totalRewards: 0,
      annualSavings: 0,
      roi: 0
    }
  ];

  const calculateRewards = () => {
    const totalSpending = Object.values(spending).reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    const cardResults: CardResult[] = cards.map((card: CardResult): CardResult => {
      let totalRewards = 0;
      (Object.keys(spending) as (keyof typeof spending)[]).forEach((category) => {
        const spend = parseInt(spending[category]) || 0;
        const rate = card.rewards[category] || 0;
        totalRewards += (spend * rate) / 100;
      });
      const annualSavings = totalRewards - card.annualFee;
      const roi = totalSpending > 0 ? (annualSavings / totalSpending) * 100 : 0;
      return {
        ...card,
        totalRewards,
        annualSavings,
        roi
      };
    });
    setResults({ totalSpending, cardResults });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Rewards Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(spending).map(([category, value]) => (
          <div key={category}>
            <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
              {category} Spending (₹/month)
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setSpending({ ...spending, [category]: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
            />
          </div>
        ))}
      </div>
      <button
        onClick={calculateRewards}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
      >
        Calculate Rewards
      </button>
      {results && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Total Monthly Spending: ₹{results.totalSpending.toLocaleString()}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.cardResults.map((card: CardResult, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4">{card.name}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Rewards:</span>
                    <span className="font-semibold">₹{card.totalRewards.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-semibold">₹{card.annualFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Savings:</span>
                    <span className={`font-semibold ${card.annualSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ₹{card.annualSavings.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className={`font-semibold ${card.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {card.roi.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// EMI Calculator Component
function EMICalculator() {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [rate, setRate] = useState('');
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const months = parseInt(tenure);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    
    if (principal && months && monthlyRate) {
      const emiAmount = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiAmount);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter amount"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter tenure"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter rate"
          />
        </div>
      </div>
      
      <button
        onClick={calculateEMI}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
      >
        Calculate EMI
      </button>
      
      {emi !== null && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4">EMI Calculation Result</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">
            ₹{emi.toFixed(2)}
          </div>
          <p className="text-green-700">Monthly EMI amount</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold ml-2">₹{(emi * parseInt(tenure)).toFixed(2)}</span>
            </div>
            <div>
              <span className="text-gray-600">Total Interest:</span>
              <span className="font-semibold ml-2">₹{((emi * parseInt(tenure)) - parseFloat(amount)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Balance Transfer Calculator Component
function BalanceTransferCalculator() {
  const [currentBalance, setCurrentBalance] = useState('');
  const [currentRate, setCurrentRate] = useState('');
  const [newRate, setNewRate] = useState('');
  const [transferFee, setTransferFee] = useState('');
  const [results, setResults] = useState<{
    oldInterest: number;
    newInterest: number;
    savings: number;
    breakEvenMonths: number;
    totalSavings: number;
  } | null>(null);

  const calculateSavings = () => {
    const balance = parseFloat(currentBalance);
    const oldRate = parseFloat(currentRate);
    const newRateValue = parseFloat(newRate);
    const fee = parseFloat(transferFee);
    
    if (balance && oldRate && newRateValue && fee) {
      const oldInterest = (balance * oldRate) / 100;
      const newInterest = (balance * newRateValue) / 100;
      const savings = oldInterest - newInterest - fee;
      const breakEvenMonths = fee / (oldInterest - newInterest);
      
      setResults({
        oldInterest,
        newInterest,
        savings,
        breakEvenMonths,
        totalSavings: savings * 12
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Balance Transfer Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Balance (₹)</label>
          <input
            type="number"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter current balance"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={currentRate}
            onChange={(e) => setCurrentRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter current rate"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter new rate"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Fee (₹)</label>
          <input
            type="number"
            value={transferFee}
            onChange={(e) => setTransferFee(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter transfer fee"
          />
        </div>
      </div>
      
      <button
        onClick={calculateSavings}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
      >
        Calculate Savings
      </button>
      
      {results && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Balance Transfer Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Monthly Interest:</span>
                <span className="font-semibold">₹{results.oldInterest.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New Monthly Interest:</span>
                <span className="font-semibold">₹{results.newInterest.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transfer Fee:</span>
                <span className="font-semibold">₹{parseFloat(transferFee).toFixed(2)}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Savings:</span>
                <span className={`font-semibold ${results.savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{results.savings.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Break-even (months):</span>
                <span className="font-semibold">{results.breakEvenMonths.toFixed(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Annual Savings:</span>
                <span className={`font-semibold ${results.totalSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{results.totalSavings.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Fee Waiver Calculator Component
function FeeWaiverCalculator() {
  const [annualSpending, setAnnualSpending] = useState('');
  const [cardType, setCardType] = useState('premium');
  const [results, setResults] = useState<{
    isWaived: boolean;
    savings: number;
    shortfall: number;
    threshold: number;
    annualFee: number;
  } | null>(null);

  const cardTypes = {
    basic: { annualFee: 500, waiverThreshold: 50000 },
    standard: { annualFee: 1000, waiverThreshold: 100000 },
    premium: { annualFee: 2500, waiverThreshold: 150000 },
    superPremium: { annualFee: 5000, waiverThreshold: 300000 }
  };

  const calculateWaiver = () => {
    const spending = parseFloat(annualSpending);
    const card = cardTypes[cardType as keyof typeof cardTypes];
    
    if (spending && card) {
      const isWaived = spending >= card.waiverThreshold;
      const savings = isWaived ? card.annualFee : 0;
      const shortfall = isWaived ? 0 : card.waiverThreshold - spending;
      
      setResults({
        isWaived,
        savings,
        shortfall,
        threshold: card.waiverThreshold,
        annualFee: card.annualFee
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Fee Waiver Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Spending (₹)</label>
          <input
            type="number"
            value={annualSpending}
            onChange={(e) => setAnnualSpending(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter annual spending"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Type</label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="basic">Basic Card (₹500/year)</option>
            <option value="standard">Standard Card (₹1,000/year)</option>
            <option value="premium">Premium Card (₹2,500/year)</option>
            <option value="superPremium">Super Premium Card (₹5,000/year)</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={calculateWaiver}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
      >
        Check Fee Waiver
      </button>
      
      {results && (
        <div className={`p-6 rounded-lg ${results.isWaived ? 'bg-green-50' : 'bg-yellow-50'}`}>
          <h3 className={`text-xl font-semibold mb-4 ${results.isWaived ? 'text-green-900' : 'text-yellow-900'}`}>
            Fee Waiver Result
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Annual Fee:</span>
              <span className="font-semibold">₹{results.annualFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Waiver Threshold:</span>
              <span className="font-semibold">₹{results.threshold.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Your Spending:</span>
              <span className="font-semibold">₹{parseFloat(annualSpending).toLocaleString()}</span>
            </div>
            <div className="border-t pt-4">
              {results.isWaived ? (
                <div className="text-green-700">
                  <div className="font-semibold text-lg mb-2">✅ Fee Waived!</div>
                  <p>You qualify for fee waiver. Annual savings: ₹{results.savings.toLocaleString()}</p>
                </div>
              ) : (
                <div className="text-yellow-700">
                  <div className="font-semibold text-lg mb-2">⚠️ Fee Not Waived</div>
                  <p>You need to spend ₹{results.shortfall.toLocaleString()} more to qualify for fee waiver.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Credit Score Simulator Component
function CreditScoreSimulator() {
  const [currentScore, setCurrentScore] = useState('');
  const [actions, setActions] = useState<{
    onTimePayments: number;
    latePayments: number;
    creditUtilization: number;
    newCreditInquiries: number;
    creditMix: string;
    age: number;
  }>({
    onTimePayments: 0,
    latePayments: 0,
    creditUtilization: 50,
    newCreditInquiries: 0,
    creditMix: 'good',
    age: 3
  });
  const [simulatedScore, setSimulatedScore] = useState<number | null>(null);

  const simulateScore = () => {
    let score = 700;
    const paymentHistory = actions.onTimePayments;
    const creditUtilization = actions.creditUtilization;
    const age = actions.age;
    const inquiries = actions.newCreditInquiries;
    
    // Payment history impact
    if (paymentHistory >= 99) score += 40;
    else if (paymentHistory >= 95) score += 20;
    else score -= 30;
    
    // Credit utilization impact
    if (creditUtilization <= 10) score += 30;
    else if (creditUtilization <= 30) score += 10;
    else score -= 20;
    
    // Age impact
    if (age >= 5) score += 20;
    else if (age >= 2) score += 10;
    else score -= 10;
    
    // New credit inquiries impact
    if (inquiries <= 2) score += 10;
    else if (inquiries <= 5) score -= 10;
    else score -= 20;
    
    // Credit mix impact
    if (actions.creditMix === 'good') score += 10;
    else score -= 10;
    
    setSimulatedScore(Math.max(300, Math.min(900, score)));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Score Simulator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Credit Score</label>
          <input
            type="number"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter current score (300-900)"
            min="300"
            max="900"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Credit Mix</label>
          <select
            value={actions.creditMix}
            onChange={(e) => setActions({...actions, creditMix: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="excellent">Excellent (Multiple types)</option>
            <option value="good">Good (2-3 types)</option>
            <option value="fair">Fair (1-2 types)</option>
            <option value="poor">Poor (Single type)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age of Credit History (years)</label>
          <input
            type="number"
            value={actions.age}
            onChange={(e) => setActions({ ...actions, age: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="3"
            min="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">On-time Payments (last 12 months)</label>
          <input
            type="number"
            value={actions.onTimePayments}
            onChange={(e) => setActions({ ...actions, onTimePayments: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Late Payments (last 12 months)</label>
          <input
            type="number"
            value={actions.latePayments}
            onChange={(e) => setActions({ ...actions, latePayments: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Credit Utilization (%)</label>
          <input
            type="number"
            value={actions.creditUtilization}
            onChange={(e) => setActions({ ...actions, creditUtilization: parseFloat(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="50"
            min="0"
            max="100"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Credit Inquiries (last 6 months)</label>
          <input
            type="number"
            value={actions.newCreditInquiries}
            onChange={(e) => setActions({ ...actions, newCreditInquiries: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
      </div>
      
      <button
        onClick={simulateScore}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
      >
        Simulate Credit Score
      </button>
      
      {simulatedScore !== null && (
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">Simulation Result</h3>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-3xl font-bold text-purple-600">{simulatedScore}</div>
            <div className="text-purple-700">
              {simulatedScore >= 750 ? 'Excellent' :
               simulatedScore >= 650 ? 'Good' :
               simulatedScore >= 550 ? 'Fair' : 'Poor'}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className={`h-4 rounded-full transition-all duration-500 ${
                simulatedScore >= 750 ? 'bg-green-500' : 
                simulatedScore >= 650 ? 'bg-blue-500' : 
                simulatedScore >= 550 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{width: `${((simulatedScore - 300) / 600) * 100}%`}}
            ></div>
          </div>
          <p className="text-purple-700 text-sm">
            {simulatedScore >= 750 ? 'Great! You have excellent credit health.' :
             simulatedScore >= 650 ? 'Good credit score. Keep maintaining good habits.' :
             simulatedScore >= 550 ? 'Fair score. Focus on improving payment history.' :
             'Poor score. Consider credit counseling and debt management.'}
          </p>
        </div>
      )}
    </div>
  );
} 