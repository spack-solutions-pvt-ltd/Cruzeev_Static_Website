import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account | CRUZE ev",
  description:
    "Request permanent deletion of your MECCHARGE account and the data associated with it.",
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
