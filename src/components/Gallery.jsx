import sundayWorship from '../assets/images/worship team 4.jpeg'
import choir from '../assets/images/worship team 2.jpeg'
//import baptism from '../assets/images/baptism.jpg'
import youth from '../assets/images/youth.jpeg'
//import childrenChurch from '../assets/images/children-church.jpg'
//import outreach from '../assets/images/outreach.jpg'

const tiles = [
  { label: 'Sunday Worship', src: sundayWorship, tall: true },
  { label: 'Choir & Praise Team', src: choir },
  //{ label: 'Baptism Sunday', src: baptism },
  { label: 'Youth Fellowship', src: youth },
  //{ label: "Children's Church", src: childrenChurch, tall: true },
  //{ label: 'Community Outreach', src: outreach },
]

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-xl">
        <p className="eyebrow text-wine">Life together</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
          Moments from our church family
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/70">
          A look at what God has been doing among us this year.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={`relative flex items-end overflow-hidden rounded-2xl ${
              t.tall ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
            }`}
          >
            <img
              src={t.src}
              alt={t.label}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <p className="relative z-10 w-full bg-charcoal/40 px-4 py-3 text-sm font-medium text-cream">
              {t.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
