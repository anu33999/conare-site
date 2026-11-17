/**
 * Central content for the CONARE demo site.
 *
 * Facts come from conare.org and public NGO listings (NGO Darpan, Give.do).
 * Re-confirm all figures with the CONARE team before launch. Anything marked
 * `demo` is illustrative placeholder content written for this concept.
 * Photos were copied from conare.org into /public/conare so the site no longer depends on their server.
 */

const c = (path: string) => '/conare/' + encodeURI(path)

export const org = {
  name: 'CONARE',
  short: 'CONARE',
  fullName: 'Conservation of Nature through Rural Awakening',
  tagline: 'Conservation of nature through rural awakening',
  telugu: 'ప్రకృతి పరిరక్షణ · గ్రామీణ చైతన్యం',
  town: 'Achampet · Nagarkurnool',
  townTelugu: 'అచ్చంపేట',
  founded: 1999,
  foundedOn: '17 February 1999',
  founder: 'Dr. M. A. Saleem',
  regNo: 'Registered society 783/99',
  email: 'conare@rediffmail.com',
  phone: '+91 94404 35896',
  phoneHref: 'tel:+919440435896',
  whatsapp: 'https://wa.me/919440435896',
  address: 'H.No. 4-141/10C, Madhuranagar Colony, Achampet 509375, Nagarkurnool District, Telangana',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Madhuranagar+Colony+Achampet+Telangana+509375',
  reportsHref: 'https://conare.org/reports.html',
  auditHref: 'https://conare.org/audit-reports.html',
  fcraHref: 'https://conare.org/foreign-contribution.html',
  logo: c('images/home/logo.png'),
  /** CONARE has no public social accounts we could find. Handles below are suggestions to create. */
  socials: [
    { label: 'Facebook', handle: '@conare.ngo', href: 'https://www.facebook.com/', blurb: 'Field updates and appeals' },
    { label: 'Instagram', handle: '@conare.ngo', href: 'https://www.instagram.com/', blurb: 'Photos from the villages' },
    { label: 'YouTube', handle: '@CONAREAchampet', href: 'https://www.youtube.com/', blurb: 'Stories from the forest' },
    { label: 'X', handle: '@CONARE_NGO', href: 'https://x.com/', blurb: 'News and quick updates' },
    { label: 'LinkedIn', handle: 'CONARE', href: 'https://www.linkedin.com/', blurb: 'CSR partnerships and careers' },
    { label: 'WhatsApp', handle: '+91 94404 35896', href: 'https://wa.me/919440435896', blurb: 'Chat with the CONARE office' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Work', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Reports', to: '/reports' },
  { label: 'Get Involved', to: '/get-involved' },
]

const kg = (f: string) => c('activities_assets/Activitie In Karagudem/' + f)

export const images = {
  bannerField: c('images/home/banner0.jpg'),
  banner1: c('images/home/banner1-1.jpg'),
  banner3: c('images/home/banner3-1.jpg'),
  thumbsUp: c('images/home/about.jpg'),
  vaccination: c('images/home/gal1.jpg'),
  kitchenGarden: c('images/home/gal2.jpg'),
  honey: c('images/home/gal3.jpg'),
  poultry: c('images/home/gal4.jpg'),
  covidRelief: c('images/home/gal5.jpg'),
  founder: c('images/founder/founder2.jpg'),
  founderField: c('images/founder/founder1.jpg'),
  founderGathering: c('images/founder/founder3.jpg'),
  teamCommunity: c('images/about/founder2.jpg'),
  gathering: c('images/about/a.jpg'),
  fieldWork: c('images/about/b.jpg'),
  villageChildren: c('images/about/c.jpg'),
  chenchuMeeting: c('our_program_assets/WhatsApp-Image-2026-08-06-at-5.40.48-PM-1536x1062.jpeg'),
  womenGroup: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.06.05-AM-rotated.jpeg'),
  childrenActivity: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.06.41-AM.jpeg'),
  children2: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.06.41-AM-1024x768.jpeg'),
  children3: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.06.42-AM-1024x768.jpeg'),
  children4: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.06.43-AM-1024x771.jpeg'),
  saplings: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.12-AM-1-rotated.jpeg'),
  agroField: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.17-AM-1.jpeg'),
  ruralHousehold: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.17-AM-rotated.jpeg'),
  cpsk: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.13-AM-1536x691.jpeg'),
  cpsk2: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.05-AM-1024x461.jpeg'),
  cpsk3: c('our_program_assets/WhatsApp-Image-2026-08-07-at-11.07.07-AM-1024x461.jpeg'),
  fieldSchool: c('our_program_assets/activities1.jpg'),
  farmVisit: c('our_program_assets/activities2.jpg'),
  fieldMeeting: c('our_program_assets/activities3.jpg'),
  fodder: c('activities_assets/fodder-2-768x576.jpg'),
  homeVisit: c('activities_assets/IMG-20221201-WA0059-768x576.jpg'),
  interface: c('activities_assets/featured-activities/Interface-2-768x576.jpg'),
  officials: c('activities_assets/featured-activities/Interface-meeting-with-Govt-officials-Venkateshwarlabavi-768x363.jpg'),
  outreach: c('activities_assets/featured-activities/WhatsApp-Image-2026-04-03-at-15.59.04-768x504.jpeg'),
  leaders: c('activities_assets/featured-activities/WhatsApp-Image-2026-07-15-at-5.47.40-PM-2-768x485.jpeg'),
  programme: c('activities_assets/featured-activities/WhatsApp-Image-2026-07-15-at-5.47.40-PM-1-768x576.jpeg'),
  seedBank: kg('Seed-Banks-Karakagudem-2025-26-rr28usfl4fyexn1n8qaidh9agzc98cp56gwd80kji0.jpeg'),
  apcInputs: kg('APC-Inputs-distribution-programme--rr28ukwvlro4crckgn1htj5lpwdbirvahfohdsvovs.jpeg'),
  apcRegalla: kg('APC-Regalla-village-Karakagudem-rr28unqe69rzbl8h069dj0fzi1zf5v6hhtmxtmrid4.jpeg'),
  nutriSeeds: kg('Nutri-Garden-seeds-distribution-programme-rr28uqjwqrvuaf4djph98hqda7lisyhoi7le9gnbug.jpeg'),
  nutriGarden: kg('Nutri-garden-chirumalla-karakagudem-rr28uub9i40zkuywxr3rigs7nr2znqwluq7c6khr5k.jpeg'),
  pgChirumalla: kg('PG-Training-Chirumalla-GP-rr28uy2m9g64vatgbsq9sfu21akgijbj78ta3oc6go.jpeg'),
  pgKannaigudem: kg('PG-Training-Kannaigudem-GP-rr28v0w4ty9zu4pcvby5hx4ftg6k5mmq7mrqji7zy0.jpeg'),
  pgRegalla: kg('PG-Training-Regalla-GP-rr28v3pnegdusyl9ev617eetllsnspxx80q6zc3tfc.jpeg'),
  lift1: c('activities_assets/Lift Irrigation Karakagudem/WhatsApp-Image-2026-06-24-at-4.42.10-PM-rr2c330qoj5jcu4e5zytv4scb653k8dlu2l0qg51o8.jpeg'),
  lift2: c('activities_assets/Lift Irrigation Karakagudem/WhatsApp-Image-2026-06-24-at-4.42.12-PM-rr2c2uk6z0tygcgojeb6qox6ypasmyg0swpneyhl88.jpeg'),
  lift3: c('activities_assets/Lift Irrigation Karakagudem/WhatsApp-Image-2026-06-18-at-9.35.39-AM-rr2c2xdpjixtf6cl2xj2g67kquwwa1r7tao3usdepk.jpeg'),
  mango1: c('activities_assets/Thatigudem Agro Forestry Mango/WhatsApp-Image-2026-04-11-at-10.32.01-PM-rr2htuko1k778vs7svhfugfkhh0rrc7zxgr44nkeyg.jpeg'),
  mango2: c('activities_assets/Thatigudem Agro Forestry Mango/WhatsApp-Image-2026-04-11-at-10.33.04-PM-rr2htxe6m2b27po4cepbjxpy9mmvefj6xupkkhg8fs.jpeg'),
  ber1: c('activities_assets/Regalla Agro Forestry Kashmeeri Red gols apple ber/WhatsApp-Image-2026-07-15-at-4.11.07-PM-rr2c8qzpvkwrc7w42y4ve7bd7s7qyjvcy45dvhqm60.jpeg'),
  ber2: c('activities_assets/Regalla Agro Forestry Kashmeeri Red gols apple ber/WhatsApp-Image-2026-07-15-at-4.11.45-PM-rr2c8ij662l6fq8egch89rg7vbdg19xrwya0k035q0.jpeg'),
  agro1: c('activities_assets/Thatigudem Agro Forestry/WhatsApp-Image-2026-07-15-at-3.52.31-PM-rr2c60anxz5nh5vh39h1me7yubq7ibzjkjnehfsybc.jpeg'),
  ifs1: c('activities_assets/IFS Bangarugudem Karakagudem/WhatsApp-Image-2026-06-24-at-3.34.41-PM-rr2a9wvku1xue4saptu0zkttlfcxvpnkvi92vsrp2w.jpeg'),
  ifs2: c('activities_assets/IFS Bangarugudem Karakagudem/WhatsApp-Image-2026-06-24-at-3.37.00-PM-rr2a9u229jtzfawe6am5a3jft9qu8mcdv4amfyvvlk.jpeg'),
  ifs3: c('activities_assets/New folder/WhatsApp-Image-2026-07-10-at-11.02.06-AM-rr2achxlmnh8bj14mg23cfcgekma1qx08au5e6xpyw.jpeg'),
  brc1: c('activities_assets/BRCkaragudem/WhatsApp-Image-2026-06-24-at-4.43.53-PM-rr28xx87wk8tmuhsy31qooslr7waw14xlz6mt7xarc.jpeg'),
  brc2: c('activities_assets/BRCkaragudem/WhatsApp-Image-2026-06-24-at-4.43.55-PM-rr28xsj0ye2e0sompj0lu7zasajgtjm9xbx7eu49mg.jpeg'),
}

/** Headline figures published on conare.org. */
export const publishedStats = [
  { value: 1999, suffix: '', label: 'Working in Achampet since', display: '1999' },
  { value: 5000, suffix: '', label: 'Families reached today' },
  { value: 6, suffix: '', label: 'Districts in 2 states' },
  { value: 3000, suffix: '+', label: 'Children back in school' },
  { value: 117, suffix: '', label: 'Villages vaccinated' },
] as { value: number; suffix: string; label: string; display?: string }[]

export const savings = [
  { value: '3,500 acres', label: 'turned to agroforestry by 1,300 farmers', note: 'Greening India, with Zomato' },
  { value: '15,000 acres', label: 'of land and crops under non-pesticidal management', note: 'Sustainable agriculture' },
  { value: '4,200 ha', label: 'covered by watershed development', note: 'Natural resource management' },
  { value: '500 plots', label: 'of fodder that keep cattle out of the forest', note: 'Fewer human–wildlife conflicts' },
]

export const inclusivity = ['Chenchu (PVTG)', 'Lambada', 'Erukala', 'Scheduled Castes', 'Small & marginal farmers', 'Minority women', 'Women-headed households', 'Migrant families', 'Children & youth']

/** Villages and places named in CONARE’s field records. */
export const hospitals = [
  'Achampet', 'Mannanur', 'Amrabad plateau', 'Padra', 'Sidhapur', 'Gopal Rao Nagar Tanda', 'Karakagudem', 'Regalla', 'Chirumalla', 'Kannaigudem',
  'Bangarugudem', 'Laxmipuram', 'Thatigudem', 'Errapenta', 'Venkateshwarlabavi', 'Sahebnagar', 'Wanaparthy', 'Kurnool',
]

export type Program = {
  slug: string
  number: string
  title: string
  short: string
  summary: string
  stat: { value: string; label: string }
  image: string
  imageAlt: string
  gallery: { src: string; alt: string }[]
  body: { heading: string; text: string }[]
  highlights: string[]
  partner: string
}

export const programs: Program[] = [
  {
    slug: 'c-mart', number: '01', partner: 'Paul Hamlyn Foundation',
    title: 'Chenchu Resource & Training Centres (C-MART)',
    short: 'Livelihoods, education, health, governance and culture for Chenchu families in 20 villages of Nagarkurnool.',
    summary: 'C-MART has worked with the Chenchu, a Particularly Vulnerable Tribal Group, across 20 villages of Nagarkurnool for three years, building livelihoods, education, health and local governance while respecting their forest way of life.',
    stat: { value: '20', label: 'Chenchu villages' },
    image: images.chenchuMeeting, imageAlt: 'A Chenchu community meeting with CONARE',
    gallery: [{ src: images.honey, alt: 'Villagers preparing to harvest honey beneath a large tree' }, { src: images.kitchenGarden, alt: 'Gourd vines in a family kitchen garden' }],
    body: [
      { heading: 'Livelihoods that respect the forest', text: 'Families diversify their income through millets, kitchen gardens, dairy and poultry, sustainable honey harvesting and value addition to forest produce. Millets suit the local climate and improve nutrition.' },
      { heading: 'Better prices for forest produce', text: 'Instead of selling raw produce, families now clean, process and pack it and sell it at higher prices through cooperative marketing.' },
      { heading: 'Five centres, five hubs', text: 'Five C-MART centres offer tools, training and market links, and connect families to government schemes.' },
    ],
    highlights: ['20 villages', '5 C-MART centres', 'Honey & millets', '3 years'],
  },
  {
    slug: 'cpsk', number: '02', partner: 'Azim Premji Philanthropic Initiatives',
    title: 'Chenchu Pragati Seva Kendram (CPSK)',
    short: 'Agri-horticulture and forest-produce livelihoods for 500 Chenchu families on the Amrabad plateau.',
    summary: 'CPSK is a multi-activity partnership promoting agri-horticulture and livelihoods from non-timber forest produce for Chenchu families in the Nallamala Hills, started in July 2023.',
    stat: { value: '500', label: 'Chenchu families' },
    image: images.cpsk, imageAlt: 'Chenchu families with CONARE in the Nallamala Hills',
    gallery: [{ src: images.cpsk2, alt: 'CPSK field activity' }, { src: images.cpsk3, alt: 'CPSK community meeting' }],
    body: [
      { heading: 'Farming and forest produce', text: 'Improved seeds, orchard saplings and water conservation, alongside fair value for honey and other forest produce.' },
      { heading: 'New sources of income', text: 'Skill training, handicrafts and small enterprises help households depend less on uncertain forest wage work.' },
      { heading: 'A safety net', text: 'Families are linked to welfare schemes, healthcare and nutrition programmes so that one bad season doesn’t become a crisis.' },
    ],
    highlights: ['500 families', '20 villages', 'Agri-horticulture', 'Since July 2023'],
  },
  {
    slug: 'tribal-livelihoods', number: '03', partner: 'HDFC Bank Parivartan & BRLF',
    title: 'Tribal Livelihoods in Bhadradri Kothagudem',
    short: 'Integrated farming, lift irrigation, seed banks and women-led producer groups in Karakagudem.',
    summary: 'Part of HDFC Bank’s Parivartan programme with the Bharat Rural Livelihoods Foundation, this project uses integrated natural resource management and climate-resilient farming to lift marginal tribal farmers, with women in the lead.',
    stat: { value: '1,000+', label: 'farmers & households' },
    image: images.lift1, imageAlt: 'Laying a lift irrigation pipeline in Karakagudem',
    gallery: [{ src: images.seedBank, alt: 'Community seed bank in Karakagudem' }, { src: images.pgRegalla, alt: 'Producer group training in Regalla' }],
    body: [
      { heading: 'Integrated farming for 250 farmers', text: 'Crops, livestock and horticulture on one farm, so a failed crop no longer means a lost year.' },
      { heading: 'Irrigation for 120 farmers', text: 'Low-cost, community-managed diversion and micro-lift irrigation, shared fairly between families.' },
      { heading: 'Seed banks and women’s leadership', text: 'Seed banks for 150 farmers, nutrition gardens for 300 families, 140 women-led producer groups and 140 trained ecopreneurs.' },
    ],
    highlights: ['250 IFS farmers', '120 irrigated', '300 nutrition gardens', '140 women’s groups'],
  },
  {
    slug: 'agroforestry', number: '04', partner: 'Zomato',
    title: 'Greening India through Agroforestry',
    short: 'Mango and timber trees on 3,500 acres with 1,300 farmers in Nagarkurnool and Wanaparthy.',
    summary: '1,300 farmers have set aside 3,500 acres for tree-based farming, growing mango and timber species alongside their usual crops.',
    stat: { value: '3,500', label: 'acres of agroforestry' },
    image: images.mango1, imageAlt: 'A young mango agroforestry plot in Thatigudem',
    gallery: [{ src: images.ber1, alt: 'Apple ber orchard in Regalla' }, { src: images.agro1, alt: 'Agroforestry plot in Thatigudem' }],
    body: [
      { heading: 'Why trees on farms', text: 'Trees improve soil fertility and water retention, add a second income and store carbon.' },
      { heading: 'Food first', text: 'Cereals, pulses and vegetables keep growing between the trees, so households stay food-secure while the orchards mature.' },
    ],
    highlights: ['3,500 acres', '1,300 farmers', 'Mango & timber', '2 districts'],
  },
  {
    slug: 'child-protection', number: '05', partner: 'Kailash Satyarthi Children’s Foundation',
    title: 'Access to Justice: Child Protection',
    short: 'Stopping child marriage, trafficking and child labour in Nagarkurnool, Mulugu and Kurnool.',
    summary: 'Access to Justice builds a protective net around children in tribal and rural villages, working with panchayats, religious leaders, schools and government so that protection is owned by the community.',
    stat: { value: '600', label: 'child marriages prevented' },
    image: images.childrenActivity, imageAlt: 'Children in a community learning activity',
    gallery: [{ src: images.children2, alt: 'Children at a child protection awareness session' }, { src: images.children3, alt: 'A children’s club meeting' }],
    body: [
      { heading: 'Child marriage prevention', text: '300 child marriages prevented in Nagarkurnool and 300 interventions in Kurnool, each with counselling for parents and school enrolment for the child.' },
      { heading: 'Entitlements for 8,000 families', text: 'Families connected to scholarships, pensions, housing and livelihood schemes.' },
      { heading: 'Village vigilance', text: '100 child protection committees of leaders, teachers, women and youth, and 25 trafficking cases resolved in Kurnool.' },
    ],
    highlights: ['600 marriages stopped', '8,000 families linked', '100 committees', '25 trafficking cases'],
  },
  {
    slug: 'women-empowerment', number: '06', partner: 'Community-owned',
    title: 'Chaitanya Vikas & CONARE Laxmi Women’s Societies',
    short: 'Women-owned thrift and credit societies for savings, credit, skills and enterprise.',
    summary: 'In 2005, 100 women with small savings in Hyderabad’s settlements came together. CONARE registered their thrift society, Chaitanya Vikas, in 2006. It has grown from 93 to 3,241 active members.',
    stat: { value: '3,241', label: 'women members' },
    image: images.womenGroup, imageAlt: 'A women’s group meeting',
    gallery: [{ src: images.gathering, alt: 'A community gathering' }],
    body: [
      { heading: 'Savings and credit', text: 'Members save together and borrow from their own society, without moneylenders.' },
      { heading: 'Skills and enterprise', text: 'Training helps women reach new markets and negotiate fair prices, including hand-embroidery micro-enterprises with NABARD.' },
    ],
    highlights: ['93 → 3,241 members', 'Since 2006', 'Urban & rural', 'Embroidery enterprises'],
  },
  {
    slug: 'grow-green', number: '07', partner: 'Hitachi & India Is Us',
    title: 'Grow Green Tree Plantation',
    short: 'Botany gardens and native planting in schools, starting at ZPHS Sahebnagar.',
    summary: 'Grow Green increases green cover and teaches children to care for it. On 17 February 2026 it set up a Botany Garden at Zilla Parishad High School, Sahebnagar.',
    stat: { value: '6', label: 'themed garden zones' },
    image: images.saplings, imageAlt: 'Saplings growing in a community field',
    gallery: [{ src: images.agroField, alt: 'Young plants in a field' }],
    body: [
      { heading: 'A living classroom', text: 'Zones for medicinal plants, native trees, pollinators, climate-resilient greenery, utility plants and succulents. Tulsi and aloe vera teach traditional medicine; sunflower and hibiscus show how pollinators keep ecosystems alive.' },
    ],
    highlights: ['Botany garden', 'Native species', 'Student custodians', 'Feb 2026'],
  },
  {
    slug: 'health-nutrition', number: '08', partner: 'District Health Department',
    title: 'Health, Nutrition & Vaccination',
    short: 'Door-to-door vaccination through 3 PHCs and nutrition gardens for every family.',
    summary: 'CONARE completed vaccination in 4 Primary Health Centres covering 117 villages, including forest villages, and runs Fixed Health Days with nutritious food for mothers and young children.',
    stat: { value: '117', label: 'villages vaccinated' },
    image: images.vaccination, imageAlt: 'Health workers vaccinating a villager outside a thatched home',
    gallery: [{ src: images.nutriGarden, alt: 'A nutrition garden in Chirumalla' }, { src: images.covidRelief, alt: 'Food relief during COVID-19' }],
    body: [
      { heading: 'Vaccination for every eligible person', text: 'Teams reach the last hamlet through the Sidhapur/Achampet, Mannanur and Padra PHCs in Nagarkurnool.' },
      { heading: 'Nutrition gardens', text: 'Seeds and training for kitchen gardens address anaemia and malnutrition at home.' },
      { heading: 'Emergencies', text: 'Flood relief in 5 villages, heat-wave support for 5,000 families and food relief during COVID-19.' },
    ],
    highlights: ['117 villages', '3 PHCs', 'Fixed Health Days', 'COVID-19 relief'],
  },
]

export type Story = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  readTime: string
  source: 'conare' | 'press' | 'demo'
  sourceUrl?: string
  body: string[]
}

export const stories: Story[] = [
  {
    slug: 'six-hundred-child-marriages-stopped', category: 'Children', date: '2026-08-07',
    title: 'How villages stopped 600 child marriages in Nagarkurnool and Kurnool',
    excerpt: 'Counselling, village committees and school enrolment: what it takes to keep a girl in class instead of at a wedding.',
    image: images.childrenActivity, imageAlt: 'Children at a child protection activity', readTime: '3 min read', source: 'conare',
    body: [
      'Child marriage, trafficking and child labour still threaten children in tribal and rural villages of Nagarkurnool, Mulugu and Kurnool.',
      'Under the Access to Justice project, CONARE teams identified families at risk and stepped in early: counselling parents, bringing village leaders and religious leaders on board, and making sure the child was enrolled in school. 300 child marriages were prevented in Nagarkurnool and 300 interventions carried out in Kurnool.',
      '100 village child protection committees, made up of local leaders, teachers, women and youth, now watch for cases and report them. In Kurnool, 25 trafficking cases were identified and resolved, with shelter, counselling and safe return for the children.',
    ],
  },
  {
    slug: 'botany-garden-sahebnagar', category: 'Partnerships', date: '2026-02-17',
    title: 'A botany garden becomes a living classroom at ZPHS Sahebnagar',
    excerpt: 'With Hitachi and India Is Us, students now look after medicinal plants, native trees and pollinator gardens.',
    image: images.saplings, imageAlt: 'Saplings in a garden', readTime: '2 min read', source: 'conare',
    body: [
      'On 17 February 2026, CONARE, Hitachi and India Is Us held the Grow Green tree plantation programme at Zilla Parishad High School, Sahebnagar.',
      'The new Botany Garden has themed zones for medicinal plants, native trees, pollinator-friendly species, climate-resilient greenery, utility plants and succulents. Tulsi and aloe vera teach traditional medicine; sunflower and hibiscus show how pollinators support biodiversity.',
      'The idea is simple: children who plant and name a tree grow up protecting forests.',
    ],
  },
  {
    slug: 'karakagudem-seed-banks', category: 'Livelihoods', date: '2026-07-15',
    title: 'Seed banks, orchards and lift irrigation: a season in Karakagudem',
    excerpt: 'Tribal farmers in Bhadradri Kothagudem keep their own seeds, plant apple ber and mango, and share water fairly.',
    image: images.seedBank, imageAlt: 'A community seed bank in Karakagudem', readTime: '3 min read', source: 'conare',
    body: [
      'In Karakagudem mandal, CONARE works with HDFC Bank’s Parivartan programme and the Bharat Rural Livelihoods Foundation on climate-resilient farming.',
      'This season, community seed banks were stocked with indigenous varieties, producer groups were trained in Chirumalla, Kannaigudem and Regalla, and new orchards of apple ber and mango went into the ground in Regalla and Thatigudem.',
      'Micro-lift irrigation, managed by the farmers themselves, now brings water to 120 farmers who used to depend on the rain alone.',
    ],
  },
  {
    slug: 'chaitanya-vikas-93-to-3241', category: 'Women', date: '2026-08-07',
    title: 'From 93 women to 3,241: the thrift society that replaced the moneylender',
    excerpt: 'Chaitanya Vikas started with small savings in Hyderabad’s settlements. Today its members run their own credit society.',
    image: images.womenGroup, imageAlt: 'A women’s group meeting', readTime: '2 min read', source: 'conare',
    body: [
      'In 2005, CONARE helped 100 women with small savings, many from Muslim minority communities in Hyderabad’s settlements, come together. In 2006 they registered as the Chaitanya Vikas Mutually Aided Cooperative Thrift Society.',
      'The society began with 93 members. It now has 3,241. Members save, borrow from each other, and get training in skills and enterprise so they can negotiate fair wages and prices.',
      'CONARE Laxmi MACTS brings the same model to rural women.',
    ],
  },
  {
    slug: 'agroforestry-3500-acres', category: 'Partnerships', date: '2026-04-11',
    title: '1,300 farmers plant trees on 3,500 acres with Zomato',
    excerpt: 'Mango and timber trees between the crops: more income, healthier soil and a cooler farm.',
    image: images.mango1, imageAlt: 'A young mango agroforestry plot', readTime: '2 min read', source: 'conare',
    body: [
      'The Greening India Agroforestry project, supported by Zomato, is under way in Nagarkurnool and Wanaparthy districts.',
      '1,300 farmers have dedicated 3,500 acres to tree-based farming, planting mango and timber species alongside cereals, pulses and vegetables.',
      'The trees improve soil and water retention and store carbon, while the crops keep families fed as the orchards mature.',
    ],
  },
  {
    slug: 'where-it-began-1999', category: 'Our history', date: '1999-02-17',
    title: 'Ten village schools for working children: where CONARE began',
    excerpt: 'In its first year, 300 children joined CONARE’s education centres and 80% moved on to government schools.',
    image: images.villageChildren, imageAlt: 'Children in a rural village', readTime: '2 min read', source: 'conare',
    body: [
      'CONARE began in 1999 with education centres for the children of working and dropout families in 10 villages around Achampet, supported by PRAKRITI and MV Foundation.',
      'Within a year, more than 300 children were in the centres, and 80% were mainstreamed into government schools and hostels.',
      'In 2000 came residential bridge course centres, and in 2001 the government allotted land for Bala Bhavan, a residential bridge centre for girls at Gopal Rao Nagar Tanda.',
    ],
  },
]

export const press = [
  { outlet: 'NGO Darpan', title: 'CONARE registration and profile on the NGO Darpan portal', href: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo_sof/582/36/16' },
  { outlet: 'Give.do', title: 'Conservation of Nature through Rural Awakening (CONARE)', href: 'https://discover.give.do/WSR/conservation-of-nature-through-rural-awakening-conare' },
  { outlet: 'CACL India', title: 'About CONARE', href: 'https://caclindia.org/?p=3132' },
]

export const recognitions = [
  { year: '1992', title: 'Recognised by the President of India', by: 'For the founder’s Achampet to New Delhi cycle rally' },
  { year: '2002', title: 'District Collector’s commendation', by: 'For outstanding service in Mahabubnagar district' },
  { year: '2018', title: 'Earth Day Network Star', by: 'Earth Day Network India, New Delhi' },
  { year: '2018', title: 'Change Maker Award', by: 'Save the Children' },
  { year: '2019', title: 'VMR 9 Achievers Award', by: 'Under the MSME programme' },
  { year: '2020', title: 'Empowering Schools for Quality Education', by: 'Save the Children' },
]

export const timeline = [
  { year: '1988', text: 'M. A. Saleem becomes Director of the Centre for Rural Youth Development, running watershed and education programmes.' },
  { year: '1992', text: 'He leads a cycle rally from Achampet to New Delhi for national integration and child welfare, and meets President Shankar Dayal Sharma.' },
  { year: '1999', text: 'CONARE is founded on 17 February. Education centres in 10 villages enrol 300 children; 80% move on to government schools.' },
  { year: '2001', text: 'The government allots an acre at Gopal Rao Nagar Tanda for Bala Bhavan, a residential bridge centre for girls.' },
  { year: '2005–06', text: 'Watershed, panchayat and livelihood work grows. In Hyderabad, women form the Chaitanya Vikas thrift society.' },
  { year: '2018–20', text: 'Earth Day Network Star, Save the Children Change Maker Award and VMR 9 Achievers Award.' },
  { year: '2023', text: 'CPSK starts with Azim Premji Philanthropic Initiatives for 500 Chenchu families on the Amrabad plateau.' },
  { year: '2026', text: '3,500 acres of agroforestry with Zomato, Karakagudem livelihoods with HDFC Bank, and Grow Green with Hitachi.' },
]

export const steps = [
  { title: 'Listen', text: 'Every project starts with a village meeting. Families name the problem and the priority.' },
  { title: 'Plan together', text: 'Villagers, panchayats and our team draw up the plan, with partners and government departments.' },
  { title: 'Do the work', text: 'Local people are hired onto every project, and staff follow the constitutional ratio of caste, religion and gender.' },
  { title: 'Hand it over', text: 'Seed banks, societies and committees become Community Owned and Community Operated.' },
]

export const documents = [
  { title: 'Annual reports', type: 'Annual report', size: 'On conare.org', href: 'https://conare.org/reports.html' },
  { title: 'Consolidated audit reports', type: 'Audited accounts', size: 'On conare.org', href: 'https://conare.org/audit-reports.html' },
  { title: 'Foreign contribution disclosures', type: 'FCRA', size: 'On conare.org', href: 'https://conare.org/foreign-contribution.html' },
  { title: 'Finance & registrations', type: 'Finance', size: 'On conare.org', href: 'https://conare.org/finance.html' },
  { title: 'Child safeguarding policy', type: 'Policy', size: 'PDF · sample' },
] as { title: string; type: string; size: string; href?: string }[]

export const partners = ['Paul Hamlyn Foundation', 'Azim Premji Philanthropic Initiatives', 'HDFC Bank Parivartan', 'Bharat Rural Livelihoods Foundation', 'Zomato', 'Hitachi', 'NABARD', 'Kailash Satyarthi Children’s Foundation', 'UNICEF', 'Save the Children']

export const causes = [
  { title: 'Plant an orchard on a tribal farm', text: 'Mango and fruit saplings that become a second income for a Chenchu or Koya family.', image: images.mango1, cost: '3,500 acres planted so far', costSource: 'conare', raised: 64, purpose: 'Agroforestry & climate' },
  { title: 'Keep a girl in school, not married', text: 'Counselling, committees and enrolment that stop child marriages before they happen.', image: images.childrenActivity, cost: '600 marriages stopped', costSource: 'conare', raised: 52, purpose: 'Children’s education & protection' },
  { title: 'Fair prices for forest honey', text: 'Equipment and training so Chenchu families process and sell forest produce at a fair price.', image: images.honey, cost: '500 families in CPSK', costSource: 'conare', raised: 41, purpose: 'Chenchu livelihoods & forest produce' },
  { title: 'A nutrition garden for every home', text: 'Seeds and training for kitchen gardens that fight anaemia in tribal hamlets.', image: images.nutriGarden, cost: '300 families with gardens', costSource: 'conare', raised: 70, purpose: 'Health & nutrition' },
  { title: 'Seed banks for climate-hit villages', text: 'Indigenous, drought-tolerant seeds kept and shared in the village.', image: images.seedBank, cost: '150 farmers served', costSource: 'conare', raised: 47, purpose: 'Where it’s needed most' },
  { title: 'Savings for women, not moneylenders', text: 'Training and seed capital for women’s thrift societies and small enterprises.', image: images.womenGroup, cost: '3,241 women members', costSource: 'conare', raised: 38, purpose: 'Women’s collectives' },
]

export const purposes = ['Where it’s needed most', 'Chenchu livelihoods & forest produce', 'Agroforestry & climate', 'Children’s education & protection', 'Women’s collectives', 'Health & nutrition']

export const oneTimeAmounts = [1000, 2500, 5000, 10000, 15000, 25000]
export const monthlyAmounts = [500, 1000, 2000, 5000, 10000, 15000]

/** All amounts are illustrative and need CONARE’s sign-off. */
export const amountImpact: Record<number, string> = {
  500: 'helps towards vegetable seeds for a family nutrition garden',
  1000: 'helps towards saplings for a family nutrition garden',
  2000: 'helps towards a month of a children’s club in a tribal hamlet',
  2500: 'helps towards fruit saplings for an agroforestry plot',
  5000: 'helps towards books, uniform and bag for a child back in school',
  10000: 'helps towards honey-processing kit for a Chenchu collective',
  15000: 'helps towards restocking a village seed bank',
  25000: 'helps towards a season of producer-group training for one village',
}

export const values = [
  { title: 'Community first', text: 'Villagers plan, implement and monitor every project. We follow their priorities, not donor templates.' },
  { title: 'People and nature', text: 'Livelihoods that reduce pressure on the forest, so wildlife and families both have a future.' },
  { title: 'Equality', text: 'Staffing follows the constitutional ratio of caste, religion and gender, and local people are hired on every project.' },
  { title: 'Ownership', text: 'Community Owned, Community Operated: seed banks, societies and committees outlive the project.' },
]

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (iso: string) =>
  iso.length === 4 ? iso : new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })

/** Photo deck in the home hero. */
export const heroSlides = [
  { src: images.bannerField, caption: 'Sorting forest produce in a Chenchu village, Nallamala', alt: 'A woman sorting forest produce outside her home' },
  { src: images.honey, caption: 'Honey harvesting with Chenchu families on the Amrabad plateau', alt: 'Villagers preparing to harvest honey beneath a large tree' },
  { src: images.thumbsUp, caption: 'Families outside a stone-and-thatch home in a forest village', alt: 'Three community members outside a stone and thatch home, giving a thumbs up' },
  { src: images.seedBank, caption: 'A community seed bank in Karakagudem, 2025–26', alt: 'Seed bank in Karakagudem' },
  { src: images.mango1, caption: 'Mango agroforestry in Thatigudem, with Zomato', alt: 'A young mango agroforestry plot' },
  { src: images.vaccination, caption: 'Door-to-door vaccination in a forest village', alt: 'Health workers vaccinating a villager outside a thatched home' },
  { src: images.lift1, caption: 'Farmers lay a lift irrigation line in Karakagudem', alt: 'Laying a lift irrigation pipeline' },
  { src: images.pgRegalla, caption: 'Producer group training in Regalla gram panchayat', alt: 'Producer group training' },
]

/** "What we do" carousel, with the photos each card cycles through. */
export const services = [
  { title: 'Chenchu Livelihoods', text: 'Honey, millets, dairy and forest produce for Chenchu families in 20 villages of the Amrabad Tiger Reserve.', photos: [images.chenchuMeeting, images.honey, images.bannerField], to: '/programs/c-mart' },
  { title: 'Agroforestry', text: '1,300 farmers grow mango, ber and timber trees between their crops on 3,500 acres.', photos: [images.mango1, images.mango2, images.ber1, images.agro1], to: '/programs/agroforestry' },
  { title: 'Lift Irrigation', text: 'Community-managed micro-lift irrigation brings water to 120 tribal farmers in Karakagudem.', photos: [images.lift1, images.lift2, images.lift3], to: '/programs/tribal-livelihoods' },
  { title: 'Seed Banks', text: 'Indigenous, climate-resilient seeds kept and shared by the village itself.', photos: [images.seedBank, images.apcInputs, images.apcRegalla], to: '/programs/tribal-livelihoods' },
  { title: 'Integrated Farming', text: 'Crops, livestock and horticulture together on 250 farms, so one failed crop isn’t a lost year.', photos: [images.ifs1, images.ifs2, images.ifs3], to: '/programs/tribal-livelihoods' },
  { title: 'Child Protection', text: '600 child marriages prevented and 100 village committees watching over children.', photos: [images.childrenActivity, images.children2, images.children3, images.children4], to: '/programs/child-protection' },
  { title: 'Women’s Societies', text: '3,241 women save and borrow through their own thrift society, Chaitanya Vikas.', photos: [images.womenGroup, images.gathering], to: '/programs/women-empowerment' },
  { title: 'Nutrition Gardens', text: 'Seeds and training for 300 tribal families to grow vegetables at home.', photos: [images.nutriGarden, images.nutriSeeds, images.kitchenGarden], to: '/programs/health-nutrition' },
  { title: 'Health & Vaccination', text: 'Vaccination in 117 villages through 4 PHCs, and Fixed Health Days for mothers and babies.', photos: [images.vaccination, images.covidRelief], to: '/programs/health-nutrition' },
  { title: 'Producer Groups', text: '140 women-led producer groups trained to market together and bargain fairly.', photos: [images.pgRegalla, images.pgChirumalla, images.pgKannaigudem], to: '/programs/tribal-livelihoods' },
  { title: 'Bridge Schools', text: 'Where CONARE began: 3,000+ child labourers and dropouts brought back to school.', photos: [images.villageChildren, images.brc1, images.brc2], to: '/stories/where-it-began-1999' },
  { title: 'Grow Green', text: 'Botany gardens and native planting in schools with Hitachi and India Is Us.', photos: [images.saplings, images.agroField], to: '/programs/grow-green' },
]

/** Impact since 1999, as published on conare.org. */
export const achievements2025 = [
  { value: 3000, prefix: '', suffix: '+', decimals: 0, label: 'Out-of-school children and child labourers brought back to education', icon: 'school' },
  { value: 15000, prefix: '', suffix: ' acres', decimals: 0, label: 'Land under non-pesticidal management', icon: 'leaf' },
  { value: 8000, prefix: '', suffix: '', decimals: 0, label: 'Families linked to government schemes', icon: 'hand' },
  { value: 5000, prefix: '', suffix: '', decimals: 0, label: 'Families supported through severe heat waves', icon: 'sun' },
  { value: 4200, prefix: '', suffix: ' ha', decimals: 0, label: 'Covered by watershed development', icon: 'droplet' },
  { value: 3500, prefix: '', suffix: ' acres', decimals: 0, label: 'Planted with fruit and timber trees', icon: 'tree' },
  { value: 3241, prefix: '', suffix: '', decimals: 0, label: 'Women in the Chaitanya Vikas thrift society', icon: 'users' },
  { value: 1300, prefix: '', suffix: '', decimals: 0, label: 'Farmers in agroforestry', icon: 'sprout' },
  { value: 600, prefix: '', suffix: '', decimals: 0, label: 'Child marriages prevented', icon: 'shield' },
  { value: 500, prefix: '', suffix: '', decimals: 0, label: 'Chenchu families in CPSK', icon: 'home' },
  { value: 140, prefix: '', suffix: '', decimals: 0, label: 'Women-led producer groups', icon: 'users' },
  { value: 117, prefix: '', suffix: '', decimals: 0, label: 'Villages covered by vaccination', icon: 'heart' },
  { value: 100, prefix: '', suffix: '', decimals: 0, label: 'Village child protection committees', icon: 'shield' },
  { value: 15, prefix: '', suffix: '', decimals: 0, label: 'Gram panchayats with village plans', icon: 'map' },
  { value: 5, prefix: '', suffix: '', decimals: 0, label: 'Villages rebuilt after floods', icon: 'home' },
]

export const pillars = [
  { title: 'Inclusivity', text: 'Working with Chenchu, Lambada and Erukala tribes, Scheduled Castes, poor farmers and minority communities, with a focus on women, children and youth.' },
  { title: 'Participation', text: 'Communities identify needs, plan, implement and monitor every project with us, guided by a core committee of senior staff and experts.' },
  { title: 'Sustainability', text: 'Community Owned and Community Operated groups, seed banks and societies keep the work going after a project ends.' },
]

/** Partner logos as shown on conare.org. */
export const partnerLogos = [
  ['partner-01.jpg', 'Paul Hamlyn Foundation'], ['partner-07.jpg', 'NABARD'], ['partner-04.jpg', 'UNICEF'], ['partner-05.jpg', 'Save the Children'],
  ['brlf-2.jpg', 'Bharat Rural Livelihoods Foundation'], ['satyarthi-2.jpg', 'Kailash Satyarthi Children’s Foundation'], ['phf-2.png', 'Partner'],
  ['partner-13.jpg', 'GEF Small Grants Programme and UNDP'], ['partner-03.jpg', 'Telangana State Forest Department'], ['partner-02.jpg', 'Telangana State Biodiversity Board'],
  ['partner-10.jpg', 'ActionAid'], ['partner-11.jpg', 'Centre for Pastoralism'], ['partner-12.jpg', 'Centre for Sustainable Agriculture'], ['partner-08.jpg', 'CPF'],
  ['partner-09.jpg', 'GWS'], ['partner-06.jpg', 'The Royal Bank of Scotland'],
].map(([file, name]) => ({ src: c('images/partner/' + file), name }))

export const districts = [
  { name: 'Nagarkurnool', state: 'Telangana · head office', text: 'Achampet, Mannanur and the Amrabad plateau: C-MART, CPSK, agroforestry, vaccination and child protection.' },
  { name: 'Bhadradri Kothagudem', state: 'Telangana', text: 'Karakagudem mandal: lift irrigation, integrated farming, seed banks and nutrition gardens.' },
  { name: 'Mulugu', state: 'Telangana', text: 'Tribal villages in the Godavari forest belt: child protection and livelihoods.' },
  { name: 'Nalgonda', state: 'Telangana', text: 'Farmer producer companies and climate proofing with NABARD.' },
  { name: 'Ranga Reddy', state: 'Telangana', text: 'Rural villages, and women’s thrift societies in Hyderabad’s settlements.' },
  { name: 'Kurnool', state: 'Andhra Pradesh', text: 'Chenchu villages across the Nallamala Hills: child protection and scheme access.' },
]
