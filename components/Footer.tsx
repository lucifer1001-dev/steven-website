export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold gradient-text mb-4">
            Steven Chen — Staff Software Engineer
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Building high-performance React and TypeScript applications, complex data-intensive interfaces, and AI-driven web experiences.
          </p>
          <div className="border-t border-primary-500/20 pt-6">
            <p className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
