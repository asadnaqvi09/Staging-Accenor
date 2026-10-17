import { ClientLogoGrid } from "@/components/shared/ClientLogoGrid";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { clients, clientsPendingNote } from "@/data/clients";

export function ClientsLogoSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader
          eyebrow="Client logos"
          title="Placeholder grid ready for approved assets."
          description="Real client logos will replace these cells once you supply approved artwork. No invented brands are shown."
        />
        <ClientLogoGrid
          className="mt-8"
          clients={clients}
          pendingNote={clientsPendingNote}
          gridClassName="lg:grid-cols-4"
        />
      </Container>
    </section>
  );
}
