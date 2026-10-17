import { Check, FileText } from "lucide-react";

const months = [
  { label: "Apr", income: 68, expense: 48 },
  { label: "May", income: 77, expense: 55 },
  { label: "Jun", income: 64, expense: 52 },
  { label: "Jul", income: 84, expense: 57 },
  { label: "Aug", income: 92, expense: 61 },
  { label: "Sep", income: 100, expense: 66 },
];

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute -right-2 -top-3 z-20 w-[min(100%,270px)] rounded-2xl border border-border bg-white p-3 shadow-lg sm:-right-1 sm:top-0">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-green-soft text-accent-green">
            <FileText className="size-4" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">Tax year 2026</p>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              Income tax return · in preparation
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-accent-green" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 rounded-3xl border border-border bg-white p-5 shadow-xl shadow-navy/10 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-bold text-navy">Monthly overview</p>
            <p className="text-sm text-muted-foreground">Sep 2026 · PKR</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green-soft px-2.5 py-1 text-xs font-semibold text-accent-green">
            <span className="size-1.5 rounded-full bg-accent-green" />
            Books up to date
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Income", value: "2,480,000" },
            { label: "Expenses", value: "1,615,000" },
            { label: "Net", value: "865,000" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface-muted px-2.5 py-3 sm:px-3"
            >
              <p className="text-[11px] text-muted-foreground sm:text-xs">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-bold text-navy sm:text-base">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex h-[110px] items-end justify-between gap-1.5 sm:gap-2">
            {months.map((month) => (
              <div
                key={month.label}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div className="flex h-[90px] w-full items-end justify-center gap-0.5">
                  <span
                    className="w-2 rounded-t-sm bg-brand sm:w-2.5"
                    style={{ height: `${month.income}%` }}
                  />
                  <span
                    className="w-2 rounded-t-sm bg-[#c5d8de] sm:w-2.5"
                    style={{ height: `${month.expense}%` }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {month.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2.5 rounded-sm bg-brand" /> Income
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2.5 rounded-sm bg-[#c5d8de]" /> Expenses
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-border pt-4 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="flex-1 text-navy/90">Bank accounts reconciled</span>
            <span className="hidden text-xs font-semibold text-muted-foreground sm:inline">
              PKR · DKK · EUR
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="text-navy/90">Payables and receivables reviewed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="text-navy/90">Management report shared</span>
          </li>
        </ul>
      </div>

      <div className="absolute -bottom-2 left-2 z-20 flex w-[min(100%,220px)] items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-lg sm:left-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-green text-white">
          <Check className="size-5" strokeWidth={3} />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy">NTN registration</p>
          <p className="text-xs text-muted-foreground">Documents submitted</p>
        </div>
      </div>

      <p className="mt-8 text-right text-[11px] text-muted-foreground sm:mt-6">
        Illustrative example · not client data
      </p>
    </div>
  );
}
