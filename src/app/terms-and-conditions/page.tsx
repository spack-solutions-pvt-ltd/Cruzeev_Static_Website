import type { Metadata } from "next";
import { LegalPage, getLegalMetadata } from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/legal-content";

export const metadata: Metadata = getLegalMetadata(
  "Terms & Conditions",
  "/terms-and-conditions",
  "Terms and conditions governing the use of the CRUZE ev website, mobile app and EV charging services.",
);

export default function TermsAndConditionsPage() {
  return <LegalPage doc={LEGAL.terms} />;
}
