const facts = [
  {
    title: 'Our Mission',
    body:
      'To make disciples of Christ in Mukinduri and beyond, through the faithful teaching of the Word, prayer, and genuine fellowship.',
    icon: <path d="M12 3v18M6 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  },
  {
    title: 'Our Vision',
    body:
      'A church where every generation, from the youngest child to the oldest elder, is rooted in the Gospel and sent out to serve.',
    icon: (
      <path
        d="M2 12c2.5-5 6-7.5 10-7.5S19.5 7 22 12c-2.5 5-6 7.5-10 7.5S4.5 17 2 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    ),
  },
  {
    title: 'Our Values',
    body:
      'Sound doctrine, warm community, generous giving, and a home that welcomes every visitor as family.',
    icon: (
      <path
        d="M12 20s-7-4.35-9.5-8.8C.9 8 2.4 4.5 6 4.5c2 0 3.5 1.1 4.3 2.4C11.1 5.6 12.6 4.5 14.5 4.5c3.6 0 5.1 3.5 3.5 6.7C15.5 15.65 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="eyebrow text-wine">Who we are</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
            A congregation planted in Mukinduri, growing for the Kingdom.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Redeemed Gospel Church Mukinduri began as a small gathering of
            neighbours who believed the Gospel could change our corner of
            Kirinyaga County &mdash; and it has. Today we're a growing family
            of families, students, farmers, traders, and elders who worship
            together every week.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {facts.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-2xl border border-ink/10 bg-paper-dim p-7 ${
                i === 2 ? 'sm:col-span-2' : ''
              }`}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" className="text-wine">
                {f.icon}
              </svg>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
