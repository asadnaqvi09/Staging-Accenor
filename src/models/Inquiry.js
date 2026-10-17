import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 40,
      default: "",
    },
    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    // Request metadata for abuse review (never shown to visitors).
    meta: {
      ip: { type: String, default: "" },
      userAgent: { type: String, default: "", maxlength: 512 },
    },
    // Track outbound mail without blocking the enquiry if email fails.
    emailStatus: {
      staffNotified: { type: Boolean, default: false },
      autoReplySent: { type: Boolean, default: false },
      lastError: { type: String, default: "" },
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "closed"],
      default: "new",
      index: true,
    },
  },
  {
    timestamps: true,
    collection: "inquiries",
  },
);

inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ email: 1, createdAt: -1 });

export const Inquiry =
  mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);
