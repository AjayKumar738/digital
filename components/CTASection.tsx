'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Mail, Download } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardType: ''
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I need help finding the best credit card for my needs.');
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleGetGuide = () => {
    toast.success('Downloading free guide...');
    // Add actual guide download functionality
    // window.open('/downloads/credit-card-guide.pdf', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Thank you! Your free guide is being sent to your email.');
    setFormData({ name: '', email: '', phone: '', cardType: '' });
    
    // Add actual form submission logic here
    // await submitForm(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Find Your Perfect Credit Card?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get personalized recommendations and exclusive offers. Our experts are here to help you choose the best credit card for your needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-primary-100">Free credit card consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <span className="text-primary-100">Exclusive offers and deals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-primary-100">24/7 customer support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </button>
              <button 
                onClick={handleGetGuide}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Guide
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20"
          >
            <h3 className="text-xl font-semibold mb-6">Get Your Free Credit Card Guide</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div>
                <select 
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:border-white"
                >
                  <option value="" className="text-secondary-900">Select Card Type</option>
                  <option value="cashback" className="text-secondary-900">Cashback Cards</option>
                  <option value="travel" className="text-secondary-900">Travel Cards</option>
                  <option value="fuel" className="text-secondary-900">Fuel Cards</option>
                  <option value="business" className="text-secondary-900">Business Cards</option>
                  <option value="luxury" className="text-secondary-900">Luxury Cards</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer"
              >
                Get Free Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
            
            <p className="text-xs text-primary-200 mt-4 text-center">
              By submitting, you agree to receive marketing communications from CrediBundl
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 