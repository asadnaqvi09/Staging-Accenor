import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}) {
  return (
    <section className={cn("section-pad", className)}>
      <Container>
        <div className="gradient-cta relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-3 text-base text-white/80 sm:text-lg">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-navy transition hover:bg-white/90"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
