import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import { getServiceHref } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, featured = false, className }) {
  return (
    <Link
      href={getServiceHref(service.slug)}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-0.5",
        featured
          ? "gradient-brand-card border-transparent text-white shadow-lg"
          : "border-border bg-white text-navy shadow-sm hover:shadow-md",
        className,
      )}
    >
      {!featured ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-[radial-gradient(circle,rgba(47,155,122,0.12)_0%,transparent_70%)]"
        />
      ) : null}
      <ServiceIcon
        name={service.icon}
        className={cn(
          featured && "bg-white/15 text-white",
          !featured && "bg-accent-green-soft text-brand",
        )}
      />
      <h3
        className={cn(
          "mt-5 text-xl font-bold",
          featured ? "text-white" : "text-navy",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          featured ? "text-white/80" : "text-muted-foreground",
        )}
      >
        {service.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              featured
                ? "bg-white/12 text-white"
                : "bg-surface-muted text-navy/80",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
          featured ? "text-white" : "text-brand",
        )}
      >
        Learn more
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
