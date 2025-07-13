"use client";

import { useState, useMemo } from "react";
import { creditCards } from "@/data/credit-cards";
import { getApplyLink } from "@/data/apply-links";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, Filter, Search, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";
import CardImage from "./CardImage";
import ApplyButton from "./ApplyButton";

const columns = [
  { key: "image", label: "" },
  { key: "name", label: "Card Name" },
  { key: "bank", label: "Bank" },
  { key: "cardType", label: "Type" },
  { key: "rewardType", label: "Reward Type" },
  { key: "bestSpendCategory", label: "Best For" },
  { key: "rewardRate", label: "Reward Rate (%)" },
  { key: "upiRewards", label: "UPI Rewards" },
  { key: "loungeAccess", label: "Lounge Access" },
  { key: "annualFee", label: "Annual Fee" },
  { key: "annualFeeWaiverSpend", label: "Fee Waiver Spend" },
  { key: "monthlySpend", label: "Monthly Spend" },
  { key: "monthlyCashback", label: "Est. Monthly Cashback" },
  { key: "annualCashback", label: "Est. Annual Cashback" },
  { key: "isFeeWaived", label: "Fee Waived" },
  { key: "netAnnualSavings", label: "Net Annual Savings" },
  { key: "apply", label: "" },
];

export default function ComparisonTable() {
  const [monthlySpend, setMonthlySpend] = useState(50000);
  const [order, setOrder] = useState(columns.map((c) => c.key));
  const [selectedCards, setSelectedCards] = useState<string[]>(() => {
    // Load pre-selected cards from localStorage
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('selectedCards') || '[]');
    }
    return [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCards, setShowAllCards] = useState(true);

  // Update localStorage when selectedCards changes
  const updateSelectedCards = (newSelection: string[]) => {
    setSelectedCards(newSelection);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedCards', JSON.stringify(newSelection));
    }
  };

  // Allow user to reorder columns
  const handleColumnMove = (fromIdx: number, toIdx: number) => {
    if (fromIdx === toIdx) return;
    const newOrder = [...order];
    const [moved] = newOrder.splice(fromIdx, 1);
    newOrder.splice(toIdx, 0, moved);
    setOrder(newOrder);
  };

  const toggleCardSelection = (cardId: string) => {
    const newSelection = selectedCards.includes(cardId) 
      ? selectedCards.filter(id => id !== cardId)
      : [...selectedCards, cardId];
    updateSelectedCards(newSelection);
  };

  const selectAllCards = () => {
    updateSelectedCards(creditCards.map(card => card.id));
  };

  const clearSelection = () => {
    updateSelectedCards([]);
  };

  const filteredCards = useMemo(() => {
    return creditCards
      .filter(card => 
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.bank.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort by name alphabetically
  }, [searchQuery]);

  const cardsToShow = showAllCards ? filteredCards : filteredCards.filter(card => selectedCards.includes(card.id));

  const rows = useMemo(() => {
    return cardsToShow
      .sort((a, b) => a.name.localeCompare(b.name)) // Sort by name alphabetically
      .map((card) => {
        const monthlyCashback = (monthlySpend * card.rewardRate) / 100;
        const annualCashback = monthlyCashback * 12;
        const isFeeWaived = monthlySpend * 12 >= card.annualFeeWaiverSpend;
        const netAnnualSavings = annualCashback - (isFeeWaived ? 0 : card.annualFee);
        return {
          ...card,
          monthlySpend,
          monthlyCashback,
          annualCashback,
          isFeeWaived,
          netAnnualSavings,
        };
      });
  }, [cardsToShow, monthlySpend]);

  return (
    <div className="min-h-screen bg-secondary-50 py-10">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-secondary-900">
            Credit Card Comparison Tool
          </h1>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Select cards to compare and input your monthly spending to see real-time calculations of potential cashback, annual savings, and fee waivers.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Monthly Spend Input */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">Monthly Spend (₹):</label>
              <input
                type="number"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                min={1000}
                max={1000000}
              />
            </div>

            {/* Search */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">Search Cards:</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name or bank..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">View:</label>
              <select
                value={showAllCards ? "all" : "selected"}
                onChange={(e) => setShowAllCards(e.target.value === "all")}
                className="px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
              >
                <option value="all">All Cards ({filteredCards.length})</option>
                <option value="selected">Selected Cards ({selectedCards.length})</option>
              </select>
            </div>

            {/* Selection Actions */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">Actions:</label>
              <div className="flex gap-2">
                <button
                  onClick={selectAllCards}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Select All
                </button>
                <button
                  onClick={clearSelection}
                  className="flex-1 bg-secondary-200 hover:bg-secondary-300 text-secondary-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Minus className="w-4 h-4 mr-1" />
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Selection Grid */}
        {showAllCards && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Select Cards to Compare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedCards.includes(card.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-secondary-200 hover:border-primary-300'
                  }`}
                  onClick={() => toggleCardSelection(card.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8">
                      <CardImage cardName={card.name} bankName={card.bank} className="w-full h-auto" />
                    </div>
                    <div className="flex-1">
                      <h4 
                        className="font-semibold text-sm text-secondary-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `/card/${card.slug}`;
                        }}
                      >
                        {card.name}
                      </h4>
                      <p className="text-xs text-secondary-500">{card.bank}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedCards.includes(card.id)
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-secondary-300'
                    }`}>
                      {selectedCards.includes(card.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full divide-y divide-secondary-200 text-xs">
            <thead className="bg-blue-50">
              <tr>
                {order.map((colKey, idx) => {
                  const col = columns.find((c) => c.key === colKey);
                  if (!col) return null;
                  return (
                    <th
                      key={col.key}
                      className="px-1 py-1 text-xs font-bold text-blue-800 text-center cursor-move group select-none relative"
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("colIdx", idx.toString());
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const fromIdx = Number(e.dataTransfer.getData("colIdx"));
                        handleColumnMove(fromIdx, idx);
                      }}
                    >
                      {col.label}
                      <span className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 text-xs text-blue-400">↕</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <AnimatePresence>
              <tbody className="divide-y divide-secondary-100">
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: i * 0.01 }}
                    whileHover={{ scale: 1.015, boxShadow: '0 4px 16px #3b82f633' }}
                    className="hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    {order.map((colKey) => {
                      switch (colKey) {
                        case "image":
                          return (
                            <td key="image" className="px-1 py-1 text-center">
                              <div className="w-12 h-8 mx-auto">
                                <CardImage cardName={row.name} bankName={row.bank} className="w-full h-auto" />
                              </div>
                            </td>
                          );
                        case "name":
                          return (
                            <td key="name" className="px-1 py-1 text-center font-semibold text-secondary-900">
                              <div className="flex flex-col items-center">
                                <span 
                                  className="text-xs font-bold text-secondary-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
                                  onClick={() => window.location.href = `/card/${row.slug}`}
                                >
                                  {row.name}
                                </span>
                                <span className="flex items-center gap-1 text-warning-500 font-medium mt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-3 h-3 text-yellow-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                                  <span className="text-xs">{row.rating}</span>
                                </span>
                              </div>
                            </td>
                          );
                        case "bank":
                          return (
                            <td key="bank" className="px-1 py-1 text-center text-secondary-600 text-xs">
                              {row.bank}
                            </td>
                          );
                        case "cardType":
                          return <td key="cardType" className="px-1 py-1 text-center text-xs">{row.cardType}</td>;
                        case "rewardType":
                          return <td key="rewardType" className="px-1 py-1 text-center text-xs">{row.rewardType}</td>;
                        case "bestSpendCategory":
                          return <td key="bestSpendCategory" className="px-1 py-1 text-center text-xs">{row.bestSpendCategory}</td>;
                        case "rewardRate":
                          return <td key="rewardRate" className="px-1 py-1 text-center font-semibold text-success-600 text-xs">{row.rewardRate}%</td>;
                        case "upiRewards":
                          return <td key="upiRewards" className="px-1 py-1 text-center">{row.upiRewards ? <Check className="w-3 h-3 text-green-600 mx-auto" /> : <X className="w-3 h-3 text-gray-400 mx-auto" />}</td>;
                        case "loungeAccess":
                          return <td key="loungeAccess" className="px-1 py-1 text-center">{row.loungeAccess ? <Check className="w-3 h-3 text-green-600 mx-auto" /> : <X className="w-3 h-3 text-gray-400 mx-auto" />}</td>;
                        case "annualFee":
                          return <td key="annualFee" className="px-1 py-1 text-center text-xs">{row.annualFee === 0 ? "Nil" : `₹${row.annualFee.toLocaleString('en-IN')}`}</td>;
                        case "annualFeeWaiverSpend":
                          return <td key="annualFeeWaiverSpend" className="px-1 py-1 text-center text-xs">{row.annualFeeWaiverSpend ? `₹${row.annualFeeWaiverSpend.toLocaleString('en-IN')}` : "-"}</td>;
                        case "monthlySpend":
                          return <td key="monthlySpend" className="px-1 py-1 text-center text-xs">₹{row.monthlySpend.toLocaleString('en-IN')}</td>;
                        case "monthlyCashback":
                          return <td key="monthlyCashback" className="px-1 py-1 text-center text-green-700 font-semibold text-xs">₹{row.monthlyCashback.toLocaleString('en-IN')}</td>;
                        case "annualCashback":
                          return <td key="annualCashback" className="px-1 py-1 text-center text-green-700 font-semibold text-xs">₹{row.annualCashback.toLocaleString('en-IN')}</td>;
                        case "isFeeWaived":
                          return <td key="isFeeWaived" className="px-1 py-1 text-center text-xs">{row.isFeeWaived ? <span className="text-green-600 font-bold">Yes</span> : <span className="text-red-500 font-bold">No</span>}</td>;
                        case "netAnnualSavings":
                          return <td key="netAnnualSavings" className="px-1 py-1 text-center text-blue-700 font-bold text-xs">₹{row.netAnnualSavings.toLocaleString('en-IN')}</td>;
                        case "apply":
                          return (
                            <td key="apply" className="px-1 py-1 text-center">
                              <ApplyButton
                                cardName={row.name}
                                bankName={row.bank}
                                applyLink={getApplyLink(row.id)}
                                size="sm"
                                variant="primary"
                                className="mx-auto"
                              />
                            </td>
                          );
                        default:
                          return <td key={colKey} className="px-1 py-1 text-center text-xs">-</td>;
                      }
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </AnimatePresence>
          </table>
        </div>
      </div>
    </div>
  );
} 

export function FullComparisonTable() {
  const [monthlySpend, setMonthlySpend] = useState(50000);
  const [order, setOrder] = useState(columns.map((c) => c.key));
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = useMemo(() => {
    return creditCards
      .filter(card => 
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.bank.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort by name alphabetically
  }, [searchQuery]);

  const rows = useMemo(() => {
    return filteredCards
      .sort((a, b) => a.name.localeCompare(b.name)) // Sort by name alphabetically
      .map((card) => {
        const monthlyCashback = (monthlySpend * card.rewardRate) / 100;
        const annualCashback = monthlyCashback * 12;
        const isFeeWaived = monthlySpend * 12 >= card.annualFeeWaiverSpend;
        const netAnnualSavings = annualCashback - (isFeeWaived ? 0 : card.annualFee);
        return {
          ...card,
          monthlySpend,
          monthlyCashback,
          annualCashback,
          isFeeWaived,
          netAnnualSavings,
        };
      });
  }, [filteredCards, monthlySpend]);

  return (
    <div className="min-h-screen bg-secondary-50 py-10">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-secondary-900">
            Credit Card Comparison Tool
          </h1>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Compare all credit cards and input your monthly spending to see real-time calculations of potential cashback, annual savings, and fee waivers.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Monthly Spend Input */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">Monthly Spend (₹):</label>
              <input
                type="number"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                min={1000}
                max={1000000}
              />
            </div>

            {/* Search */}
            <div className="flex flex-col">
              <label className="text-secondary-700 font-medium mb-2">Search Cards:</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name or bank..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full divide-y divide-secondary-200 text-xs">
            <thead className="bg-blue-50">
              <tr>
                {order.map((colKey, idx) => {
                  const col = columns.find((c) => c.key === colKey);
                  if (!col) return null;
                  return (
                    <th
                      key={col.key}
                      className="px-1 py-1 text-xs font-bold text-blue-800 text-center cursor-move group select-none relative"
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("colIdx", idx.toString());
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const fromIdx = Number(e.dataTransfer.getData("colIdx"));
                        setOrder((prev) => {
                          const newOrder = [...prev];
                          const [moved] = newOrder.splice(fromIdx, 1);
                          newOrder.splice(idx, 0, moved);
                          return newOrder;
                        });
                      }}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100">
              {rows.map((row, rowIdx) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: rowIdx * 0.04 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 6px 24px #6366f133' }}
                  className="hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                >
                  {order.map((colKey) => {
                    switch (colKey) {
                      case "image":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center">
                            <CardImage cardName={row.name} bankName={row.bank} className="w-12 h-8 mx-auto" />
                          </td>
                        );
                      case "name":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center font-semibold text-secondary-900">
                            <div className="flex flex-col items-center">
                              <span 
                                className="text-xs font-bold text-secondary-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
                                onClick={() => window.location.href = `/card/${row.slug}`}
                              >
                                {row.name}
                              </span>
                              <span className="flex items-center gap-1 text-warning-500 font-medium mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-3 h-3 text-yellow-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                                <span className="text-xs">{row.rating}</span>
                              </span>
                            </div>
                          </td>
                        );
                      case "bank":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-secondary-700 text-xs">
                            {row.bank}
                          </td>
                        );
                      case "cardType":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.cardType}
                          </td>
                        );
                      case "rewardType":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.rewardType}
                          </td>
                        );
                      case "bestSpendCategory":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.bestSpendCategory}
                          </td>
                        );
                      case "rewardRate":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-green-600 font-bold text-xs">
                            {row.rewardRate}%
                          </td>
                        );
                      case "upiRewards":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center">
                            {row.upiRewards ? <Check className="w-3 h-3 text-green-500 mx-auto" /> : <X className="w-3 h-3 text-gray-400 mx-auto" />}
                          </td>
                        );
                      case "loungeAccess":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center">
                            {row.loungeAccess ? <Check className="w-3 h-3 text-green-500 mx-auto" /> : <X className="w-3 h-3 text-gray-400 mx-auto" />}
                          </td>
                        );
                      case "annualFee":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.annualFee === 0 ? "Nil" : `₹${row.annualFee.toLocaleString('en-IN')}`}
                          </td>
                        );
                      case "annualFeeWaiverSpend":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.annualFeeWaiverSpend ? `₹${row.annualFeeWaiverSpend.toLocaleString('en-IN')}` : "-"}
                          </td>
                        );
                      case "monthlySpend":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            ₹{row.monthlySpend.toLocaleString('en-IN')}
                          </td>
                        );
                      case "monthlyCashback":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-green-700 font-semibold text-xs">
                            ₹{row.monthlyCashback.toLocaleString('en-IN')}
                          </td>
                        );
                      case "annualCashback":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-green-700 font-semibold text-xs">
                            ₹{row.annualCashback.toLocaleString('en-IN')}
                          </td>
                        );
                      case "isFeeWaived":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-xs">
                            {row.isFeeWaived ? <span className="text-green-600 font-bold">Yes</span> : <span className="text-red-500 font-bold">No</span>}
                          </td>
                        );
                      case "netAnnualSavings":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center text-blue-700 font-bold text-xs">
                            ₹{row.netAnnualSavings.toLocaleString('en-IN')}
                          </td>
                        );
                      case "apply":
                        return (
                          <td key={colKey} className="px-1 py-1 text-center">
                            <ApplyButton
                              cardName={row.name}
                              bankName={row.bank}
                              applyLink={getApplyLink(row.id)}
                              size="sm"
                              variant="primary"
                              className="mx-auto"
                            />
                          </td>
                        );
                      default:
                        return <td key={colKey} className="px-1 py-1 text-center text-xs">-</td>;
                    }
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 