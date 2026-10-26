import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClientLogoCarousel } from "@/components/home/ClientLogoCarousel";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { homeClientLogos } from "@/data/clients";

export function ClientLogos() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <Container>
        <SectionHeader
          eyebrow="Our clients"
          title="Trusted by businesses we support."
        />
      </Container>

      {/* Full-bleed carousel row — one line, not a multi-column grid */}
      <div className="mt-8 sm:mt-10">
        <ClientLogoCarousel clients={homeClientLogos} />
      </div>

      <Container>
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
