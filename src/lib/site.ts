export const SITE = {
  brand: "CRUZE ev",
  email: "support@cruzeev.in",
  // email: "varshith@spackdigi.com",
  phone: "+91–7989048025",
  supportHours: "Mon – Sun, 9:00 AM – 9:00 PM", // editable placeholder
  legalEntity: "JCD ELECTRIC PRIVATE LIMITED",
};

export const site = SITE;

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "franchise", label: "Franchise" },
  { id: "contact", label: "Contact Us" },
] as const;

export const LEGAL_LINKS = [
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/shipping-delivery-policy", label: "Shipping & Delivery Policy" },
  { to: "/refund-cancellation-policy", label: "Refund & Cancellation Policy" },
] as const;
