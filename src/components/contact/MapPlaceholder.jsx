import { MapPinned } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactMapPlaceholder } from "@/data/contact";

export function MapPlaceholder() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dashed border-border bg-surface-muted">
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 px-6 py-10 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
          <MapPinned className="size-6" aria-hidden />
        </span>
        <div>
          <p className="text-base font-bold text-navy">
            {contactMapPlaceholder.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteConfig.contact.addressShort}
          </p>
          <p className="mt-3 inline-flex rounded-md bg-[#fff5db] px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-[#8a5a00]">
            {contactMapPlaceholder.note}
          </p>
        </div>
      </div>
    </div>
  );
}
