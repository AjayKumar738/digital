import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrediBundl - Find the Best Credit Cards in India',
  description: 'Compare credit cards, find the best rewards, cashback, and travel benefits. Get personalized recommendations and apply for credit cards with exclusive offers.',
  keywords: 'credit cards, best credit cards, cashback cards, travel cards, credit card comparison, rewards cards',
  authors: [{ name: 'CrediBundl' }],
  openGraph: {
    title: 'CrediBundl - Find the Best Credit Cards in India',
    description: 'Compare credit cards, find the best rewards, cashback, and travel benefits.',
    url: 'https://credibundl.com',
    siteName: 'CrediBundl',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CrediBundl - Credit Card Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrediBundl - Find the Best Credit Cards in India',
    description: 'Compare credit cards, find the best rewards, cashback, and travel benefits.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#1e293b',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </body>
    </html>
  )
} 