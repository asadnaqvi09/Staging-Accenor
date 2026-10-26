import { services } from "./services";

export const homeHero = {
  badge: "Accounting · Taxation · Business Advisory",
  titleLead: "Reliable",
  titleHighlight: "Accounting",
  titleRest: "Taxation & Business Consulting.",
  sublineBefore: "We take care of your",
  sublineHighlight: "sales tax returns",
  sublineAfter: "so you can focus on running your business.",
  description:
    "Practical financial and business support for individuals, growing businesses, and international clients. Accenor Consulting helps simplify accounting, taxation, compliance, and business processes.",
  primaryCta: { label: "Discuss Your Requirements", href: "/contact-us" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
  trustPoints: [
    { icon: "shield", label: "Confidential handling" },
    { icon: "globe", label: "Local & international clients" },
    { icon: "check", label: "Accuracy-first records" },
  ],
};

// Compact hero visual cards (illustrative — not client data).
export const homeHeroCards = {
  caption: "Illustrative example · not client data",
  tax: {
    title: "Tax Returns",
    subtitle: "Accurate, on-time and compliant with local regulations.",
    yearLabel: "TAX YEAR 2026",
    filingTitle: "Income Tax Return",
    statusBadge: "Submitted",
    statusLabel: "Status",
    steps: [
      "Data Preparation",
      "Review & Approval",
      "Filed with Authorities",
      "Acknowledgement Received",
    ],
  },
  accounting: {
    title: "Accounting",
    subtitle: "Accurate records, better decisions, stronger business.",
    overviewTitle: "Monthly Overview",
    overviewSubtitle: "Bookkeeping & Financial Reporting",
    currencies: "PKR · DKK · EUR · USD",
    currencyNote: "Multi-currency support",
    stats: [
      { label: "Income", value: "2,480,000" },
      { label: "Expenses", value: "1,615,000" },
      { label: "Net", value: "865,000" },
    ],
    months: [
      { label: "Jan", income: 58, expense: 42 },
      { label: "Feb", income: 64, expense: 48 },
      { label: "Mar", income: 72, expense: 50 },
      { label: "Apr", income: 68, expense: 46 },
      { label: "May", income: 80, expense: 55 },
      { label: "Jun", income: 92, expense: 60 },
    ],
  },
};

export const homeAbout = {
  eyebrow: "About Accenor",
  title: "Financial support built around how your business actually works.",
  paragraphs: [
    "Accenor Consulting is an accounting, taxation and business consultancy based in Rawalpindi, Pakistan. We support individuals, sole proprietors, partnerships, companies and international clients who need clear, reliable financial support.",
    "Every engagement starts with understanding your records, reporting needs and deadlines — then we put a practical process in place.",
  ],
  bullets: ["Accuracy", "Confidentiality", "Transparent communication"],
  cta: { label: "More about Accenor", href: "/about-us" },
};

export const homeWhyChoose = {
  eyebrow: "Why Accenor",
  title: "Why choose Accenor Consulting?",
  items: [
    {
      title: "Client-focused support",
      description:
        "Professional support shaped around your requirements, not a one-size template.",
    },
    {
      title: "Accounting and tax together",
      description:
        "Bookkeeping, taxation and registration handled by one coordinated team.",
    },
    {
      title: "Tailored solutions",
      description:
        "Scope and reporting set to fit individuals, SMEs and international clients.",
    },
    {
      title: "Local and international",
      description:
        "Support for clients in Pakistan and remote clients abroad.",
    },
    {
      title: "Transparent communication",
      description: "Clear explanations of what is being done, and why.",
    },
    {
      title: "Confidential handling",
      description:
        "Client records and financial information treated with care.",
    },
    {
      title: "Accuracy and timeliness",
      description: "Careful work delivered within agreed timelines.",
    },
    {
      title: "Clear documentation",
      description:
        "Organised records you can rely on for decisions and filings.",
    },
  ],
};

export const homeRemote = {
  eyebrow: "International clients",
  title: "Remote accounting support for businesses abroad.",
  description:
    "For clients in markets such as Denmark and beyond, Accenor provides remote bookkeeping and back-office support without the need for on-site staff in Pakistan.",
  features: [
    {
      title: "Multi-currency bookkeeping",
      description:
        "Transactions recorded with consistent conversion tracking.",
    },
    {
      title: "Reconciliation & reporting",
      description: "Balances matched to the ledger, reports on an agreed schedule.",
    },
    {
      title: "Back-office support",
      description: "Routine accounting tasks handled remotely.",
    },
  ],
  flow: [
    { title: "Clients abroad", detail: "share documents" },
    { title: "Accenor, Rawalpindi", detail: "keeps & reconciles books" },
  ],
  highlights: [
    { title: "Remote", detail: "No on-site staff needed" },
    { title: "Multi-currency", detail: "Kept in your currencies" },
    { title: "Scheduled", detail: "Reports on agreed dates" },
  ],
  cta: {
    label: "International Accounting Services",
    href: "/services/international-accounting",
  },
};

export const homeProcess = {
  eyebrow: "Our approach",
  title: "How we work with every client.",
  steps: [
    {
      number: "01",
      title: "Understand requirements",
      description:
        "We start by learning about your situation, records and deadlines.",
    },
    {
      number: "02",
      title: "Tailor the support",
      description:
        "Scope, schedule and reporting are agreed to fit your business.",
    },
    {
      number: "03",
      title: "Keep accurate records",
      description:
        "Work is documented clearly so every figure can be traced.",
    },
    {
      number: "04",
      title: "Communicate openly",
      description:
        "You know what is being done, what is needed and what comes next.",
    },
    {
      number: "05",
      title: "Deliver on time",
      description: "Work is completed within the timelines we agree together.",
    },
  ],
};

export const homeFaqs = [
  {
    question: "What services does Accenor Consulting provide?",
    answer:
      "Accounting and bookkeeping, international accounting services, Pakistan taxation, business registration and corporate services, and business and financial consultancy.",
  },
  {
    question: "Does Accenor support international accounting clients?",
    answer:
      "Yes. We provide remote bookkeeping, multi-currency support and reporting for clients outside Pakistan.",
  },
  {
    question: "Can businesses request ongoing bookkeeping support?",
    answer:
      "Yes. Bookkeeping can be arranged on a monthly, quarterly or annual basis depending on your needs.",
  },
  {
    question: "How do I start a conversation with Accenor?",
    answer:
      "Use the contact form, call or WhatsApp. Share a short description of what you need and we will explain the next steps.",
  },
];

export const homeCta = {
  title: "Let's discuss your accounting, taxation & business needs.",
  description:
    "Tell us about your situation and we will explain how Accenor can help.",
  primaryCta: { label: "Request a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "Speak with an Expert", href: "/contact-us" },
};

export const tickerItems = [
  "Bookkeeping",
  "VAT Registration",
  "Income Tax Returns",
  "NTN Registration",
  "Multi-currency Accounting",
  "Business Registration",
  "Sales Tax Support",
  "Financial Reporting",
  "Withholding Tax",
  "Remote Back-office Support",
];

export const homeServicesIntro = {
  eyebrow: "Services",
  title: "Five areas of support, under one roof.",
  allServicesHref: "/services",
};

export { services as homeServices };