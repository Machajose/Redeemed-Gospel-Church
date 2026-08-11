import pastorPortrait from '../assets/images/pastor 2.jpeg'

export default function PastorMessage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-14 rounded-3xl bg-paper-dim p-8 sm:p-12 md:grid-cols-[0.8fr_1.2fr] md:p-16">
        <div className="mx-auto w-48 sm:w-56 md:mx-0">
          <img
            src={pastorPortrait}
            alt="Portrait of the Senior Pastor"
            className="aspect-square w-full rounded-full object-cover ring-4 ring-gold/40"
          />
        </div>

        <div>
          <p className="eyebrow text-wine">A word from our pastor</p>
          <blockquote className="mt-5 font-display text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
            &ldquo;Whoever you are, wherever you've come from, there is a seat
            for you here. Our doors, and the Father's arms, are open.&rdquo;
          </blockquote>
          <p className="mt-6 font-semibold text-ink">Rev. Peter Mugo</p>
          <p className="text-sm text-ink/60">Senior Pastor, Redeemed Gospel Church Mukinduri</p>
        </div>
      </div>
    </section>
  )
}