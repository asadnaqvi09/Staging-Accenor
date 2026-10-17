import Link from "next/link";
import { Construction } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function InProgressPage({
  title,
  description = "This page is in progress and will be published once the content is approved.",
}) {
  return (
    <section className="section-pad">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-accent-green-soft text-brand">
          <Construction className="size-7" aria-hidden />
        </span>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border px-5 text-sm font-semibold text-navy"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
