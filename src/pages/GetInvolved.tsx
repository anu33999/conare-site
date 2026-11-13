import { Camera, Compass, GraduationCap, HeartHandshake, Sprout, Users, Megaphone, Trees, Sparkles, Shuffle, Repeat } from 'lucide-react'
import { images, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { ButtonLink, Eyebrow, SafeImage, SectionHeading } from '../components/ui'
import { Motion, SplitWords, Tilt } from '../components/motion'

const roles = [
  { icon: Sprout, label: 'Help at nutrition-garden & seed drives' },
  { icon: Trees, label: 'Join tree-planting days in schools' },
  { icon: GraduationCap, label: 'Run a children’s club session' },
  { icon: Camera, label: 'Photograph and film field stories' },
  { icon: Megaphone, label: 'Help with outreach & social media' },
  { icon: HeartHandshake, label: 'Train women’s groups in skills' },
]

const why = [
  { icon: Sparkles, title: 'Proven partners', text: 'Paul Hamlyn Foundation, Azim Premji Philanthropic Initiatives, HDFC Bank, Zomato, Hitachi, NABARD and UNICEF have funded CONARE’s work.' },
  { icon: Shuffle, title: 'Field to report', text: 'Projects are planned with villagers and monitored by them, with photos, numbers and audited accounts every year.' },
  { icon: Repeat, title: 'Built to last', text: 'Community Owned, Community Operated: seed banks, societies and committees keep running after the grant ends.' },
]

export default function GetInvolved() {
  useSeo('Get involved', 'Volunteer, intern, visit the field or partner with CONARE in Telangana.')
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Many hands, one forest."
        lede="Volunteers, interns, visitors and CSR partners make CONARE’s work possible. Find the way that fits you."
        image={images.pgRegalla}
        imageAlt="A producer group training in Regalla"
      >
        <ButtonLink to="#volunteer" variant="primary" icon="arrow">Volunteer</ButtonLink>
        <ButtonLink to="#partner" variant="secondary">CSR partnership</ButtonLink>
      </PageHero>

      <section id="volunteer" className="container-x section-y scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Motion><Eyebrow>Volunteering & internships</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="A weekend in the village changes how you see the forest." /></h2>
            <Motion delay={150}>
              <p className="lede mt-5">CONARE welcomes volunteers for field days in Achampet and Karakagudem. Social work, forestry, agriculture and public-health students can intern for 4 to 8 weeks alongside our field teams.</p>
            </Motion>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map(({ icon: Icon, label }, i) => (
                <Motion as="li" key={label} variant="scale" delay={i * 70} className="flex items-center gap-3 rounded-[var(--radius-ui)] bg-peach/60 px-4 py-3.5 font-semibold">
                  <Icon size={20} className="shrink-0 text-rust" strokeWidth={1.9} aria-hidden />
                  {label}
                </Motion>
              ))}
            </ul>
            <Motion delay={400} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="#partner-form" variant="primary" icon="arrow">Become a volunteer</ButtonLink>
              <ButtonLink to="#partner-form" variant="secondary" icon="arrow">Apply for an internship</ButtonLink>
            </Motion>
          </div>
          <Motion variant="clip" className="relative">
            <SafeImage src={images.nutriSeeds} alt="Nutrition garden seed distribution in Karakagudem" className="shape-arch aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-media)] bg-maroon-900 p-6 text-peach shadow-xl sm:left-auto sm:max-w-xs">
              <p className="font-display text-4xl text-gold">5,000</p>
              <p className="mt-1 text-sm text-peach/85">families in the villages where you would volunteer.</p>
            </div>
          </Motion>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-rust py-16 text-white md:py-20">
        <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="live-dot grid h-16 w-16 place-items-center rounded-full bg-white text-rust">
            <Compass size={30} aria-hidden />
          </span>
          <div>
            <h2 className="display-sm text-white">Visit the field</h2>
            <p className="mt-2 max-w-2xl text-white/85">See the orchards, seed banks and women’s groups for yourself. Achampet is about three hours from Hyderabad; tell us when you’d like to come.</p>
          </div>
          <ButtonLink to="/contact" variant="light">Plan a visit</ButtonLink>
        </div>
      </section>

      <section id="partner" className="container-x section-y scroll-mt-20">
        <SectionHeading eyebrow="Collaborate" title="Why partner with CONARE?" lede="Companies, foundations and government departments partner with CONARE to reach tribal and forest communities that most programs never get to." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {why.map(({ icon: Icon, title, text }, i) => (
            <Motion key={title} delay={i * 120}>
              <Tilt className="h-full rounded-[22px] border border-line bg-white p-8">
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-maroon-900 text-gold"><Icon size={26} aria-hidden /></span>
                <h3 className="font-display mt-6 text-3xl">{title}</h3>
                <p className="mt-3 text-muted">{text}</p>
              </Tilt>
            </Motion>
          ))}
        </div>
      </section>

      <section id="partner-form" className="on-dark bg-maroon-900 text-peach section-y scroll-mt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Volunteer, intern or partner</h2>
            <p className="lede mt-5">Tell us a little about yourself or your organisation and the CONARE team will be in touch.</p>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
              <Users size={28} className="shrink-0 text-gold" aria-hidden />
              <p className="text-sm text-peach/80">Prefer to call? {org.phone}</p>
            </div>
          </div>
          <div className="rounded-[22px] bg-ivory p-6 text-ink sm:p-9">
            <EnquiryForm
              showOrganisation
              topics={['Volunteering', 'Internship', 'Field visit', 'CSR partnership', 'Media']}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
            />
          </div>
        </div>
      </section>
    </>
  )
}
