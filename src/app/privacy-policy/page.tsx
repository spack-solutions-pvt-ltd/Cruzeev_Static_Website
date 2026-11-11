import type { Metadata } from "next";
import { LegalPage, getLegalMetadata } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const metadata: Metadata = getLegalMetadata(
  "Privacy Policy",
  "/privacy-policy",
  "How CRUZE ev collects, uses and protects your personal information.",
);

export default function PrivacyPolicyPage() {
  return <LegalPage doc={LEGAL.privacy} />;
}
