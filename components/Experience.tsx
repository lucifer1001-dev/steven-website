const experiences = [
  {
    company: 'Restb.ai', role: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, US',
    summary: 'Own frontend architecture and technical direction for an AI property intelligence and computer vision platform analyzing millions of property images.',
    impact: [
      'Established reusable component patterns, architecture standards, and engineering practices across customer-facing product teams.',
      'Architected semantic search using React, TypeScript, Node.js APIs, embeddings, vector retrieval, and AI ranking across millions of images and metadata records.',
      'Designed image-analysis interfaces for AI classifications, confidence scores, extracted attributes, and computer vision results.',
      'Built RAG assistants with contextual retrieval, conversational workflows, streaming responses, and intelligent user interactions.',
      'Improved application performance by approximately 40% through bundle optimization, route-based code splitting, lazy loading, rendering optimization, and browser profiling.',
      'Optimized browsing across 100K+ AI-generated images with virtualization, progressive loading, client-side caching, and request optimization.',
      'Reduced perceived AI response latency by approximately 50% through asynchronous workflows and incremental rendering.',
      'Designed React Query data architecture for caching, request deduplication, retries, and server-state synchronization.',
      'Integrated Node.js services, REST APIs, authentication, AI inference workflows, embeddings, and vector-search patterns.',
      'Established production observability with Sentry and Datadog and mentored engineers through architecture, testing, performance, and troubleshooting reviews.',
      'Owned frontend releases, technical reviews, production troubleshooting, and continuous improvements.',
    ],
    tags: ['React', 'TypeScript', 'RAG', 'Embeddings', 'Vector search', 'React Query', 'Sentry'],
  },
  {
    company: 'Canva', role: 'Senior Frontend Engineer', period: 'Aug 2020 - Jan 2023', location: 'Remote, US',
    summary: 'Developed advanced features for Canva\'s collaborative browser-based design editor used by millions of people globally.',
    impact: [
      'Designed reusable frontend patterns, component systems, and shared UI frameworks that improved engineering velocity.',
      'Optimized complex interactive workflows through memoization, state isolation, virtualization, and browser profiling.',
      'Reduced loading overhead with code splitting, lazy loading, asset optimization, and performance profiling.',
      'Improved collaborative editing through interaction handling, synchronization workflows, and real-time UI feedback.',
      'Designed GraphQL integrations that improved retrieval efficiency and reduced unnecessary API communication.',
      'Built reusable UI components and utilities adopted across multiple product areas.',
      'Implemented Jest, React Testing Library, and Playwright strategies that improved release confidence.',
      'Participated in technical design, architecture, and code reviews across product, design, backend, and infrastructure.',
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'Playwright', 'Design systems', 'Performance'],
  },
  {
    company: 'Globant', role: 'Software Engineer', period: 'Mar 2017 - Jul 2020', location: 'San Francisco, CA',
    summary: 'Modernized enterprise applications and built digital platforms across healthcare, financial services, retail, and other enterprise domains.',
    impact: [
      'Led legacy migrations to React and TypeScript, improving development velocity and reducing maintenance overhead.',
      'Designed reusable React component libraries, shared UI frameworks, and frontend architecture patterns.',
      'Built dashboards and data-visualization applications processing large operational datasets.',
      'Delivered workflows for authentication, RBAC, enterprise integration, visualization, and workflow management.',
      'Built Node.js and Python APIs supporting frontend products and enterprise integrations.',
      'Improved performance through rendering, state management, API optimization, and frontend redesign.',
      'Established standards for component reuse, testing, accessibility, and development workflows.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'RBAC', 'Data visualization'],
  },
  {
    company: 'Google', role: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Mountain View, CA',
    summary: 'Developed internal engineering productivity and data-visualization platforms supporting infrastructure teams.',
    impact: [
      'Built React dashboards providing visibility into service health, telemetry, and engineering metrics.',
      'Designed frontend architecture for large telemetry datasets using optimized rendering and efficient client-side processing.',
      'Developed reusable React components, filtering workflows, and visualization patterns across internal applications.',
      'Integrated backend APIs and internal services while contributing to technical design, debugging, and code reviews.',
    ],
    tags: ['Telemetry', 'Data visualization', 'APIs', 'Performance'],
  },
]

export default function Experience() {
  return <section className="page-section" aria-labelledby="experience-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Career</p><h1 id="experience-title">A decade of building high-performance products at scale.</h1><p>My experience spans AI-powered search, real-time collaborative editing, enterprise modernization, and large-scale telemetry visualization.</p></div>
    <div className="relative mt-16 space-y-8 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:via-white/10 before:to-transparent md:before:left-[191px]">
      {experiences.map((experience) => <article key={experience.company} className="relative grid gap-6 pl-10 md:grid-cols-[160px_1fr] md:gap-12 md:pl-0"><span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-cyan-300 md:left-[184px]" aria-hidden="true" /><div className="md:text-right"><p className="font-mono text-sm text-cyan-300">{experience.period}</p><p className="mt-2 text-sm text-slate-500">{experience.location}</p></div><div className="content-card"><p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-300">{experience.company}</p><h2 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h2><p className="mt-4 leading-7 text-slate-300">{experience.summary}</p><ul className="mt-6 space-y-3">{experience.impact.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />{item}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="tech-pill">{tag}</span>)}</div></div></article>)}
    </div>
  </div></section>
}
