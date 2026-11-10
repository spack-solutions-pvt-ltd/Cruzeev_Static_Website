import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const Route = createFileRoute("/refund-cancellation-policy")({
  head: () => legalHead("Refund & Cancellation Policy", "/refund-cancellation-policy", "How cancellations, refunds and billing disputes work on the CRUZE ev network."),
  component: () => <LegalPage doc={LEGAL.refund} />,
});
