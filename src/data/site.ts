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
  phoneIndia: '+91 75581 88822',
  phoneIndiaTel: '+917558188822',
  addressUae:
    'Business Centre, 3rd Floor, Building A3, Business Park, Dubai South, Dubai, UAE',
  indiaPublic: 'India Liaison: Coimbatore, Tamil Nadu, India',
  linkedIn: 'https://www.linkedin.com/in/ramchidambaram-ip/',
  shortDescriptor:
    'Corporate Advisory | Finance Transformation | Restructuring | Feasibility | Cross-Border Support',
  positioning:
    'GCAMS is a UAE-based corporate advisory and management consultancy helping businesses, investors, lenders and professional stakeholders address financial complexity, improve performance and make informed strategic decisions across the UAE, India and cross-border situations.',
  heroHeading: 'Clarity for Complex Business and Financial Decisions',
  heroText:
    'GCAMS provides practical corporate, financial and management advisory support to businesses, investors, lenders and professional stakeholders across the UAE, India and cross-border engagements.',
  primaryCta: 'Schedule a Confidential Discussion',
  headerCta: 'Schedule a discussion',
  secondaryCta: 'Explore Our Services',
  contactHeading: 'Start a Confidential Conversation',
  contactIntro:
    'Please share a brief description of your requirement. GCAMS will respond to discuss the appropriate next step and whether the assignment is within its scope.',
  difcWording:
    'Ramaswamy Chidambaram is a registered Insolvency Practitioner with the DIFC Registrar of Companies under the DIFC Insolvency Law No. 1 of 2019.',
  difcDate: '23 June 2026',
  difcUrl: 'https://www.difc.com/business/liquidator-auditors',
  servicesDisclaimer:
    'GCAMS provides corporate, economic, management, accounting-process and feasibility advisory services within the scope of its licence. Investor outreach is undertaken only under an appropriate written mandate and does not constitute investment advice, securities promotion, brokerage, an assurance of investor participation or authority to bind the seller, lender, resolution professional or liquidator. Legal advice, statutory audit, regulated tax agency services, valuation opinions, investment advice, court appointments and formal insolvency appointments are provided only where GCAMS or the relevant professional is duly authorised, registered or separately engaged.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/sectors', label: 'Sectors' },
    { href: '/credentials', label: 'Credentials' },
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
      { href: '/sectors', label: 'Sectors' },
      { href: '/about', label: 'About the firm' },
      { href: '/contact', label: 'Start a conversation' },
    ],
  },
  '/sectors': {
    kicker: 'Sectors',
    next: [
      { href: '/services', label: 'Services' },
      { href: '/credentials', label: 'Credentials' },
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
export const whatsappIndiaUrl = `https://wa.me/${site.phoneIndiaTel.replace('+', '')}`;

export const credentialsLine = [
  { text: '25+ years’ UAE experience' },
  { text: 'ACA' },
  { text: 'CMA' },
  { text: 'IBBI-registered Insolvency Professional' },
  { text: 'DIFC-registered Insolvency Practitioner', href: site.difcUrl },
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
    title: 'Initial confidential discussion',
    text: 'Understand the decision, challenge, stakeholders and timetable.',
  },
  {
    title: 'Focused scope',
    text: 'Agree deliverables, information requirements, responsibilities, fees and exclusions.',
  },
  {
    title: 'Independent analysis',
    text: 'Validate data, identify gaps, test assumptions and assess options.',
  },
  {
    title: 'Clear recommendations',
    text: 'Present practical actions, financial implications, risks and priorities.',
  },
  {
    title: 'Implementation support',
    text: 'Assist management and professional stakeholders through agreed execution milestones.',
  },
] as const;

export const formServices = [
  'Corporate and Institutional Management Advisory',
  'CFO and Finance Transformation Advisory',
  'Restructuring, Turnaround and Insolvency Support',
  'Transaction, M&A and Funding Support',
  'GCC Investor Outreach and Distressed Asset Opportunities',
  'Feasibility Studies and Economic Advisory',
  'Cross-Border and Professional Collaboration',
  'Other / not yet sure',
] as const;
