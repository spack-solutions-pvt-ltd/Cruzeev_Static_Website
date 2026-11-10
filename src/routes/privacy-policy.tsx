import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => legalHead("Privacy Policy", "/privacy-policy", "How CRUZE ev collects, uses and protects your personal information."),
  component: () => <LegalPage doc={LEGAL.privacy} />,
});
