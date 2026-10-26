import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";

export function UtilityBar() {
  const { contact } = siteConfig;

  return (
    <div className="bg-navy text-white">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-1.5 text-[11px] sm:gap-x-6 sm:py-2 sm:text-[13px]">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-white sm:gap-2"
          >
            <Phone className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hidden min-w-0 items-center gap-2 text-white/90 transition hover:text-white sm:inline-flex"
          >
            <Mail className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span className="truncate sm:break-all sm:whitespace-normal">
              {contact.email}
            </span>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
          <span className="inline-flex items-center gap-1.5 text-white/85 sm:gap-2">
            <Clock3 className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.hoursShort}</span>
          </span>
          <span className="hidden items-center gap-2 text-white/85 lg:inline-flex">
            <MapPin className="size-3.5 shrink-0 opacity-80" aria-hidden />
            <span>{contact.addressShort}</span>
          </span>
        </div>
      </Container>
    </div>
  );
}
