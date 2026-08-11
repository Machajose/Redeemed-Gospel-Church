const schedule = [
  {
    day: 'Sunday',
    items: [
      { name: 'Youth Service', time: '9:30 – 10:00 AM' },
      { name: 'Bible Study (led by the Pastor)', time: '10:00 – 10:30 AM' },
      { name: 'Main Service', time: '10:30 AM – 1:00 PM' },
    ],
  },
  {
    day: 'Tuesday',
    items: [{ name: 'Prayers', time: '5:00 PM' }],
  },
  {
    day: 'Thursday',
    items: [{ name: 'Home Fellowship', time: '5:00 PM' }],
  },
]

export default function ServiceTimes() {
  return (
    <section id="services" className="bg-wine py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="eyebrow text-gold-light">This week</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-[2.75rem]">
            Order of Service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/80">
            Doors open thirty minutes early for tea and fellowship in the
            courtyard. Come early, stay late.
          </p>
          <p className="mt-4 font-display text-lg italic text-gold-light">
            &ldquo;Keep the fire at the altar burning.&rdquo;
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-3">
          {schedule.map((s) => (
            <div key={s.day} className="ticket-card mx-2 rounded-lg px-7 py-8 text-ink">
              <p className="eyebrow text-wine">{s.day}</p>
              <div className="mt-5 space-y-4 border-t border-dashed border-ink/25 pt-5">
                {s.items.map((it) => (
                  <div key={it.name} className="flex items-baseline justify-between gap-4">
                    <span className="text-[0.95rem] font-medium text-ink/85">{it.name}</span>
                    <span className="font-mono text-sm text-wine">{it.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}