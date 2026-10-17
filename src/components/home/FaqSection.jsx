import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { homeFaqs } from "@/data/home";

export function FaqSection() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Can&apos;t find what you need? Send us your question.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-muted"
          >
            Contact Accenor
          </Link>
        </div>
        <FaqAccordion items={homeFaqs} />
      </Container>
    </section>
  );
}
