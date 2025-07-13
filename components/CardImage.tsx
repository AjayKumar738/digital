'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardImageProps {
  cardName: string;
  bankName: string;
  cardType?: string;
  className?: string;
}

export default function CardImage({ cardName, bankName, cardType = 'Credit Card', className = '' }: CardImageProps) {
  // Enhanced color schemes with more vibrant gradients
  const getBankColors = (bank: string) => {
    const bankLower = bank.toLowerCase();
    if (bankLower.includes('hdfc')) return { 
      primary: '#FF6B35', 
      secondary: '#F7931E',
      accent: '#FFD700',
      gradientId: 'hdfc-gradient'
    };
    if (bankLower.includes('sbi')) return { 
      primary: '#1E3A8A', 
      secondary: '#3B82F6',
      accent: '#60A5FA',
      gradientId: 'sbi-gradient'
    };
    if (bankLower.includes('icici')) return { 
      primary: '#059669', 
      secondary: '#10B981',
      accent: '#34D399',
      gradientId: 'icici-gradient'
    };
    if (bankLower.includes('axis')) return { 
      primary: '#DC2626', 
      secondary: '#EF4444',
      accent: '#F87171',
      gradientId: 'axis-gradient'
    };
    if (bankLower.includes('kotak')) return { 
      primary: '#7C3AED', 
      secondary: '#8B5CF6',
      accent: '#A78BFA',
      gradientId: 'kotak-gradient'
    };
    if (bankLower.includes('yes')) return { 
      primary: '#059669', 
      secondary: '#10B981',
      accent: '#34D399',
      gradientId: 'yes-gradient'
    };
    if (bankLower.includes('idfc')) return { 
      primary: '#DC2626', 
      secondary: '#EF4444',
      accent: '#F87171',
      gradientId: 'idfc-gradient'
    };
    if (bankLower.includes('indusind')) return { 
      primary: '#7C3AED', 
      secondary: '#8B5CF6',
      accent: '#A78BFA',
      gradientId: 'indusind-gradient'
    };
    if (bankLower.includes('rbl')) return { 
      primary: '#1E3A8A', 
      secondary: '#3B82F6',
      accent: '#60A5FA',
      gradientId: 'rbl-gradient'
    };
    if (bankLower.includes('amazon')) return { 
      primary: '#FF6B35', 
      secondary: '#F7931E',
      accent: '#FFD700',
      gradientId: 'amazon-gradient'
    };
    if (bankLower.includes('flipkart')) return { 
      primary: '#059669', 
      secondary: '#10B981',
      accent: '#34D399',
      gradientId: 'flipkart-gradient'
    };
    if (bankLower.includes('paytm')) return { 
      primary: '#1E3A8A', 
      secondary: '#3B82F6',
      accent: '#60A5FA',
      gradientId: 'paytm-gradient'
    };
    
    // Default colors with rainbow gradient
    return { 
      primary: '#6B7280', 
      secondary: '#9CA3AF',
      accent: '#D1D5DB',
      gradientId: 'default-gradient'
    };
  };

  const colors = getBankColors(bankName);
  
  // Enhanced card design with more categories
  const getCardDesign = (name: string) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('regalia') || nameLower.includes('premium') || nameLower.includes('elite')) return 'premium';
    if (nameLower.includes('cashback') || nameLower.includes('rewards') || nameLower.includes('cash')) return 'cashback';
    if (nameLower.includes('travel') || nameLower.includes('miles') || nameLower.includes('airline')) return 'travel';
    if (bankName.toLowerCase().includes('amazon') || bankName.toLowerCase().includes('flipkart')) return 'ecommerce';
    if (nameLower.includes('fuel') || nameLower.includes('petrol') || nameLower.includes('gas')) return 'fuel';
    if (nameLower.includes('lifetime') || nameLower.includes('free')) return 'lifetime';
    return 'standard';
  };

  const design = getCardDesign(cardName);

  const getDesignElements = () => {
    switch (design) {
      case 'premium':
        return {
          pattern: (
            <defs>
              <pattern id="premium-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.15)"/>
                <circle cx="5" cy="5" r="0.5" fill="rgba(255,215,0,0.3)"/>
                <circle cx="15" cy="15" r="0.5" fill="rgba(255,215,0,0.3)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#premium-pattern)",
          glow: "0 0 20px rgba(255,215,0,0.5)"
        };
      case 'cashback':
        return {
          pattern: (
            <defs>
              <pattern id="cashback-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="15" height="15" fill="rgba(255,255,255,0.08)"/>
                <rect x="15" y="15" width="15" height="15" fill="rgba(255,255,255,0.08)"/>
                <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.1)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#cashback-pattern)",
          glow: "0 0 15px rgba(34,197,94,0.4)"
        };
      case 'travel':
        return {
          pattern: (
            <defs>
              <pattern id="travel-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 10 L25 15 L20 20 L15 15 Z" fill="rgba(255,255,255,0.12)"/>
                <circle cx="20" cy="20" r="2" fill="rgba(59,130,246,0.3)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#travel-pattern)",
          glow: "0 0 15px rgba(59,130,246,0.4)"
        };
      case 'ecommerce':
        return {
          pattern: (
            <defs>
              <pattern id="ecommerce-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="12.5" height="12.5" fill="rgba(255,255,255,0.1)"/>
                <rect x="12.5" y="12.5" width="12.5" height="12.5" fill="rgba(255,255,255,0.1)"/>
                <path d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z" fill="rgba(255,255,255,0.05)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#ecommerce-pattern)",
          glow: "0 0 15px rgba(245,158,11,0.4)"
        };
      case 'fuel':
        return {
          pattern: (
            <defs>
              <pattern id="fuel-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="3" fill="rgba(255,255,255,0.12)"/>
                <circle cx="6" cy="6" r="1.5" fill="rgba(34,197,94,0.3)"/>
                <circle cx="19" cy="19" r="1.5" fill="rgba(34,197,94,0.3)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#fuel-pattern)",
          glow: "0 0 15px rgba(34,197,94,0.4)"
        };
      case 'lifetime':
        return {
          pattern: (
            <defs>
              <pattern id="lifetime-pattern" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                <path d="M17.5 5 L22.5 15 L17.5 25 L12.5 15 Z" fill="rgba(255,255,255,0.1)"/>
                <circle cx="17.5" cy="17.5" r="4" fill="rgba(34,197,94,0.2)"/>
              </pattern>
            </defs>
          ),
          patternFill: "url(#lifetime-pattern)",
          glow: "0 0 15px rgba(34,197,94,0.4)"
        };
      default:
        return {
          pattern: null,
          patternFill: "none",
          glow: "0 0 10px rgba(107,114,128,0.3)"
        };
    }
  };

  const designElements = getDesignElements();

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div 
        className={`relative flex justify-center items-center ${className}`}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="70%"
          height="auto"
          viewBox="0 0 340 200"
          className="rounded-lg shadow-lg"
          style={{ filter: designElements.glow, display: 'block', margin: '0 auto' }}
        >
          <defs>
            {/* Define unique gradient for each bank */}
            <linearGradient id={colors.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.accent} />
            </linearGradient>
            
            {/* Shimmer effect */}
            <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          
          {designElements.pattern}
          
          {/* Card Background with unique gradient for each bank */}
          <rect
            width="340"
            height="200"
            rx="12"
            ry="12"
            fill={`url(#${colors.gradientId})`}
            style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' }}
          />
          
          {/* Shimmer effect */}
          <rect
            width="340"
            height="200"
            rx="12"
            ry="12"
            fill="url(#shimmer)"
            opacity="0.3"
          />
          
          {/* Pattern Overlay */}
          <rect
            width="340"
            height="200"
            rx="12"
            ry="12"
            fill={designElements.patternFill}
          />
          
          {/* Enhanced Bank Logo Area */}
          <rect x="20" y="20" width="70" height="35" fill="rgba(255,255,255,0.25)" rx="6"/>
          <text x="55" y="42" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
            {bankName.split(' ')[0]}
          </text>
          
          {/* Card Type with enhanced styling */}
          <text x="20" y="160" fill="white" fontSize="11" fontWeight="400" opacity="0.9">
            {cardType}
          </text>
          
          {/* Enhanced Card Number with better spacing */}
          <text x="20" y="180" fill="white" fontSize="13" fontWeight="600" fontFamily="monospace" letterSpacing="2">
            •••• •••• •••• 1234
          </text>
          
          {/* Card Name with better truncation */}
          <text x="20" y="195" fill="white" fontSize="9" fontWeight="500" opacity="0.9">
            {cardName.length > 18 ? cardName.substring(0, 18) + '...' : cardName}
          </text>
          
          {/* Enhanced Chip with 3D effect */}
          <rect x="280" y="140" width="45" height="35" fill="rgba(255,255,255,0.4)" rx="6"/>
          <rect x="285" y="145" width="35" height="25" fill="rgba(255,255,255,0.6)" rx="4"/>
          <rect x="290" y="150" width="25" height="15" fill="rgba(0,0,0,0.3)" rx="2"/>
          
          {/* Enhanced Contactless Symbol */}
          <g transform="translate(300, 50)">
            <rect x="0" y="0" width="25" height="15" fill="rgba(255,255,255,0.3)" rx="3"/>
            <text x="12.5" y="10" textAnchor="middle" fill="white" fontSize="8">📶</text>
          </g>
          
          {/* Enhanced Decorative Elements */}
          <circle cx="320" cy="30" r="10" fill="rgba(255,255,255,0.15)"/>
          <circle cx="320" cy="30" r="6" fill="rgba(255,255,255,0.4)"/>
          <circle cx="320" cy="30" r="3" fill="rgba(255,255,255,0.8)"/>
          
          {/* Bottom Right Brand with enhanced styling */}
          <text x="320" y="195" textAnchor="end" fill="white" fontSize="9" fontWeight="500" opacity="0.8">
            CREDIT
          </text>
          
          {/* Additional decorative elements based on card type */}
          {design === 'premium' && (
            <>
              <circle cx="50" cy="160" r="2" fill="rgba(255,215,0,0.6)"/>
              <circle cx="60" cy="160" r="1.5" fill="rgba(255,215,0,0.4)"/>
              <circle cx="70" cy="160" r="1" fill="rgba(255,215,0,0.3)"/>
            </>
          )}
          
          {design === 'cashback' && (
            <>
              <rect x="50" y="155" width="20" height="8" fill="rgba(34,197,94,0.3)" rx="4"/>
              <text x="60" y="161" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">CASH</text>
            </>
          )}
          
          {design === 'travel' && (
            <>
              <path d="M50 155 L55 160 L50 165 L45 160 Z" fill="rgba(59,130,246,0.4)"/>
              <path d="M65 155 L70 160 L65 165 L60 160 Z" fill="rgba(59,130,246,0.3)"/>
            </>
          )}
          
          {design === 'ecommerce' && (
            <>
              <rect x="50" y="155" width="15" height="8" fill="rgba(245,158,11,0.4)" rx="2"/>
              <text x="57.5" y="161" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ECO</text>
            </>
          )}
          
          {design === 'fuel' && (
            <>
              <circle cx="55" cy="160" r="3" fill="rgba(34,197,94,0.4)"/>
              <circle cx="70" cy="160" r="2" fill="rgba(34,197,94,0.3)"/>
            </>
          )}
          
          {design === 'lifetime' && (
            <>
              <path d="M50 155 L55 160 L50 165 L45 160 Z" fill="rgba(34,197,94,0.4)"/>
              <text x="60" y="161" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">FREE</text>
            </>
          )}
        </svg>
      </motion.div>
    </div>
  );
} 