'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, User, Mail, Phone, MapPin, DollarSign, CreditCard, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface CustomerDataFormProps {
  onSuccess?: () => void;
  source?: string;
}

export default function CustomerDataForm({ onSuccess, source = 'footer' }: CustomerDataFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    monthlyIncome: '',
    preferredCardType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Collect customer data
      const response = await fetch('/api/collect-customer-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      
      // Download the guide
      const downloadResponse = await fetch('/api/download-credit-cards');
      if (downloadResponse.ok) {
        const blob = await downloadResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'credit-cards-guide.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }

      setIsSuccess(true);
      toast.success('Guide downloaded successfully! Check your email for personalized recommendations.');
      
      if (onSuccess) {
        onSuccess();
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          monthlyIncome: '',
          preferredCardType: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your guide has been downloaded. Our experts will contact you soon with personalized recommendations.
        </p>
        <div className="text-sm text-green-600">
          <p>📧 Check your email for additional resources</p>
          <p>📞 Expect a call within 24 hours</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
          Get Your Free Credit Card Guide
        </h3>
        <p className="text-secondary-600">
          Enter your details to download the complete guide and get personalized recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Monthly Income *
            </label>
            <select
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            >
              <option value="">Select monthly income</option>
              <option value="Below ₹25,000">Below ₹25,000</option>
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
              <option value="₹50,000 - ₹75,000">₹50,000 - ₹75,000</option>
              <option value="₹75,000 - ₹1,00,000">₹75,000 - ₹1,00,000</option>
              <option value="Above ₹1,00,000">Above ₹1,00,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Preferred Card Type
            </label>
            <select
              name="preferredCardType"
              value={formData.preferredCardType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            >
              <option value="">Select card type</option>
              <option value="Cashback Cards">Cashback Cards</option>
              <option value="Travel Cards">Travel Cards</option>
              <option value="Lifetime Free Cards">Lifetime Free Cards</option>
              <option value="Fuel Cards">Fuel Cards</option>
              <option value="Business Cards">Business Cards</option>
              <option value="Luxury Cards">Luxury Cards</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download Free Guide
            </>
          )}
        </button>

        <p className="text-xs text-secondary-500 text-center">
          By submitting this form, you agree to receive personalized credit card recommendations and updates from CrediBundl.
        </p>
      </form>
    </motion.div>
  );
} 