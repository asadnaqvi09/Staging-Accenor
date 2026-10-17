import { escapeHtml } from "@/lib/email/escape-html";
import { siteConfig } from "@/config/site";

// Staff notification — new website enquiry.
export function buildInquiryNotificationEmail({
  fullName,
  email,
  phone,
  serviceLabel,
  message,
  inquiryId,
  submittedAt,
}) {
  const safe = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(email),
    phone: escapeHtml(phone || "—"),
    serviceLabel: escapeHtml(serviceLabel),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
    inquiryId: escapeHtml(inquiryId),
    submittedAt: escapeHtml(submittedAt),
    brand: escapeHtml(siteConfig.name),
  };

  const subject = `[${siteConfig.shortName}] New enquiry — ${fullName}`;

  const text = [
    `New enquiry from ${siteConfig.name}`,
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Service: ${serviceLabel}`,
    `Submitted: ${submittedAt}`,
    `Reference: ${inquiryId}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "This message was sent from the Accenor Consulting website contact form.",
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Manrope,Segoe UI,Helvetica,Arial,sans-serif;color:#0f1b2d;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#0b3d5c;padding:20px 28px;">
              <p style="margin:0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#9fd4f0;">${safe.brand}</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">New website enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155;">
                A visitor submitted the contact form. Details are below — reply directly to their email address.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:13px;color:#64748b;width:120px;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:14px;color:#0f1b2d;font-weight:600;">${safe.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:13px;color:#64748b;">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:14px;">
                    <a href="mailto:${safe.email}" style="color:#0b6e99;text-decoration:none;">${safe.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:13px;color:#64748b;">Phone</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:14px;color:#0f1b2d;">${safe.phone}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:13px;color:#64748b;">Service</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:14px;color:#0f1b2d;">${safe.serviceLabel}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:13px;color:#64748b;">Submitted</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef2f6;font-size:14px;color:#0f1b2d;">${safe.submittedAt}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;font-size:13px;color:#64748b;">Reference</td>
                  <td style="padding:10px 0;font-size:13px;color:#64748b;font-family:ui-monospace,Consolas,monospace;">${safe.inquiryId}</td>
                </tr>
              </table>
              <div style="margin-top:24px;padding:16px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;font-weight:700;">Message</p>
                <p style="margin:0;font-size:14px;line-height:1.7;color:#0f1b2d;">${safe.message}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid #eef2f6;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">
                Sent automatically from the ${safe.brand} website. Do not forward untrusted links from the message body.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
