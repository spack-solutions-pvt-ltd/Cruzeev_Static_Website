/**
 * Mail Sender API configuration & tokens
 */

export const MAIL_API_BASE_URL =
  process.env.NEXT_PUBLIC_MAIL_API_BASE_URL ||
  process.env.MAIL_API_BASE_URL ||
  "https://mail-sender.accurateweb.in/api";

export const MAIL_API_TOKEN =
  process.env.NEXT_PUBLIC_MAIL_API_TOKEN ||
  process.env.MAIL_API_TOKEN ||
  "2526f0c602c2670e5d8d24f9c17f0d617572bf99e81e8a390457a9e7ae0041dc";

export const MAIL_TEMPLATE_IDS = {
  ADMIN_ENQUIRY:
    process.env.NEXT_PUBLIC_MAIL_ADMIN_TEMPLATE_ID ||
    process.env.MAIL_ADMIN_TEMPLATE_ID ||
    "0b473b91f90a8817",
  USER_CONFIRMATION:
    process.env.NEXT_PUBLIC_MAIL_USER_TEMPLATE_ID ||
    process.env.MAIL_USER_TEMPLATE_ID ||
    "f7a6e6a7fb3debf9",
} as const;

export const API_TOKENS = {
  mailApiBaseUrl: MAIL_API_BASE_URL,
  mailApiToken: MAIL_API_TOKEN,
  templates: MAIL_TEMPLATE_IDS,
};

export default API_TOKENS;
