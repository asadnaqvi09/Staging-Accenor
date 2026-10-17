import { Inquiry } from "@/models/Inquiry";

// Persistence layer for contact enquiries.
export async function createInquiry(payload) {
  const doc = await Inquiry.create(payload);
  return doc;
}

export async function updateInquiryEmailStatus(id, emailStatus) {
  return Inquiry.findByIdAndUpdate(
    id,
    { $set: { emailStatus } },
    { new: true },
  ).lean();
}
