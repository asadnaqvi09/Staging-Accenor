import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function RelatedServices({ services: related }) {
  if (!related?.length) return null;

  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader
          eyebrow="Related services"
          title="Other support you may need."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
