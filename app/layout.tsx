import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Steven Blake Chen | Senior Frontend Engineer',
    template: '%s | Steven Blake Chen'
  },
  description:
    'Steven Blake Chen is a Senior Frontend Engineer with 10+ years of experience building scalable React applications, frontend architectures, real-time interfaces, and AI-powered product experiences.',
  keywords: [
    'Steven Blake Chen',
    'Senior Frontend Engineer',
    'Senior React Engineer',
    'Frontend Platform Engineer',
    'AI Product Engineer',
    'Frontend Engineer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Frontend Architecture',
    'Web Performance',
    'LLM Application Integration',
    'Semantic Search',
    'AI Assistants',
    'Real-time Systems'
  ],
  authors: [{ name: 'Steven Blake Chen', url: SITE_URL }],
  creator: 'Steven Blake Chen',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Steven Blake Chen | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React architecture, real-time applications, AI-powered interfaces, and high-performance user experiences.',
    siteName: 'Steven Blake Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Blake Chen | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React architecture, real-time applications, AI-powered interfaces, and high-performance user experiences.',
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
    // Add your verification codes here when available
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  url: SITE_URL,
  name: 'Steven Blake Chen',
  jobTitle: 'Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 10+ years of experience building scalable React applications, frontend platforms, real-time interfaces, and AI-powered product experiences.',
  knowsAbout: [
    'React',
    'TypeScript',
    'Next.js',
    'Frontend Architecture',
    'Web Performance',
    'Real-time data synchronization',
    'Semantic search',
    'AI product integration',
    'Performance engineering',
    'Distributed systems'
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Portland State University'
    }
  ],
  worksFor: { '@type': 'Organization', name: 'ZestyAI' },
  email: 'mailto:chensteven890@outlook.com',
  telephone: '+1-917-764-8247',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'WA',
    addressCountry: 'US'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only z-[100] rounded bg-cyan-200 px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
