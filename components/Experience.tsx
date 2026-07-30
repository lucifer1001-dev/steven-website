const experiences = [
  {
    company: 'Restb.ai', role: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, US',
    summary: 'Own frontend architecture for an AI-powered computer vision platform used by enterprise real estate customers to analyze and search large-scale image datasets.',
    impact: [
      'Led AI-powered search and chat workflows that enable natural-language querying over image datasets and reduce manual filtering.',
      'Designed LLM-integrated workflows using RAG-style retrieval and structured results for relevant, usable non-technical experiences.',
      'Built agent-style multi-step exploration, semantic search, contextual filtering, and guided workflows, reducing dataset exploration time by approximately 40%.',
      'Architected responsive frontend systems supporting 10k+ results per query and 100k+ assets.',
      'Improved time to interactive by 35-45% and introduced streaming UI for incremental AI responses.',
      'Implemented virtualized rendering, progressive hydration, React Query caching, deduplication, and client-server data orchestration.',
      'Defined model data contracts with backend and ML teams and established observability with Sentry and Datadog.',
      'Influenced frontend standards and architecture decisions to improve consistency and maintainability.',
    ],
    tags: ['React', 'TypeScript', 'LLM UX', 'RAG search', 'React Query', 'Performance'],
  },
  {
    company: 'Canva', role: 'Senior Frontend Engineer', period: 'Aug 2020 - Jan 2023', location: 'Remote, US',
    summary: 'Worked on core systems powering Canva\'s real-time design editor used by millions of users globally.',
    impact: [
      'Contributed to high-frequency drag, resize, and layout interactions for documents containing 1,000+ elements.',
      'Reduced interaction latency through rendering optimization and efficient state management.',
      'Built real-time collaboration features with reliable synchronization and conflict resolution.',
      'Optimized GraphQL data fetching to reduce UI blocking and improve perceived performance.',
      'Developed reusable design-system components and managed complex shared state under concurrent updates.',
      'Collaborated across product, backend, and infrastructure teams and mentored junior engineers.',
    ],
    tags: ['React', 'Real-time collaboration', 'GraphQL', 'Design systems', 'Rendering'],
  },
  {
    company: 'Globant', role: 'Software Engineer', period: 'Mar 2017 - Jul 2020', location: 'San Francisco, CA',
    summary: 'Modernized enterprise applications and delivered scalable frontend and supporting backend systems.',
    impact: [
      'Led legacy migrations to React and TypeScript, improving development velocity and reducing maintenance overhead.',
      'Introduced micro-frontend architecture for independent team deployments and scalable ownership.',
      'Built real-time analytics dashboards for faster operational decision-making.',
      'Developed Node.js and Python services supporting frontend features and distributed integrations.',
      'Created reusable component libraries that standardized UI patterns across teams.',
    ],
    tags: ['React', 'TypeScript', 'Micro-frontends', 'Node.js', 'Python'],
  },
  {
    company: 'Google', role: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Mountain View, CA',
    summary: 'Developed internal telemetry and monitoring tools for engineering teams managing distributed infrastructure.',
    impact: [
      'Built interfaces for large-scale telemetry, monitoring, and real-time operational data.',
      'Optimized rendering and data handling for high-volume datasets, reducing analysis time.',
      'Collaborated on APIs supporting real-time data visualization workflows.',
      'Improved debugging workflows and system visibility for faster issue detection and resolution.',
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
