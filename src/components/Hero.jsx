export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-10 md:grid-cols-2 md:items-center md:px-8 md:pb-24 md:pt-16">
        <div>
          <p className="eyebrow mb-5 text-wine">Mukinduri &middot; Kirinyaga County</p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] font-semibold text-ink sm:text-6xl">
            Come as you are.
            <br />
            Leave <span className="italic text-wine">redeemed</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
            Redeemed Gospel Church Mukinduri is a home for worship, the Word, and
            wholehearted community &mdash; open to every neighbour in Mukinduri
            and beyond.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            
              <a href="#services"
              className="rounded-full bg-wine px-7 py-3.5 text-sm font-semibold text-cream shadow-md shadow-wine/20 transition-transform hover:-translate-y-0.5 hover:bg-wine-dark"
            >
              Join Us Sunday
            </a>
            
              <a href="#contact"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-wine hover:text-wine"
            >
              Get Directions
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            <div>
              <dt className="eyebrow text-ink/50">Sundays</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">9:30–1PM</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/50">Midweek</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">Tue &amp; Thu, 5PM</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/50">Languages</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">EN &middot; SW</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold/15 blur-2xl" aria-hidden="true" />
          <svg viewBox="0 0 520 480" className="w-full" role="img" aria-label="Illustration of sunrise over the Mukinduri hills with a cross">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E4C878" />
                <stop offset="55%" stopColor="#F2CE86" />
                <stop offset="100%" stopColor="#FBF5EA" />
              </linearGradient>
              <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4C6B58" />
                <stop offset="100%" stopColor="#2F4A3C" />
              </linearGradient>
              <linearGradient id="hillNear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2F4A3C" />
                <stop offset="100%" stopColor="#1E1712" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="520" height="480" rx="28" fill="url(#sky)" />

            <circle cx="260" cy="230" r="86" fill="#C79A3D" opacity="0.9" />
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2
              const x1 = 260 + Math.cos(angle) * 100
              const y1 = 230 + Math.sin(angle) * 100
              const x2 = 260 + Math.cos(angle) * 128
              const y2 = 230 + Math.sin(angle) * 128
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C79A3D" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
              )
            })}

            {/* far tea-row hills */}
            <path d="M0 320 Q80 280 160 305 T320 300 T520 315 V480 H0 Z" fill="url(#hillFar)" opacity="0.85" />
            {/* tea plantation rows */}
            {Array.from({ length: 6 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${340 + i * 12} Q130 ${310 + i * 12} 260 ${330 + i * 12} T520 ${335 + i * 12}`}
                stroke="#F2EAD9"
                strokeOpacity="0.18"
                strokeWidth="3"
                fill="none"
              />
            ))}
            {/* near hill */}
            <path d="M0 380 Q120 340 240 368 T520 360 V480 H0 Z" fill="url(#hillNear)" />

            {/* cross on the hill */}
            <rect x="252" y="330" width="16" height="70" rx="3" fill="#FBF5EA" />
            <rect x="228" y="350" width="64" height="16" rx="3" fill="#FBF5EA" />

            {/* birds */}
            <path d="M70 120 q10 -12 20 0 q10 -12 20 0" stroke="#6B1E2A" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M400 90 q9 -10 18 0 q9 -10 18 0" stroke="#6B1E2A" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="woven-divider" aria-hidden="true" />
    </section>
  )
}