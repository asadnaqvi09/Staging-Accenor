import Link from "next/link";
import { ArrowRight, CalendarDays, Coins, Wifi } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { homeRemote } from "@/data/home";

export function RemoteSupport() {
  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-5 sm:p-8 md:p-10 lg:p-12">
              <p className="eyebrow">{homeRemote.eyebrow}</p>
              <h2 className="mt-2 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                {homeRemote.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {homeRemote.description}
              </p>
              <ul className="mt-8 space-y-5">
                {homeRemote.features.map((feature) => (
                  <li key={feature.title}>
                    <h3 className="text-base font-bold text-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href={homeRemote.cta.href}
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-muted"
              >
                {homeRemote.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative border-t border-border bg-gradient-to-br from-accent-green-soft via-white to-[#e8f1f3] p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                {homeRemote.flow.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
                  >
                    <div className="w-full rounded-2xl border border-border bg-white px-4 py-4 text-center shadow-sm sm:w-auto sm:px-5">
                      <p className="text-sm font-bold text-navy">{step.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {step.detail}
                      </p>
                    </div>
                    {index === 0 ? (
                      <div
                        aria-hidden
                        className="hidden h-px w-10 border-t-2 border-dashed border-brand/40 sm:block"
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Wifi, ...homeRemote.highlights[0] },
                  { icon: Coins, ...homeRemote.highlights[1] },
                  { icon: CalendarDays, ...homeRemote.highlights[2] },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/80 bg-white/80 p-4 text-center"
                  >
                    <item.icon
                      className="mx-auto size-5 text-brand"
                      aria-hidden
                    />
                    <p className="mt-2 text-sm font-bold text-navy">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
