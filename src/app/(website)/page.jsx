import { AboutPreview } from "@/components/home/AboutPreview";
import { ClientLogos } from "@/components/home/ClientLogos";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { RemoteSupport } from "@/components/home/RemoteSupport";
import { ServiceShortcuts } from "@/components/home/ServiceShortcuts";
import { ServiceTicker } from "@/components/home/ServiceTicker";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { siteConfig } from "@/config/site";
import { homeCta } from "@/data/home";

export const metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "M-95, Mezzanine Floor, Noor Mall, 6th Road",
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    areaServed: ["PK", "International"],
  };
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <HeroSection />
      {/* <ServiceShortcuts /> */}
      <ServiceTicker />
      <AboutPreview />
      <ServicesGrid />
      <WhyChoose />
      <RemoteSupport />
      <ClientLogos />
      <ProcessSteps />
      <FaqSection />
      <CtaBanner
        title={homeCta.title}
        description={homeCta.description}
        primaryCta={homeCta.primaryCta}
        secondaryCta={homeCta.secondaryCta}
      />
    </>
  );
}
