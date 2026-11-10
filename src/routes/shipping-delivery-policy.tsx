import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const Route = createFileRoute("/shipping-delivery-policy")({
  head: () => legalHead("Shipping & Delivery Policy", "/shipping-delivery-policy", "Shipping partners, dispatch timelines and delivery details for CRUZE ev orders."),
  component: () => <LegalPage doc={LEGAL.shipping} />,
});
