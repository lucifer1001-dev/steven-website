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
              Staff Software Engineer with <span className="text-primary-400 font-semibold">10+ years of experience</span> building
              high-performance, data-intensive applications, including AI-powered and real-time systems at scale.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Specialized in designing AI-driven user experiences (LLM, search, and agent workflows) and frontend architecture
              for large datasets (10k-1M+ records). Track record of improving performance (Core Web Vitals +30-50%),
              accelerating user workflows, and delivering scalable platforms used by enterprise and consumer-scale users.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experienced at driving architecture, influencing cross-team decisions, and translating complex ML systems
              into intuitive, high-impact user experiences.
            </p>

            <div className="mt-10 pt-8 border-t border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Education
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl border border-primary-500/25 bg-dark-900/40 p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="text-lg font-semibold text-primary-300">
                        Portland State University
                      </p>
                      <p className="text-gray-200">
                        Master of Science — Computer Science
                      </p>
                    </div>
                    <p className="text-sm text-primary-200/90 md:text-right whitespace-nowrap">
                      05/2014 – 09/2015
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
