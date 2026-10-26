import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { contactWhatsAppPanel } from "@/data/contact";

export function ContactWhatsAppPanel() {
  if (!siteConfig.whatsapp.enabled) return null;

  return (
    <section className="border-b border-border bg-surface-muted">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm sm:gap-6 sm:p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex min-w-0 gap-3 sm:gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f8ef] text-[#25D366] sm:size-12">
              <WhatsAppIcon className="size-5 sm:size-6" />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{contactWhatsAppPanel.eyebrow}</p>
              <h2 className="mt-1 text-lg font-bold text-navy sm:text-xl md:text-2xl">
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
            className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:bg-[#1ebe57] sm:h-12 md:w-auto"
          >
            <WhatsAppIcon className="size-4" />
            {contactWhatsAppPanel.ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
