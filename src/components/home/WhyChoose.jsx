import {
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Globe2,
  Handshake,
  Layers3,
  Lock,
  MessageSquareText,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { homeWhyChoose } from "@/data/home";

const icons = [
  Handshake,
  Layers3,
  ClipboardCheck,
  Globe2,
  MessageSquareText,
  Lock,
  Clock3,
  FileCheck2,
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeader
          eyebrow={homeWhyChoose.eyebrow}
          title={homeWhyChoose.title}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhyChoose.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-surface-muted/60 p-5 transition hover:bg-white hover:shadow-sm"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-green-soft text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
