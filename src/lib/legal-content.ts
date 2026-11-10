export type LegalBlock = string | { list: string[] };
export type LegalSection = { title: string; body: LegalBlock[]; address?: boolean };
export type LegalDoc = { title: string; intro: string[]; sections: LegalSection[] };

const E = "support@cruzeev.in";
const ISSUED = (doc: string) => `This ${doc} is issued by JCD ELECTRIC PRIVATE LIMITED (operating the brand CRUZE ev).`;

export const LEGAL: Record<"terms" | "privacy" | "shipping" | "refund", LegalDoc> = {
  terms: {
    title: "Terms & Conditions",
    intro: [
      "These terms are issued by JCD ELECTRIC PRIVATE LIMITED.",
      "Welcome to JCD ELECTRIC PRIVATE LIMITED. This website is owned and operated by JCD ELECTRIC PRIVATE LIMITED (“JCD ELECTRIC PRIVATE LIMITED,” “we,” “us,” or “our”), operating the EV charging network brand CRUZE ev. By accessing or using this website, you (“you,” “your,” or “user”) agree to comply with and be bound by the following Terms of Use, along with our Privacy Policy and any other policies or notices displayed on the Website. If you do not agree with these Terms, please do not use this Website.",
    ],
    sections: [
      { title: "General Use", body: ["The content and materials provided on this Website are for your general information and use only. All content is subject to change without notice.", "You agree that your use of any information, products, or services available through this Website is entirely at your own risk. It is your responsibility to ensure that any information or services available through this Website meet your specific needs or requirements."] },
      { title: "Accuracy of Information", body: ["While we make every effort to ensure that the information provided is accurate and up-to-date, CRUZE ev does not make any representations or warranties of any kind—express or implied—about the completeness, accuracy, reliability, suitability, or availability of the information, products, or related graphics contained on the Website.", "You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law."] },
      { title: "Intellectual Property", body: ["All content included on this Website—such as text, graphics, logos, images, and design elements—is the property of CRUZE ev or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.", "You may not reproduce, distribute, modify, copy, or exploit any portion of the Website content without prior written permission from CRUZE ev."] },
      { title: "Trademarks", body: ["All trademarks reproduced in this Website that are not the property of or licensed to CRUZE ev are acknowledged on the Website. Unauthorized use of this Website or its content may give rise to a claim for damages and/or be a criminal offence under applicable law."] },
      { title: "Third-Party Links", body: ["From time to time, this Website may include links to other websites for additional information. These links are provided for your convenience and do not signify that we endorse or are responsible for the content or policies of such linked websites. You access these websites at your own risk."] },
      { title: "Prohibited Uses", body: ["You agree not to use the Website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Website. You further agree not to:", { list: ["Engage in unauthorized access or hacking attempts.", "Upload or transmit viruses, malware, or malicious code.", "Copy, distribute, or exploit the Website’s materials for commercial purposes without written consent."] }] },
      { title: "Limitation of Liability", body: ["To the fullest extent permitted by law, CRUZE ev shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:", { list: ["Your use or inability to use the Website.", "Reliance on any information displayed on the Website.", "Errors, omissions, interruptions, or delays in Website operation."] }] },
      { title: "Indemnification", body: ["You agree to indemnify and hold harmless CRUZE ev, its directors, employees, partners, and affiliates from any claim, demand, or damage arising out of your breach of these Terms or misuse of the Website."] },
      { title: "Changes to Terms", body: ["We may revise these Terms of Use at any time by updating this page. You are responsible for reviewing this page periodically to stay informed of any changes. Continued use of the Website following changes constitutes your acceptance of the revised Terms."] },
      { title: "Governing Law", body: ["These Terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana."] },
      { title: "Contact Information", body: [], address: true },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro: [
      ISSUED("Privacy Policy"),
      "At JCD ELECTRIC PRIVATE LIMITED (“we,” “us,” or “our”), we are committed to safeguarding your privacy and ensuring transparency in how your personal information is collected, processed, and secured. This Privacy Policy governs your access to and use of the CRUZE ev website, mobile applications, and electric vehicle (EV) charging station network.",
      "By accessing or using our services, you consent to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please refrain from using our website and services.",
    ],
    sections: [
      { title: "Introduction", body: ["Welcome to CRUZE ev (“we,” “us,” or “our”). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website — cruzeev.in.", "By using our Website, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our Website."] },
      { title: "Information We Collect", body: ["We may collect the following types of information from you:", { list: ["Personal Information: Name, email address, phone number, or other details you provide through contact forms or inquiries.", "Technical Information: IP address, browser type, operating system, device information, and website usage statistics.", "Cookies & Tracking Data: Data collected through cookies or similar technologies to enhance your browsing experience.", "Other Information: Feedback, preferences, and communication history with our team."] }] },
      { title: "How We Use Your Information", body: ["We may use the information collected for the following purposes:", { list: ["To provide, maintain, and improve our products and services.", "To respond to your inquiries and support requests.", "To send updates, offers, or promotional materials (only if you have opted in).", "To personalize your experience on our Website.", "To analyze website performance, monitor traffic patterns, and improve functionality.", "To comply with legal obligations and prevent fraudulent activity."] }] },
      { title: "Data Security", body: ["We are committed to ensuring that your personal information is secure. We use appropriate physical, electronic, and managerial procedures to safeguard the information we collect online.", "However, please note that no online transmission or storage system can be guaranteed 100% secure. You share information with us at your own risk."] },
      { title: "Cookies", body: ["Our Website uses cookies to enhance user experience. Cookies help us analyze web traffic, remember preferences, and improve functionality.", "You can choose to accept or decline cookies through your browser settings. Declining cookies may limit certain features of the Website."] },
      { title: "Sharing and Disclosure", body: ["We do not sell, lease, or trade your personal information to third parties.", "We may share data with trusted partners and service providers who assist us in operating our Website or conducting business — provided they agree to keep your information confidential and use it only for the intended purpose.", "We may also disclose information if required by law or to protect our rights, property, or safety."] },
      { title: "Links to Other Websites", body: ["Our Website may contain links to third-party websites. Once you leave our Website, we are not responsible for the privacy practices or content of other websites. We encourage you to review their privacy policies before providing any personal information."] },
      { title: "Your Rights & Choices", body: ["You have the right to:", { list: ["Request access to the personal data we hold about you.", "Request correction of inaccurate or incomplete data.", "Withdraw consent for marketing communications at any time.", "Request deletion of your data, subject to legal and contractual obligations."] }, `To exercise any of these rights, please contact us at ${E}.`] },
      { title: "Data Retention", body: ["We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."] },
      { title: "Updates to This Policy", body: ["We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The revised version will be posted on this page with an updated “Effective Date.” Please check this page from time to time to stay informed."] },
      { title: "Contact Us & Grievance Officer", body: ["If you have any questions, concerns, grievances, or requests regarding this Privacy Policy or our data handling practices, please contact us at:", "Grievance Officer: [To be updated]"], address: true },
    ],
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    intro: [ISSUED("Shipping & Delivery Policy"), "At JCD ELECTRIC PRIVATE LIMITED we aim to ensure prompt and reliable delivery of all orders, whether domestic or international."],
    sections: [
      { title: "Shipping Partners", body: [{ list: ["Domestic Orders: Shipped via registered courier companies or India Post Speed Post.", "International Orders: Shipped through trusted international courier partners or International Speed Post."] }] },
      { title: "Dispatch & Delivery Timeline", body: [{ list: ["Orders are typically dispatched within 0–7 working days from the date of payment or as per the delivery date agreed upon at order confirmation.", "Delivery timelines depend on the courier company and local postal authorities.", "JCD ELECTRIC PRIVATE LIMITED is not liable for delays once the order has been handed over to the courier/postal service."] }] },
      { title: "Delivery Address", body: [{ list: ["Orders will be delivered to the address provided at the time of order confirmation.", "Please ensure that the shipping address and contact details are accurate and complete."] }] },
      { title: "Delivery Confirmation", body: [{ list: ["Once your order is dispatched, you will receive an email confirmation on your registered email ID.", "Tracking details will also be shared (where applicable) to help you monitor the shipment."] }] },
      { title: "Customer Support", body: [`For any questions, issues, or assistance with delivery or services, please reach out to our support team at: ${E}`] },
      { title: "Contact Us", body: ["For any queries or assistance regarding shipping, order status, or delivery, please reach out to our support team:"], address: true },
    ],
  },
  refund: {
    title: "Refund & Cancellation Policy",
    intro: [ISSUED("Refund & Cancellation Policy"), "At JCD ELECTRIC PRIVATE LIMITED, we strive to provide our customers with a smooth and transparent experience at every step of their EV charging journey. However, we understand that plans may change, and you may need to cancel or refund at any time."],
    sections: [
      { title: "Introduction", body: ["At CRUZE ev (operated by JCD ELECTRIC PRIVATE LIMITED), we are dedicated to providing seamless EV charging across our network and customer satisfaction. This Refund and Cancellation Policy outlines the conditions under which cancellations, returns, and refunds are processed for our digital charging services, wallet recharges, and physical products."] },
      { title: "Cancellation Policy", body: ["You may cancel your EV charging booking at any time. Please note that a Cancellation or Convenience Fee may apply, as detailed below:", { list: ["The applicable fee will be displayed at the time of cancellation on the CRUZE ev App or website.", "Pre-Authorization & Hold Releases: Any temporary hold or pre-authorized amount exceeding the final session cost is automatically released back to your original payment method or wallet upon session completion.", "Failed Initiations: If your account is debited but charging fails to initiate due to connector lock issues or network timeout, the entire amount will be refunded automatically.", `Disputed Sessions: If you believe a session was incorrectly billed, report the session ID to ${E} within 7 days for investigation and adjustment.`] }] },
      { title: "Fees & Conditions", body: ["Cancellation or Convenience Fees will apply under the following circumstances:", { list: ["If you cancel your booking after it has been confirmed.", "If you reschedule your booking after it has been confirmed. However, if the charging rate changes for the new time slot, the updated rate will apply."] }] },
      { title: "How to Cancel Your Booking", body: ["Follow the following steps for cancellation of your respective booking:", { list: ["Login to the CRUZE ev App", "Go to Main Menu → My Bookings", "Click the ‘X’ icon next to the booking you wish to cancel", "Confirm cancellation and you’ll receive an SMS confirmation"] }] },
      { title: "Refund Process", body: ["Once a refund is approved by CRUZE ev:", { list: ["Refunds for cancelled bookings are processed within 24–48 hours.", "Once processed, the refund amount will be credited to your CRUZE ev Wallet [To be updated] within 24 hours.", "You will be notified of your refund status via email and SMS."] }, "JCD ELECTRIC PRIVATE LIMITED ensures full transparency in all transactions. By proceeding with any booking, you acknowledge and agree to the terms outlined in this Cancellation, Reschedule, and Refund Policy."] },
      { title: "Contact Us", body: ["If you have any questions or require support regarding refunds, cancellations, or billing discrepancies, please get in touch with us:"], address: true },
    ],
  },
};
