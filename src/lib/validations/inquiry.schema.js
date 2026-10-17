import { z } from "zod";
import { contactServiceOptions } from "@/data/contact";

const allowedServices = contactServiceOptions.map((option) => option.value);

// Shared inquiry schema — Contact form (client) + POST /api/inquiries (server).
export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long.")
    .optional()
    .transform((value) => value ?? ""),
  service: z
    .string()
    .min(1, "Please select a service area.")
    .refine((value) => allowedServices.includes(value), {
      message: "Please select a valid service area.",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (at least 10 characters).")
    .max(2000, "Message is too long."),
});

// Client form schema includes honeypot `website` (must stay empty).
// Server validates business fields via inquiryApiSchema after honeypot check.
export const inquiryFormSchema = inquirySchema.extend({
  website: z.string().max(200).optional().default(""),
});

export const inquiryApiSchema = inquirySchema;

export function isHoneypotTriggered(body) {
  const bait = body?.website;
  return typeof bait === "string" && bait.trim().length > 0;
}

export const inquiryDefaultValues = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  // Honeypot — must stay empty; bots often autofill "website".
  website: "",
};
