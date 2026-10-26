import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { homeProcess } from "@/data/home";

export function ProcessSteps() {
  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <SectionHeader
          eyebrow={homeProcess.eyebrow}
          title={homeProcess.title}
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {homeProcess.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative min-w-0 rounded-2xl border border-border bg-white p-4 sm:p-5"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-accent-green">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {index < homeProcess.steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border xl:block"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
