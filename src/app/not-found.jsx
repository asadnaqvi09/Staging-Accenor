import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main className="flex-1">
        <section className="section-pad">
          <Container className="max-w-xl text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
            <p className="mt-4 text-muted-foreground">
              The page you are looking for does not exist or has not been
              published yet.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white"
              >
                Go to Home
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border px-5 text-sm font-semibold text-navy"
              >
                Contact Us
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
