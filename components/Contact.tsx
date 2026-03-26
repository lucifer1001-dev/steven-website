'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again later.')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 relative pt-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-down">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 text-center animate-fade-in-up">
          I&apos;m always open to discussing new opportunities and interesting projects.
        </p>
        <div className="glass-strong rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in-up relative z-[1] shadow-lg border border-white/10">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary-300 mb-1">
              Email
            </p>
            <a
              href="mailto:chenstevens890@gmail.com"
              className="text-base md:text-lg text-gray-100 hover:text-primary-300 font-medium break-all"
            >
              chenstevens890@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-primary-300 mb-1">
              Phone
            </p>
            <a
              href="tel:+13393991987"
              className="text-base md:text-lg text-gray-100 hover:text-primary-300 font-medium"
            >
              +1 (339) 399-1987
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-primary-300 mb-1">
              Location
            </p>
            <p className="text-base md:text-lg text-gray-100 font-medium">
              Vancouver, WA, USA
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-strong rounded-2xl shadow-lg p-8 md:p-12 space-y-6 animate-scale-in relative z-[1] border border-white/10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
              placeholder="Your name"
              aria-label="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
              placeholder="your.email@example.com"
              aria-label="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 outline-none transition-all resize-none text-gray-100 placeholder-gray-500"
              placeholder="Your message..."
              aria-label="Your message"
            />
          </div>
          
          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg backdrop-blur-sm animate-fade-in">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg backdrop-blur-sm animate-fade-in">
              {errorMessage || 'Something went wrong. Please try again later.'}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-md shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
