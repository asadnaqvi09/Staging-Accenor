import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
