import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageBackground from '@/components/PageBackground'
import Resume from '@/components/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume for Steven Chen, a Senior Software Engineer specializing in AI-powered experiences, frontend architecture, real-time applications, and performance.',
  alternates: { canonical: '/resume' },
}

export default function ResumePage() {
  return <main id="main-content" className="min-h-screen relative overflow-hidden"><PageBackground variant="skills" /><div className="relative z-[1]"><Navigation /><Resume /><Footer /></div></main>
}
