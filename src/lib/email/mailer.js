import { Resend } from "resend";
import { siteConfig } from "@/config/site";

let resendClient = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

function getFromAddress() {
  const email =
    process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const name = process.env.CONTACT_FROM_NAME || siteConfig.name;
  // Resend format: "Name <email@domain>"
  return `${name} <${email}>`;
}

function getStaffInbox() {
  return (
    process.env.CONTACT_TO_EMAIL ||
    siteConfig.contact.email ||
    ""
  );
}

// Send a single transactional email via Resend (free tier friendly).
// Throws on provider/config errors — caller decides whether to fail the request.
export async function sendEmail({ to, subject, html, text, replyTo }) {
  const resend = getResend();

  const { data, error } = await resend.emails.send({
    from: getFromAddress(),
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message || "Email provider rejected the message.");
  }

  return data;
}

export function shouldSendAutoReply() {
  const flag = (process.env.SEND_INQUIRY_AUTO_REPLY || "true").toLowerCase();
  return flag === "true" || flag === "1" || flag === "yes";
}

export { getStaffInbox };
