import { tickerItems } from "@/data/home";

export function ServiceTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <section
      aria-label="Service highlights"
      className="overflow-hidden bg-navy py-4 text-white"
    >
      <div className="flex marquee-track w-max gap-10 whitespace-nowrap px-4">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-10 text-sm font-medium tracking-wide"
          >
            {item}
            <span className="size-1.5 rounded-full bg-accent-green" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
