import {
  mailApiClient,
  sendContactFormEmails,
  type SendContactEmailsResult,
  type ContactFormData,
} from "./mail-sender";

export { mailApiClient, sendContactFormEmails };
export type { SendContactEmailsResult, ContactFormData };
export default mailApiClient;
