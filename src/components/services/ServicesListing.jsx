import { Container } from "@/components/shared/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function ServicesListing() {
  const featured = services.find((s) => s.featured) || services[0];
  const ordered = [
    featured,
    ...services.filter((s) => s.slug !== featured.slug),
  ];
  const top = ordered.slice(0, 2);
  const bottom = ordered.slice(2);

  return (
    <section id="service-areas" className="section-pad scroll-mt-24 bg-white">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
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
