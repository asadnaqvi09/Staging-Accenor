"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { homeAbout } from "@/data/home";

function MiniCards() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-md sm:h-[380px]">
      <div className="absolute left-0 top-8 w-[48%] rounded-2xl border border-border bg-white p-4 shadow-md">
        <p className="text-xs font-semibold text-muted-foreground">Invoice</p>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-3/4 rounded bg-muted" />
          <div className="h-2 w-full rounded bg-muted" />
          <div className="h-2 w-2/3 rounded bg-muted" />
        </div>
      </div>
      <div className="absolute right-0 top-0 w-[44%] rounded-2xl border border-border bg-white p-4 shadow-md">
        <p className="text-center text-xs font-semibold text-muted-foreground">
          Expense split
        </p>
        <div className="mx-auto mt-3 size-20 rounded-full border-[10px] border-brand border-r-accent-green border-b-[#c5d8de]" />
      </div>
      <div className="absolute bottom-2 left-[18%] right-[8%] rounded-2xl border border-border bg-white p-5 shadow-lg">
        <p className="text-xs font-semibold text-muted-foreground">
          Trial balance
        </p>
        <p className="mt-1 text-lg font-bold text-navy">Sep 2026</p>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Assets</span>
            <span className="font-semibold text-navy">4,920,300</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Liabilities</span>
            <span className="font-semibold text-navy">1,210,450</span>
          </div>
          <div className="flex justify-between border-t border-border pt-2">
            <span className="text-muted-foreground">Equity</span>
            <span className="font-semibold text-accent-green">3,709,850</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad bg-white">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <MiniCards />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <p className="eyebrow">{homeAbout.eyebrow}</p>
          <h2 className="mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            {homeAbout.title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            {homeAbout.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {homeAbout.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-navy">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={homeAbout.cta.href}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-muted"
          >
            {homeAbout.cta.label}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
