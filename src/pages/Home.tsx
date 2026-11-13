import { Link } from 'react-router-dom'
import {
  ArrowUpRight, Quote, Users, Building2, HandHeart, GraduationCap, MapPin, Map, Leaf, Sun, Droplet, Trees, Sprout,
  ShieldCheck, Home as HomeIcon, HeartPulse, School, Award, Newspaper, Plus, Compass, Camera,
} from 'lucide-react'
import { achievements2025, causes, districts, formatDate, heroSlides, hospitals, images, inclusivity, org, partnerLogos, pillars, press, recognitions, services, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import DonationWidget from '../components/DonationWidget'
import { SocialIcons, SocialRail } from '../components/Social'
import SocialPhone from '../components/SocialPhone'
import { ButtonLink, DemoTag, Eyebrow, SectionHeading, TextLink, Underlined } from '../components/ui'
import { AnimatedNumber, Carousel, CyclingImages, GrowBar, Marquee, Motion, Particles, PointerParallax, SplitWords, Tilt } from '../components/motion'
import Newsletter from '../components/Newsletter'
import PhotoDeck from '../components/PhotoDeck'
import FounderCard from '../components/FounderCard'

export default function Home() {
  useSeo('', 'CONARE works with Chenchu and other forest-dependent communities in Telangana and Andhra Pradesh since 1999: livelihoods, agroforestry, child protection and women’s collectives.')
  return (
    <>
      <SocialRail />
      <Hero />
      <ServicesRibbon />
      <Achievements />
      <Founder />
      <OurServices />
      <Faces />
      <Stories />
      <Causes />
      <WhereWeWork />
      <GetInvolved />
      <DonateSection />
      <NewsAndUpdates />
      <FollowUs />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint text-ink">
      <PointerParallax className="relative">
        <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path d="M640 900 C 760 640, 820 420, 1040 300 C 1210 205, 1330 120, 1440 40 L 1440 900 Z" fill="var(--color-mint-50)" />
        </svg>
        <Particles />

        <div className="container-x relative grid items-center gap-14 pb-28 pt-32 md:pt-44 lg:min-h-[min(100svh,960px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-36">
          <div className="max-w-[620px]">
            <p className="font-script animate-fade-in text-[1.7rem] text-rust">Since 1999 · Nallamala forest, Telangana</p>
            <h1 className="display-xl mt-4 text-ink lg:text-[clamp(2.6rem,4.3vw,4.3rem)]">
              <SplitWords text="Where the forest thrives," />{' '}
              <span className="inline-block animate-fade-in [animation-delay:700ms]">
                <Underlined>its people do too.</Underlined>
              </span>
            </h1>
            <p className="lede mt-7 max-w-[540px] animate-fade-in [animation-delay:500ms]">
              CONARE works with Chenchu and other forest-dependent communities in Telangana and Andhra Pradesh, building livelihoods that protect the land people depend on: forest honey, orchards, seed banks, safe childhoods and women’s savings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
              <ButtonLink to="/get-involved#volunteer" variant="secondary" icon="arrow">Volunteer with us</ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {['5,000 families', '6 districts', '2 states', 'Chenchu (PVTG) communities'].map((t, k) => (
                <li key={t} className="animate-rise-in rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink/80" style={{ animationDelay: `${900 + k * 90}ms` }}>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in [animation-delay:1200ms]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-rust">Follow us</span>
              <SocialIcons size={18} itemClassName="h-10 w-10 rounded-full border border-line bg-white text-maroon-800 hover:border-rust hover:bg-rust hover:text-white" />
              <span className="font-telugu text-sm text-muted">{org.townTelugu}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:mr-0">
            <PhotoDeck slides={heroSlides} />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="animate-rise-in rounded-[16px] bg-white px-4 py-3.5 text-ink shadow-[0_20px_40px_-24px_rgb(27_20_66/0.35)] [animation-delay:900ms]">
                <p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
                  <span className="live-dot h-2 w-2 rounded-full bg-rust text-rust" /> Since 1999
                </p>
                <p className="font-display mt-1 text-[clamp(1.5rem,2.6vw,2rem)] leading-none text-maroon-900">3,000+</p>
                <p className="text-xs font-semibold text-muted">children back in school</p>
              </div>
              <div className="animate-rise-in rounded-[16px] bg-maroon-900 px-4 py-3.5 text-peach [animation-delay:1050ms]">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">With Zomato</p>
                <p className="font-display text-shimmer mt-1 text-[clamp(1.5rem,2.6vw,2rem)] leading-none">3,500 acres</p>
                <p className="text-xs font-semibold text-peach/70">turned to orchards</p>
              </div>
            </div>
          </div>
        </div>
        <svg className="absolute inset-x-0 bottom-0 h-16 w-full text-gold opacity-70" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
          <path d="M0 40 C 120 10, 200 60, 320 34 S 520 8, 640 36 S 860 62, 980 30 S 1200 6, 1320 34 L 1440 22" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" />
        </svg>
      </PointerParallax>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ServicesRibbon() {
  const items = ['Forest honey', 'Agroforestry', 'Seed banks', 'Lift irrigation', 'Nutrition gardens', 'Child protection', 'Women’s thrift societies', 'Bridge schools', 'Vaccination drives', 'Watershed']
  return (
    <div className="relative z-10 -mt-px bg-rust py-4 text-white">
      <Marquee speed={45}>
        {items.map((t) => (
          <span key={t} className="font-display mx-6 flex items-center gap-6 whitespace-nowrap text-xl">
            {t}
            <Plus size={16} className="text-gold" strokeWidth={3} aria-hidden />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

/* ------------------------------------------------------------------ */

const achIcons: Record<string, typeof Leaf> = {
  school: School, leaf: Leaf, hand: HandHeart, sun: Sun, droplet: Droplet, tree: Trees, users: Users, sprout: Sprout,
  shield: ShieldCheck, home: HomeIcon, heart: HeartPulse, map: Map,
}

function Achievements() {
  const [lead, ...rest] = achievements2025
  return (
    <section aria-labelledby="ach-title" className="on-dark relative overflow-hidden bg-maroon-950 text-peach section-y">
      <Particles className="opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Motion><Eyebrow>27 years on the ground</Eyebrow></Motion>
            <h2 id="ach-title" className="display-lg mt-4 text-white"><SplitWords text="Every number is a field, a child or a family." /></h2>
          </div>
          <Motion delay={150}>
            <p className="lede">What tribal and rural communities and CONARE have achieved together since 1999, across forest fringe villages, tribal hamlets and Hyderabad’s settlements.</p>
          </Motion>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Motion as="li" variant="scale" className="relative col-span-2 overflow-hidden rounded-[24px] bg-rust p-7 text-white sm:col-span-3 lg:col-span-2 lg:row-span-2 sm:p-8">
            <GraduationCap size={30} className="relative" aria-hidden />
            <p className="font-display relative mt-6 text-[clamp(2.6rem,5vw,3.8rem)] leading-none">
              <AnimatedNumber value={lead.value} decimals={lead.decimals} prefix={lead.prefix} suffix={lead.suffix} />
            </p>
            <p className="relative mt-3 text-lg font-semibold">{lead.label}</p>
            <p className="relative mt-2 text-sm text-white/85">Where CONARE began in 1999: education centres and residential bridge courses for working children and dropouts.</p>
          </Motion>
          {rest.map((a, k) => {
            const Icon = achIcons[a.icon] ?? HeartPulse
            return (
              <Motion as="li" key={a.label} variant="up" delay={(k % 8) * 60}>
                <Tilt className="h-full rounded-[18px] bg-white/[0.05] p-4 ring-1 ring-line-dark transition-colors hover:bg-white/[0.09] sm:p-5">
                  <Icon size={20} className="text-gold" strokeWidth={1.8} aria-hidden />
                  <p className="font-display mt-3 text-[1.55rem] leading-none text-white">
                    <AnimatedNumber value={a.value} decimals={a.decimals} prefix={a.prefix} suffix={a.suffix} />
                  </p>
                  <p className="mt-2 text-[0.78rem] font-semibold leading-snug text-peach/70">{a.label}</p>
                </Tilt>
              </Motion>
            )
          })}
        </ul>
        <p className="mt-5 text-xs text-peach/45">Figures as published on conare.org (Achievements and Program pages), to be verified before launch.</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Founder() {
  return (
    <section className="container-x section-y">
      <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="blob-b absolute inset-[6%_-3%_-2%_8%] bg-gold-soft" />
          <Motion variant="scale">
            <FounderCard />
          </Motion>
          <p className="font-script absolute -top-9 left-2 rotate-[-4deg] text-[1.8rem] text-rust">our founder</p>
        </div>

        <div>
          <Motion><Eyebrow>Who we are</Eyebrow></Motion>
          <h2 className="display-lg mt-4">
            <SplitWords text="He cycled to Delhi for children’s rights." />{' '}
            <em className="font-display not-italic text-rust"><SplitWords text="Then he came home and built CONARE." delay={300} /></em>
          </h2>
          <Motion delay={150} className="mt-7 space-y-5 text-[1.05rem] text-muted">
            <p>
              Dr. M. A. Saleem, a postgraduate in Sociology, led a barefoot padayatra through 20 drought-hit villages around Achampet in 1990, and a cycle rally to New Delhi in 1992. On 17 February 1999 he founded Conservation of Nature through Rural Awakening.
            </p>
            <p>
              CONARE began with forest-dependent Chenchu, Lambada and Erukala communities on the edge of the Amrabad Tiger Reserve. Today it reaches 5,000 families in six districts of Telangana and Andhra Pradesh.
            </p>
          </Motion>
          <Motion delay={250} className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">The communities we work with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {inclusivity.map((t, i) => (
                <Motion as="li" key={t} variant="scale" delay={300 + i * 60} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink">
                  {t}
                </Motion>
              ))}
            </ul>
          </Motion>
          <Motion delay={350} className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink to="/about" variant="secondary" icon="arrow">Our story</ButtonLink>
            <span className="flex items-center gap-2 text-sm font-semibold text-muted"><Award size={16} className="text-rust" aria-hidden /> Earth Day Network Star, 2018</span>
          </Motion>
        </div>
      </div>
      <ol className="mt-16 grid gap-px overflow-hidden rounded-[22px] bg-line md:grid-cols-3">
        {pillars.map((p, k) => (
          <Motion as="li" key={p.title} delay={k * 100} className="bg-peach/50 p-6 sm:p-7">
            <p className="flex items-baseline gap-3"><span className="font-display text-2xl text-rust">{['I.', 'II.', 'III.'][k]}</span><span className="font-display text-xl text-ink">{p.title}</span></p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{p.text}</p>
          </Motion>
        ))}
      </ol>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function OurServices() {
  return (
    <section className="bg-sand/60 section-y" aria-labelledby="services-title">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Motion><Eyebrow>What we do · In the field</Eyebrow></Motion>
            <h2 id="services-title" className="display-lg mt-4"><SplitWords text="Local action. Lasting change." /></h2>
          </div>
          <Motion><p className="max-w-sm text-muted">Twelve kinds of work, photographed by our field teams. Drag to explore, hover a card for more photos.</p></Motion>
        </div>
        <div className="mt-10"><Carousel label="CONARE’s work">
          {services.map((s, k) => (
            <div key={s.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
              <Tilt className="group h-full overflow-hidden rounded-[22px] bg-ivory shadow-[0_24px_50px_-38px_rgb(36_27_92/0.5)]">
                <Link to={s.to} className="flex h-full flex-col">
                  <div className="relative">
                    <CyclingImages photos={s.photos} alt={s.title} className="aspect-[16/11]" auto={k % 4 === 0} />
                    <span className="absolute left-4 top-4 rounded-full bg-maroon-900/85 px-3 py-1 font-display text-sm text-gold backdrop-blur">{String(k + 1).padStart(2, '0')}</span>
                    {s.photos.length > 1 && <span className="absolute right-4 top-4 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.7rem] font-bold text-maroon-800">{s.photos.length} photos</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display-sm group-hover:text-maroon-700">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] text-muted">{s.text}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800 group-hover:text-rust">Read more <ArrowUpRight size={15} aria-hidden /></span>
                  </div>
                </Link>
              </Tilt>
            </div>
          ))}
        </Carousel></div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Faces() {
  const row1 = [images.honey, images.thumbsUp, images.childrenActivity, images.seedBank, images.womenGroup, images.mango1, images.vaccination, images.pgRegalla, images.chenchuMeeting]
  const row2 = [images.bannerField, images.nutriGarden, images.lift1, images.ber1, images.villageChildren, images.gathering, images.poultry, images.ifs1, images.cpsk2]
  const Tile = ({ src }: { src: string }) => (
    <div className="pan mx-2 h-[150px] w-[220px] shrink-0 overflow-hidden rounded-[16px] sm:h-[190px] sm:w-[280px]">
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
    </div>
  )
  return (
    <section className="on-dark overflow-hidden bg-maroon-900 py-14 text-peach md:py-16" aria-label="Faces of CONARE">
      <div className="container-x mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <Eyebrow>Faces of CONARE</Eyebrow>
          <h2 className="display-md mt-3 text-white">5,000 families. Six districts. One forest.</h2>
        </div>
        <p className="max-w-sm text-sm text-peach/70">Farmers, honey gatherers, children, women’s groups and field teams: the people at the heart of the work. Hover to pause.</p>
      </div>
      <div className="space-y-4">
        <Marquee speed={60}>{row1.map((src) => <Tile key={src} src={src} />)}</Marquee>
        <Marquee speed={70} reverse>{row2.map((src) => <Tile key={src} src={src} />)}</Marquee>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Stories() {
  const story = stories[0]
  return (
    <section className="container-x section-y">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Motion><Eyebrow>Stories from the villages</Eyebrow></Motion>
          <h2 className="display-lg mt-4"><SplitWords text="A girl in class, not at a wedding." /></h2>
        </div>
        <TextLink to="/stories">All stories</TextLink>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Motion variant="up">
          <Tilt className="group h-full overflow-hidden rounded-[24px] bg-white shadow-[0_24px_50px_-36px_rgb(36_27_92/0.5)]">
            <Link to={`/stories/${story.slug}`} className="grid h-full sm:grid-cols-[1fr_1.05fr]">
              <span className="pan relative block min-h-[240px] overflow-hidden">
                <img src={story.image} alt={story.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-maroon-800">Child protection</span>
              </span>
              <span className="flex flex-col p-6 sm:p-7">
                <Quote size={28} className="text-gold" aria-hidden />
                <span className="font-display mt-3 text-[1.45rem] leading-snug text-ink group-hover:text-maroon-700">{story.title}</span>
                <span className="mt-3 text-[0.95rem] text-muted">{story.excerpt}</span>
                <span className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {[['600', 'marriages stopped'], ['100', 'village committees'], ['8,000', 'families linked']].map(([n, l]) => (
                    <span key={l}><span className="font-display block text-2xl text-maroon-800">{n}</span><span className="text-[0.7rem] font-semibold text-muted">{l}</span></span>
                  ))}
                </span>
              </span>
            </Link>
          </Tilt>
        </Motion>
        <Motion variant="scale" delay={120}>
          <Link to="/impact" className="pan group relative block h-full min-h-[320px] w-full overflow-hidden rounded-[24px] text-left">
            <img src={images.seedBank} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/95 via-maroon-950/50 to-maroon-950/10" />
            <span className="on-dark absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <span className="eyebrow">From the field · 2026</span>
              <span className="font-display mt-2 text-[1.9rem] leading-tight text-white">This season in Karakagudem: seed banks, orchards and water</span>
              <span className="mt-6 flex items-center gap-3 font-semibold text-white">
                <span className="live-dot grid h-14 w-14 place-items-center rounded-full bg-gold text-maroon-950 transition-transform duration-300 group-hover:scale-110">
                  <Camera size={22} aria-hidden />
                </span>
                See the field gallery
              </span>
            </span>
          </Link>
        </Motion>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Causes() {
  return (
    <section className="bg-mint/60 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Motion><p className="font-script text-[1.7rem] text-rust">Donate for a cause</p></Motion>
            <h2 className="display-lg mt-1"><SplitWords text="Choose where your kindness grows." /></h2>
          </div>
          <DemoTag>Progress bars are sample data</DemoTag>
        </div>
        <div className="mt-10"><Carousel label="Causes to support">
          {causes.map((c) => (
            <div key={c.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
              <Tilt className="group h-full overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_50px_-36px_rgb(36_27_92/0.45)]">
                <div className="pan relative overflow-hidden">
                  <img src={c.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-maroon-900/85 px-3 py-1 text-xs font-bold text-peach backdrop-blur">{c.cost}</span>
                </div>
                <div className="p-6">
                  <h3 className="display-sm">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                  <div className="mt-5 flex justify-between text-sm font-bold">
                    <span className="text-maroon-800">{c.raised}% of goal</span>
                    <span className="text-muted">Sample</span>
                  </div>
                  <GrowBar value={c.raised} className="mt-2" label={`${c.title}: ${c.raised}% (sample)`} />
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                    <ButtonLink to={`/donate?purpose=${encodeURIComponent(c.purpose)}`} variant="primary" size="sm">Donate</ButtonLink>
                    <TextLink to="/programs">Learn more</TextLink>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </Carousel></div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function WhereWeWork() {
  return (
    <section className="border-y border-line bg-white/60 py-14">
      <div className="container-x">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="display-md mt-3 max-w-xl">Six districts, two states, remote villages.</h2>
          </div>
          <TextLink to="/about#where">More about our reach</TextLink>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d, i) => (
            <Motion as="li" key={d.name} delay={i * 70}>
              <Tilt className={`h-full rounded-[18px] p-6 ${i === 0 ? 'on-dark bg-maroon-900 text-peach' : 'border border-line bg-ivory'}`}>
                <p className={`flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] ${i === 0 ? 'text-gold' : 'text-rust'}`}><MapPin size={13} aria-hidden /> {d.state}</p>
                <p className={`font-display mt-2 text-2xl ${i === 0 ? 'text-white' : 'text-ink'}`}>{d.name}</p>
                <p className={`mt-2 text-[0.92rem] ${i === 0 ? 'text-peach/80' : 'text-muted'}`}>{d.text}</p>
              </Tilt>
            </Motion>
          ))}
        </ul>
      </div>
      <p className="container-x mt-12 text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">Villages and places in our field records</p>
      <Marquee speed={55} className="mt-5">
        {hospitals.map((h) => (
          <span key={h} className="mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-ivory px-5 py-2.5 text-sm font-semibold text-ink">
            <Compass size={16} className="text-rust" aria-hidden /> {h}
          </span>
        ))}
      </Marquee>
      <div className="container-x mt-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">Our funders & partners</p>
      </div>
      <Marquee speed={50} reverse className="mt-6">
        {partnerLogos.map((p) => (
          <span key={p.src} className="mx-3 grid h-24 w-40 place-items-center rounded-[14px] border border-line bg-white p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_-20px_rgb(36_27_92/0.5)]">
            <img src={p.src} alt={p.name} title={p.name} loading="lazy" className="max-h-full max-w-full object-contain mix-blend-multiply" />
          </span>
        ))}
      </Marquee>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function GetInvolved() {
  const ways = [
    { icon: Users, title: 'Volunteer', text: 'Join a nutrition-garden drive, a health camp or a children’s club day in Achampet or Karakagudem.', cta: 'Volunteer', to: '/get-involved#volunteer' },
    { icon: GraduationCap, title: 'Intern with us', text: 'Social work, forestry and agriculture students: 4 to 8 weeks in tribal villages with our field team.', cta: 'Apply', to: '/get-involved#volunteer' },
    { icon: Compass, title: 'Visit the field', text: 'See the orchards, seed banks and women’s groups for yourself. Achampet is three hours from Hyderabad.', cta: 'Plan a visit', to: '/contact' },
    { icon: Building2, title: 'CSR partnership', text: 'Join HDFC Bank, Zomato and Hitachi in funding agroforestry, livelihoods or child protection.', cta: 'Partner', to: '/get-involved#partner' },
  ]
  return (
    <section className="bg-gold-soft/50 section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Join us" title={<>Many hands, <em className="not-italic text-maroon-700">one forest.</em></>} lede="Give your time, your skills, a field visit or your company’s CSR support." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, ...w }, i) => (
            <Motion key={w.title} delay={i * 90}>
              <Tilt className="group flex h-full flex-col rounded-[20px] bg-ivory p-7">
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-rust-soft text-rust transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-rust group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="display-sm mt-6">{w.title}</h3>
                <p className="mt-2 flex-1 text-muted">{w.text}</p>
                <ButtonLink to={w.to} variant={i === 0 ? 'primary' : 'secondary'} size="sm" icon="arrow" className="mt-6 self-start">
                  {w.cta}
                </ButtonLink>
              </Tilt>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function DonateSection() {
  return (
    <section id="donate" className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <Particles className="opacity-60" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L 620 0 C 520 260, 420 560, 0 760 Z" fill="var(--color-maroon-800)" />
      </svg>
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <div>
          <Motion><Eyebrow>Give today</Eyebrow></Motion>
          <h2 className="display-lg mt-4 text-white">
            <SplitWords text="Help a forest family" /> <Underlined>plant its next season.</Underlined>
          </h2>
          <Motion delay={150}><p className="lede mt-6 max-w-lg">Your gift goes to saplings, seeds, schooling and safe childhoods in villages where most families earn from the forest and a small plot.</p></Motion>
          <ul className="mt-10 space-y-4">
            {[
              [Trees, 'Fruit saplings that become a second income for a tribal farm'],
              [Sprout, 'Seeds for a family nutrition garden or a village seed bank'],
              [ShieldCheck, 'The follow-up that keeps a girl in school instead of married'],
              [HandHeart, 'Fair prices for honey and forest produce'],
            ].map(([Icon, t], i) => {
              const I = Icon as typeof Leaf
              return (
                <Motion as="li" key={t as string} variant="left" delay={200 + i * 100} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><I size={20} aria-hidden /></span>
                  <span className="text-peach/90">{t as string}</span>
                </Motion>
              )
            })}
          </ul>
          <Motion delay={600} className="mt-10 flex items-center gap-3 text-sm text-peach/70">
            <ShieldCheck size={18} className="text-gold" aria-hidden /> Audited accounts published every year. 80G status to be confirmed.
          </Motion>
        </div>
        <Motion variant="scale" delay={150} className="rounded-[22px] border border-line-dark bg-maroon-950/50 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-white">Make a gift</h3>
            <DemoTag>Simulated</DemoTag>
          </div>
          <DonationWidget tone="dark" />
        </Motion>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function NewsAndUpdates() {
  const latest = [stories[1], stories[2], stories[3], stories[4]]
  return (
    <section className="border-t border-line bg-white/50 py-14 md:py-16">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Eyebrow>Recognition</Eyebrow>
          <h2 className="display-sm mt-3">Noticed for showing up, year after year.</h2>
          <ul className="mt-5 space-y-2">
            {recognitions.slice(0, 4).map((r) => (
              <li key={r.title} className="flex gap-3 text-sm"><span className="font-display w-11 shrink-0 text-rust">{r.year}</span><span className="text-ink">{r.title}</span></li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {press.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noreferrer" title={p.title} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-rust hover:text-rust">
                  <Newspaper size={12} aria-hidden /> {p.outlet} <ArrowUpRight size={12} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-end justify-between gap-4">
            <Eyebrow>News & updates</Eyebrow>
            <TextLink to="/stories">All stories</TextLink>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {latest.map((st) => (
              <li key={st.slug}>
                <Link to={`/stories/${st.slug}`} className="group flex items-center gap-3 rounded-[14px] border border-line bg-white p-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-22px_rgb(36_27_92/0.5)]">
                  <span className="pan block h-16 w-20 shrink-0 overflow-hidden rounded-[10px]"><img src={st.image} alt="" loading="lazy" className="h-full w-full object-cover" /></span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-rust">{formatDate(st.date)}</span>
                    <span className="line-clamp-2 block text-[0.88rem] font-semibold leading-snug text-ink group-hover:text-maroon-700">{st.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function FollowUs() {
  return (
    <section className="relative overflow-hidden bg-mint text-ink section-y">
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Motion><Eyebrow>Follow CONARE</Eyebrow></Motion>
            <h2 className="display-lg mt-4 text-ink"><SplitWords text="Follow the work, every season." /></h2>
          </div>
          <Motion delay={150} className="rounded-[20px] bg-white p-5 ring-1 ring-line sm:p-6">
            <p className="text-sm font-bold text-ink">Join our newsletter</p>
            <p className="mb-4 mt-1 text-sm text-muted">Field stories, new programs and ways to help, once a month.</p>
            <Newsletter compact />
          </Motion>
        </div>
        <div className="mt-14">
          <SocialPhone />
        </div>
      </div>
    </section>
  )
}
