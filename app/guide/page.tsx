import { Metadata } from 'next';
import DownloadGuide from '@/components/DownloadGuide';

export const metadata: Metadata = {
  title: 'Free Credit Card Guide Download | CrediBundl',
  description: 'Download our comprehensive Excel guide with detailed credit card information, rewards, fees, eligibility, and direct application links.',
  keywords: 'credit card guide, excel download, credit card comparison, rewards, fees, eligibility, apply online',
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Free Credit Card Guide
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Download our comprehensive Excel guide with detailed information about all credit cards, 
              including rewards, fees, eligibility, and direct application links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">📊</div>
                <div className="text-sm text-primary-100">Complete Data</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">🔗</div>
                <div className="text-sm text-primary-100">Direct Links</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">📱</div>
                <div className="text-sm text-primary-100">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Guide Component */}
      <DownloadGuide />

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">What's Included in the Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Complete Card Details</h4>
                    <p className="text-sm text-secondary-600">Name, bank, card type, reward structure, and annual fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Reward Breakdown</h4>
                    <p className="text-sm text-secondary-600">Detailed rewards for fuel, groceries, dining, travel, online, and other spends</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Eligibility Criteria</h4>
                    <p className="text-sm text-secondary-600">Minimum income, age requirements, and employment types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Benefits & Features</h4>
                    <p className="text-sm text-secondary-600">Welcome bonus, milestone rewards, lounge access, and insurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Direct Application Links</h4>
                    <p className="text-sm text-secondary-600">Official bank application URLs for instant application</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">How to Use the Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Download & Open</h4>
                    <p className="text-sm text-secondary-600">Download the CSV file and open it in Excel or Google Sheets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Filter & Sort</h4>
                    <p className="text-sm text-secondary-600">Use Excel filters to find cards matching your criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Compare Options</h4>
                    <p className="text-sm text-secondary-600">Compare rewards, fees, and benefits side by side</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Apply Directly</h4>
                    <p className="text-sm text-secondary-600">Click the application links to apply directly with banks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Get Support</h4>
                    <p className="text-sm text-secondary-600">Contact our experts for personalized assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-900 mb-2">Is the guide really free?</h3>
              <p className="text-secondary-600 text-sm">Yes, our comprehensive credit card guide is completely free to download. No registration or payment required.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-900 mb-2">How often is the data updated?</h3>
              <p className="text-secondary-600 text-sm">We update our credit card database monthly to ensure all information is current and accurate.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-900 mb-2">Can I get personalized recommendations?</h3>
              <p className="text-secondary-600 text-sm">Absolutely! Contact our experts via phone, email, or WhatsApp for personalized credit card recommendations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-secondary-900 mb-2">Are the application links safe?</h3>
              <p className="text-secondary-600 text-sm">Yes, all application links are official bank URLs that we verify regularly for security and authenticity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 