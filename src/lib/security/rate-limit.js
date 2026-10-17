import { RateLimit } from "@/models/RateLimit";

// Increment a MongoDB rate-limit counter for `key` inside a time window.
// No Redis — works on Vercel/Render free tiers with the existing MongoDB.
// Returns { allowed, remaining, retryAfterMs, count }.
export async function enforceRateLimit({
  key,
  max = Number(process.env.INQUIRY_RATE_LIMIT_MAX || 5),
  windowMs = Number(process.env.INQUIRY_RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000),
}) {
  const now = new Date();
  const nextExpiry = new Date(now.getTime() + windowMs);

  let doc = await RateLimit.findOne({ key }).lean();

  if (!doc || new Date(doc.expiresAt) <= now) {
    // New window (or expired) — reset counter atomically by key.
    doc = await RateLimit.findOneAndUpdate(
      { key },
      { $set: { count: 1, expiresAt: nextExpiry } },
      { upsert: true, new: true },
    );
  } else {
    doc = await RateLimit.findOneAndUpdate(
      { key, expiresAt: { $gt: now } },
      { $inc: { count: 1 } },
      { new: true },
    );

    // Rare race: window expired between read and update — start fresh.
    if (!doc) {
      doc = await RateLimit.findOneAndUpdate(
        { key },
        { $set: { count: 1, expiresAt: nextExpiry } },
        { upsert: true, new: true },
      );
    }
  }

  const count = doc?.count ?? 1;
  const allowed = count <= max;
  const remaining = Math.max(0, max - count);
  const retryAfterMs = Math.max(
    0,
    (doc?.expiresAt ? new Date(doc.expiresAt).getTime() : now.getTime()) -
      now.getTime(),
  );

  return { allowed, remaining, retryAfterMs, count };
}
