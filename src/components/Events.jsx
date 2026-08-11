const events = [
  {
    date: { day: '14', month: 'AUG' },
    title: 'Overnight Kesha',
    time: '11:00 AM',
    place: 'Church Grounds',
  },
  {
    date: { day: '16', month: 'AUG' },
    title: 'Youth Overnight Prayer',
    time: '9:00 PM',
    place: 'Youth Hall',
  },
  {
    date: { day: '30', month: 'AUG' },
    title: 'Women of Faith Brunch',
    time: '10:00 AM',
    place: 'Fellowship Grounds',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-green py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold-light">Mark your calendar</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-[2.75rem]">
              Upcoming Events
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-gold-light underline underline-offset-4 hover:text-gold">
            See full calendar &rarr;
          </a>
        </div>

        <div className="mt-14 divide-y divide-paper/15 border-y border-paper/15">
          {events.map((e) => (
            <div key={e.title} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex w-20 flex-col items-center rounded-xl bg-paper/10 py-3">
                <span className="font-display text-2xl font-semibold leading-none">{e.date.day}</span>
                <span className="eyebrow mt-1 text-gold-light">{e.date.month}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-paper/70">{e.place}</p>
              </div>
              <span className="font-mono text-sm text-gold-light">{e.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
