const capabilities = [
  {
    title: 'Frontend engineering',
    summary: 'Production React applications and accessible component systems for complex customer experiences.',
    skills: ['React', 'TypeScript', 'JavaScript ES6+', 'Next.js', 'React Hooks', 'React Query', 'Redux', 'Zustand', 'Context API', 'Tailwind CSS', 'Storybook', 'SSR', 'WCAG 2.1'],
  },
  {
    title: 'Frontend architecture and performance',
    summary: 'Scalable application foundations, reusable UI frameworks, and measurable browser performance.',
    skills: ['Architecture design', 'Design systems', 'Design tokens', 'Monorepos', 'State architecture', 'Virtualization', 'Lazy loading', 'Code splitting', 'Bundle optimization', 'Core Web Vitals', 'React Profiler'],
  },
  {
    title: 'AI application engineering',
    summary: 'Production intelligent experiences built around retrieval, model services, and human workflows.',
    skills: ['LLM applications', 'OpenAI API', 'Anthropic Claude', 'RAG', 'Semantic search', 'Embeddings', 'Vector search', 'AI assistants', 'Streaming responses', 'Prompt engineering', 'Agent workflows', 'Human-in-the-loop UX'],
  },
  {
    title: 'Backend and API development',
    summary: 'Product services, secure APIs, and real-time communication supporting modern web applications.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices', 'OAuth2', 'JWT', 'RBAC', 'PostgreSQL', 'Redis', 'MongoDB', 'DynamoDB'],
  },
  {
    title: 'Application architecture',
    summary: 'Predictable state and data flow across asynchronous, cached, and real-time product workflows.',
    skills: ['Client state', 'Server state synchronization', 'Data fetching strategies', 'Caching architecture', 'Real-time application state', 'API integration layers'],
  },
  {
    title: 'Cloud and DevOps',
    summary: 'Delivery and infrastructure patterns for scalable customer-facing products.',
    skills: ['AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'RDS', 'DynamoDB', 'ECS', 'Docker', 'GitHub Actions', 'CI/CD', 'Infrastructure automation', 'CDN optimization', 'Cloud monitoring'],
  },
  {
    title: 'Testing and observability',
    summary: 'Automated quality and production feedback loops that improve release confidence and operations.',
    skills: ['Jest', 'React Testing Library', 'Playwright', 'Cypress', 'Unit testing', 'Integration testing', 'E2E testing', 'Sentry', 'Datadog', 'OpenTelemetry', 'Production monitoring'],
  },
]

export default function Skills() {
  return <section className="page-section" aria-labelledby="skills-title"><div className="section-shell"><div className="page-intro"><p className="eyebrow">Capabilities</p><h1 id="skills-title">Frontend architecture and AI application engineering.</h1><p>I combine deep React expertise with production AI integration, backend services, cloud delivery, automated testing, and observability.</p></div><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability, index) => <article key={capability.title} className="content-card"><span className="font-mono text-xs text-cyan-300">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-5 text-xl font-semibold text-white">{capability.title}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{capability.summary}</p><ul className="mt-6 flex flex-wrap gap-2">{capability.skills.map((skill) => <li key={skill} className="tech-pill">{skill}</li>)}</ul></article>)}</div></div></section>
}
