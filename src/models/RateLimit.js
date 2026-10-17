import mongoose from "mongoose";

// Mongo-backed rate limit counters (no Redis).
// Documents expire via TTL so old windows self-clean.
const rateLimitSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    count: {
      type: Number,
      default: 0,
      min: 0,
    },
    // TTL index field — MongoDB deletes the doc after expiresAt.
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: false,
    collection: "rate_limits",
  },
);

rateLimitSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const RateLimit =
  mongoose.models.RateLimit || mongoose.model("RateLimit", rateLimitSchema);
