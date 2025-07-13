'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Credit Cards': [
      'Lifetime Free Cards',
      'Cashback Cards',
      'Travel Cards',
      'Fuel Cards',
      'Business Cards',
      'Luxury Cards'
    ],
    'Tools': [
      'Card Comparison',
      'EMI Calculator',
      'Lounge Access Checker',
      'Reward Calculator',
      'Statement Analyzer'
    ],
    'Resources': [
      'Blog',
      'Credit Card Guide',
      'FAQ',
      'Contact Us',
      'About Us'
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Disclaimer',
      'Cookie Policy'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="text-xl font-display font-bold">
                CrediBundl
              </span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Your trusted partner for finding the best credit cards in India. Compare, analyze, and apply for credit cards with exclusive offers and personalized recommendations.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300">
                <Mail className="w-4 h-4" />
                <span>hello@credibundl.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-300 text-sm mb-4 md:mb-0">
              © 2024 CrediBundl. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 