export const site = {
  url: 'https://gcamsadvisory.com',
  brand: 'GCAMS',
  legalName: 'Global Corporate Advisory and Management Services DWC-LLC',
  legalStatus: 'DWC-LLC',
  registrationNumber: '14249',
  licenceNumber: '15234',
  incorporationDate: '8 September 2026',
  managerPublic: 'Ramaswamy Chidambaram',
  managerRole: 'Principal Advisor',
  email: 'ram@gcamsadvisory.com',
  phoneUae: '+971 50 694 2879',
  phoneUaeTel: '+971506942879',
  addressUae:
    'Business Centre, 3rd Floor, Building A3, Business Park, Dubai South, Dubai, UAE',
  linkedIn: 'https://www.linkedin.com/in/ramchidambaram-ip/',
  shortDescriptor:
    'Corporate Advisory | CFO and Finance Support | Restructuring and Insolvency Support | Transactions and Feasibility | GCC Investor Outreach | Cross Border Support',
  positioning:
    'GCAMS is a Dubai based corporate advisory and management consultancy. We support businesses, investors, lenders and professional advisers with financial decisions, restructuring and business improvement.',
  heroHeading: 'Clear advice. A stronger way forward.',
  heroText:
    'GCAMS helps businesses strengthen finances, navigate change and assess opportunities. Based in Dubai, we bring practical finance leadership and restructuring experience.',
  primaryCta: 'Let’s discuss your business',
  headerCta: 'Schedule a discussion',
  secondaryCta: 'Explore our services',
  contactHeading: 'Start a Confidential Conversation',
  contactIntro: 'Tell us briefly what you need. We will contact you to discuss the next step.',
  closeHeading: 'Let’s find the next step.',
  closeText:
    'Talk to GCAMS about your business, financial challenge or investment decision.',
  closeCta: 'Start a confidential conversation',
  difcWording:
    'Ramaswamy Chidambaram is a registered Insolvency Practitioner with the DIFC Registrar of Companies under the DIFC Insolvency Law No. 1 of 2019.',
  difcDate: '23 June 2026',
  difcUrl: 'https://www.difc.com/business/liquidator-auditors',
  // Confirm this number against the IBBI certificate before publication. Do not add SR-795299 unless the registration document matches it.
  ibbiRegistration: 'IBBI/IPA-001/IP-P-02976/2025-2026/14635',
  servicesDisclaimer:
    'GCAMS provides corporate, economic, management, accounting-process and feasibility advisory services within the scope of its licence. Investor outreach is undertaken only under an appropriate written mandate and does not constitute investment advice, securities promotion, brokerage, an assurance of investor participation or authority to bind the seller, lender, resolution professional or liquidator. Legal advice, statutory audit, regulated tax agency services, valuation opinions, investment advice, court appointments and formal insolvency appointments are provided only where GCAMS or the relevant professional is duly authorised, registered or separately engaged.',
  servicesNote:
    'Services are agreed within our licensed scope. Investor outreach requires a written mandate. Formal insolvency appointments and regulated services require relevant authorisation and separate engagement.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

/** Location label and next-step links for inner pages. Home is added in PageContinue. */
export const wayfinding = {
  '/about': {
    kicker: 'About',
    next: [
      { href: '/services', label: 'Services' },
      { href: '/credentials', label: 'Credentials' },
      { href: '/contact', label: 'Start a conversation' },
    ],
  },
  '/services': {
    kicker: 'Services',
    next: [
      { href: '/about#industry-experience', label: 'Industry experience' },
      { href: '/about', label: 'About the firm' },
      { href: '/contact', label: 'Start a conversation' },
    ],
  },
  '/credentials': {
    kicker: 'Credentials',
    next: [
      { href: '/about', label: 'About the firm' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Start a conversation' },
    ],
  },
  '/contact': {
    kicker: 'Contact',
    next: [
      { href: '/services', label: 'Services' },
      { href: '/about', label: 'About the firm' },
    ],
  },
  '/privacy': {
    kicker: 'Privacy',
    next: [
      { href: '/terms', label: 'Terms of use' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  '/terms': {
    kicker: 'Terms',
    next: [
      { href: '/privacy', label: 'Privacy notice' },
      { href: '/contact', label: 'Contact' },
    ],
  },
} as const;

export const whatsappUaeUrl = `https://wa.me/${site.phoneUaeTel.replace('+', '')}`;

export const credentialsLine = [
  { text: '25+ years in the UAE' },
  { text: 'ACA' },
  { text: 'CMA' },
  { text: 'DIFC-registered Insolvency Practitioner', href: site.difcUrl },
  { text: 'IBBI-registered Insolvency Professional' },
  { text: 'INSOL International member' },
] as const;

export const whyGcams = [
  'More than 25 years of UAE leadership experience across finance, operations and commercial management.',
  'Chartered Accountant, Cost Accountant, IBBI-registered Insolvency Professional and DIFC-registered Insolvency Practitioner leadership.',
  "Practical CIRP and liquidation exposure from a resolution applicant's perspective, together with due diligence, M&A, debt raising, ERP implementation and board reporting.",
  'Senior-level advice supported by practical execution and clear financial analysis.',
  'Cross-sector perspective including healthcare and environmental services, industrial businesses, telecom and diversified groups.',
] as const;

export const approach = [
  {
    title: 'Discuss',
    text: 'Tell us the challenge and the decision ahead.',
  },
  {
    title: 'Assess',
    text: 'We review the facts and agree the scope.',
  },
  {
    title: 'Act',
    text: 'You receive clear recommendations and agreed implementation support.',
  },
] as const;

export const clientNeeds = [
  {
    id: 'cash',
    title: 'Improve cash flow',
    text: 'Get a clearer view of cash, costs and financial performance.',
    href: '/services#02-finance-transformation',
  },
  {
    id: 'recover',
    title: 'Restructure and recover',
    text: 'Assess the options and build a practical plan.',
    href: '/services#03-restructuring',
  },
  {
    id: 'invest',
    title: 'Invest with clarity',
    text: 'Review the numbers, risks and commercial potential.',
    href: '/services#04-transactions',
  },
] as const;

export const industries = [
  'Healthcare',
  'Education',
  'Environment and waste',
  'Manufacturing and trading',
  'Retail and FMCG',
  'Infrastructure and hospitality',
] as const;

export const formServices = [
  'Corporate Advisory',
  'CFO and Finance Support',
  'Restructuring and Insolvency Support',
  'Transactions and Feasibility',
  'GCC Investor Outreach',
  'Cross Border Support',
  'Not sure yet',
] as const;
