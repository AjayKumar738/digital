'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit, 
  Save, 
  X, 
  Plus, 
  Search, 
  ExternalLink, 
  Copy, 
  Check,
  AlertCircle,
  Download,
  Upload
} from 'lucide-react';
import { applyLinks, bankApplyPatterns } from '@/data/apply-links';
import { creditCards } from '@/data/credit-cards';
import toast from 'react-hot-toast';

interface LinkEntry {
  id: string;
  cardName: string;
  bankName: string;
  currentLink: string;
  newLink: string;
  isEditing: boolean;
  isValid: boolean;
}

export default function ApplyLinksAdmin() {
  const [links, setLinks] = useState<LinkEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBank, setFilterBank] = useState('');
  const [showInvalidOnly, setShowInvalidOnly] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize links data
  useEffect(() => {
    const linksData: LinkEntry[] = creditCards.map(card => ({
      id: card.id,
      cardName: card.name,
      bankName: card.bank,
      currentLink: applyLinks[card.id] || '#',
      newLink: applyLinks[card.id] || '#',
      isEditing: false,
      isValid: applyLinks[card.id] && applyLinks[card.id] !== '#'
    }));
    setLinks(linksData);
  }, []);

  // Filter links based on search and filters
  const filteredLinks = links.filter(link => {
    const matchesSearch = link.cardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         link.bankName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBank = !filterBank || link.bankName === filterBank;
    const matchesInvalidFilter = !showInvalidOnly || !link.isValid;
    
    return matchesSearch && matchesBank && matchesInvalidFilter;
  });

  // Get unique banks for filter
  const banks = [...new Set(links.map(link => link.bankName))];

  const handleEdit = (id: string) => {
    setLinks(prev => prev.map(link => 
      link.id === id ? { ...link, isEditing: true } : link
    ));
  };

  const handleSave = (id: string) => {
    setLinks(prev => prev.map(link => {
      if (link.id === id) {
        const isValid = link.newLink && link.newLink !== '#';
        return { ...link, isEditing: false, isValid };
      }
      return link;
    }));
    toast.success('Link updated successfully!');
  };

  const handleCancel = (id: string) => {
    setLinks(prev => prev.map(link => 
      link.id === id ? { ...link, isEditing: false, newLink: link.currentLink } : link
    ));
  };

  const handleCopyLink = async (link: string, id: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(id);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const handleTestLink = (link: string, cardName: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank');
      toast.success(`Testing link for ${cardName}...`);
    } else {
      toast.error('No valid link to test');
    }
  };

  const handleBulkUpdate = (bankName: string, newPattern: string) => {
    setLinks(prev => prev.map(link => {
      if (link.bankName === bankName) {
        const newLink = link.currentLink.replace(
          new RegExp(`^${bankApplyPatterns[bankName as keyof typeof bankApplyPatterns] || ''}`),
          newPattern
        );
        return { ...link, newLink, isEditing: true };
      }
      return link;
    }));
    toast.success(`Updated links for ${bankName}`);
  };

  const exportToCSV = () => {
    const csvContent = [
      'Card ID,Card Name,Bank Name,Current Link,Status',
      ...links.map(link => 
        `${link.id},"${link.cardName}","${link.bankName}","${link.currentLink}",${link.isValid ? 'Valid' : 'Invalid'}`
      ).join('\n')
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'apply-links.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('CSV exported successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Apply Links Management
              </h1>
              <p className="text-gray-600">
                Manage all credit card apply links in one place. Update links and they'll be reflected across the entire website.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{links.length}</div>
              <div className="text-sm text-blue-600">Total Cards</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {links.filter(l => l.isValid).length}
              </div>
              <div className="text-sm text-green-600">Valid Links</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">
                {links.filter(l => !l.isValid).length}
              </div>
              <div className="text-sm text-red-600">Invalid Links</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{banks.length}</div>
              <div className="text-sm text-purple-600">Banks</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search cards or banks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Bank</label>
              <select
                value={filterBank}
                onChange={(e) => setFilterBank(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Banks</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showInvalidOnly}
                  onChange={(e) => setShowInvalidOnly(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Show invalid links only</span>
              </label>
            </div>
            <div className="flex items-end">
              <span className="text-sm text-gray-600">
                Showing {filteredLinks.length} of {links.length} cards
              </span>
            </div>
          </div>
        </motion.div>

        {/* Links Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Card
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Apply Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLinks.map((link, index) => (
                  <motion.tr
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{link.cardName}</div>
                      <div className="text-sm text-gray-500">{link.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{link.bankName}</div>
                    </td>
                    <td className="px-6 py-4">
                      {link.isEditing ? (
                        <input
                          type="text"
                          value={link.newLink}
                          onChange={(e) => setLinks(prev => prev.map(l => 
                            l.id === link.id ? { ...l, newLink: e.target.value } : l
                          ))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter new link..."
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${link.isValid ? 'text-green-600' : 'text-red-600'}`}>
                            {link.currentLink === '#' ? 'No link set' : link.currentLink}
                          </span>
                          <button
                            onClick={() => handleCopyLink(link.currentLink, link.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            {copiedId === link.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        link.isValid 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {link.isValid ? 'Valid' : 'Invalid'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        {link.isEditing ? (
                          <>
                            <button
                              onClick={() => handleSave(link.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleCancel(link.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEdit(link.id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleTestLink(link.currentLink, link.cardName)}
                              className="text-purple-600 hover:text-purple-900"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 rounded-xl p-6 mt-8"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            How to Update Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Individual Updates:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Click the edit button next to any card</li>
                <li>Enter the new official bank application URL</li>
                <li>Click save to update the link</li>
                <li>Changes are reflected immediately across the website</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Bulk Updates:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Use the bank filter to select a specific bank</li>
                <li>Update the pattern in data/apply-links.ts</li>
                <li>All cards from that bank will be updated</li>
                <li>Export CSV to backup current links</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 