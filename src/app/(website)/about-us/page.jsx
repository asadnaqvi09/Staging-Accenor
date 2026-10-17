import { CoreValues } from "@/components/about/CoreValues";
import { MissionVision } from "@/components/about/MissionVision";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { WhoWeServe } from "@/components/about/WhoWeServe";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";
import { aboutCta, aboutHero } from "@/data/about";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Accenor Consulting — a Rawalpindi-based accounting, taxation and business consultancy serving local and international clients with accuracy, confidentiality and clear communication.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Accounting, tax and advisory with a client-first approach. Based in Rawalpindi, Pakistan.",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        description={aboutHero.description}
        breadcrumbs={aboutHero.breadcrumbs}
      />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <WhoWeServe />
      <CtaBanner
        title={aboutCta.title}
        description={aboutCta.description}
        primaryCta={aboutCta.primaryCta}
        secondaryCta={aboutCta.secondaryCta}
      />
    </>
  );
}
