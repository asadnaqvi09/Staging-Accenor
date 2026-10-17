import { ClientsAudiences } from "@/components/clients/ClientsAudiences";
import { ClientsLogoSection } from "@/components/clients/ClientsLogoSection";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";
import { clientsCta, clientsHero } from "@/data/clients";

export const metadata = {
  title: "Our Clients",
  description:
    "Accenor Consulting supports local and international clients with accounting, taxation, registration and advisory. Client logos appear here once approved assets are supplied.",
  alternates: {
    canonical: "/our-clients",
  },
  openGraph: {
    title: `Our Clients | ${siteConfig.name}`,
    description:
      "Local and international clients who trust Accenor with accounting, tax and business support.",
  },
};

export default function OurClientsPage() {
  return (
    <>
      <PageHero
        eyebrow={clientsHero.eyebrow}
        title={clientsHero.title}
        description={clientsHero.description}
        breadcrumbs={clientsHero.breadcrumbs}
      />
      <ClientsLogoSection />
      <ClientsAudiences />
      <CtaBanner
        title={clientsCta.title}
        description={clientsCta.description}
        primaryCta={clientsCta.primaryCta}
        secondaryCta={clientsCta.secondaryCta}
      />
    </>
  );
}
