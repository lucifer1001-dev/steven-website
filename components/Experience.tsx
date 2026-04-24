const experiences = [
  {
    company: 'Restb.ai',
    role: 'Staff Software Engineer',
    period: 'Feb 2023 – Present',
    location: 'Remote (US)',
    achievements: [
      'Owned frontend architecture for an AI-powered computer vision platform used by enterprise real estate customers to analyze and search large-scale image datasets.',
      'Led end-to-end development of AI-powered search and chat workflows, enabling natural language querying over image datasets and reducing manual filtering effort for users.',
      'Designed and implemented LLM-integrated workflows (RAG-style retrieval + structured results), improving search relevance and usability for non-technical users.',
      'Built agent-style multi-step exploration UX, increasing successful task completion rates for business users navigating complex datasets.',
      'Reduced dataset exploration time by ~40% by introducing semantic search, contextual filtering, and guided workflows.',
      'Architected high-performance frontend systems supporting 10k+ results per query and 100k+ assets, maintaining consistent responsiveness.',
      'Improved time-to-interactive by 35-45%, driving measurable gains in user engagement and session duration.',
      'Introduced streaming UI patterns for incremental rendering of AI responses, significantly improving perceived latency.',
      'Implemented virtualized rendering and progressive hydration, enabling smooth navigation of large image grids.',
      'Defined client-server data orchestration strategy (React Query, caching, deduplication), reducing redundant requests and improving data consistency.',
      'Partnered with backend and ML teams to define APIs and data contracts, ensuring scalable integration of model outputs (bounding boxes, labels, confidence scores).',
      'Established frontend observability (Sentry, Datadog), reducing production debugging time and improving release reliability.',
      'Influenced frontend standards and architecture decisions across the team, improving consistency and long-term maintainability.',
    ],
  },
  {
    company: 'Canva',
    role: 'Senior Frontend Engineer',
    period: 'Aug 2020 – Jan 2023',
    location: 'Remote (US)',
    achievements: [
      'Worked on core systems powering Canva’s real-time design editor used by millions of users globally.',
      'Contributed to high-frequency interaction systems (drag, resize, layout), improving responsiveness for documents with 1000+ elements.',
      'Reduced interaction latency significantly through rendering optimizations and efficient state management strategies.',
      'Built and improved real-time collaboration features, enabling multi-user editing with reliable synchronization and conflict resolution.',
      'Optimized GraphQL data-fetching strategies, reducing UI blocking and improving perceived performance across editing workflows.',
      'Developed reusable components within a large-scale design system, accelerating development velocity across multiple teams.',
      'Managed complex shared state for collaborative environments, ensuring consistency under concurrent updates.',
      'Collaborated cross-functionally with product, backend, and infra teams to deliver scalable features used by millions.',
      'Mentored junior engineers and influenced frontend best practices, improving code quality and team productivity.',
    ],
  },
  {
    company: 'Globant',
    role: 'Software Engineer',
    period: 'Mar 2017 – Jul 2020',
    location: 'San Francisco, CA',
    achievements: [
      'Led migration of legacy systems to React + TypeScript, improving development velocity and reducing maintenance overhead.',
      'Introduced micro-frontend architecture, enabling independent deployments across teams and improving scalability.',
      'Built real-time analytics dashboards, enabling business users to monitor operational data and make faster decisions.',
      'Developed backend services (Node.js, Python) to support frontend features and integrate distributed systems.',
      'Created reusable component libraries, standardizing UI patterns and improving cross-team consistency.',
      'Delivered scalable solutions aligned with business needs while maintaining performance and reliability.',
    ],
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: 'Oct 2015 – Feb 2017',
    location: 'Mountain View, CA',
    achievements: [
      'Developed internal tools for large-scale telemetry and system monitoring, used by engineering teams managing distributed infrastructure.',
      'Optimized rendering and data handling for high-volume datasets, improving usability and reducing analysis time for internal users.',
      'Collaborated with backend teams to design APIs supporting real-time data visualization systems.',
      'Improved debugging workflows and system visibility, enabling faster issue detection and resolution.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-strong rounded-2xl p-5 md:p-7 shadow-lg transition-all duration-300 border border-white/10 hover:border-primary-300/35 hover:shadow-primary-900/20">
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary-400/90 via-primary-500/80 to-primary-700/70" />

                <div className="pl-3 md:pl-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold gradient-text">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <p className="text-primary-200 font-semibold text-lg whitespace-nowrap">{exp.period}</p>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-300">
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
