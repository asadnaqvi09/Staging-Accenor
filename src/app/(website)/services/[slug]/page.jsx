import { Suspense } from "react";
import { notFound } from "next/navigation";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCoverage } from "@/components/services/ServiceCoverage";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { Container } from "@/components/shared/Container";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { siteConfig } from "@/config/site";
import {
  getRelatedServices,
  getServiceBySlug,
  serviceDetailCta,
  services,
} from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const title = service.seoTitle || service.title;
  const description = service.seoDescription || service.summary;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

function ServiceDetailSkeleton() {
  return (
    <section className="page-hero border-b border-border" aria-busy="true">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="h-4 w-40 animate-pulse rounded bg-border/80" />
        <div className="mt-6 h-10 max-w-xl animate-pulse rounded-lg bg-border/80" />
        <div className="mt-4 h-4 max-w-2xl animate-pulse rounded bg-border/60" />
        <div className="mt-2 h-4 max-w-lg animate-pulse rounded bg-border/60" />
      </Container>
    </section>
  );
}

async function ServiceDetailContent({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceCoverage service={service} />
      <ServiceFaq service={service} />
      <RelatedServices services={related} />
      <CtaBanner
        title={serviceDetailCta.title}
        description={serviceDetailCta.description}
        primaryCta={serviceDetailCta.primaryCta}
        secondaryCta={serviceDetailCta.secondaryCta}
      />
    </>
  );
}

// Stream URL-bound content so Instant shell can render without blocking on params.
export default function ServiceDetailPage({ params }) {
  return (
    <Suspense fallback={<ServiceDetailSkeleton />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
