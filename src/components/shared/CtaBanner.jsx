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
        <div className="gradient-cta relative overflow-hidden rounded-2xl px-5 py-8 text-white sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl min-w-0">
              <h2 className="text-balance text-xl font-bold text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-3 text-sm text-white/80 sm:text-base md:text-lg">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-navy transition hover:bg-white/90 sm:h-12 sm:w-auto"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/40 px-5 text-sm font-semibold text-white transition hover:bg-white/10 sm:h-12 sm:w-auto"
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
