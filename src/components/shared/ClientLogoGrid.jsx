import Image from "next/image";
import { cn } from "@/lib/utils";

export function ClientLogoGrid({
  clients,
  pendingNote,
  className,
  gridClassName,
}) {
  return (
    <div className={className}>
      {pendingNote ? (
        <p className="mb-8 inline-flex rounded-md bg-[#fff5db] px-3 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.04em] text-[#8a5a00]">
          {pendingNote}
        </p>
      ) : null}

      <ul
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
          gridClassName,
        )}
      >
        {clients.map((client) => (
          <li
            key={client.id}
            className="flex min-h-[104px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white px-4 py-6 text-center shadow-sm"
          >
            {client.logoSrc && !client.placeholder ? (
              <Image
                src={client.logoSrc}
                alt={client.alt || client.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <span className="text-xs font-bold tracking-wide text-navy/70">
                  {client.name}
                </span>
                <span className="mt-1 max-w-[150px] text-[11px] leading-snug text-muted-foreground">
                  Logo placeholder awaiting approval
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
