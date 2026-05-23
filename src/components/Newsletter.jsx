import { useState } from 'react'

export default function Newsletter({ showToast }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
    showToast("Subscribed — welcome to the studio list!")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center" aria-labelledby="newsletter-heading">
      <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Join the studio list
      </h2>
      <p className="mt-2 text-[#6B6B6B] max-w-md mx-auto">
        Early access to new drops, private edits, and styling notes.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
          placeholder="Enter your email"
          required
          className="flex-1 h-12 rounded-full border border-black/15 bg-white px-4 text-sm focus-ring"
        />
        <button className="h-12 px-6 rounded-full bg-[#111111] text-white text-sm font-medium hover:opacity-90 transition focus-ring">
          Subscribe
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-sm text-green-700">Thanks for subscribing — check your inbox.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">Please enter a valid email address.</p>
      )}
      <p className="mt-3 text-xs text-[#6B6B6B]">No spam. Unsubscribe anytime.</p>
    </section>
  )
}