import { services } from "./services";

export const contactHero = {
  eyebrow: "Contact Us",
  title: "Let's discuss your accounting, tax or business needs.",
  description:
    "Share a short description of what you need. You can use the form, call, email or WhatsApp — we will explain the next steps.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ],
};

export const contactWhatsAppPanel = {
  eyebrow: "Prefer WhatsApp?",
  title: "Message Accenor on WhatsApp.",
  description:
    "Send a short note about your requirements and we will reply during business hours.",
  ctaLabel: "Chat on WhatsApp",
};

export const contactFormIntro = {
  eyebrow: "Enquiry form",
  title: "Tell us what you need.",
  description:
    "Required fields are marked. We use your details only to respond to this enquiry.",
};

export const contactServiceOptions = [
  { value: "general", label: "General enquiry / Not sure yet" },
  ...services.map((service) => ({
    value: service.slug,
    label: service.title,
  })),
];

export const contactMapPlaceholder = {
  title: "Office location",
  note: "Map embed pending confirmation of the public location / embed details.",
};
