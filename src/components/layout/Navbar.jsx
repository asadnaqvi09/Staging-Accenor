"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Logo({ onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group inline-flex shrink-0 items-center no-underline"
      aria-label="Accenor Consulting home"
    >
      <Image
        src="/icons/canvas.png"
        alt="Accenor Consulting"
        width={200}
        height={50}
        className="h-7 w-auto object-contain sm:h-8 md:h-9"
        priority
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  // Reset mobile menu when the route changes (preferred over effect setState).
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <Logo onClick={() => setOpen(false)} />

        <nav
          className="hidden items-center gap-0.5 xl:gap-1 lg:flex"
          aria-label="Main"
        >
          {siteConfig.nav.map((item) => {
            if (item.children) {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy/80 transition hover:bg-muted hover:text-navy",
                      isActive(item.href) && "bg-muted text-navy",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-70" aria-hidden />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[280px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block rounded-lg px-3 py-2.5 text-sm text-navy/80 transition hover:bg-muted hover:text-navy"
                        >
                          {service.navLabel}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="mt-1 block rounded-lg border-t border-border px-3 py-2.5 text-sm font-semibold text-brand"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-navy/80 transition hover:bg-muted hover:text-navy",
                  isActive(item.href) &&
                    "bg-muted text-navy underline decoration-accent-green decoration-2 underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.cta.href}
            className="hidden h-11 items-center justify-center rounded-xl bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-muted sm:inline-flex"
          >
            {siteConfig.cta.label}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-navy lg:hidden cursor-pointer"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-white lg:hidden"
        >
          <Container className="flex max-h-[calc(100dvh-110px)] flex-col gap-1 overflow-y-auto py-4">
            {siteConfig.nav.map((item) => {
              if (item.children) {
                return (
                  <div key={item.href} className="rounded-xl border border-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-navy"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {servicesOpen ? (
                      <div className="border-t border-border px-2 pb-2">
                        <Link
                          href="/services"
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand"
                          onClick={() => setOpen(false)}
                        >
                          All services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block rounded-lg px-3 py-2.5 text-sm text-navy/80"
                            onClick={() => setOpen(false)}
                          >
                            {service.navLabel}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold text-navy/80",
                    isActive(item.href) && "bg-muted text-navy",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={siteConfig.cta.href}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.label}
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
