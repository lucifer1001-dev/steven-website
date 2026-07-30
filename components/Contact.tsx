'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current) }, [])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); setIsSubmitting(true); setStatus('idle'); setErrorMessage('')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      const result = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(result.error || 'Something went wrong. Please try again.')
      setStatus('success'); setFormData({ name: '', email: '', message: '', company: '' })
      resetTimer.current = setTimeout(() => setStatus('idle'), 6000)
    } catch (error) { setStatus('error'); setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.') }
    finally { setIsSubmitting(false) }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) { setFormData((current) => ({ ...current, [event.target.name]: event.target.value })) }

  return <section className="page-section" aria-labelledby="contact-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Contact</p><h1 id="contact-title">Let’s talk about the product behind the roadmap.</h1><p>I’m open to conversations about AI-powered products, frontend architecture, performance, and complex data-intensive experiences.</p></div>
    <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="content-card self-start"><p className="eyebrow">Direct contact</p><dl className="mt-7 space-y-6"><div><dt className="text-xs uppercase tracking-wider text-slate-500">Email</dt><dd className="mt-2"><a className="text-white hover:text-cyan-200" href="mailto:chenstevens890@gmail.com">chenstevens890@gmail.com</a></dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-500">Phone</dt><dd className="mt-2"><a className="text-white hover:text-cyan-200" href="tel:+13393991987">+1 (339) 399-1987</a></dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-500">Location</dt><dd className="mt-2 text-white">Vancouver, WA, USA</dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-500">Website</dt><dd className="mt-2"><a className="text-white hover:text-cyan-200" href="https://stevenchen.life">stevenchen.life</a></dd></div></dl></aside>
      <form onSubmit={handleSubmit} className="content-card" aria-label="Contact Steven Chen">
        <div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-medium text-slate-200">Name<input className="form-control" name="name" value={formData.name} onChange={handleChange} maxLength={100} autoComplete="name" required /></label><label className="text-sm font-medium text-slate-200">Email<input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} maxLength={254} autoComplete="email" required /></label></div>
        <label className="mt-6 block text-sm font-medium text-slate-200">What would you like to discuss?<textarea className="form-control resize-y" name="message" value={formData.message} onChange={handleChange} minLength={10} maxLength={5000} rows={7} required /></label>
        <label className="absolute -left-[9999px]" aria-hidden="true">Company<input name="company" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" /></label>
        <div aria-live="polite" className="mt-5 min-h-6">{status === 'success' && <p className="text-sm text-emerald-300">Thanks—your message has been sent. I’ll respond as soon as I can.</p>}{status === 'error' && <p className="text-sm text-rose-300">{errorMessage}</p>}</div>
        <button className="button-primary mt-4 w-full sm:w-auto" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span></button>
      </form>
    </div>
  </div></section>
}
