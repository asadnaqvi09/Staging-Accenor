import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export function ServiceFaq({ service }) {
  if (!service.faqs?.length) return null;

  return (
    <section className="section-pad bg-surface-muted">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Questions about {service.shortTitle || service.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Need something more specific? Tell us about your situation.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-muted"
          >
            Contact Accenor
          </Link>
        </div>
        <FaqAccordion items={service.faqs} />
      </Container>
    </section>
  );
}
