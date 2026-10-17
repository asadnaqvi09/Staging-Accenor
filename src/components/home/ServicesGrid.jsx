import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { homeServicesIntro } from "@/data/home";
import { services } from "@/data/services";

export function ServicesGrid() {
  const featured = services.find((s) => s.featured) || services[0];
  const ordered = [
    featured,
    ...services.filter((s) => s.slug !== featured.slug),
  ];
  const top = ordered.slice(0, 2);
  const bottom = ordered.slice(2);

  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <SectionHeader
          eyebrow={homeServicesIntro.eyebrow}
          title={homeServicesIntro.title}
          action={
            <Link
              href={homeServicesIntro.allServicesHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              All services <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {top.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bottom.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
