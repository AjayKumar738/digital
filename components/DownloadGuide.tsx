'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileSpreadsheet, Phone, Mail, MessageCircle, X } from 'lucide-react';
import CustomerDataForm from './CustomerDataForm';

export default function DownloadGuide() {
  const [showForm, setShowForm] = useState(false);

  const handleContact = (method: string) => {
    switch (method) {
      case 'phone':
        window.location.href = 'tel:+197989994695';
        break;
      case 'email':
        window.location.href = 'mailto:support@credibundl.com';
        break;
      case 'whatsapp':
        window.open('https://wa.me/197989994695?text=Hi, I need help with credit card selection', '_blank');
        break;
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileSpreadsheet className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
                Get Your Free Credit Card Guide
              </h2>
              <Download className="w-8 h-8 text-primary-600" />
            </div>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Download our comprehensive Excel guide with detailed information about all credit cards, 
              including rewards, fees, eligibility, and direct application links.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Complete Credit Card Guide
                </h3>
                <p className="text-secondary-600">
                  Get detailed information about all credit cards in one Excel file
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary-700">Complete card details and specifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary-700">Reward rates and benefits breakdown</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary-700">Eligibility criteria and income requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary-700">Direct application links to official banks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary-700">Pros, cons, and feature comparisons</span>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download Excel Guide
              </button>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Need Personal Assistance?
                </h3>
                <p className="text-secondary-600">
                  Our credit card experts are here to help you choose the perfect card
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleContact('phone')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call: +19 798 999 46 95
                </button>

                <button
                  onClick={() => handleContact('email')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Email: support@credibundl.com
                </button>

                <button
                  onClick={() => handleContact('whatsapp')}
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: +19 798 999 46 95
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">What you'll get:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Personalized card recommendations</li>
                  <li>• Application process guidance</li>
                  <li>• Fee waiver strategies</li>
                  <li>• Reward optimization tips</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Guide?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Comprehensive Data</h4>
                <p className="text-primary-100 text-sm">
                  Complete information about rewards, fees, eligibility, and benefits
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔗</div>
                <h4 className="font-semibold mb-2">Direct Links</h4>
                <p className="text-primary-100 text-sm">
                  Official bank application links for instant application
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold mb-2">Expert Support</h4>
                <p className="text-primary-100 text-sm">
                  Get personalized assistance from our credit card experts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Data Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <CustomerDataForm 
              source="guide-section"
              onSuccess={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </>
  );
} 