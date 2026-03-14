export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">About</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 md:p-12 shadow-2xl animate-scale-in">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Senior Software Engineer with <span className="text-primary-400 font-semibold">10+ years of experience</span> building
              high-performance web applications and complex browser-based products used by millions of users. Specialized in React,
              TypeScript, and frontend performance optimization for data-intensive interfaces including collaborative editors,
              analytics dashboards, and AI-driven visualization platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Experienced translating large backend systems and machine learning pipelines into scalable user interfaces. Previously
              contributed to frontend platforms at <span className="text-primary-400 font-semibold">Google</span> and <span className="text-primary-400 font-semibold">Canva</span>, improving performance, scalability,
              and developer productivity across widely used product systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Strong track record solving rendering performance bottlenecks, designing scalable frontend architectures, and delivering
              modern data-heavy web applications that make complex AI and analytics workflows intuitive for end users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
