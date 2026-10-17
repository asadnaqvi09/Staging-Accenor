import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClientLogoGrid } from "@/components/shared/ClientLogoGrid";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { clientsPendingNote, homeClientLogos } from "@/data/clients";

export function ClientLogos() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader
          eyebrow="Our clients"
          title="Trusted by businesses we support."
        />
        <ClientLogoGrid
          className="mt-6"
          clients={homeClientLogos}
          pendingNote={clientsPendingNote}
        />
        <div className="mt-8">
          <Link
            href="/our-clients"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            View Our Clients page
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
