import { apiError, apiSuccess } from "@/lib/api/response";
import { connectMongo } from "@/lib/mongodb";
import { enforceRateLimit } from "@/lib/security/rate-limit";
import { getClientIp, getUserAgent } from "@/lib/security/request-meta";
import {
  inquiryApiSchema,
  isHoneypotTriggered,
} from "@/lib/validations/inquiry.schema";
import { submitInquiry } from "@/services/inquiry.service";

const MAX_BODY_BYTES = 32_768; // Soft cap — enquiry payloads are small.

// Handle POST /api/inquiries
export async function createInquiryHandler(request) {
  // Content-Length guard (best-effort; still parse carefully below).
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return apiError("Request body is too large.", 413);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return apiError("Invalid JSON body.", 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return apiError("Invalid request payload.", 400);
  }

  // Silent success for bots that fill the honeypot — avoid teaching scrapers.
  if (isHoneypotTriggered(body)) {
    return apiSuccess({
      id: null,
      message: "Thank you. Your enquiry has been received.",
    });
  }

  const parsed = inquiryApiSchema.safeParse(body);
  if (!parsed.success) {
    const first =
      parsed.error.issues?.[0]?.message || "Please check the form fields.";
    return apiError(first, 422, {
      fields: parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const ip = getClientIp(request);
  const userAgent = getUserAgent(request);

  try {
    await connectMongo();
  } catch (err) {
    console.error("[inquiry] database connection failed:", err?.message || err);
    return apiError(
      "Unable to save your enquiry right now. Please try WhatsApp, phone or email.",
      503,
    );
  }

  // Rate limit by IP and by email (Mongo-backed, no Redis).
  try {
    const ipLimit = await enforceRateLimit({ key: `inquiry:ip:${ip}` });
    if (!ipLimit.allowed) {
      return apiError(
        "Too many enquiries from this network. Please try again later or contact us on WhatsApp.",
        429,
      );
    }

    const emailKey = parsed.data.email.toLowerCase();
    const emailLimit = await enforceRateLimit({
      key: `inquiry:email:${emailKey}`,
      max: Number(process.env.INQUIRY_EMAIL_RATE_LIMIT_MAX || 3),
    });
    if (!emailLimit.allowed) {
      return apiError(
        "Too many enquiries from this email address. Please try again later.",
        429,
      );
    }
  } catch (err) {
    // If rate-limit store fails, continue but log — availability over hard block.
    console.error("[inquiry] rate limit check failed:", err?.message || err);
  }

  try {
    const result = await submitInquiry({
      values: parsed.data,
      meta: { ip, userAgent },
    });

    return apiSuccess(
      {
        id: result.id,
        message:
          "Thank you. Your enquiry has been received. We will respond during business hours.",
        email: result.emailStatus,
      },
      201,
    );
  } catch (err) {
    console.error("[inquiry] submit failed:", err?.message || err);
    return apiError(
      "We could not save your enquiry. Please try again or reach us on WhatsApp.",
      500,
    );
  }
}
