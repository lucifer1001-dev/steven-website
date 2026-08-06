const capabilities = [
  {
    title: 'Frontend engineering',
    summary: 'Production React applications and accessible component systems for complex customer experiences.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'React Hooks', 'React Query', 'Redux', 'Zustand', 'HTML5', 'CSS3', 'Tailwind CSS', 'Storybook', 'Design systems', 'SPA architecture', 'SSR', 'Accessibility'],
  },
  {
    title: 'Frontend architecture and performance',
    summary: 'Scalable application foundations, reusable UI frameworks, and measurable browser performance.',
    skills: ['Architecture design', 'Component-driven development', 'Micro frontends', 'Monorepos', 'State management', 'Virtualized rendering', 'Lazy loading', 'Code splitting', 'Bundle optimization', 'Core Web Vitals', 'React Profiler', 'Streaming UI'],
  },
  {
    title: 'AI application engineering',
    summary: 'Production intelligent experiences built around retrieval, model services, and human workflows.',
    skills: ['LLM applications', 'RAG', 'Semantic search', 'Embeddings', 'Vector search', 'AI assistants', 'AI copilots', 'Prompt engineering', 'Agent workflows', 'Intelligent search interfaces'],
  },
  {
    title: 'Backend and API development',
    summary: 'Product services, secure APIs, and real-time communication supporting modern web applications.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices', 'API design', 'Authentication', 'Authorization', 'OAuth2', 'JWT', 'RBAC'],
  },
  {
    title: 'Databases and cloud',
    summary: 'Data and infrastructure foundations supporting reliable, scalable product delivery.',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'DynamoDB', 'AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'RDS', 'ECS'],
  },
  {
    title: 'Cloud and DevOps',
    summary: 'Delivery and infrastructure patterns for scalable customer-facing products.',
    skills: ['Docker', 'GitHub Actions', 'CI/CD pipelines', 'Cloud deployments', 'Production releases', 'CDN optimization'],
  },
  {
    title: 'Testing and observability',
    summary: 'Automated quality and production feedback loops that improve release confidence and operations.',
    skills: ['Jest', 'React Testing Library', 'Playwright', 'Cypress', 'Unit testing', 'Integration testing', 'Sentry', 'Datadog', 'OpenTelemetry', 'Production monitoring'],
  },
]

export default function Skills() {
  return <section className="page-section" aria-labelledby="skills-title"><div className="section-shell"><div className="page-intro"><p className="eyebrow">Capabilities</p><h1 id="skills-title">Product engineering from interface to infrastructure.</h1><p>I combine deep React expertise with production AI integration, backend services, cloud delivery, automated testing, and observability.</p></div><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability, index) => <article key={capability.title} className="content-card"><span className="font-mono text-xs text-violet-300">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-5 text-xl font-semibold text-white">{capability.title}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{capability.summary}</p><p className="tech-line mt-6">{capability.skills.join(' · ')}</p></article>)}</div></div></section>
}
