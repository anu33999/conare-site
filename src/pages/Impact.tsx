import { Link } from 'react-router-dom'
import { ArrowUpRight, GraduationCap, HeartPulse, Leaf, Newspaper, ShieldCheck, Sprout, Trees, Users, Droplet, Sun } from 'lucide-react'
import { hospitals, images, press, programs, publishedStats, savings, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { CountUp, Eyebrow, SafeImage, SectionHeading, Underlined } from '../components/ui'
import { GrowBar, Marquee, Motion, SplitWords, Tilt } from '../components/motion'

const reach = [
  { icon: GraduationCap, value: '3,000+', label: 'children back in education', note: 'Bridge courses since 1999' },
  { icon: ShieldCheck, value: '600', label: 'child marriages prevented', note: 'Nagarkurnool & Kurnool' },
  { icon: Users, value: '8,000', label: 'families linked to government schemes', note: 'Scholarships, pensions, housing' },
  { icon: Trees, value: '3,500', label: 'acres of agroforestry', note: '1,300 farmers, with Zomato' },
  { icon: Sprout, value: '300', label: 'families with nutrition gardens', note: 'Karakagudem' },
  { icon: Droplet, value: '120', label: 'farmers with lift irrigation', note: 'Community-managed' },
  { icon: HeartPulse, value: '117', label: 'villages covered by vaccination', note: '4 Primary Health Centres' },
  { icon: Sun, value: '5,000', label: 'families supported in heat waves', note: 'Disaster response' },
  { icon: Leaf, value: '3,241', label: 'women in a thrift society', note: 'Chaitanya Vikas, since 2006' },
]

const gallery = [
  [images.seedBank, 'Community seed bank, Karakagudem'], [images.ber1, 'Apple ber orchard, Regalla'], [images.nutriGarden, 'Nutrition garden, Chirumalla'],
  [images.pgRegalla, 'Producer group training, Regalla'], [images.lift2, 'Lift irrigation, Karakagudem'], [images.agro1, 'Agroforestry, Thatigudem'],
  [images.ifs1, 'Integrated farming, Bangarugudem'], [images.apcInputs, 'Producer cluster inputs'], [images.fodder, 'Fodder demonstration plot'],
]

export default function Impact() {
  useSeo('Our impact', 'CONARE’s results since 1999: children back in school, child marriages prevented, land restored and families supported.')
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={<>27 years. <Underlined>5,000 families.</Underlined></>}
        lede="We report results the way villages see them: children back in class, fields that hold water, orchards on tribal farms and women with their own savings."
        image={images.mango1}
        imageAlt="A young mango agroforestry plot in Thatigudem"
      />

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line md:grid-cols-3 lg:grid-cols-5">
          {publishedStats.map((s, i) => (
            <Motion key={s.label} delay={i * 80} className="bg-white p-6 md:p-7">
              <p className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-none text-maroon-800">
                <CountUp value={s.value} display={s.display} />
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </Motion>
          ))}
        </div>
        <SourceNote className="mt-3">Figures as published on conare.org.</SourceNote>
      </section>

      <section className="on-dark relative overflow-hidden bg-maroon-900 text-peach section-y">
        <div className="container-x relative">
          <div className="max-w-2xl">
            <Eyebrow>Land and water restored</Eyebrow>
            <h2 className="display-lg mt-4 text-white"><SplitWords text="Livelihoods that give back to the forest." /></h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {savings.map((s, i) => (
              <Motion key={s.value} delay={i * 110} variant="up">
                <Tilt className="h-full rounded-[20px] border border-line-dark bg-white/[0.04] p-7">
                  <p className="font-display text-shimmer text-[2.3rem] leading-none">{s.value}</p>
                  <p className="mt-4 text-peach/90">{s.label}</p>
                  <p className="mt-3 text-sm text-gold">{s.note}</p>
                </Tilt>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Reach across programs" title="What the work adds up to" lede="Each figure comes from a specific program CONARE reports on its website." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reach.map(({ icon: Icon, ...r }, i) => (
              <Motion as="li" key={r.label} delay={(i % 3) * 90} className="flex gap-5 rounded-[var(--radius-media)] bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-rust-soft text-rust"><Icon size={22} aria-hidden /></span>
                <div>
                  <p className="font-display text-3xl leading-none text-maroon-800">{r.value}</p>
                  <p className="mt-2 font-semibold text-ink">{r.label}</p>
                  <p className="mt-1 text-sm text-muted">{r.note}</p>
                </div>
              </Motion>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Motion><Eyebrow>Inside one project</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Karakagudem: 1,000+ farmers, many ways in" /></h2>
            <p className="lede mt-5">How the HDFC Bank Parivartan and BRLF project in Bhadradri Kothagudem reaches farmers and families, by intervention.</p>
            <ul className="mt-10 space-y-6">
              {[['Nutrition gardens & poultry', 300], ['Integrated farming systems', 250], ['Producer clusters', 200], ['Agroforestry & soil', 180], ['Seed banks', 150], ['Irrigation', 120]].map(([label, value]) => (
                <li key={label}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{label}</span>
                    <span className="text-maroon-800">{value}</span>
                  </div>
                  <GrowBar value={(Number(value) / 300) * 100} className="mt-2 h-3" label={`${label}: ${value} farmers or families`} />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Bars scaled to the largest intervention (300 families). Figures from conare.org.</p>
          </div>
          <Motion variant="clip">
            <SafeImage src={images.lift1} alt="Farmers laying a lift irrigation pipeline in Karakagudem" className="aspect-[4/5]" />
          </Motion>
        </div>
      </section>

      <section className="on-dark overflow-hidden bg-maroon-950 text-peach section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>From the field · 2026</Eyebrow>
              <h2 className="display-lg mt-4 text-white">Photographed by our field teams</h2>
            </div>
            <p className="max-w-sm text-sm text-peach/70">Seed banks, orchards, irrigation and training in Bhadradri Kothagudem this season.</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map(([src, cap], i) => (
              <Motion as="li" key={src} variant="scale" delay={(i % 3) * 80} className={`group relative overflow-hidden rounded-[16px] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={src} alt={cap} loading="lazy" className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-2 bottom-2 rounded-[10px] bg-maroon-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">{cap}</span>
              </Motion>
            ))}
          </ul>
        </div>
        <p className="container-x mt-12 text-xs font-bold uppercase tracking-[0.16em] text-gold">Places in our field records</p>
        <Marquee speed={55} className="mt-5">
          {hospitals.map((h) => (
            <span key={h} className="mx-3 whitespace-nowrap rounded-full border border-line-dark px-5 py-2.5 text-sm font-semibold text-peach/90">{h}</span>
          ))}
        </Marquee>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Programs" title="Results by program" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Motion as="li" key={p.slug} delay={(i % 4) * 70}>
              <Link to={`/programs/${p.slug}`} className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(36_27_92/0.45)]">
                <p className="font-display text-3xl leading-none text-rust">{p.stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-muted">{p.stat.label}</p>
                <p className="font-display mt-4 flex-1 text-lg leading-snug text-ink group-hover:text-maroon-700">{p.title}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800">Read more <ArrowUpRight size={14} aria-hidden /></span>
              </Link>
            </Motion>
          ))}
        </ul>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {press.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="group flex flex-col rounded-[18px] bg-peach/60 p-6 transition-colors hover:bg-peach">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rust"><Newspaper size={14} aria-hidden /> {p.outlet}</span>
              <span className="font-display mt-3 flex-1 text-lg leading-snug">{p.title}</span>
              <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800">Open <ArrowUpRight size={14} aria-hidden /></span>
            </a>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => (
            <Motion key={s.slug} delay={i * 90}>
              <Link to={`/stories/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-media)] bg-mint p-7 transition-colors hover:bg-gold-soft">
                <span className="font-display text-5xl leading-none text-gold">“</span>
                <h3 className="display-sm mt-2">{s.title}</h3>
                <span className="link-arrow mt-6 self-start">Read the story <ArrowUpRight size={16} aria-hidden /></span>
              </Link>
            </Motion>
          ))}
        </div>
      </section>

      <CtaBand title="Add your name to the next number." />
    </>
  )
}
