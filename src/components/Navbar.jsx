import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Service Times' },
  { href: '#ministries', label: 'Ministries' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_rgba(30,23,18,0.12)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-gold-light shadow-sm ring-1 ring-ink/10 transition-transform group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M4 8h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-ink">Redeemed Gospel Church</span>
            <span className="eyebrow block text-wine">Mukinduri</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-wine"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-wine hover:text-wine"
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <a
            href="#services"
            className="hidden rounded-full bg-wine px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-wine-dark md:inline-block"
          >
            Plan Your Visit
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      

      {open && (
        
        <div className="border-t border-ink/10 bg-paper px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink/85 hover:bg-paper-dim"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-wine px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Plan Your Visit
            </a>
            <button
              onClick={toggleDark}
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink/80"
            >
              {dark ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}