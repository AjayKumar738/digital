'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SimpleSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    toast.success('Search opened!');
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="p-2 text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Search</h2>
            <p className="mb-4">Search functionality is working!</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-primary-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
} 