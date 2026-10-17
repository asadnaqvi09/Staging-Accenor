"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormIntro,
  contactServiceOptions,
} from "@/data/contact";
import {
  inquiryDefaultValues,
  inquiryFormSchema,
} from "@/lib/validations/inquiry.schema";
import { cn } from "@/lib/utils";

const fieldClassName =
  "mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-navy shadow-sm outline-none transition placeholder:text-muted-foreground/80 focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60";

const labelClassName = "text-sm font-semibold text-navy";

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: inquiryDefaultValues,
  });

  async function onSubmit(values) {
    setSubmitState(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          phone: values.phone || "",
          service: values.service,
          message: values.message,
          // Honeypot — empty for humans; bots that fill it are ignored server-side.
          website: values.website || "",
        }),
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok || !payload?.success) {
        setSubmitState({
          type: "error",
          message:
            payload?.error ||
            "We could not send your enquiry. Please try again or use WhatsApp.",
        });
        return;
      }

      setSubmitState({
        type: "success",
        message:
          payload?.data?.message ||
          "Thank you. Your enquiry has been received. We will respond during business hours.",
      });
      reset(inquiryDefaultValues);
    } catch {
      setSubmitState({
        type: "error",
        message:
          "Network error while sending your enquiry. Please check your connection or reach us on WhatsApp.",
      });
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <p className="eyebrow">{contactFormIntro.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
        {contactFormIntro.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {contactFormIntro.description}
      </p>

      <form
        className="relative mt-6 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div
          // Honeypot — hidden from users; leave empty.
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div>
          <label htmlFor="fullName" className={labelClassName}>
            Full name <span className="text-destructive">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={cn(fieldClassName, errors.fullName && "border-destructive")}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClassName}>
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={cn(fieldClassName, errors.email && "border-destructive")}
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClassName}>
              Phone <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className={cn(fieldClassName, errors.phone && "border-destructive")}
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
            <FieldError message={errors.phone?.message} />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClassName}>
            Service area <span className="text-destructive">*</span>
          </label>
          <select
            id="service"
            className={cn(fieldClassName, errors.service && "border-destructive")}
            aria-invalid={Boolean(errors.service)}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError message={errors.service?.message} />
        </div>

        <div>
          <label htmlFor="message" className={labelClassName}>
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={cn(
              fieldClassName,
              "resize-y min-h-[120px]",
              errors.message && "border-destructive",
            )}
            aria-invalid={Boolean(errors.message)}
            placeholder="Briefly describe your situation, deadlines or questions."
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        {submitState ? (
          <div
            className={cn(
              "rounded-xl border px-4 py-3 text-sm leading-relaxed",
              submitState.type === "success"
                ? "border-[#cfe8dc] bg-accent-green-soft text-navy"
                : "border-destructive/30 bg-destructive/10 text-destructive",
            )}
            role="status"
          >
            {submitState.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-muted disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </div>
  );
}
