'use client';

import { motion } from 'framer-motion';
import { ExternalLink, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

interface ApplyButtonProps {
  cardName: string;
  bankName: string;
  applyLink: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function ApplyButton({ 
  cardName, 
  bankName, 
  applyLink, 
  className = '',
  size = 'md',
  variant = 'primary'
}: ApplyButtonProps) {
  
  const handleApply = () => {
    // Track application click
    console.log(`Apply clicked for ${cardName} from ${bankName}`);
    
    // Show success toast
    toast.success(`Redirecting to ${bankName} application page...`);
    
    // Open in new tab
    window.open(applyLink, '_blank', 'noopener,noreferrer');
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300',
    outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-600 hover:border-blue-700'
  };

  return (
    <motion.button
      onClick={handleApply}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        font-semibold rounded-lg transition-all duration-200 
        flex items-center gap-2 group
        ${className}
      `}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <CreditCard className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'}`} />
      <span>Apply Now</span>
      <ExternalLink className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} group-hover:translate-x-0.5 transition-transform`} />
    </motion.button>
  );
} 