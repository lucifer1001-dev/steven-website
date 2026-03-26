const skillCategories = [
  {
    title: 'Frontend & Architecture',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'SPA',
      'SSR',
      'ISR',
      'Micro-frontends',
      'Component systems',
    ],
  },
  {
    title: 'AI & Data Systems',
    skills: [
      'LLM-integrated UX',
      'RAG-style search',
      'Chat-based interfaces',
      'Agent workflows',
      'ML-driven UI',
      'Explainable AI',
    ],
  },
  {
    title: 'Data & State',
    skills: [
      'React Query',
      'Server/client state architecture',
    ],
  },
  {
    title: 'Observability & Tooling',
    skills: [
      'Sentry',
      'Datadog',
      'Webpack',
      'Vite',
      'Chrome DevTools',
    ],
  },
  {
    title: 'Performance & Rendering',
    skills: [
      'Core Web Vitals',
      'Virtualization',
      'Progressive hydration',
      'Streaming UI',
      'Rendering optimization',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Python',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      'AWS (EC2, S3, Lambda)',
      'Edge architectures',
      'CDN optimization',
      'Docker',
      'CI/CD',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 relative pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-strong rounded-xl p-6 shadow-lg transition-all duration-300 border border-white/10 hover:border-primary-300/35 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary-300 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-300 flex items-center hover:text-primary-300 transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mr-3 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
