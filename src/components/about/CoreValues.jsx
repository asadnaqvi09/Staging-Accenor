import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { aboutValues } from "@/data/about";

export function CoreValues() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader eyebrow={aboutValues.eyebrow} title={aboutValues.title} />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {aboutValues.items.map((item) => (
            <li key={item.title} className="bg-white p-5 sm:p-[22px]">
              <h3 className="text-[17px] font-bold text-navy">{item.title}</h3>
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
