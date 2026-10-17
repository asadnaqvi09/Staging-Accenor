import { escapeHtml } from "@/lib/email/escape-html";
import { siteConfig } from "@/config/site";

// Visitor confirmation — polite auto-reply (quota-sensitive; toggle via env).
export function buildInquiryAutoReplyEmail({ fullName, serviceLabel }) {
  const { contact, name, shortName } = siteConfig;
  const safeName = escapeHtml(fullName);
  const safeService = escapeHtml(serviceLabel);
  const brand = escapeHtml(name);

  const subject = `We received your enquiry — ${shortName}`;

  const text = [
    `Dear ${fullName},`,
    "",
    `Thank you for contacting ${name}. We have received your enquiry regarding ${serviceLabel}.`,
    "",
    `Our team typically responds during business hours (${contact.hoursDisplay}).`,
    "",
    "If your matter is urgent, you can also reach us on:",
    `Phone: ${contact.phoneDisplay}`,
    `Email: ${contact.email}`,
    "",
    "Kind regards,",
    name,
    contact.addressShort,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Enquiry received</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Manrope,Segoe UI,Helvetica,Arial,sans-serif;color:#0f1b2d;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#0b3d5c;padding:20px 28px;">
              <p style="margin:0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#9fd4f0;">${brand}</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">We received your enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
                Dear ${safeName},
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
                Thank you for contacting <strong style="color:#0f1b2d;">${brand}</strong>.
                We have received your enquiry regarding <strong style="color:#0f1b2d;">${safeService}</strong>
                and will follow up with next steps.
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#334155;">
                Our team typically responds during business hours
                (<strong style="color:#0f1b2d;">${escapeHtml(contact.hoursDisplay)}</strong>).
              </p>
              <div style="padding:16px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;font-weight:700;">Need a faster reply?</p>
                <p style="margin:0;font-size:14px;line-height:1.7;color:#0f1b2d;">
                  Phone: <a href="tel:${escapeHtml(contact.phoneTel)}" style="color:#0b6e99;text-decoration:none;">${escapeHtml(contact.phoneDisplay)}</a><br />
                  Email: <a href="mailto:${escapeHtml(contact.email)}" style="color:#0b6e99;text-decoration:none;">${escapeHtml(contact.email)}</a>
                </p>
              </div>
              <p style="margin:24px 0 0;font-size:15px;line-height:1.7;color:#334155;">
                Kind regards,<br />
                <strong style="color:#0f1b2d;">${brand}</strong><br />
                <span style="color:#64748b;font-size:13px;">${escapeHtml(contact.addressShort)}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid #eef2f6;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">
                This is an automated confirmation. Please do not reply with sensitive financial documents to this notice alone — wait for our team’s follow-up.
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
