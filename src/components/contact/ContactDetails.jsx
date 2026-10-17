import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/config/site";

function LinkedInMark({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  );
}

function DetailRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-green-soft text-brand">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-1 text-sm font-medium leading-relaxed text-navy">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactDetails() {
  const { contact, social } = siteConfig;

  return (
    <aside className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-7">
      <p className="eyebrow">Contact details</p>
      <h2 className="mt-2 text-2xl font-bold text-navy">Reach Accenor directly.</h2>
      <ul className="mt-6 space-y-5">
        <li>
          <DetailRow icon={Phone} label="Phone">
            <a
              href={`tel:${contact.phoneTel}`}
              className="transition hover:text-brand"
            >
              {contact.phoneDisplay}
            </a>
          </DetailRow>
        </li>
        <li>
          <DetailRow icon={Mail} label="Email">
            <a
              href={`mailto:${contact.email}`}
              className="break-all transition hover:text-brand"
            >
              {contact.email}
            </a>
          </DetailRow>
        </li>
        {siteConfig.whatsapp.enabled ? (
          <li>
            <DetailRow icon={WhatsAppIcon} label="WhatsApp">
              <a
                href={siteConfig.whatsapp.getHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand"
              >
                {siteConfig.whatsapp.phoneDisplay}
              </a>
            </DetailRow>
          </li>
        ) : null}
        <li>
          <DetailRow icon={MapPin} label="Office">
            {contact.addressFull}
          </DetailRow>
        </li>
        <li>
          <DetailRow icon={Clock3} label="Business hours">
            {contact.hoursDisplay}
          </DetailRow>
        </li>
        <li>
          <DetailRow icon={LinkedInMark} label="LinkedIn">
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand"
              >
                Accenor Consulting
              </a>
            ) : (
              <span className="font-normal text-muted-foreground">
                {social.linkedinStatus}
              </span>
            )}
          </DetailRow>
        </li>
      </ul>
    </aside>
  );
}
