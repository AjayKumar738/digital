import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturedCards from '@/components/FeaturedCards';
import CreditCardCategories from '@/components/CreditCardCategories';
import { FullComparisonTable } from '@/components/ComparisonTable';
import ToolsSection from '@/components/ToolsSection';
import BlogSection from '@/components/BlogSection';
import DownloadGuide from '@/components/DownloadGuide';

export const metadata: Metadata = {
  title: 'CrediBundl - Find the Best Credit Cards in India | Compare & Apply',
  description: 'Compare credit cards, find the best rewards, cashback, and travel benefits. Get personalized recommendations and apply for credit cards with exclusive offers.',
  keywords: 'credit cards, best credit cards, cashback cards, travel cards, credit card comparison, rewards cards, india',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark theme for contrast */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <HeroSection />
      </div>
      
      {/* Featured Cards Section */}
      <section className="section-light">
        <div className="container-super-wide">
          <FeaturedCards />
        </div>
      </section>
      
      {/* Credit Card Categories Section */}
      <section className="section-gray">
        <div className="container-super-wide">
          <CreditCardCategories />
        </div>
      </section>
      
      {/* Comparison Table Section */}
      <section className="section-light">
        <div className="container-full-width">
          <FullComparisonTable />
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="section-blue">
        <div className="container-super-wide">
          <ToolsSection />
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="section-light">
        <div className="container-super-wide">
          <BlogSection />
        </div>
      </section>
      
      {/* Download Guide Section */}
      <section className="section-gray">
        <div className="container-super-wide">
          <DownloadGuide />
        </div>
      </section>
    </main>
  );
} 