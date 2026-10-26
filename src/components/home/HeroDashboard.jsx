import { Calculator, Check, FileText } from "lucide-react";
import { homeHeroCards } from "@/data/home";

function TaxReturnsCard({ data }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-4 shadow-md shadow-navy/5 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-green text-white sm:size-11">
          <FileText className="size-4 sm:size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-navy sm:text-lg">{data.title}</h3>
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-[13px]">
            {data.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-accent-green-soft/80 p-3.5 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-muted">
          {data.yearLabel}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-navy sm:text-[15px]">
            {data.filingTitle}
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-green px-2 py-0.5 text-[10px] font-semibold text-white sm:text-[11px]">
            <Check className="size-3" strokeWidth={3} aria-hidden />
            {data.statusBadge}
          </span>
        </div>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {data.statusLabel}
        </p>
        <ol className="mt-2 grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-4 sm:gap-1">
          {data.steps.map((step) => (
            <li
              key={step}
              className="flex items-start gap-1.5 text-[10px] leading-snug text-navy/85 sm:flex-col sm:items-center sm:text-center sm:text-[11px]"
            >
              <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-green text-white sm:mt-0">
                <Check className="size-2.5" strokeWidth={3} aria-hidden />
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

function AccountingCard({ data }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-4 shadow-md shadow-navy/5 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:size-11">
          <Calculator className="size-4 sm:size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-navy sm:text-lg">{data.title}</h3>
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-[13px]">
            {data.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-accent-green-soft/80 p-3.5 sm:p-4">
        <p className="text-sm font-bold text-navy">{data.overviewTitle}</p>
        <p className="text-xs text-muted-foreground">{data.overviewSubtitle}</p>
        <p className="mt-2 text-[11px] font-semibold text-brand">
          {data.currencies}
          <span className="ml-1.5 font-normal text-muted-foreground">
            · {data.currencyNote}
          </span>
        </p>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white/80 px-2 py-2 text-center sm:px-2.5"
            >
              <p className="text-[10px] text-muted-foreground sm:text-[11px]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs font-bold tabular-nums text-navy sm:text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <div className="flex h-[72px] items-end justify-between gap-1 sm:h-[80px] sm:gap-1.5">
            {data.months.map((month) => (
              <div
                key={month.label}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div className="flex h-[56px] w-full items-end justify-center gap-0.5 sm:h-[64px]">
                  <span
                    className="w-1.5 rounded-t-sm bg-brand sm:w-2"
                    style={{ height: `${month.income}%` }}
                  />
                  <span
                    className="w-1.5 rounded-t-sm bg-[#a8c5ce] sm:w-2"
                    style={{ height: `${month.expense}%` }}
                  />
                </div>
                <span className="text-[9px] text-muted-foreground sm:text-[10px]">
                  {month.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function HeroDashboard() {
  const { tax, accounting, caption } = homeHeroCards;

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px]">
      <div className="flex flex-col gap-3.5 sm:gap-4">
        <TaxReturnsCard data={tax} />
        <AccountingCard data={accounting} />
      </div>
      <p className="mt-3 text-right text-[10px] text-muted-foreground sm:text-[11px]">
        {caption}
      </p>
    </div>
  );
}
