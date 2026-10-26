import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { aboutAudiences } from "@/data/about";

export function WhoWeServe() {
  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <SectionHeader
          eyebrow={aboutAudiences.eyebrow}
          title={aboutAudiences.title}
          description={aboutAudiences.description}
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {aboutAudiences.items.map((item) => (
            <li
              key={item.title}
              className="min-w-0 border-t-2 border-accent-green pt-4"
            >
              <h3 className="text-base font-bold leading-snug text-navy sm:text-[17px]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
