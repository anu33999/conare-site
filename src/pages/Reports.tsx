import { useEffect, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AlertTriangle, ArrowUpRight, BarChart3, CalendarClock, CheckCircle2, FileCheck2, FileSpreadsheet, FileText, HandCoins,
  Landmark, Layers, PenLine, ShieldCheck, Stamp, UserCheck, Wallet,
} from 'lucide-react'
import { annual, compliance, donor, inr, monthly, projects, rhythm, sampleNote, utilisation } from '../data/reports'
import { documents, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { DemoTag, Eyebrow, SectionHeading } from '../components/ui'
import { GrowBar, Motion, SplitWords, Tilt } from '../components/motion'

const tabs = [
  { id: 'monthly', label: 'Monthly financial summary', short: 'Monthly summary', icon: Wallet },
  { id: 'projects', label: 'Project-wise MIS', short: 'Project MIS', icon: Layers },
  { id: 'utilisation', label: 'Fund utilisation statement', short: 'Utilisation', icon: FileCheck2 },
  { id: 'donors', label: 'Donor & programme MIS', short: 'Donor MIS', icon: HandCoins },
] as const
type TabId = (typeof tabs)[number]['id']

const headColors = ['bg-maroon-800', 'bg-rust', 'bg-gold', 'bg-maroon-600', 'bg-rust-soft']

export default function Reports() {
  useSeo('MIS & financial reports', 'CONARE’s audited finances, monthly MIS reports, fund utilisation statements and compliance calendar.')
  const { hash } = useLocation()
  const fromHash = tabs.find((t) => `#${t.id}` === hash)?.id
  const [active, setActive] = useState<TabId>(fromHash ?? 'monthly')
  useEffect(() => { if (fromHash) setActive(fromHash) }, [fromHash])

  return (
    <>
      <PageHero
        eyebrow="MIS & financial reports"
        title={<>Books open, <span className="text-rust">every month.</span></>}
        lede="Audited accounts every year, and four management (MIS) reports every month: where the money is, how each project is spending, what each funder’s grant paid for, and what it achieved."
      >
        <a href="#annual" className="btn btn-primary">Audited 2024–25</a>
        <a href="#mis" className="btn btn-secondary">Monthly MIS reports</a>
        <a href="#calendar" className="btn btn-secondary">Compliance calendar</a>
      </PageHero>

      <AnnualSnapshot />
      <MisReports active={active} setActive={setActive} />
      <Rhythm />
      <Calendar />
      <Library />

      <div className="pt-20 md:pt-28">
        <CtaBand title="Want a funder-format report? Ask us." text="CSR partners and foundations receive project-wise MIS and utilisation statements on their own formats and dates, certified by CONARE’s CA where required." />
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */

function AnnualSnapshot() {
  const max = Math.max(annual.income, annual.expenditure)
  return (
    <section id="annual" className="container-x scroll-mt-24 pb-20 md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Motion><Eyebrow>Audited · financial year {annual.year}</Eyebrow></Motion>
          <h2 className="display-lg mt-4"><SplitWords text="₹2.11 crore in. ₹2.16 crore out." /></h2>
          <p className="lede mt-5">CONARE spent a little more than it received in {annual.year}, a deficit of {inr(annual.deficit)}, met from its reserves. Funding came from national and international foundations, banks and government.</p>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-muted">Funders named in the audited accounts</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {annual.funders.map((f) => <li key={f} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink">{f}</li>)}
          </ul>
        </div>
        <Motion variant="scale" className="on-dark relative self-start overflow-hidden rounded-[26px] bg-maroon-900 p-7 text-peach sm:p-9">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Total income', value: annual.income, tone: 'text-gold' },
              { label: 'Total expenditure', value: annual.expenditure, tone: 'text-white' },
              { label: 'Deficit for the year', value: -annual.deficit, tone: 'text-rust-soft' },
            ].map((k) => (
              <div key={k.label} className="rounded-[16px] bg-white/[0.06] p-4 ring-1 ring-line-dark">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-peach/70">{k.label}</p>
                <p className={`font-display mt-2 text-[1.45rem] leading-none tabular-nums ${k.tone}`}>{k.value < 0 ? '−' : ''}{inr(Math.abs(k.value))}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5">
            {[['Income', annual.income, 'from-gold to-gold'], ['Expenditure', annual.expenditure, 'from-rust to-rust']].map(([l, v, c]) => (
              <div key={l as string}>
                <div className="flex justify-between text-sm font-bold"><span>{l as string}</span><span className="tabular-nums text-peach/80">{((v as number) / 1e7).toFixed(2)} Cr</span></div>
                <GrowBar value={((v as number) / max) * 100} className="mt-2 h-4 bg-white/10" barClassName={`bg-gradient-to-r ${c}`} label={`${l}: ${inr(v as number)}`} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-peach/55">Source: CONARE’s audited income and expenditure account for {annual.year}, published on conare.org.</p>
        </Motion>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function MisReports({ active, setActive }: { active: TabId; setActive: (t: TabId) => void }) {
  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]
    setActive(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }
  return (
    <section id="mis" className="scroll-mt-24 bg-mint/60 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Monthly MIS reports" title="Four reports, every month." lede="Prepared from CONARE’s books by the 7th, reviewed by CONARE, and certified by its CA where a funder or the law asks for it." />
          <DemoTag className="self-start md:self-end">Sample reports · fictional figures</DemoTag>
        </div>

        <div role="tablist" aria-label="MIS reports" className="mt-10 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {tabs.map((t, i) => {
            const on = active === t.id
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`flex items-center gap-3 rounded-[16px] px-4 py-3.5 text-left transition-all ${on ? 'bg-maroon-900 text-white shadow-[0_20px_40px_-24px_rgb(27_20_66/0.7)]' : 'bg-white text-ink ring-1 ring-line hover:ring-rust/40'}`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-[12px] ${on ? 'bg-gold text-maroon-950' : 'bg-rust-soft text-rust'}`}><t.icon size={19} aria-hidden /></span>
                <span>
                  <span className={`block text-[0.65rem] font-bold uppercase tracking-[0.14em] ${on ? 'text-gold' : 'text-muted'}`}>Report {i + 1} of 4</span>
                  <span className="block text-sm font-bold leading-tight sm:hidden">{t.short}</span>
                  <span className="hidden text-sm font-bold leading-tight sm:block">{t.label}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-6 rounded-[26px] bg-white p-5 shadow-[0_30px_60px_-40px_rgb(36_27_92/0.4)] ring-1 ring-line sm:p-8" key={active}>
          {active === 'monthly' && <MonthlyReport />}
          {active === 'projects' && <ProjectReport />}
          {active === 'utilisation' && <UtilisationReport />}
          {active === 'donors' && <DonorReport />}
          <p className="mt-8 flex items-center gap-2 border-t border-line pt-4 text-xs font-semibold text-muted"><AlertTriangle size={14} className="text-rust" aria-hidden /> {sampleNote}</p>
        </div>
      </div>
    </section>
  )
}

function ReportHead({ kicker, title, meta }: { kicker: string; title: string; meta: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-rust">{kicker}</p>
        <h3 className="display-md mt-2">{title}</h3>
      </div>
      <span className="rounded-full bg-gold-soft px-3.5 py-1.5 text-xs font-bold text-maroon-800">{meta}</span>
    </div>
  )
}

function Kpi({ label, value, tone = 'light', note }: { label: string; value: string; tone?: 'light' | 'dark' | 'rust'; note?: string }) {
  const styles = { light: 'bg-mint text-ink', dark: 'bg-maroon-900 text-white', rust: 'bg-rust text-white' }[tone]
  return (
    <Tilt className={`h-full rounded-[18px] p-5 ${styles}`}>
      <p className={`text-[0.68rem] font-bold uppercase tracking-[0.14em] ${tone === 'light' ? 'text-muted' : 'text-white/75'}`}>{label}</p>
      <p className="font-display mt-2 text-[1.7rem] leading-none tabular-nums">{value}</p>
      {note && <p className={`mt-1.5 text-xs font-semibold ${tone === 'light' ? 'text-muted' : 'text-white/75'}`}>{note}</p>}
    </Tilt>
  )
}

function Table({ head, children, foot }: { head: ReactNode; children: ReactNode; foot?: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-[16px] ring-1 ring-line">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead className="bg-mint text-left text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted">{head}</thead>
        <tbody className="divide-y divide-line">{children}</tbody>
        {foot && <tfoot className="bg-maroon-900 font-bold text-white">{foot}</tfoot>}
      </table>
    </div>
  )
}

const th = 'px-4 py-3'
const td = 'px-4 py-3'
const num = 'px-4 py-3 text-right tabular-nums whitespace-nowrap'

/* Report 1 */
function MonthlyReport() {
  const total = monthly.heads.reduce((a, h) => a + h.value, 0)
  return (
    <div>
      <ReportHead kicker="Report 1 of 4 · monthly" title="Monthly financial summary" meta={`${monthly.period} · ₹`} />
      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Opening balance" value={inr(monthly.opening)} />
        <Kpi label="Income received" value={'+' + inr(monthly.income)} tone="dark" />
        <Kpi label="Expenditure" value={'−' + inr(monthly.expenditure)} tone="rust" />
        <Kpi label="Closing balance" value={inr(monthly.closing)} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-bold text-ink">Expenditure by head</p>
          <div className="mt-3 flex h-5 overflow-hidden rounded-full" role="img" aria-label="Expenditure split by head">
            {monthly.heads.map((h, i) => <span key={h.label} className={headColors[i]} style={{ width: `${(h.value / total) * 100}%` }} title={`${h.label}: ${inr(h.value)}`} />)}
          </div>
          <ul className="mt-5 divide-y divide-line">
            {monthly.heads.map((h, i) => (
              <li key={h.label} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <span className="flex items-center gap-2.5"><span className={`h-3 w-3 rounded-[4px] ${headColors[i]}`} aria-hidden />{h.label}</span>
                <span className="flex items-center gap-4 tabular-nums"><span className="text-xs text-muted">{((h.value / total) * 100).toFixed(1)}%</span><span className="w-24 text-right font-semibold">{inr(h.value)}</span></span>
              </li>
            ))}
            <li className="flex justify-between py-2.5 text-sm font-bold"><span>Total</span><span className="tabular-nums">{inr(total)}</span></li>
          </ul>
        </div>
        <div className="space-y-3">
          <Status icon={CheckCircle2} tone="ok" title="Bank reconciliation">{monthly.reconciliation}</Status>
          <Status icon={AlertTriangle} tone="warn" title="Pending documents"><ul className="list-disc pl-4">{monthly.pending.map((p) => <li key={p}>{p}</li>)}</ul></Status>
          <Status icon={PenLine} tone="note" title="Notes">{monthly.note}</Status>
        </div>
      </div>
    </div>
  )
}

function Status({ icon: Icon, tone, title, children }: { icon: typeof Wallet; tone: 'ok' | 'warn' | 'note'; title: string; children: ReactNode }) {
  const c = { ok: 'bg-mint text-maroon-800', warn: 'bg-rust-soft text-rust', note: 'bg-gold-soft text-maroon-800' }[tone]
  return (
    <div className="flex gap-3 rounded-[16px] border border-line p-4">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-[10px] ${c}`}><Icon size={18} aria-hidden /></span>
      <div className="text-sm">
        <p className="font-bold text-ink">{title}</p>
        <div className="mt-1 text-muted">{children}</div>
      </div>
    </div>
  )
}

/* Report 2 */
function ProjectReport() {
  const t = projects.rows.reduce((a, r) => ({ budget: a.budget + r.budget, received: a.received + r.received, spent: a.spent + r.spent }), { budget: 0, received: 0, spent: 0 })
  return (
    <div>
      <ReportHead kicker="Report 2 of 4 · monthly" title="Project-wise MIS" meta={`${projects.period} · ₹ · sample projects`} />
      <div className="mt-7">
        <Table
          head={<tr><th className={th}>Project / grant</th><th className={`${th} text-right`}>Approved budget</th><th className={`${th} text-right`}>Received</th><th className={`${th} text-right`}>Spent to date</th><th className={`${th} text-right`}>Unspent</th><th className={`${th} w-44`}>Budget used</th></tr>}
          foot={<tr><td className={td}>Total</td><td className={num}>{inr(t.budget)}</td><td className={num}>{inr(t.received)}</td><td className={num}>{inr(t.spent)}</td><td className={num}>{inr(t.received - t.spent)}</td><td className={td}>{((t.spent / t.budget) * 100).toFixed(1)}%</td></tr>}
        >
          {projects.rows.map((r) => {
            const used = (r.spent / r.budget) * 100
            return (
              <tr key={r.name} className="hover:bg-mint/40">
                <td className={`${td} font-semibold`}>{r.name}</td>
                <td className={num}>{inr(r.budget)}</td>
                <td className={num}>{inr(r.received)}</td>
                <td className={num}>{inr(r.spent)}</td>
                <td className={num}>{inr(r.received - r.spent)}</td>
                <td className={td}><div className="flex items-center gap-2"><GrowBar value={used} className="flex-1" label={`${r.name}: ${used.toFixed(1)}% of budget used`} /><span className="w-12 text-right text-xs font-bold tabular-nums">{used.toFixed(1)}%</span></div></td>
              </tr>
            )
          })}
        </Table>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-bold text-ink">Project A · budget vs spent, by head</p>
          <ul className="mt-4 space-y-4">
            {projects.headsA.map((h) => (
              <li key={h.label}>
                <div className="flex justify-between text-sm"><span className="font-semibold">{h.label}</span><span className="tabular-nums text-muted">{inr(h.spent)} of {inr(h.budget)}</span></div>
                <GrowBar value={(h.spent / h.budget) * 100} className="mt-1.5 h-3" barClassName="bg-gradient-to-r from-maroon-700 to-maroon-600" label={`${h.label}: ${inr(h.spent)} spent of ${inr(h.budget)}`} />
              </li>
            ))}
          </ul>
        </div>
        <Status icon={BarChart3} tone="warn" title="Variance notes"><ul className="list-disc space-y-1 pl-4">{projects.variance.map((v) => <li key={v}>{v}</li>)}</ul></Status>
      </div>
    </div>
  )
}

/* Report 3 */
function UtilisationReport() {
  const available = utilisation.funds.reduce((a, f) => a + f.value, 0)
  const unspent = available - utilisation.utilised
  const steps = [
    { icon: FileSpreadsheet, who: 'Prepared by', name: 'Kreatif Atelier', state: 'Done' },
    { icon: UserCheck, who: 'Approved by', name: 'CONARE', state: 'Pending' },
    { icon: Stamp, who: 'Certified by', name: 'CONARE’s CA, if required', state: 'If required' },
  ]
  return (
    <div>
      <ReportHead kicker="Report 3 of 4 · per funder" title="Fund utilisation statement (draft)" meta={`${utilisation.project} · ${utilisation.period}`} />
      <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ul className="divide-y divide-line rounded-[16px] ring-1 ring-line">
            {utilisation.funds.map((f) => <li key={f.label} className="flex justify-between gap-3 px-4 py-3 text-sm"><span>{f.label}</span><span className="tabular-nums font-semibold">{inr(f.value)}</span></li>)}
            <li className="flex justify-between gap-3 bg-mint px-4 py-3 text-sm font-bold"><span>Total available</span><span className="tabular-nums">{inr(available)}</span></li>
            <li className="flex justify-between gap-3 px-4 py-3 text-sm"><span>Utilised in the period</span><span className="tabular-nums font-semibold text-rust">−{inr(utilisation.utilised)}</span></li>
            <li className="flex justify-between gap-3 rounded-b-[16px] bg-maroon-900 px-4 py-3 text-sm font-bold text-white"><span>Unspent balance</span><span className="tabular-nums">{inr(unspent)}</span></li>
          </ul>
          <div className="mt-5" role="img" aria-label={`${((utilisation.utilised / available) * 100).toFixed(0)}% of available funds utilised`}>
            <div className="flex h-5 overflow-hidden rounded-full bg-sand">
              <span className="bg-rust" style={{ width: `${(utilisation.utilised / available) * 100}%` }} />
              <span className="bg-gold" style={{ width: `${(unspent / available) * 100}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-xs font-semibold text-muted"><span><span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm bg-rust" />Utilised {((utilisation.utilised / available) * 100).toFixed(1)}%</span><span><span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm bg-gold" />Unspent {((unspent / available) * 100).toFixed(1)}%</span></div>
          </div>
        </div>
        <div>
          <Table
            head={<tr><th className={th}>Utilised by budget head</th><th className={`${th} text-right`}>Amount</th><th className={th}>Voucher references</th></tr>}
            foot={<tr><td className={td}>Total utilised</td><td className={num}>{inr(utilisation.utilised)}</td><td className={td} /></tr>}
          >
            {utilisation.heads.map((h) => (
              <tr key={h.label}><td className={td}>{h.label}</td><td className={num}>{inr(h.value)}</td><td className={`${td} font-mono text-xs text-muted`}>{h.refs}</td></tr>
            ))}
          </Table>
        </div>
      </div>
      <ol className="mt-8 grid gap-3 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.who} className="relative flex items-center gap-3 rounded-[16px] border border-line p-4">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${i === 0 ? 'bg-maroon-900 text-gold' : 'bg-mint text-maroon-800'}`}><s.icon size={18} aria-hidden /></span>
            <span className="text-sm"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">{s.who}</span><span className="block font-bold text-ink">{s.name}</span></span>
            <span className={`ml-auto rounded-full px-2.5 py-1 text-[0.65rem] font-bold ${i === 0 ? 'bg-gold-soft text-maroon-800' : 'bg-sand text-muted'}`}>{s.state}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-muted">Prepared from records as support. It becomes final only after CONARE approves it and, where the funder requires, a practising CA certifies it.</p>
    </div>
  )
}

/* Report 4 */
function DonorReport() {
  const statusTone: Record<string, string> = { 'Draft ready': 'bg-mint text-maroon-800', 'In progress': 'bg-gold-soft text-maroon-800', 'Follow up': 'bg-rust-soft text-rust', 'To do': 'bg-sand text-muted' }
  return (
    <div>
      <ReportHead kicker="Report 4 of 4 · monthly" title="Donor & programme MIS" meta={`${donor.period} · ₹ · donor names never shown`} />
      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {donor.tiles.map((t, i) => <Kpi key={t.label} label={t.label} value={t.value} note={t.note} tone={i === 3 ? 'dark' : 'light'} />)}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <Table head={<tr><th className={th}>Income source</th><th className={`${th} text-right`}>Amount</th><th className={th}>Type</th></tr>}>
            {donor.income.map((r) => (
              <tr key={r.source}><td className={td}>{r.source}</td><td className={num}>{inr(r.value)}</td><td className={td}><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${r.type === 'Restricted' ? 'bg-maroon-900 text-white' : 'bg-gold-soft text-maroon-800'}`}>{r.type}</span></td></tr>
            ))}
          </Table>
          <p className="mt-6 text-sm font-bold text-ink">Programme outputs this month</p>
          <ul className="mt-3 grid grid-cols-3 gap-3">
            {donor.outputs.map((o) => (
              <li key={o.label} className="rounded-[16px] bg-gold-soft/60 p-4"><span className="font-display block text-3xl leading-none text-rust">{o.value}</span><span className="mt-1.5 block text-xs font-semibold text-muted">{o.label}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Reporting & follow-up</p>
          <ul className="mt-3 space-y-2.5">
            {donor.followUp.map((f) => (
              <li key={f.text} className="flex items-center justify-between gap-3 rounded-[14px] border border-line px-4 py-3 text-sm">
                <span>{f.text}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[0.68rem] font-bold ${statusTone[f.status]}`}>{f.status}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted"><ShieldCheck size={14} className="text-rust" aria-hidden /> Personal donor data is restricted to named CONARE staff.</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Rhythm() {
  return (
    <section className="container-x section-y">
      <SectionHeading eyebrow="The monthly rhythm" title="Documents by the 5th. MIS by the 7th." lede="The same three dates every month, so CONARE’s team, its CA and its funders always know when the numbers arrive." />
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {rhythm.map((r, i) => (
          <Motion as="li" key={r.title} delay={i * 110}>
            <Tilt className={`h-full rounded-[22px] p-7 ${i === 2 ? 'on-dark bg-maroon-900 text-peach' : 'border border-line bg-white'}`}>
              <p className={`font-display text-5xl leading-none ${i === 2 ? 'text-gold' : 'text-rust'}`}>{r.day}</p>
              <p className={`font-display mt-4 text-xl ${i === 2 ? 'text-white' : 'text-ink'}`}>{r.title}</p>
              <p className={`mt-2 text-[0.95rem] ${i === 2 ? 'text-peach/80' : 'text-muted'}`}>{r.text}</p>
            </Tilt>
          </Motion>
        ))}
      </ol>
      <SourceNote className="mt-4">Books for each month are closed by the 15th of the next month; the MIS goes out by the 7th of the month after that.</SourceNote>
    </section>
  )
}

function Calendar() {
  return (
    <section id="calendar" className="on-dark scroll-mt-24 bg-maroon-950 text-peach section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Compliance calendar</Eyebrow>
          <h2 className="display-lg mt-4 text-white">Every filing, on time.</h2>
          <p className="lede mt-5">The statutory dates an Indian NGO with tax exemption and FCRA registration works to. CONARE’s own Chartered Accountant audits, certifies, signs and files.</p>
          <p className="mt-6 flex items-center gap-2 text-sm text-gold"><CalendarClock size={16} aria-hidden /> Dates to be confirmed with CONARE’s CA each year.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {compliance.map((c, i) => (
            <Motion as="li" key={c.title} delay={(i % 2) * 90}>
              <Tilt className="h-full rounded-[18px] bg-white/[0.05] p-5 ring-1 ring-line-dark">
                <p className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-bold text-maroon-950">{c.date}</p>
                <p className="font-display mt-3 text-lg text-white">{c.title}</p>
                <p className="mt-1.5 text-sm text-peach/75">{c.text}</p>
              </Tilt>
            </Motion>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Library() {
  const icons = [FileText, FileCheck2, Landmark, FileSpreadsheet]
  return (
    <section className="container-x section-y">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Document library" title="Read the originals" />
        <Link to="/transparency" className="link-arrow">Governance & registrations <ArrowUpRight size={16} aria-hidden /></Link>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {documents.filter((d) => d.href).map((d, i) => {
          const Icon = icons[i % icons.length]
          return (
            <li key={d.title}>
              <a href={d.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(36_27_92/0.45)]">
                <span className="grid h-12 w-12 place-items-center rounded-[12px] bg-rust-soft text-rust"><Icon size={22} aria-hidden /></span>
                <span className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">{d.type}</span>
                <span className="font-display mt-1 flex-1 text-lg leading-snug text-ink">{d.title}</span>
                <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800 group-hover:text-rust">Open on conare.org <ArrowUpRight size={14} aria-hidden /></span>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="mt-6 text-sm text-muted">Need a report in your format? Write to <a className="font-bold text-maroon-800 underline" href={`mailto:${org.email}`}>{org.email}</a>.</p>
    </section>
  )
}
