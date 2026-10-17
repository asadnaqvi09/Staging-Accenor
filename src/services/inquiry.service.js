import { contactServiceOptions } from "@/data/contact";
import { buildInquiryAutoReplyEmail } from "@/lib/email/templates/inquiry-auto-reply";
import { buildInquiryNotificationEmail } from "@/lib/email/templates/inquiry-notification";
import {
  getStaffInbox,
  sendEmail,
  shouldSendAutoReply,
} from "@/lib/email/mailer";
import {
  createInquiry,
  updateInquiryEmailStatus,
} from "@/repositories/inquiry.repository";

function resolveServiceLabel(serviceValue) {
  const match = contactServiceOptions.find((o) => o.value === serviceValue);
  return match?.label || serviceValue;
}

// Persist enquiry, then attempt staff notification (+ optional auto-reply).
// Email failure after a successful save does not roll back the enquiry —
// the website still confirms receipt; staff can review records in MongoDB.
export async function submitInquiry({ values, meta }) {
  const serviceLabel = resolveServiceLabel(values.service);

  const inquiry = await createInquiry({
    fullName: values.fullName,
    email: values.email.toLowerCase(),
    phone: values.phone || "",
    service: values.service,
    message: values.message,
    meta: {
      ip: meta.ip || "",
      userAgent: meta.userAgent || "",
    },
  });

  const submittedAt = new Date(inquiry.createdAt).toLocaleString("en-PK", {
    timeZone: "Asia/Karachi",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const emailStatus = {
    staffNotified: false,
    autoReplySent: false,
    lastError: "",
  };

  const staffTo = getStaffInbox();
  const notification = buildInquiryNotificationEmail({
    fullName: values.fullName,
    email: values.email,
    phone: values.phone,
    serviceLabel,
    message: values.message,
    inquiryId: String(inquiry._id),
    submittedAt,
  });

  try {
    if (!staffTo) {
      throw new Error("CONTACT_TO_EMAIL is not configured.");
    }

    await sendEmail({
      to: staffTo,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      // Staff can reply straight to the visitor.
      replyTo: values.email,
    });
    emailStatus.staffNotified = true;
  } catch (err) {
    console.error("[inquiry] staff notification failed:", err?.message || err);
    emailStatus.lastError = String(err?.message || "Staff email failed");
  }

  // Auto-reply doubles free-tier usage — controlled by SEND_INQUIRY_AUTO_REPLY.
  if (shouldSendAutoReply()) {
    try {
      const autoReply = buildInquiryAutoReplyEmail({
        fullName: values.fullName,
        serviceLabel,
      });

      await sendEmail({
        to: values.email,
        subject: autoReply.subject,
        html: autoReply.html,
        text: autoReply.text,
      });
      emailStatus.autoReplySent = true;
    } catch (err) {
      console.error("[inquiry] auto-reply failed:", err?.message || err);
      emailStatus.lastError = [
        emailStatus.lastError,
        String(err?.message || "Auto-reply failed"),
      ]
        .filter(Boolean)
        .join(" | ");
    }
  }

  try {
    await updateInquiryEmailStatus(inquiry._id, emailStatus);
  } catch (err) {
    // Non-fatal — enquiry already exists.
    console.error("[inquiry] email status update failed:", err?.message || err);
  }

  return {
    id: String(inquiry._id),
    emailStatus: {
      staffNotified: emailStatus.staffNotified,
      autoReplySent: emailStatus.autoReplySent,
    },
  };
}
