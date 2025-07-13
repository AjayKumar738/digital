'use client';

import { motion } from 'framer-motion';
import { Search, CreditCard, TrendingUp, Shield, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import GlobalSearch from './GlobalSearch';

export default function HeroSection() {
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);

  const handleOpenSearch = () => {
    setIsGlobalSearchOpen(true);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-8 md:py-12">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        
        {/* Subtle animated overlays */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(15, 23, 42, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Professional geometric elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-32 h-32 border border-slate-600/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-24 h-24 border border-slate-600/30 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-700/20 rounded-full"
          />
        </div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-20 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg shadow-lg opacity-40 transform rotate-6"
      />
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-28 h-16 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-lg shadow-lg opacity-40 transform -rotate-6"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Find the Best
              <br />
              <span className="text-blue-300 font-bold">
                Credit Cards
              </span>
              <br />
              <span className="text-white">in India</span>
            </h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
              Compare credit cards, maximize rewards, and save money with 
              <span className="text-blue-300 font-semibold"> personalized recommendations</span>
            </motion.p>
          </motion.div>

          {/* Professional Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CreditCard className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Compare Cards</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Side-by-side comparison of features, rewards, and fees with detailed analysis
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Maximize Rewards</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Get personalized recommendations based on your spending patterns and lifestyle
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Safe & Secure</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Apply through trusted partners with secure processes and data protection
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-1/3 w-6 h-6 text-slate-400 opacity-40"
      >
        <Star className="w-full h-full" />
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 left-1/3 w-4 h-4 text-slate-400 opacity-40"
      >
        <Sparkles className="w-full h-full" />
      </motion.div>
      
      {/* Global Search Modal */}
      {isGlobalSearchOpen && <GlobalSearch />}
    </section>
  );
} 