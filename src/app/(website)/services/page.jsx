import { ServicesListing } from "@/components/services/ServicesListing";
import { StartingPoints } from "@/components/services/StartingPoints";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";
import { servicesCta, servicesHero } from "@/data/servicesPage";

export const metadata = {
  title: "Services",
  description:
    "Explore Accenor Consulting services: accounting and bookkeeping, international accounting, Pakistan taxation, business registration, and financial consultancy.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Five service areas for accounting, tax, registration and business advisory. Find the support that fits your needs.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesHero.eyebrow}
        title={servicesHero.title}
        description={servicesHero.description}
        breadcrumbs={servicesHero.breadcrumbs}
      />
      <ServicesListing />
      <StartingPoints />
      <CtaBanner
        title={servicesCta.title}
        description={servicesCta.description}
        primaryCta={servicesCta.primaryCta}
        secondaryCta={servicesCta.secondaryCta}
      />
    </>
  );
}
