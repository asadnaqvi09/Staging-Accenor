import { Container } from "@/components/shared/Container";
import { aboutWhoWeAre } from "@/data/about";

export function WhoWeAre() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">{aboutWhoWeAre.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            {aboutWhoWeAre.title}
          </h2>
        </div>
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-navy/90 sm:text-[17px]">
            {aboutWhoWeAre.paragraphs[0]}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {aboutWhoWeAre.paragraphs[1]}
          </p>
          {aboutWhoWeAre.pendingNote ? (
            <p className="inline-flex rounded-md bg-[#fff5db] px-2 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.04em] text-[#8a5a00]">
              {aboutWhoWeAre.pendingNote}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
