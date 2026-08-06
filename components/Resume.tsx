const roles = [
  { company: 'Restb.ai', title: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, US', detail: 'Full-stack delivery for AI property intelligence: React and TypeScript architecture, Node.js APIs, RAG and semantic retrieval, 10K+ result queries, 100K+ assets, streaming UI, and React Query data architecture.' },
  { company: 'Canva', title: 'Senior Frontend Engineer', period: 'Aug 2020 - Jan 2023', location: 'Remote, US', detail: 'Advanced collaborative editing features, reusable React utilities, real-time synchronization, GraphQL optimization, scalable state management, and browser performance.' },
  { company: 'Globant', title: 'Software Engineer', period: 'Mar 2017 - Jul 2020', location: 'San Francisco, CA', detail: 'React and TypeScript modernization, component libraries, enterprise dashboards, Node.js and Python services, GraphQL and REST integration, RBAC, AWS, Docker, and CI/CD.' },
  { company: 'Google', title: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Mountain View, CA', detail: 'React dashboards, service-health and telemetry visualization, large operational datasets, internal API integration, reusable UI components, and optimized data exploration.' },
]

const skillGroups = [
  ['Frontend engineering', 'React, Next.js, TypeScript, React Query, Redux, Zustand, Tailwind CSS, Storybook, design systems, SPA, SSR, accessibility'],
  ['Architecture and performance', 'Micro frontends, monorepos, state management, virtualization, lazy loading, code splitting, bundle optimization, Core Web Vitals, streaming UI'],
  ['AI application engineering', 'LLM applications, RAG, semantic search, embeddings, vector search, AI assistants, copilots, prompt engineering, agent workflows'],
  ['Backend and APIs', 'Node.js, Express, NestJS, Python, FastAPI, REST, GraphQL, WebSockets, microservices, OAuth2, JWT, RBAC'],
  ['Data, cloud, and quality', 'PostgreSQL, MySQL, Redis, MongoDB, DynamoDB, AWS, Docker, GitHub Actions, Jest, Playwright, Cypress, Sentry, Datadog, OpenTelemetry'],
]

export default function Resume() {
  return <section className="page-section" aria-labelledby="resume-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Resume</p><h1 id="resume-title">Steven Chen</h1><p>Senior Software Engineer building scalable full-stack applications, AI-powered products, and enterprise software platforms.</p></div>
    <div className="tech-line mt-10 flex flex-wrap gap-x-5 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"><a className="hover:text-violet-300" href="mailto:chenstevens890@gmail.com">chenstevens890@gmail.com</a><a className="hover:text-violet-300" href="tel:+13393991987">+1 (339) 399-1987</a><span>Vancouver, WA</span><a className="hover:text-violet-300" href="https://stevenchen.life">stevenchen.life</a></div>

    <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="space-y-8">
        <section className="content-card"><p className="eyebrow">Core expertise</p><div className="mt-6 space-y-5">{skillGroups.map(([title, skills]) => <div key={title}><h2 className="text-sm font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{skills}</p></div>)}</div></section>
        <section className="content-card"><p className="eyebrow">Education</p><h2 className="mt-5 font-semibold text-white">Master of Science in Computer Science</h2><p className="mt-2 text-sm text-slate-300">Portland State University</p><p className="mt-1 font-mono text-xs text-slate-500">May 2014 - Sep 2015</p></section>
      </aside>

      <section className="content-card"><p className="eyebrow">Professional experience</p><div className="mt-7 divide-y divide-white/10">{roles.map((role) => <article key={role.company} className="py-7 first:pt-0 last:pb-0"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h2 className="text-xl font-semibold text-white">{role.title}</h2><p className="mt-1 text-violet-300">{role.company}</p></div><div className="sm:text-right"><p className="font-mono text-xs text-slate-300">{role.period}</p><p className="mt-1 text-xs text-slate-500">{role.location}</p></div></div><p className="mt-4 text-sm leading-6 text-slate-400">{role.detail}</p></article>)}</div></section>
    </div>
  </div></section>
}
