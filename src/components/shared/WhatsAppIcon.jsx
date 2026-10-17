import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

// Official WhatsApp brand glyph (react-icons / Font Awesome free brands).
export function WhatsAppIcon({ className, ...props }) {
  return (
    <FaWhatsapp
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    />
  );
}
