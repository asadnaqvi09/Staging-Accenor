import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
  children,
}) {
  return (
    <section
      className={cn(
        "page-hero relative overflow-hidden border-b border-border",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,155,122,0.18)_0%,transparent_65%)]"
      />
      <Container className="relative py-10 sm:py-14 lg:py-16 xl:py-20">
        {breadcrumbs?.length ? (
          <Breadcrumbs items={breadcrumbs} className="mb-5" />
        ) : null}
        <div className="max-w-3xl xl:max-w-4xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-balance text-[1.85rem] font-bold leading-tight tracking-tight text-navy sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
