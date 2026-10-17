import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";

export function UtilityBar() {
  const { contact } = siteConfig;

  return (
    <div className="bg-navy text-white">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 text-xs sm:text-[13px]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
          >
            <Phone className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
          >
            <Mail className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span className="break-all">{contact.email}</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-2 text-white/85">
            <Clock3 className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.hoursShort}</span>
          </span>
          <span className="hidden items-center gap-2 text-white/85 md:inline-flex">
            <MapPin className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.addressShort}</span>
          </span>
        </div>
      </Container>
    </div>
  );
}
