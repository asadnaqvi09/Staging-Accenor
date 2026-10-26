import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactWhatsAppPanel } from "@/components/contact/ContactWhatsAppPanel";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";
import { contactHero } from "@/data/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Accenor Consulting in Rawalpindi for accounting, taxation, business registration and financial consultancy. Call, email, WhatsApp or send an enquiry.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Reach Accenor by phone, email, WhatsApp or enquiry form. Based at Noor Mall, 6th Road, Rawalpindi.",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
        breadcrumbs={contactHero.breadcrumbs}
      />
      <ContactWhatsAppPanel />
      <section className="section-pad bg-white">
        <Container className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <ContactForm />
          </div>
          <div className="min-w-0 space-y-6">
            <ContactDetails />
            <MapPlaceholder />
          </div>
        </Container>
      </section>
    </>
  );
}
