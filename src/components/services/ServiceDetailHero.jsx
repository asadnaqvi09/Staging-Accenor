import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { ServiceIcon } from "@/components/shared/ServiceIcon";

export function ServiceDetailHero({ service }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.shortTitle || service.title },
  ];

  return (
    <section className="page-hero relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,155,122,0.18)_0%,transparent_65%)]"
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} className="mb-5" />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-start gap-4">
              <ServiceIcon
                name={service.icon}
                className="mt-1 size-12 shrink-0 rounded-2xl bg-accent-green-soft text-brand sm:size-14"
                iconClassName="size-6"
              />
              <div>
                <p className="eyebrow">Service</p>
                <h1 className="mt-2 text-balance text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.heroDescription || service.summary}
            </p>
            {service.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-navy ring-1 ring-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-muted"
              >
                Discuss Your Requirements
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-5 text-sm font-semibold text-navy transition hover:bg-surface-muted"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
