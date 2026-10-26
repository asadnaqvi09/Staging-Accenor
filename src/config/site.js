// Central site configuration for Accenor Consulting.
// WhatsApp uses a test number until the client number is confirmed enabled.
export const siteConfig = {
  name: "Accenor Consulting",
  shortName: "Accenor",
  tagline: "Accounting, taxation and business consultancy",
  description:
    "Professional accounting, bookkeeping, taxation, business registration, and financial consultancy for individuals, growing businesses, and international clients. Based in Rawalpindi, Pakistan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://accenorconsulting.com",
  locale: "en_PK",

  contact: {
    phoneDisplay: "0332-2374725",
    phoneTel: "+923322374725",
    email: "accenorconsulting@gmail.com",
    addressShort: "Noor Mall, 6th Road, Rawalpindi",
    addressFull:
      "Noor Mall, 6th Road, Rawalpindi, Pakistan",
    // Business hours — prepared for utility bar and future pages.
    // Not heavily emphasized in Figma; included for future-ready UX.
    hoursDisplay: "Mon–Sat: 09:00 – 18:00",
    hoursShort: "Mon–Sat 09:00–18:00",
  },

  // TEST WhatsApp number (user-approved for development).
  // Replace whatsappPhoneE164 with client number once confirmed WhatsApp-enabled:
  // Client display: 0332-2374725 → E.164: 923322374725
  whatsapp: {
    enabled: true,
    isTestNumber: true,
    phoneDisplay: "0332-2374725",
    phoneE164: "923322374725",
    defaultMessage:
      "Hi Ahsan! I would like to discuss accounting, tax or business requirements with Accenor Consulting.",
    getHref() {
      const text = encodeURIComponent(this.defaultMessage);
      return `https://wa.me/${this.phoneE164}?text=${text}`;
    },
  },

  social: {
    linkedin: null,
    linkedinStatus: "Official company page link pending verification",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/services",
      children: true,
    },
    { label: "Our Clients", href: "/our-clients" },
    { label: "Contact", href: "/contact-us" },
  ],

  cta: {
    label: "Discuss Your Requirements",
    href: "/contact-us",
  },

  footer: {
    companyLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Our Clients", href: "/our-clients" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
};
