import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageBackground from '@/components/PageBackground'
import Resume from '@/components/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume for Steven Blake Chen, a Senior Frontend Engineer specializing in React, TypeScript, real-time applications, and AI-powered product experiences.',
  alternates: { canonical: '/resume' },
}

export default function ResumePage() {
  return <main id="main-content" className="min-h-screen relative overflow-hidden"><PageBackground variant="skills" /><div className="relative z-[1]"><Navigation /><Resume /><Footer /></div></main>
}
