// Canonical services catalogue.
// Listing cards use summary/tags; detail pages use hero, includes, suitableFor, faqs.
// Accounting is the Figma exemplar layout; other services reuse the same structure.
export const services = [
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting & Bookkeeping",
    navLabel: "Accounting & Bookkeeping",
    shortcutLabel: "Accounting & Bookkeeping",
    summary:
      "Monthly, quarterly or annual bookkeeping, reconciliation and management reporting matched to your transaction volume.",
    heroDescription:
      "Keep your day-to-day records accurate and organised. Accenor handles bookkeeping, reconciliations and management reporting on a schedule that matches how your business actually runs.",
    tags: [
      "Bookkeeping on your schedule",
      "Accounting record maintenance",
      "Payables and receivables",
    ],
    featured: true,
    icon: "bookOpen",
    seoTitle: "Accounting & Bookkeeping",
    seoDescription:
      "Monthly, quarterly or annual bookkeeping, reconciliation and management reporting from Accenor Consulting in Rawalpindi.",
    includes: [
      {
        title: "Bookkeeping on your schedule",
        description:
          "Monthly, quarterly or annual cycles matched to your transaction volume.",
      },
      {
        title: "Accounting record maintenance",
        description:
          "Ledgers kept up to date so balances stay traceable and decision-ready.",
      },
      {
        title: "Payables and receivables",
        description:
          "Track what you owe and what you are owed with clear follow-up.",
      },
      {
        title: "Bank reconciliation",
        description:
          "Match bank activity to your books and flag differences early.",
      },
      {
        title: "Management reporting",
        description:
          "Simple reports that show performance without unnecessary jargon.",
      },
      {
        title: "Organised documentation",
        description:
          "Records structured for tax filings, audits and everyday decisions.",
      },
    ],
    suitableFor: [
      "Sole proprietors and partnerships",
      "Small and medium businesses",
      "Startups building reliable books",
      "Companies preparing for tax season",
    ],
    faqs: [
      {
        question: "Can bookkeeping be monthly, quarterly or annual?",
        answer:
          "Yes. We agree a schedule based on your transaction volume, reporting needs and deadlines.",
      },
      {
        question: "What information do I need to share?",
        answer:
          "Typically bank statements, invoices, receipts and access notes for any tools you already use. We will confirm a short checklist after the first conversation.",
      },
      {
        question: "Do you prepare reports as well as day-to-day entries?",
        answer:
          "Yes. Alongside bookkeeping we can provide management reports so you can see how the business is performing.",
      },
    ],
    relatedSlugs: [
      "pakistan-taxation",
      "international-accounting",
      "business-financial-consultancy",
    ],
  },
  {
    slug: "international-accounting",
    title: "International Accounting Services",
    shortTitle: "International Accounting",
    navLabel: "International Accounting Services",
    shortcutLabel: "International Accounting",
    summary:
      "Remote bookkeeping, multi-currency reconciliation and reporting for clients outside Pakistan.",
    heroDescription:
      "Remote accounting support for businesses abroad. Accenor keeps multi-currency books, reconciles balances and delivers reports without requiring on-site staff in Pakistan.",
    tags: [
      "Remote bookkeeping",
      "Cross-border transaction recording",
      "Multi-currency bookkeeping",
    ],
    featured: false,
    icon: "globe",
    seoTitle: "International Accounting Services",
    seoDescription:
      "Remote multi-currency bookkeeping, reconciliation and reporting for international clients from Accenor Consulting.",
    includes: [
      {
        title: "Remote bookkeeping",
        description:
          "Day-to-day entries handled from Rawalpindi for clients abroad.",
      },
      {
        title: "Cross-border transaction recording",
        description:
          "Overseas payments and receipts captured with clear references.",
      },
      {
        title: "Multi-currency bookkeeping",
        description:
          "Balances tracked in the currencies your business actually uses.",
      },
      {
        title: "Reconciliation support",
        description:
          "Bank and ledger balances matched on an agreed schedule.",
      },
      {
        title: "Scheduled reporting",
        description:
          "Reports delivered on dates you agree in advance.",
      },
      {
        title: "Back-office coordination",
        description:
          "Routine accounting tasks handled so your local team can focus elsewhere.",
      },
    ],
    suitableFor: [
      "Companies based outside Pakistan",
      "Overseas founders needing remote books",
      "Multi-currency trading businesses",
      "Teams that prefer remote document workflows",
    ],
    faqs: [
      {
        question: "Does Accenor support clients outside Pakistan?",
        answer:
          "Yes. We provide remote bookkeeping, multi-currency support and reporting for clients abroad.",
      },
      {
        question: "How do we share documents securely?",
        answer:
          "We agree a simple document channel at the start — typically secure email or a shared folder — and keep a clear naming and filing habit.",
      },
      {
        question: "Can reporting follow our local calendar?",
        answer:
          "Yes. Reporting dates and currency preferences are agreed up front and reviewed if your needs change.",
      },
    ],
    relatedSlugs: [
      "accounting-bookkeeping",
      "business-financial-consultancy",
      "pakistan-taxation",
    ],
  },
  {
    slug: "pakistan-taxation",
    title: "Pakistan Taxation",
    shortTitle: "Pakistan Taxation",
    navLabel: "Pakistan Taxation",
    shortcutLabel: "Pakistan Taxation",
    summary:
      "Income tax returns, sales tax, withholding tax and registration support for individuals and businesses.",
    heroDescription:
      "Practical Pakistan tax support for individuals and businesses — from registration and withholding to income and sales tax filings — explained in clear language.",
    tags: [
      "Income tax return filing support",
      "Tax registration and compliance",
      "Withholding tax support",
    ],
    featured: false,
    icon: "fileText",
    seoTitle: "Pakistan Taxation",
    seoDescription:
      "Income tax, sales tax, withholding tax and registration support from Accenor Consulting in Pakistan.",
    includes: [
      {
        title: "Income tax return filing support",
        description:
          "Help preparing and filing returns with organised working papers.",
      },
      {
        title: "Tax registration and compliance",
        description:
          "Support with registrations and ongoing compliance steps.",
      },
      {
        title: "Withholding tax support",
        description:
          "Guidance on withholding obligations and related documentation.",
      },
      {
        title: "Sales tax support",
        description:
          "Assistance with sales tax processes where they apply to your activity.",
      },
      {
        title: "Record readiness for filings",
        description:
          "Books and documents arranged so filings are based on clear figures.",
      },
      {
        title: "Plain-language explanations",
        description:
          "What is due, why it matters, and what you need to do next.",
      },
    ],
    suitableFor: [
      "Individuals filing income tax returns",
      "Sole proprietors and partnerships",
      "Companies with Pakistan tax obligations",
      "Businesses needing registration support",
    ],
    faqs: [
      {
        question: "Do you help with income tax returns for individuals?",
        answer:
          "Yes. We support individual and business return preparation with a clear checklist of what is needed.",
      },
      {
        question: "Can you help with tax registration?",
        answer:
          "Yes. We assist with registration steps and explain what documents and follow-ups are typically required.",
      },
      {
        question: "How early should we start before a deadline?",
        answer:
          "As early as practical. Sharing documents ahead of the deadline gives time to clarify questions and avoid last-minute gaps.",
      },
    ],
    relatedSlugs: [
      "accounting-bookkeeping",
      "business-registration",
      "business-financial-consultancy",
    ],
  },
  {
    slug: "business-registration",
    title: "Business Registration & Corporate Services",
    shortTitle: "Business Registration",
    navLabel: "Business Registration & Corporate Services",
    shortcutLabel: "Business Registration",
    summary:
      "Sole proprietorship, partnership and company registration support with clear next steps.",
    heroDescription:
      "Starting or formalising a business in Pakistan? Accenor guides sole proprietorship, partnership and company registration with practical next steps and document checklists.",
    tags: [
      "Business registration support",
      "Sole proprietorship registration",
      "Partnership registration",
    ],
    featured: false,
    icon: "building",
    seoTitle: "Business Registration & Corporate Services",
    seoDescription:
      "Sole proprietorship, partnership and company registration support from Accenor Consulting.",
    includes: [
      {
        title: "Business registration support",
        description:
          "A clear path through the steps that apply to your business type.",
      },
      {
        title: "Sole proprietorship registration",
        description:
          "Help setting up as a sole proprietor with the right paperwork.",
      },
      {
        title: "Partnership registration",
        description:
          "Support for partnership formalities and related documentation.",
      },
      {
        title: "Company incorporation guidance",
        description:
          "Practical help when you are forming a private limited company.",
      },
      {
        title: "Document checklists",
        description:
          "Know what to prepare before each stage so progress is not stalled.",
      },
      {
        title: "Post-registration next steps",
        description:
          "Orientation on what usually follows — banking, tax and bookkeeping.",
      },
    ],
    suitableFor: [
      "Founders launching a new venture",
      "Sole proprietors formalising operations",
      "Partners setting up together",
      "Teams incorporating a private company",
    ],
    faqs: [
      {
        question: "Which business type should I choose?",
        answer:
          "It depends on ownership, liability preference and growth plans. We explain the common options so you can choose with clearer trade-offs.",
      },
      {
        question: "What documents are usually required?",
        answer:
          "Requirements vary by structure. After a short intake we share a checklist tailored to the path you are taking.",
      },
      {
        question: "Can you help after registration as well?",
        answer:
          "Yes. Many clients continue with bookkeeping, taxation or financial consultancy once the entity is in place.",
      },
    ],
    relatedSlugs: [
      "pakistan-taxation",
      "accounting-bookkeeping",
      "business-financial-consultancy",
    ],
  },
  {
    slug: "business-financial-consultancy",
    title: "Business & Financial Consultancy",
    shortTitle: "Business & Financial Consultancy",
    navLabel: "Business & Financial Consultancy",
    shortcutLabel: "Business & Financial Consultancy",
    summary:
      "Financial planning, analysis, process improvement and practical advisory for growing businesses.",
    heroDescription:
      "Advisory support for clearer financial decisions — planning, analysis and process improvement shaped around how your business operates today and where you want it to go.",
    tags: [
      "Business setup and financial planning",
      "Financial analysis and reporting",
      "Accounting process improvement",
    ],
    featured: false,
    icon: "chart",
    seoTitle: "Business & Financial Consultancy",
    seoDescription:
      "Financial planning, analysis and process improvement advisory from Accenor Consulting.",
    includes: [
      {
        title: "Business setup and financial planning",
        description:
          "Practical planning support when you are structuring or growing operations.",
      },
      {
        title: "Financial analysis and reporting",
        description:
          "Clear analysis of performance so decisions rest on reliable figures.",
      },
      {
        title: "Accounting process improvement",
        description:
          "Tighten routines, handovers and documentation so work stays consistent.",
      },
      {
        title: "Cash-flow visibility",
        description:
          "Help seeing money in and out with fewer surprises.",
      },
      {
        title: "Decision support",
        description:
          "Straightforward explanations of options when choices affect cost or risk.",
      },
      {
        title: "Coordination with bookkeeping and tax",
        description:
          "Advisory that connects cleanly with your ongoing accounting and filings.",
      },
    ],
    suitableFor: [
      "Growing SMEs reviewing finances",
      "Founders needing structured planning",
      "Teams improving accounting processes",
      "Businesses preparing for expansion",
    ],
    faqs: [
      {
        question: "Is this the same as bookkeeping?",
        answer:
          "No. Consultancy focuses on planning, analysis and process improvement. It often sits alongside bookkeeping and tax support.",
      },
      {
        question: "How do engagements usually start?",
        answer:
          "With a short discussion of your situation and goals, then a scoped plan for the advisory work you need.",
      },
      {
        question: "Can consultancy be combined with other services?",
        answer:
          "Yes. Many clients combine advisory with accounting, taxation or registration support under one coordinated relationship.",
      },
    ],
    relatedSlugs: [
      "accounting-bookkeeping",
      "international-accounting",
      "pakistan-taxation",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}

export function getServiceHref(slug) {
  return `/services/${slug}`;
}

export function getRelatedServices(slug, limit = 3) {
  const service = getServiceBySlug(slug);
  if (!service?.relatedSlugs?.length) {
    return services.filter((item) => item.slug !== slug).slice(0, limit);
  }

  return service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean)
    .slice(0, limit);
}

export const serviceDetailCta = {
  title: "Discuss this service with Accenor.",
  description:
    "Share a short description of your situation and we will explain the next steps.",
  primaryCta: { label: "Request a Consultation", href: "/contact-us" },
  secondaryCta: { label: "View All Services", href: "/services" },
};
