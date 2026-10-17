import { Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ServiceCoverage({ service }) {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)] lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="What's covered"
              title="What this service includes."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface-muted/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-surface-muted p-6 sm:p-7 lg:sticky lg:top-28">
            <p className="eyebrow">Suitable for</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">
              Who typically uses this service.
            </h2>
            <ul className="mt-5 space-y-3">
              {service.suitableFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-navy"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-green" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
