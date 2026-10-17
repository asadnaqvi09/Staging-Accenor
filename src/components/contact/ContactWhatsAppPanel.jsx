import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { contactWhatsAppPanel } from "@/data/contact";

export function ContactWhatsAppPanel() {
  if (!siteConfig.whatsapp.enabled) return null;

  return (
    <section className="border-b border-border bg-surface-muted">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8ef] text-[#25D366]">
              <WhatsAppIcon className="size-6" />
            </span>
            <div>
              <p className="eyebrow">{contactWhatsAppPanel.eyebrow}</p>
              <h2 className="mt-1 text-xl font-bold text-navy sm:text-2xl">
                {contactWhatsAppPanel.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {contactWhatsAppPanel.description}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">
                {siteConfig.whatsapp.phoneDisplay}
              </p>
            </div>
          </div>
          <a
            href={siteConfig.whatsapp.getHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
          >
            <WhatsAppIcon className="size-4" />
            {contactWhatsAppPanel.ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
