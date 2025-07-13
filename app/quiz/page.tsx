"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Star, RefreshCcw } from "lucide-react";
import { creditCards } from "@/data/credit-cards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardImage from '@/components/CardImage';

type Answers = { [key: string]: string };

const questions = [
  {
    id: "spend",
    question: "What do you spend the most on?",
    options: [
      { value: "online", label: "Online Shopping" },
      { value: "travel", label: "Travel & Hotels" },
      { value: "fuel", label: "Fuel" },
      { value: "dining", label: "Dining & Entertainment" },
      { value: "upi", label: "UPI Payments" },
      { value: "all", label: "Everything / General" },
    ],
  },
  {
    id: "fee",
    question: "Do you prefer cards with no annual fee?",
    options: [
      { value: "yes", label: "Yes, Lifetime Free" },
      { value: "no", label: "No, I don't mind a fee for better rewards" },
    ],
  },
  {
    id: "lounge",
    question: "Is airport lounge access important to you?",
    options: [
      { value: "yes", label: "Yes, I want lounge access" },
      { value: "no", label: "No, not needed" },
    ],
  },
  {
    id: "forex",
    question: "Do you want 0% forex markup for international spends?",
    options: [
      { value: "yes", label: "Yes, I travel abroad" },
      { value: "no", label: "No, I rarely spend internationally" },
    ],
  },
];

function getRecommendations(answers: Answers) {
  let filtered = creditCards;
  // Filter by spend
  if (answers.spend) {
    if (answers.spend === "online") filtered = filtered.filter(card => card.bestSpendCategory.toLowerCase().includes("online"));
    else if (answers.spend === "travel") filtered = filtered.filter(card => card.bestSpendCategory.toLowerCase().includes("travel"));
    else if (answers.spend === "fuel") filtered = filtered.filter(card => card.bestSpendCategory.toLowerCase().includes("fuel"));
    else if (answers.spend === "dining") filtered = filtered.filter(card => card.bestSpendCategory.toLowerCase().includes("dining") || card.bestSpendCategory.toLowerCase().includes("entertainment"));
    else if (answers.spend === "upi") filtered = filtered.filter(card => card.upiRewards);
    // 'all' means no filter
  }
  // Filter by annual fee
  if (answers.fee === "yes") filtered = filtered.filter(card => card.annualFee === 0);
  // Filter by lounge access
  if (answers.lounge === "yes") filtered = filtered.filter(card => card.loungeAccess);
  // Filter by forex
  if (answers.forex === "yes") filtered = filtered.filter(card => card.cardType.toLowerCase().includes("forex") || card.bestSpendCategory.toLowerCase().includes("international"));
  // Sort by rating
  filtered = filtered.sort((a, b) => b.rating - a.rating);
  return filtered.slice(0, 2); // Top 2
}

const REVIEW_COUNT = 156; // Example static review count, can be dynamic if available

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('quizAnswers');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [showResult, setShowResult] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('quizShowResult');
    }
    return false;
  });
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
      localStorage.setItem('quizShowResult', showResult ? '1' : '');
    }
  }, [answers, showResult]);

  const handleOption = (qid: string, value: string) => {
    setAnswers(prev => ({ ...prev, [qid]: value }));
    setTimeout(() => {
      if (step < questions.length - 1) setStep(step + 1);
      else setShowResult(true);
    }, 300);
  };
  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setStep(0);
      setAnswers({});
      if (typeof window !== 'undefined') {
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('quizShowResult');
      }
    } else if (step > 0) {
      setStep(step - 1);
    } else {
      router.push("/");
    }
  };
  const recommendations = showResult ? getRecommendations(answers) : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center relative">
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 text-primary-500 hover:text-primary-700 bg-primary-50 rounded-full p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <Sparkles className="w-10 h-10 text-primary-500 mb-2 animate-pulse" />
        <h1 className="text-2xl md:text-3xl font-bold text-primary-700 mb-2 text-center">Credit Card Quiz</h1>
        <div className="w-full max-w-xs mx-auto mb-6">
          <div className="flex items-center gap-2 justify-center mb-2">
            {questions.map((_, i) => (
              <div key={i} className={`h-2 w-8 rounded-full ${i < step || showResult ? "bg-primary-500" : "bg-primary-100"}`}></div>
            ))}
          </div>
        </div>
        {!showResult ? (
          <div className="w-full">
            <h2 className="text-lg font-semibold text-secondary-800 mb-6 text-center">
              {questions[step].question}
            </h2>
            <div className="grid gap-4">
              {questions[step].options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleOption(questions[step].id, opt.value)}
                  className={`w-full px-6 py-4 rounded-xl border-2 text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-200
                    ${answers[questions[step].id] === opt.value ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white border-primary-500" : "bg-white border-primary-100 text-primary-700 hover:bg-primary-50"}
                  `}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center">
            <h2 className="text-xl font-bold text-primary-700 mb-4">Your Best Match{recommendations.length > 1 ? "es" : ""}:</h2>
            <div className={`flex flex-col ${recommendations.length > 1 ? 'md:flex-row md:gap-8' : ''} gap-6 items-center justify-center w-full`}>
              {recommendations.length === 0 && (
                <div className="text-secondary-500">No perfect match found. Try different answers!</div>
              )}
              {recommendations.map((card, idx) => (
                <div
                  key={card.id}
                  className={`relative w-full md:w-1/2 rounded-2xl bg-white shadow-lg border border-primary-100 overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${idx === 0 ? 'ring-2 ring-primary-400' : ''}`}
                >
                  {/* Best Match Badge */}
                  {recommendations.length > 1 && idx === 0 && (
                    <div className="absolute right-4 top-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-10">Best Match</div>
                  )}
                  {/* Card Image at the top */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center relative">
                    <div className="absolute left-4 top-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{card.rating.toFixed(1)} <span className="ml-1">★</span></div>
                    <div className="w-56 h-36 flex items-center justify-center">
                      <CardImage cardName={card.name} bankName={card.bank} className="w-full h-auto" />
                    </div>
                  </div>
                  {/* Card Details */}
                  <div className="w-full p-6 flex flex-col items-center">
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">{card.name}</h3>
                    <div className="text-base text-secondary-500 mb-2">{card.bank}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center text-warning-500 text-lg"><Star className="w-5 h-5 mr-1" />{card.rating.toFixed(1)}</span>
                      <span className="text-xs text-secondary-500">({REVIEW_COUNT} reviews)</span>
                    </div>
                    <div className="flex gap-4 w-full mb-4">
                      <div className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center">
                        <span className="text-xs text-blue-700 font-semibold mb-1">Reward Rate</span>
                        <span className="text-xl font-bold text-blue-900">{card.rewardRate}%</span>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-xl p-4 flex flex-col items-center">
                        <span className="text-xs text-green-700 font-semibold mb-1">Annual Fee</span>
                        <span className="text-xl font-bold text-green-900">{card.annualFee === 0 ? 'Free' : `₹${card.annualFee}`}</span>
                      </div>
                    </div>
                    <div className="w-full bg-purple-50 rounded-xl p-3 mb-4">
                      <span className="block text-xs text-purple-700 font-semibold mb-1">Best For</span>
                      <span className="text-lg font-bold text-purple-900">{card.bestSpendCategory}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 w-full justify-center">
                      {card.upiRewards && <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">⚡ UPI Rewards</span>}
                      {card.loungeAccess && <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">🛋️ Lounge Access</span>}
                      {card.annualFee === 0 && <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">🏷️ Lifetime Free</span>}
                    </div>
                    <div className="flex gap-4 w-full mt-2">
                      <a
                        href={`/card/${card.slug}`}
                        className="flex-1 border-2 border-primary-500 text-primary-700 font-semibold rounded-xl py-2 text-center hover:bg-primary-50 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                      </a>
                      <a
                        href={card.applyLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold rounded-xl py-2 text-center shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setShowResult(false);
                setStep(0);
                setAnswers({});
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('quizAnswers');
                  localStorage.removeItem('quizShowResult');
                }
              }}
              className="mt-8 flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-all"
            >
              <RefreshCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 