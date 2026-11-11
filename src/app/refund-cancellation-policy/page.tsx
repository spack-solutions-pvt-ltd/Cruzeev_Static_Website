import type { Metadata } from "next";
import { LegalPage, getLegalMetadata } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const metadata: Metadata = getLegalMetadata(
  "Refund & Cancellation Policy",
  "/refund-cancellation-policy",
  "Policies on cancellation, failed charging sessions, wallet balances and refunds.",
);

export default function RefundCancellationPolicyPage() {
  return <LegalPage doc={LEGAL.refund} />;
}
