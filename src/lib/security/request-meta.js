// Extract client IP from common proxy headers (Vercel / Render).
// Prefer the first hop in x-forwarded-for; never trust blindly for auth —
// only used for soft rate limiting and inquiry metadata.
export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim().slice(0, 64);

  return "unknown";
}

export function getUserAgent(request) {
  return (request.headers.get("user-agent") || "").slice(0, 512);
}
