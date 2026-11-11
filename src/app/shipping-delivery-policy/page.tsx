import type { Metadata } from "next";
import { LegalPage, getLegalMetadata } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const metadata: Metadata = getLegalMetadata(
  "Shipping & Delivery Policy",
  "/shipping-delivery-policy",
  "Information about delivery timelines and service fulfillment for CRUZE ev products and services.",
);

export default function ShippingDeliveryPolicyPage() {
  return <LegalPage doc={LEGAL.shipping} />;
}
