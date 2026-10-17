import { apiError } from "@/lib/api/response";
import { createInquiryHandler } from "@/controllers/inquiry.controller";

// Contact form only needs POST — reject other methods explicitly.
// (No `runtime` export — incompatible with nextConfig.cacheComponents.)
export async function POST(request) {
  return createInquiryHandler(request);
}

export async function GET() {
  return apiError("Method not allowed.", 405);
}

export async function PUT() {
  return apiError("Method not allowed.", 405);
}

export async function PATCH() {
  return apiError("Method not allowed.", 405);
}

export async function DELETE() {
  return apiError("Method not allowed.", 405);
}
