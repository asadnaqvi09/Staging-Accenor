import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import { services } from "@/data/services";

export function ServiceShortcuts() {
  return (
    <section className="relative z-10 -mt-4 pb-4 sm:-mt-6">
      <Container>
        <nav aria-label="Service shortcuts">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                >
                  <ServiceIcon name={service.icon} />
                  <span className="text-sm font-semibold leading-snug text-navy">
                    {service.shortcutLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
