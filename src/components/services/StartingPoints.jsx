import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getServiceHref } from "@/data/services";
import { servicesStartingPoints } from "@/data/servicesPage";

export function StartingPoints() {
  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <SectionHeader
          eyebrow={servicesStartingPoints.eyebrow}
          title={servicesStartingPoints.title}
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {servicesStartingPoints.items.map((item) => (
            <li
              key={item.slug}
              className="flex flex-col bg-white px-6 py-[26px]"
            >
              <h3 className="text-lg font-semibold leading-snug text-navy">
                {item.need}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                {item.linkPrefix}
                <Link
                  href={getServiceHref(item.slug)}
                  className="text-accent-green underline underline-offset-2 transition hover:text-brand"
                >
                  {item.linkLabel}
                </Link>
                .
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
