import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { SocialCards } from '../components/Social'
import { Eyebrow } from '../components/ui'

export default function Contact() {
  useSeo('Contact', 'Contact CONARE in Achampet about donations, volunteering, field visits or CSR partnerships.')
  const cards = [
    { icon: Mail, label: 'Email', value: org.email, href: `mailto:${org.email}` },
    { icon: Phone, label: 'Phone', value: org.phone, href: org.phoneHref },
    { icon: MapPin, label: 'Address', value: org.address, href: org.mapsHref },
    { icon: Clock, label: 'Contact person', value: 'Dr. M. A. Saleem, Founder President · field visits by appointment', href: undefined },
  ]
  return (
    <>
      <PageHero
        eyebrow="Talk with us"
        title="Come and see the work."
        lede="Want to donate, volunteer, visit the villages or partner through CSR? Our office is in Achampet, about three hours from Hyderabad."
      />
      <section className="container-x pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4 lg:-mt-10">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-peach text-rust">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</span>
                    <span className="mt-1 block break-words font-semibold text-ink">{value}</span>
                  </span>
                </>
              )
              return href ? (
                <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5 transition-colors hover:border-rust/40">
                  {inner}
                </a>
              ) : (
                <div key={label} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5">{inner}</div>
              )
            })}
            <p className="text-xs text-muted">Contact details as published on conare.org.</p>
          </div>
          <div className="pt-6 lg:pt-14">
            <Eyebrow>How can we help?</Eyebrow>
            <h2 className="display-md mb-8 mt-4">Send us a message</h2>
            <EnquiryForm topics={['Donations & receipts', 'Volunteering / internship', 'Field visit', 'CSR partnership', 'Media', 'Something else']} />
          </div>
        </div>
      </section>
      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <Eyebrow>Find us online</Eyebrow>
          <h2 className="display-md mb-10 mt-4">Follow and message CONARE</h2>
          <SocialCards />
          <p className="mt-6 text-xs text-muted">WhatsApp goes to CONARE’s published number. Other handles are suggestions until CONARE’s accounts are set up.</p>
        </div>
      </section>
      <section className="border-t border-line">
        <iframe
          title="Map showing CONARE’s office in Achampet, Nagarkurnool"
          src="https://www.google.com/maps?q=Madhuranagar+Colony,+Achampet,+Telangana+509375&output=embed"
          className="block h-[380px] w-full border-0 grayscale-[35%] sepia-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
