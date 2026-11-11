import axios from "axios";
import {
  getAdminEmailPayload,
  getUserEmailPayload,
  type ContactFormData,
} from "./email-template";
import { site } from "./site";
import {
  MAIL_API_BASE_URL,
  MAIL_API_TOKEN,
  MAIL_TEMPLATE_IDS,
} from "./api-tokens";

export type { ContactFormData };

// Dedicated Axios instance configured for the Mail Sender service
export const mailApiClient = axios.create({
  baseURL: MAIL_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "mail-token": MAIL_API_TOKEN,
  },
  timeout: 10000,
});

export interface SendContactEmailsResult {
  adminResponse: unknown;
  userResponse: unknown;
}

/**
 * Sends both the admin notification email and the user confirmation email via Axios.
 */
export async function sendContactFormEmails(
  data: ContactFormData,
): Promise<SendContactEmailsResult> {
  const adminPayload = getAdminEmailPayload(data, site.email);
  const userPayload = getUserEmailPayload(data);

  const [adminResponse, userResponse] = await Promise.all([
    mailApiClient.post(
      `/template/${MAIL_TEMPLATE_IDS.ADMIN_ENQUIRY}/send`,
      adminPayload,
    ),
    mailApiClient.post(
      `/template/${MAIL_TEMPLATE_IDS.USER_CONFIRMATION}/send`,
      userPayload,
    ),
  ]);

  return {
    adminResponse: adminResponse.data,
    userResponse: userResponse.data,
  };
}

export default mailApiClient;
