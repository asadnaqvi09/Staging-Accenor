// Client logo placeholders — real logos replace these when the owner supplies assets.
// Keep the grid visible so the layout is ready for final assets.
export const clients = Array.from({ length: 12 }, (_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    id: `client-${n}`,
    name: `CLIENT ${n}`,
    placeholder: true,
    logoSrc: null,
    alt: `Client ${n} logo placeholder awaiting approval`,
  };
});

// Home shows a shorter row; full grid lives on /our-clients.
export const homeClientLogos = clients.slice(0, 8);

export const clientsHero = {
  eyebrow: "Our Clients",
  title: "Businesses that trust Accenor with their financial work.",
  description:
    "Accenor supports local and international clients with accounting, taxation, registration and advisory. Approved logos will appear here when supplied.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Our Clients" },
  ],
};

export const clientsPendingNote =
  "Proposed · approved logos needed — placeholders shown until assets are provided";

export const clientsAudiences = {
  eyebrow: "Who we support",
  title: "Local and international relationships.",
  description:
    "Engagements range from a first tax return to ongoing remote bookkeeping for companies abroad. Support is shaped around each client's situation.",
  items: [
    {
      title: "Local businesses",
      description:
        "Bookkeeping, tax and registration support for clients across Pakistan.",
    },
    {
      title: "International clients",
      description:
        "Remote multi-currency bookkeeping and back-office support from Rawalpindi.",
    },
    {
      title: "Startups & growing SMEs",
      description:
        "Setup, records and reporting as the business finds its rhythm.",
    },
    {
      title: "Established companies",
      description:
        "Reconciliation, reporting and process improvement for ongoing operations.",
    },
  ],
};

export const clientsCta = {
  title: "Ready to work with Accenor?",
  description:
    "Tell us about your situation and we will explain how we can help.",
  primaryCta: { label: "Contact Us", href: "/contact-us" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
};
