const ministries = [
  {
    name: 'Children\u2019s Church',
    desc: 'Bible stories, songs, and games that ground our youngest members in the Gospel from an early age.',
    icon: (
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 1 1-8 0V6a4 4 0 0 1 4-4Z M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    ),
  },
  {
    name: 'Youth Fellowship',
    desc: 'A lively space for teens and young adults to wrestle with faith, build friendships, and lead.',
    icon: <path d="M12 4l2.4 5 5.6.5-4.2 3.7 1.3 5.5L12 15.9 6.9 18.7l1.3-5.5L4 9.5l5.6-.5L12 4Z" />,
  },
  {
    name: 'Worship Team',
    desc: 'Musicians and vocalists who lead the congregation into heartfelt praise each week.',
    icon: <path d="M9 18V5l10-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  },
  {
    name: 'Women of Faith',
    desc: 'Fellowship, mentorship, and prayer for women at every stage of life.',
    icon: <path d="M12 21s-7-4.35-9.5-8.8C.9 8 2.4 4.5 6 4.5c2 0 3.5 1.1 4.3 2.4C11.1 5.6 12.6 4.5 14.5 4.5c3.6 0 5.1 3.5 3.5 6.7C15.5 16.65 12 21 12 21Z" />,
  },
  {
    name: 'Men\u2019s Fellowship',
    desc: 'Brotherhood, accountability, and service projects that strengthen homes and the church.',
    icon: <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4Z" />,
  },
  {
    name: 'Outreach & Missions',
    desc: 'Hospital visits, community clean-ups, and support for families in Mukinduri who need a hand.',
    icon: <path d="M12 21c-4.5-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-3.5 8-8 11Z" />,
  },
]

export default function Ministries() {
  return (
    <section id="ministries" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-xl">
        <p className="eyebrow text-wine">Find your place</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
          Ministries for every season of life
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ministries.map((m) => (
          <div
            key={m.name}
            className="group rounded-2xl border border-ink/10 bg-paper p-7 transition-shadow hover:shadow-lg hover:shadow-ink/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-paper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                {m.icon}
              </svg>
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{m.name}</h3>
            <p className="mt-2 text-[0.93rem] leading-relaxed text-ink/65">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
