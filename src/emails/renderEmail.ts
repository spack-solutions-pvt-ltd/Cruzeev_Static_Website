export interface ContactEnquiryData {
  name: string;
  email: string;
  phone: string;
  enquirytype?: string;
  enquiryType?: string;
  type?: string;
  message: string;
  submittedAt?: string;
}

/**
 * Replaces template variables {{key}} in an HTML template string.
 */
export function interpolateTemplate(
  template: string,
  data: ContactEnquiryData,
): string {
  const enquiryTypeValue =
    data.enquirytype || data.enquiryType || data.type || "General";

  const values: Record<string, string> = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    enquirytype: enquiryTypeValue,
    enquiryType: enquiryTypeValue,
    type: enquiryTypeValue,
    message: data.message,
    submittedAt:
      data.submittedAt ||
      new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      }),
  };

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    return values[key] ?? "";
  });
}
