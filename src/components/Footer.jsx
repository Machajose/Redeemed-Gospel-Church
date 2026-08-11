const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    icon: <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <>
        <path d="M22 12a30 30 0 0 0-.4-5A2.6 2.6 0 0 0 20 5.3 82 82 0 0 0 12 5a82 82 0 0 0-8 .3A2.6 2.6 0 0 0 2.4 7 30 30 0 0 0 2 12a30 30 0 0 0 .4 5A2.6 2.6 0 0 0 4 18.7a82 82 0 0 0 8 .3 82 82 0 0 0 8-.3A2.6 2.6 0 0 0 21.6 17a30 30 0 0 0 .4-5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 9.5l5 2.5-5 2.5v-5Z" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </>
    ),
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.7-2.8-1.1-4.6-3.9-4.8-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.3.6.9 2 1 2.2.1.2.1.4 0 .6-.4.8-.8.8-.6 1.2.9 1.7 1.9 2.3 3.4 3 .3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.1 1.5Z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wine text-gold-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M4 8h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                Redeemed Gospel Church
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/55">
              Mukinduri, Kirinyaga County, Kenya. A home for worship, the
              Word, and community.
            </p>
            <p className="mt-3 font-display text-sm italic text-gold-light">
              &ldquo;Keep the fire at the altar burning.&rdquo;
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                
                  <a key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-cream">About Us</a></li>
              <li><a href="#services" className="hover:text-cream">Service Times</a></li>
              <li><a href="#ministries" className="hover:text-cream">Ministries</a></li>
              <li><a href="#events" className="hover:text-cream">Events</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#gallery" className="hover:text-cream">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
              <li><a href="https://facebook.com/" className="hover:text-cream">Facebook Page</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Service Hours</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Sunday &mdash; 9:30 AM to 1:00 PM</li>
              <li>Tuesday &mdash; Prayers, 5:00 PM</li>
              <li>Thursday &mdash; Home Fellowship, 5:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Redeemed Gospel Church Mukinduri. All rights reserved.</p>
          <p>Built with faith, in Mukinduri.</p>
        </div>
      </div>
    </footer>
  )
}