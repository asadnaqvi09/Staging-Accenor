import { Container } from "@/components/shared/Container";
import { aboutMissionVision } from "@/data/about";

export function MissionVision() {
  const { mission, vision } = aboutMissionVision;

  return (
    <section className="section-pad bg-surface-muted">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="gradient-brand-card rounded-[10px] p-8 text-white shadow-sm sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9fe0da]">
              {mission.eyebrow}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {mission.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
              {mission.description}
            </p>
          </article>

          <article className="rounded-[10px] border border-border bg-white p-8 shadow-sm sm:p-9">
            <p className="eyebrow">{vision.eyebrow}</p>
            <h3 className="mt-3 text-xl font-semibold text-navy">
              {vision.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy/85 sm:text-lg">
              {vision.description}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
