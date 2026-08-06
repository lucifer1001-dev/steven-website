const experiences = [
  {
    company: 'Restb.ai', role: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, US',
    summary: 'Own frontend architecture and full-stack delivery for an AI property intelligence platform supporting enterprise search, analytics, and image intelligence workflows.',
    impact: [
      'Built AI-powered search and conversational experiences for exploring millions of property images and AI-generated metadata through natural language.',
      'Designed LLM-assisted workflows using RAG, semantic retrieval, structured responses, and streaming interfaces for business users.',
      'Integrated React applications with Node.js APIs, embedding-based retrieval, and vector search across large image datasets.',
      'Architected React and TypeScript applications supporting 10K+ results per query and 100K+ assets using virtualization, caching, progressive loading, and rendering optimization.',
      'Improved application performance by approximately 40% through React optimization, code splitting, lazy loading, bundle analysis, and browser profiling.',
      'Reduced perceived AI response latency by approximately 50% through streaming responses and incremental UI rendering.',
      'Established React Query data architecture using caching, API optimization, production monitoring, and automated testing practices.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'RAG', 'Vector search', 'React Query'],
  },
  {
    company: 'Canva', role: 'Senior Frontend Engineer', period: 'Aug 2020 - Jan 2023', location: 'Remote, US',
    summary: 'Developed advanced features for Canva\'s collaborative browser-based design editor used by millions of people globally.',
    impact: [
      'Developed advanced React and TypeScript features supporting complex browser-based design workflows.',
      'Optimized editing experiences involving hundreds of elements through memoization, state isolation, and performance profiling.',
      'Built reusable React components and shared utilities used across multiple product areas.',
      'Contributed to reliable, synchronized real-time collaboration for simultaneous editing.',
      'Improved GraphQL data fetching by optimizing queries and reducing unnecessary requests.',
      'Designed scalable state-management patterns for complex editing workflows and concurrent interactions.',
      'Collaborated with backend, product, design, and infrastructure teams on features used by millions.',
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'State management', 'Performance'],
  },
  {
    company: 'Globant', role: 'Software Engineer', period: 'Mar 2017 - Jul 2020', location: 'San Francisco, CA',
    summary: 'Modernized legacy systems and built scalable web applications across healthcare, financial services, and retail.',
    impact: [
      'Led legacy migrations to React and TypeScript, improving development velocity and reducing maintenance overhead.',
      'Built reusable React component libraries, enterprise dashboards, and data-visualization applications.',
      'Developed Node.js and Python services, REST APIs, and integrations supporting enterprise workflows.',
      'Implemented GraphQL and API integrations connecting frontend products with internal and third-party platforms.',
      'Built authentication, authorization, and RBAC workflows for secure enterprise access.',
      'Supported AWS deployments, Docker environments, CI/CD workflows, and reliable production releases.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'RBAC', 'AWS'],
  },
  {
    company: 'Google', role: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Mountain View, CA',
    summary: 'Developed internal applications and dashboards supporting service visibility, telemetry analysis, and operational workflows.',
    impact: [
      'Built React dashboards providing visibility into service health, telemetry data, operational metrics, and engineering workflows.',
      'Developed interactive data visualizations for large operational datasets with filtering and analysis capabilities.',
      'Integrated frontend applications with backend APIs and internal monitoring and reporting services.',
      'Improved engineering productivity through reusable UI components, optimized rendering, and efficient data exploration.',
    ],
    tags: ['Telemetry', 'Data visualization', 'APIs', 'Performance'],
  },
]

export default function Experience() {
  return <section className="page-section" aria-labelledby="experience-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Career</p><h1 id="experience-title">A decade of building high-performance products at scale.</h1><p>My experience spans AI-powered search, real-time collaborative editing, enterprise modernization, and large-scale telemetry visualization.</p></div>
    <div className="relative mt-16 space-y-8 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-violet-400/70 before:via-indigo-400/30 before:to-transparent md:before:left-[191px]">
      {experiences.map((experience) => <article key={experience.company} className="relative grid gap-6 pl-10 md:grid-cols-[160px_1fr] md:gap-12 md:pl-0"><span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-[#071126] bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,.75)] md:left-[184px]" aria-hidden="true" /><div className="md:text-right"><p className="font-mono text-sm text-violet-300">{experience.period}</p><p className="mt-2 text-sm text-slate-500">{experience.location}</p></div><div className="content-card"><p className="text-sm font-medium uppercase tracking-[0.16em] text-violet-300">{experience.company}</p><h2 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h2><p className="mt-4 leading-7 text-slate-300">{experience.summary}</p><ul className="mt-6 space-y-3">{experience.impact.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />{item}</li>)}</ul><p className="tech-line mt-6">{experience.tags.join(' / ')}</p></div></article>)}
    </div>
  </div></section>
}
