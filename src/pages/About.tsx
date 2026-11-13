import { Target, Eye, Leaf, MapPin } from 'lucide-react'
import { districts, images, org, publishedStats, recognitions, steps, timeline, values } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, Eyebrow, SafeImage, SectionHeading, Underlined } from '../components/ui'
import { Motion, SplitWords, Tilt } from '../components/motion'
import FounderCard from '../components/FounderCard'

const focus = ['Adult & elementary education', 'Rural livelihoods & skills', 'Conservation of nature', 'Rural development', 'Biodiversity', 'Women’s empowerment', 'Sustainable agriculture', 'Watershed development', 'Child protection']

export default function About() {
  useSeo('About us', `Founded in ${org.founded} by ${org.founder}, CONARE works with forest-dependent and tribal communities in Telangana and Andhra Pradesh.`)
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={<>Community first. <Underlined>Always.</Underlined></>}
        lede="Conservation of Nature through Rural Awakening is a registered society founded in Achampet on 17 February 1999, on the edge of the Amrabad Tiger Reserve."
        image={images.teamCommunity}
        imageAlt="CONARE’s team with a village community"
      />

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Motion><Eyebrow>Our story</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Started with ten village schools. Grown with the forest." /></h2>
          </div>
          <Motion delay={150} className="space-y-5 text-[1.05rem] text-muted">
            <p>CONARE began with forest-dependent primitive and nomadic tribes, the Chenchu, Erukala and Lambada, in the Nagarjunasagar-Srisailam (Amrabad) Tiger Reserve. Its first work was education centres for children who were working instead of studying.</p>
            <p>Over 27 years it has grown into work on livelihoods, agroforestry, watershed, health, governance, women’s collectives and child protection, always with Scheduled Castes, poor farmers and minority communities too, and always with a focus on women, children and youth.</p>
            <p>The organisation is funded by government and non-government sources, national and international, with transparent and accountable financial practices.</p>
          </Motion>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line md:grid-cols-3 lg:grid-cols-5">
          {publishedStats.map((s, i) => (
            <Motion key={s.label} delay={i * 80} className="bg-ivory p-6 md:p-7">
              <p className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-none text-maroon-800">
                <CountUp value={s.value} display={s.display} />
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </Motion>
          ))}
        </div>
        <SourceNote className="mt-3">Figures as published on conare.org, to be verified before launch.</SourceNote>
      </section>

      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, label: 'Vision', text: 'A discrimination-free society with equal opportunities for all marginalised sections of society to access development.' },
              { icon: Target, label: 'Mission', text: 'An empowered society, taking collective action and marching towards holistic development.' },
              { icon: Leaf, label: 'Our approach', text: 'Lasting development happens only when communities identify their needs, plan the solutions, run the programmes and sustain the results themselves.' },
            ].map(({ icon: Icon, label, text }, i) => (
              <Motion key={label} delay={i * 120}>
                <Tilt className="h-full rounded-[22px] bg-ivory p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-rust text-white"><Icon size={22} aria-hidden /></span>
                  <p className="eyebrow mt-6">{label}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-ink">{text}</p>
                </Tilt>
              </Motion>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Nine focus areas</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focus.map((f, i) => (
                <Motion as="li" key={f} variant="scale" delay={i * 50} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink">
                  <span className="font-display mr-1.5 text-rust">{String(i + 1).padStart(2, '0')}</span>{f}
                </Motion>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="founder" className="container-x section-y scroll-mt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Motion variant="scale">
            <FounderCard />
          </Motion>
          <div>
            <Motion><Eyebrow>Our founder</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Dr. M. A. Saleem" /></h2>
            <Motion delay={150} className="mt-6 space-y-5 text-[1.05rem] text-muted">
              <p>A postgraduate in Sociology with an honorary doctorate for social service, Dr. Saleem began his development career with AWARE. In 1988 he became Director of the Centre for Rural Youth Development, running watershed and universal-education programmes.</p>
              <p>In 1990 he led a barefoot padayatra through 20 drought-hit villages around Achampet, ending at Palem. In 1992 he cycled from Achampet to New Delhi for national integration and child welfare, and handed a memorandum to President Shankar Dayal Sharma. In 1999, with like-minded people, he founded CONARE.</p>
            </Motion>
            <Motion delay={250} className="mt-8">
              <ButtonLink to="/contact" variant="secondary" icon="arrow">Write to Dr. Saleem’s team</ButtonLink>
            </Motion>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <SectionHeading eyebrow="How we work" title="From a village meeting to a community that runs it." />
        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((v, i) => (
            <Motion as="li" key={v.title} delay={i * 90} className="border-t-2 border-maroon-800 pt-6">
              <span className="font-display text-sm text-rust">0{i + 1}</span>
              <h3 className="display-sm mt-2">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </Motion>
          ))}
        </ol>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Motion key={v.title} delay={i * 90}>
              <Tilt className="h-full rounded-[20px] bg-gold-soft/60 p-6">
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </Tilt>
            </Motion>
          ))}
        </div>
      </section>

      <section id="journey" className="on-dark scroll-mt-24 bg-maroon-900 text-peach section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="display-lg mt-4 text-white">From a barefoot march to six districts.</h2>
            <p className="lede mt-5">Every program grew out of what the last one’s families asked for next.</p>
            <SafeImage src={images.villageChildren} alt="Children in a rural village" className="mt-8 hidden aspect-[4/3] lg:block" />
          </div>
          <ol className="relative border-l border-line-dark">
            {timeline.map((t, i) => (
              <Motion as="li" key={t.year} variant="left" delay={i * 60} className="relative pb-10 pl-9 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-maroon-900" />
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <p className="mt-2 max-w-xl text-peach/85">{t.text}</p>
              </Motion>
            ))}
          </ol>
        </div>
      </section>

      <section id="where" className="container-x section-y scroll-mt-24">
        <SectionHeading eyebrow="Where we work" title="Six districts, two states." lede="The administration office is in Achampet. A core committee of senior staff and experts supports the field teams in every district." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d, i) => (
            <Motion as="li" key={d.name} delay={i * 70}>
              <Tilt className={`h-full rounded-[18px] p-6 ${i === 0 ? 'on-dark bg-maroon-900 text-peach' : 'border border-line bg-white'}`}>
                <p className={`flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] ${i === 0 ? 'text-gold' : 'text-rust'}`}><MapPin size={13} aria-hidden /> {d.state}</p>
                <p className={`font-display mt-2 text-2xl ${i === 0 ? 'text-white' : 'text-ink'}`}>{d.name}</p>
                <p className={`mt-2 text-[0.92rem] ${i === 0 ? 'text-peach/80' : 'text-muted'}`}>{d.text}</p>
              </Tilt>
            </Motion>
          ))}
        </ul>
      </section>

      <section className="bg-sand/60 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Recognition" title="Honours along the way" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recognitions.map((r, i) => (
              <Motion as="li" key={r.title} delay={i * 90}>
                <Tilt className="h-full rounded-[20px] border border-line bg-white p-6">
                  <p className="font-display text-2xl text-rust">{r.year}</p>
                  <p className="font-display mt-3 text-xl leading-tight">{r.title}</p>
                  <p className="mt-2 text-sm text-muted">{r.by}</p>
                </Tilt>
              </Motion>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted">CONARE is governed by a seven-member Governing Board and a nine-member Advisory Board. Names and photos can be added with consent.</p>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}
