import { site } from "./site";

export const ENQUIRY_TYPES = ["General", "Franchise", "Support"] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  enquirytype?: string;
  enquiryType?: string;
  type?: string;
  subject?: string;
  message: string;
  submittedAt?: string;
}

export interface ReplacementItem {
  name: string;
  replacement: string;
}

export interface EmailPayload {
  to: string;
  subject: string;
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  submittedAt: string;
  replacements: ReplacementItem[];
  variables: {
    name: string;
    email: string;
    phone: string;
    enquiryType: string;
    message: string;
    submittedAt: string;
  };
}

/**
 * Fallback mailto generator in case the mail API is unreachable
 */
export function generateContactMailtoUrl(data: ContactFormData): string {
  const enquiryTypeValue =
    data.enquirytype || data.enquiryType || data.type || data.subject || "General";
  const subject = encodeURIComponent(
    `Website Enquiry: ${enquiryTypeValue} - ${data.name}`
  );
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nEnquiry Type: ${enquiryTypeValue}\n\nMessage:\n${data.message}`
  );
  const targetEmail = site.email || "support@cruzeev.in";
  return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
}

/**
 * Generates the payload sent to the admin/owner notifying them of a new enquiry.
 */
export function getAdminEmailPayload(
  data: ContactFormData,
  adminEmail: string = site.email,
): EmailPayload {
  const submittedAt =
    data.submittedAt ||
    new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

  const enquiryTypeValue =
    data.enquiryType || data.enquirytype || data.type || data.subject || "General";

  const replacements: ReplacementItem[] = [
    // Name
    { name: "name", replacement: data.name },
    { name: "Name", replacement: data.name },
    { name: "{{name}}", replacement: data.name },

    // Email
    { name: "email", replacement: data.email },
    { name: "Email", replacement: data.email },
    { name: "{{email}}", replacement: data.email },

    // Phone / Contact
    { name: "phone", replacement: data.phone },
    { name: "Phone", replacement: data.phone },
    { name: "mobile", replacement: data.phone },
    { name: "contact", replacement: data.phone },
    { name: "{{phone}}", replacement: data.phone },

    // Enquiry Type
    { name: "enquiryType", replacement: enquiryTypeValue },
    { name: "enquirytype", replacement: enquiryTypeValue },
    { name: "EnquiryType", replacement: enquiryTypeValue },
    { name: "type", replacement: enquiryTypeValue },
    { name: "Type", replacement: enquiryTypeValue },
    { name: "{{enquiryType}}", replacement: enquiryTypeValue },
    { name: "{{enquirytype}}", replacement: enquiryTypeValue },
    { name: "{{type}}", replacement: enquiryTypeValue },

    // Message
    { name: "message", replacement: data.message },
    { name: "Message", replacement: data.message },
    { name: "{{message}}", replacement: data.message },

    // Submitted At / Timestamp
    { name: "submittedAt", replacement: submittedAt },
    { name: "SubmittedAt", replacement: submittedAt },
    { name: "timestamp", replacement: submittedAt },
    { name: "{{submittedAt}}", replacement: submittedAt },
  ];

  const fields = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    enquiryType: enquiryTypeValue,
    message: data.message,
    submittedAt,
  };

  return {
    to: adminEmail,
    subject: `New Website Enquiry - ${enquiryTypeValue}`,
    ...fields,
    replacements,
    variables: fields,
  };
}

/**
 * Generates the auto-responder payload sent to the user confirming their enquiry.
 */
export function getUserEmailPayload(data: ContactFormData): EmailPayload {
  const submittedAt =
    data.submittedAt ||
    new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

  const enquiryTypeValue =
    data.enquiryType || data.enquirytype || data.type || data.subject || "General";

  const replacements: ReplacementItem[] = [
    // Name
    { name: "name", replacement: data.name },
    { name: "Name", replacement: data.name },
    { name: "{{name}}", replacement: data.name },

    // Email
    { name: "email", replacement: data.email },
    { name: "Email", replacement: data.email },
    { name: "{{email}}", replacement: data.email },

    // Phone / Contact
    { name: "phone", replacement: data.phone },
    { name: "Phone", replacement: data.phone },
    { name: "mobile", replacement: data.phone },
    { name: "contact", replacement: data.phone },
    { name: "{{phone}}", replacement: data.phone },

    // Enquiry Type
    { name: "enquiryType", replacement: enquiryTypeValue },
    { name: "enquirytype", replacement: enquiryTypeValue },
    { name: "EnquiryType", replacement: enquiryTypeValue },
    { name: "type", replacement: enquiryTypeValue },
    { name: "Type", replacement: enquiryTypeValue },
    { name: "{{enquiryType}}", replacement: enquiryTypeValue },
    { name: "{{enquirytype}}", replacement: enquiryTypeValue },
    { name: "{{type}}", replacement: enquiryTypeValue },

    // Message
    { name: "message", replacement: data.message },
    { name: "Message", replacement: data.message },
    { name: "{{message}}", replacement: data.message },

    // Submitted At / Timestamp
    { name: "submittedAt", replacement: submittedAt },
    { name: "SubmittedAt", replacement: submittedAt },
    { name: "timestamp", replacement: submittedAt },
    { name: "{{submittedAt}}", replacement: submittedAt },
  ];

  const fields = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    enquiryType: enquiryTypeValue,
    message: data.message,
    submittedAt,
  };

  return {
    to: data.email,
    subject: `Thank you for contacting us - Enquiry Received (${enquiryTypeValue})`,
    ...fields,
    replacements,
    variables: fields,
  };
}
