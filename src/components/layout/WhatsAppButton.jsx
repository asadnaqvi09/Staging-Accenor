"use client";

import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({ className }) {
  if (!siteConfig.whatsapp.enabled) return null;

  const href = siteConfig.whatsapp.getHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Accenor Consulting on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6",
        className,
      )}
    >
      <WhatsAppIcon className="size-7" />
      {siteConfig.whatsapp.isTestNumber ? (
        <span className="sr-only">
          Using temporary test WhatsApp number for development
        </span>
      ) : null}
    </a>
  );
}
