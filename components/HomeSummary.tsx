import Link from 'next/link'

const summaryData = {
  about: {
    title: 'About',
    description:
      'Senior Software Engineer with 10+ years of experience building high-performance, data-intensive AI and real-time systems at scale.',
    highlight: '10+ Years Experience',
    link: '/about',
  },
  skills: {
    title: 'Technical Skills',
    description:
      'Specialized in LLM-integrated UX, RAG-style search, agent workflows, and frontend architecture for large datasets from 10k to 1M+ records.',
    highlight: 'React • Next.js • TypeScript • LLM UX • RAG Search • Agent Workflows',
    link: '/skills',
  },
  experience: {
    title: 'Professional Experience',
    description:
      'Delivered AI-powered search and chat systems at Restb.ai, real-time editor systems at Canva, frontend modernization at Globant, and telemetry platforms at Google.',
    highlight: 'Restb.ai • Canva • Globant • Google',
    link: '/experience',
  },
}

export default function HomeSummary() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">Overview</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(summaryData).map(([key, data], index) => (
            <div
              key={key}
              className="glass-strong rounded-xl p-6 shadow-lg transition-all duration-300 border border-white/10 hover:border-primary-300/35 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-primary-300 mb-3 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full mr-3"></span>
                {data.title}
              </h3>
              <p className="text-primary-400 font-semibold mb-4 text-sm">
                {data.highlight}
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {data.description}
              </p>
              <Link
                href={data.link}
                className="inline-flex items-center text-primary-300 hover:text-primary-200 font-semibold transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
