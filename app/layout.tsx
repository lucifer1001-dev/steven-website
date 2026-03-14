import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Steven Chen | Senior Software Engineer',
    template: '%s | Steven Chen'
  },
  description:
    'Steven Chen is a Senior Software Engineer with 10+ years of experience building high-performance React and TypeScript applications, complex data-intensive interfaces, and AI-powered visualization platforms.',
  keywords: [
    'Steven Chen',
    'Senior Software Engineer',
    'Frontend Engineer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Frontend Architecture',
    'Web Performance',
    'Data Visualization',
    'AI Interfaces',
    'Analytics Dashboards',
    'Collaborative Editors'
  ],
  authors: [{ name: 'Steven Chen' }],
  creator: 'Steven Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Steven Chen | Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in React, TypeScript, and high-performance, data-intensive web applications.',
    siteName: 'Steven Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Chen | Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in React, TypeScript, and high-performance, data-intensive web applications.',
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
  name: 'Steven Chen',
  jobTitle: 'Senior Software Engineer',
  description:
    'Senior Software Engineer with 10+ years of experience building high-performance web applications, collaborative editors, analytics dashboards, and AI-driven visualization platforms.',
  knowsAbout: [
    'React',
    'TypeScript',
    'Next.js',
    'Frontend Architecture',
    'Web Performance',
    'Data Visualization',
    'AI & Data Applications',
    'Collaborative Editors',
    'Analytics Dashboards'
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Portland State University'
    },
    {
      '@type': 'Organization',
      name: 'The Evergreen State College'
    }
  ],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Restb.ai'
    },
    {
      '@type': 'Organization',
      name: 'Canva'
    },
    {
      '@type': 'Organization',
      name: 'Globant'
    },
    {
      '@type': 'Organization',
      name: 'Google'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
