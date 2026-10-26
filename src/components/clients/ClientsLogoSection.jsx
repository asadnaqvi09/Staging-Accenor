import { ClientLogoGrid } from "@/components/shared/ClientLogoGrid";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { clients } from "@/data/clients";

export function ClientsLogoSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader
          eyebrow="Client logos"
          title="Organisations Accenor supports."
          description="A selection of local and international clients we work with across accounting, taxation and advisory."
        />
        <ClientLogoGrid
          className="mt-8"
          clients={clients}
          gridClassName="lg:grid-cols-4 xl:grid-cols-5"
        />
      </Container>
    </section>
  );
}
