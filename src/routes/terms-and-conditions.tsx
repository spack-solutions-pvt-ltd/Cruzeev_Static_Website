import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => legalHead("Terms & Conditions", "/terms-and-conditions", "The terms of use for the CRUZE ev website and EV charging network."),
  component: () => <LegalPage doc={LEGAL.terms} />,
});
