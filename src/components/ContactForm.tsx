"use client";

import { useForm, type UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type HTMLInputTypeAttribute } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  ENQUIRY_TYPES,
  generateContactMailtoUrl,
} from "@/lib/email-template";
import { sendContactFormEmails } from "@/lib/api";
import { inputCls, btnPrimary } from "./SiteLayout";
import { Button } from "@/components/ui/button";

export interface ContactFormProps {
  onSuccess?: () => void;
  submitLabel?: string;
  successText?: string;
}

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
  enquiryType: z.string().min(1, "Please select an enquiry type."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface FieldProps {
  label: string;
  id: keyof ContactFormData;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<ContactFormData>;
  error?: string | undefined;
  required?: boolean;
  placeholder?: string;
}

function FormField({
  label,
  id,
  type = "text",
  register,
  error,
  required,
  placeholder,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${inputCls} ${error ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
        {...register(id)}
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}

export function ContactForm({
  onSuccess,
  submitLabel = "Send message",
  successText = "Thanks for reaching out — we'll reply shortly.",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), 
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    },
  });

  const sendFormData = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactFormEmails(data);

      toast.success("Thank you!", {
        description: successText,
        position: "top-right",
      });
      reset();
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form via API:", error);
      setSubmitError("Could not submit directly to server. Opening your email client...");

      // Graceful fallback to user's local mail client so the enquiry is not lost
      toast.info("Connecting to your email client...", { position: "top-right" });
      window.location.href = generateContactMailtoUrl(data);
      reset();
      setIsSubmitted(true);
      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <p className="mt-4 text-lg font-semibold">Message received</p>
        <p className="mt-2 text-muted-foreground">{successText}</p>
        <Button variant="link" onClick={() => setIsSubmitted(false)} className="mt-4">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(sendFormData)}
      noValidate
      className="grid gap-5 rounded-3xl border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8"
    >
      <FormField
        label="Name"
        id="name"
        type="text"
        placeholder="Enter your full name"
        register={register}
        error={errors.name?.message}
        required
      />

      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="name@example.com"
        register={register}
        error={errors.email?.message}
        required
      />

      <FormField
        label="Phone"
        id="phone"
        type="tel"
        placeholder="10-digit mobile number"
        register={register}
        error={errors.phone?.message}
        required
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="enquiryType"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Enquiry Type <span className="text-destructive">*</span>
        </label>
        <select
          id="enquiryType"
          defaultValue=""
          className={`${inputCls} ${errors.enquiryType ? "border-destructive focus:border-destructive" : ""}`}
          {...register("enquiryType")}
        >
          <option value="" disabled>
            Select enquiry type
          </option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <span className="text-xs text-destructive">{errors.enquiryType.message}</span>
        )}
      </div>

      <div className="sm:col-span-2 flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can we assist you with our EV charging network or services?"
          className={`${inputCls} h-auto py-2.5 ${errors.message ? "border-destructive focus:border-destructive" : ""}`}
          {...register("message")}
        />
        {errors.message && (
          <span className="text-xs text-destructive">{errors.message.message}</span>
        )}
      </div>

      {submitError && (
        <div className="sm:col-span-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive">
          {submitError}
        </div>
      )}

      <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted-foreground">We reply within one business day.</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${btnPrimary} min-w-[140px] cursor-pointer disabled:opacity-60 disabled:pointer-events-none`}
        >
          {isSubmitting && <Loader2 size={16} className="animate-spin" />}
          {isSubmitting ? "Sending..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
