import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-[1]">
        <div className="text-center">
          <div
            className="flex justify-center mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-4 ring-primary-400/70 shadow-xl shadow-primary-900/50 bg-dark-900 profile-glow">
              <Image
                src="/profile.png"
                alt="Steven Chen"
                fill
                sizes="192px"
                className="object-cover object-[50%_50%]"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up drop-shadow-2xl">
            <span className="relative text-white">
              <span className="absolute inset-0 blur-2xl bg-cyan-300/20 opacity-70 -z-10"></span>
              Steven Chen
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-4 font-semibold animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            <span className="relative">
              <span className="absolute inset-0 blur-xl bg-cyan-200/20 -z-10"></span>
              Senior Software Engineer · 10+ Years Experience
            </span>
          </p>
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-3xl mx-auto animate-fade-in-up font-semibold drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            AI-Driven UX • LLM, Search & Agent Workflows • Large-Scale Frontend Architecture
          </p>
          <p className="text-base md:text-lg text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
            Senior Software Engineer with 10+ years of experience building high-performance, data-intensive applications,
            including AI-powered and real-time systems at scale. Specialized in AI-driven user experiences and frontend
            architecture for large datasets from 10k to 1M+ records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              href="/experience"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              View Experience
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass text-white border border-primary-500/30 rounded-xl font-semibold hover:border-primary-400 hover:bg-white/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
