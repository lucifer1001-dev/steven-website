const experiences = [
  {
    company: 'ZestyAI', role: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, USA',
    summary: 'Building AI-powered property intelligence applications that help insurance and real estate customers understand property data, computer vision insights, and risk information.',
    impact: [
      'Lead frontend architecture for AI-driven property analytics platforms spanning large property datasets, image collections, and complex visualization workflows.',
      'Design product experiences for machine learning outputs including property attributes, classifications, confidence scores, and risk indicators.',
      'Built semantic search and AI-assisted investigation workflows that help users discover relevant property information efficiently.',
      'Integrated LLM capabilities, structured AI outputs, and contextual data into interactive product workflows.',
      'Improved time to interactive by 35-45% through rendering optimization, caching, data-fetching improvements, and progressive loading.',
      'Implemented streaming UI, virtualized image interfaces, and React Query orchestration patterns for responsive, reliable experiences.',
      'Established frontend observability with Sentry and Datadog and partnered across product, design, backend, and machine learning.',
    ],
    tags: ['React', 'TypeScript', 'AI product UX', 'Semantic search', 'React Query', 'Performance'],
  },
  {
    company: 'Figma', role: 'Senior Full-Stack Engineer', period: 'May 2019 - Jan 2023', location: 'San Francisco, CA',
    summary: 'Built frontend platform capabilities and real-time application systems supporting Figma\'s collaborative design platform.',
    impact: [
      'Developed real-time collaboration systems using efficient synchronization, client-side state management, and scalable application architecture.',
      'Built LiveGraph, a real-time data-fetching platform using GraphQL-like subscriptions, JSON tree responses, and database replication streams.',
      'Enabled near real-time UI updates by consuming database replication events and synchronizing backend systems with client applications.',
      'Contributed to distributed data access, PostgreSQL sharding, replication workflows, and DBProxy query routing across database shards.',
      'Contributed to Code Connect workflows linking production React components with Figma Dev Mode.',
      'Improved design-system workflows through React components, variables, styles, and reusable frontend patterns.',
    ],
    tags: ['Real-time systems', 'React', 'LiveGraph', 'PostgreSQL', 'Distributed systems', 'Design systems'],
  },
  {
    company: 'Thoughtworks', role: 'Software Engineer', period: 'Mar 2017 - Apr 2019', location: 'San Francisco, CA',
    summary: 'Delivered enterprise frontend and full-stack applications while helping organizations modernize legacy systems and engineering practices.',
    impact: [
      'Designed React and TypeScript applications for enterprise workflows and customer-facing platforms.',
      'Led frontend modernization initiatives that improved maintainability and development velocity.',
      'Built reusable component libraries, real-time analytics dashboards, and interactive data visualizations.',
      'Designed REST APIs and backend services supporting distributed application workflows.',
      'Implemented micro-frontend patterns, automated testing, CI/CD, code review, and iterative delivery practices.',
    ],
    tags: ['React', 'TypeScript', 'Micro-frontends', 'REST APIs', 'Testing', 'CI/CD'],
  },
  {
    company: 'Facebook', role: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Menlo Park, CA',
    summary: 'Built React-based internal applications and visualization tools supporting engineering workflows and operational visibility.',
    impact: [
      'Developed JavaScript and React applications supporting engineering productivity and operational workflows.',
      'Built interactive dashboards for system metrics, telemetry, and high-volume operational datasets.',
      'Designed efficient client-side data handling and integrated frontend applications with backend APIs.',
      'Improved performance through rendering optimization, asynchronous loading, and reusable component patterns.',
    ],
    tags: ['React', 'JavaScript', 'Telemetry', 'Data visualization', 'Performance'],
  },
]

export default function Experience() {
  return <section className="page-section" aria-labelledby="experience-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Career</p><h1 id="experience-title">A decade of building scalable products and frontend platforms.</h1><p>My experience spans AI-powered property intelligence, real-time collaboration, enterprise modernization, and operational data visualization.</p></div>
    <div className="relative mt-16 space-y-8 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:via-white/10 before:to-transparent md:before:left-[191px]">
      {experiences.map((experience) => <article key={experience.company} className="relative grid gap-6 pl-10 md:grid-cols-[160px_1fr] md:gap-12 md:pl-0">
        <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-cyan-300 md:left-[184px]" aria-hidden="true" />
        <div className="md:text-right"><p className="font-mono text-sm text-cyan-300">{experience.period}</p><p className="mt-2 text-sm text-slate-500">{experience.location}</p></div>
        <div className="content-card"><p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-300">{experience.company}</p><h2 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h2><p className="mt-4 leading-7 text-slate-300">{experience.summary}</p><ul className="mt-6 space-y-3">{experience.impact.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />{item}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="tech-pill">{tag}</span>)}</div></div>
      </article>)}
    </div>
  </div></section>
}
