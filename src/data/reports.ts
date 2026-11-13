/**
 * Content for the MIS & financial reports page.
 *
 * `annual` holds CONARE’s real audited totals for FY 2024–25. Everything under
 * `samples` is fictional, mirrors the four sample reports in the onboarding pack,
 * and must always be labelled as illustrative on screen.
 */

export const annual = {
  year: '2024–25',
  income: 21126567,
  expenditure: 21618102,
  deficit: 491535,
  funders: ['Azim Premji Philanthropic Initiatives', 'Paul Hamlyn Foundation', 'Terre des Hommes', 'Kailash Satyarthi Children’s Foundation', 'Bharat Rural Livelihoods Foundation', 'United Way Hyderabad', 'NABARD', 'Sahjeevan'],
}

export const monthly = {
  period: 'November',
  opening: 840000,
  income: 625000,
  expenditure: 512400,
  closing: 952600,
  heads: [
    { label: 'Programme activities', value: 310000 },
    { label: 'Staff salaries', value: 145000 },
    { label: 'Travel', value: 28400 },
    { label: 'Office & admin', value: 19000 },
    { label: 'Training', value: 10000 },
  ],
  reconciliation: '2 of 2 bank accounts reconciled · 3 unmatched items worth ₹4,200 flagged for review',
  pending: ['6 vouchers awaited from the field office', '1 bill without a GST number'],
  note: 'Programme spend is higher this month because of seasonal sapling purchases.',
}

export const projects = {
  period: 'April – November',
  rows: [
    { name: 'Project A · Watershed', budget: 2400000, received: 1200000, spent: 980000 },
    { name: 'Project B · Agroforestry', budget: 1800000, received: 900000, spent: 765000 },
    { name: 'Project C · Child protection', budget: 1500000, received: 750000, spent: 710000 },
  ],
  headsA: [
    { label: 'Field activities', budget: 1400000, spent: 610000 },
    { label: 'Staff', budget: 600000, spent: 270000 },
    { label: 'Training', budget: 240000, spent: 60000 },
    { label: 'Administration', budget: 160000, spent: 40000 },
  ],
  variance: [
    'Project C has spent 95% of funds received; next tranche request due',
    'Project A training is behind plan; sessions moved to January',
    'Reporting period for Project B ends 31 December',
  ],
}

export const utilisation = {
  project: 'Project B · Agroforestry',
  period: 'April – September',
  funds: [
    { label: 'Unspent balance brought forward', value: 0 },
    { label: 'Grant received in the period', value: 900000 },
    { label: 'Bank interest earned', value: 3200 },
  ],
  utilised: 765000,
  heads: [
    { label: 'Saplings and farm inputs', value: 320000, refs: 'V-B-001 – V-B-046' },
    { label: 'Farmer training', value: 115000, refs: 'V-B-047 – V-B-068' },
    { label: 'Field staff', value: 210000, refs: 'V-B-069 – V-B-086' },
    { label: 'Monitoring and travel', value: 72000, refs: 'V-B-087 – V-B-104' },
    { label: 'Administration', value: 48000, refs: 'V-B-105 – V-B-118' },
  ],
}

export const donor = {
  period: 'November',
  tiles: [
    { label: 'Online gifts', value: '18', note: 'worth ₹46,500' },
    { label: 'Monthly donors active', value: '12', note: '₹6,000 a month' },
    { label: 'One-time gifts', value: '6', note: 'worth ₹40,500' },
    { label: 'Grant tranches received', value: '2', note: 'worth ₹9,00,000' },
  ],
  income: [
    { source: 'Funder X, tranche 2', value: 600000, type: 'Restricted' },
    { source: 'Funder Y, tranche 1', value: 300000, type: 'Restricted' },
    { source: 'Online donations', value: 46500, type: 'To confirm' },
  ],
  outputs: [
    { value: '96', label: 'farmers trained in 3 sessions' },
    { value: '40', label: 'households with new kitchen gardens' },
    { value: '5', label: 'villages reached by awareness sessions' },
  ],
  followUp: [
    { text: 'Funder X quarterly report due 15 Nov', status: 'Draft ready' },
    { text: 'Funder Y report due 30 Nov', status: 'In progress' },
    { text: '14 donor receipts issued; 2 awaiting PAN', status: 'Follow up' },
    { text: '3 donors to thank for a 6-month anniversary (with consent)', status: 'To do' },
  ],
}

/** The monthly rhythm agreed in the service agreement. */
export const rhythm = [
  { day: '5th', title: 'Documents in', text: 'CONARE sends vouchers, bills and bank statements for the previous month.' },
  { day: '15th', title: 'Books closed', text: 'Bookkeeping done and every bank account reconciled.' },
  { day: '7th', title: 'MIS out', text: 'The four MIS reports go to CONARE with the monthly report, for review by its CA where needed.' },
]

/** Statutory dates every Indian NGO with 12A, 80G and FCRA tracks. Confirm each with CONARE’s CA. */
export const compliance = [
  { date: '31 May', title: 'Form 10BD', text: 'Statement of 80G donations received, filed with the Income Tax Department; donors then get Form 10BE.' },
  { date: '7th monthly', title: 'TDS deposit', text: 'Tax deducted on salaries and contractor payments deposited by the 7th of the next month; quarterly returns follow.' },
  { date: '30 Sep', title: 'Audit report (10B / 10BB)', text: 'Audited accounts and the audit report filed by CONARE’s CA.' },
  { date: '31 Oct', title: 'ITR-7', text: 'Income tax return for the society.' },
  { date: '31 Dec', title: 'FCRA annual return (FC-4)', text: 'Foreign contribution received and used during the year, with the CA-certified statements.' },
  { date: 'Quarterly', title: 'FCRA disclosure', text: 'Foreign contributions received in the quarter published on the website.' },
]

export const sampleNote = 'Illustrative sample with fictional data · not actual CONARE financial information'

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN')
