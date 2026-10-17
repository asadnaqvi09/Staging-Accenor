import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { clientsAudiences } from "@/data/clients";

export function ClientsAudiences() {
  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <SectionHeader
          eyebrow={clientsAudiences.eyebrow}
          title={clientsAudiences.title}
          description={clientsAudiences.description}
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {clientsAudiences.items.map((item) => (
            <li
              key={item.title}
              className="border-t-2 border-accent-green pt-4"
            >
              <h3 className="text-[17px] font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
