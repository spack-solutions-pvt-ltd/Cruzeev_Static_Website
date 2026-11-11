/**
 * Mail Sender API configuration & tokens
 */
export {
  MAIL_API_BASE_URL,
  MAIL_API_TOKEN,
  MAIL_TEMPLATE_IDS,
} from "./mail-sender";

import {
  MAIL_API_BASE_URL,
  MAIL_API_TOKEN,
  MAIL_TEMPLATE_IDS,
} from "./mail-sender";

export const API_TOKENS = {
  mailApiBaseUrl: MAIL_API_BASE_URL,
  mailApiToken: MAIL_API_TOKEN,
  templates: MAIL_TEMPLATE_IDS,
};

export default API_TOKENS;
