import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY = 'b00128af-35bc-46c2-a2c8-37c7748669c8'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)
    data.append('subject', 'New message from the church website')
    data.append('from_name', 'Redeemed Gospel Church Mukinduri website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow text-wine">We&rsquo;d love to meet you</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
            Visit or reach out
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
            Have a question, a prayer request, or just want to say hello?
            We&rsquo;re one message away.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-wine/10 text-wine">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <p className="font-semibold text-ink">Mukinduri Town</p>
                <p className="text-sm text-ink/60">Mukinduri, Kirinyaga County, Kenya</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-wine/10 text-wine">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3.5 6.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" /></svg>
              </span>
              <div>
                <p className="font-semibold text-ink">redeemedgospelmukinduri26@gmail.com</p>
                <p className="text-sm text-ink/60">We reply within a day or two</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-wine/10 text-wine">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <p className="font-semibold text-ink">+254 7XX XXX XXX</p>
                <p className="text-sm text-ink/60">Church office</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="rounded-2xl border border-ink/10 bg-paper-dim p-7 sm:p-9" onSubmit={handleSubmit}>
          {/* honeypot field — invisible to real visitors, bots tend to fill it in */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <div className="grid gap-5">
            <label className="block">
              <span className="text-sm font-medium text-ink/80">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink outline-none transition-colors focus:border-wine"
                placeholder="Your full name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink/80">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink outline-none transition-colors focus:border-wine"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink/80">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full resize-none rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink outline-none transition-colors focus:border-wine"
                placeholder="How can we pray for you?"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-1 rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-wine-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm font-medium text-green">
                Thank you — your message has been sent. We&rsquo;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-wine">
                Something went wrong sending your message. Please try again, or email us directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}