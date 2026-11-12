"use client";

import React, { useState } from "react";
import { Trash2, Archive, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout, inputCls } from "@/components/SiteLayout";
import { site } from "@/lib/site";

export default function DeleteAccountPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const mobileInput = form.querySelector<HTMLInputElement>('input[type="tel"]');
    const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
    const reasonSelect = form.querySelector<HTMLSelectElement>("select");

    const mobile = (formData.get("mobile") as string) || mobileInput?.value || "";
    const email = (formData.get("email") as string) || emailInput?.value || "";
    const reason = (formData.get("reason") as string) || reasonSelect?.value || "";

    const values = {
      mobile,
      email,
      reason: reason || "Not specified",
    };

    console.log("Delete Account Request:", values);

    toast.success(
      `Request submitted! Mobile: ${mobile}, Email: ${email}${reason ? `, Reason: ${reason}` : ""}`
    );

    setDone(true);
  };

  return (
    <SiteLayout>
      <section className="bg-hero py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            Delete Your CRUZE ev Account
          </h1>
          <p className="mt-4 text-muted-foreground">
            You can request permanent deletion of your CRUZE ev account and the data associated
            with it. Submit the form below and our team will process your request.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <Trash2 className="text-destructive" />
              <h2 className="mt-3 text-lg font-semibold">What gets deleted</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Profile details</li>
                <li>Saved vehicles</li>
                <li>App preferences</li>
                <li>Wallet details</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <Archive className="text-primary" />
              <h2 className="mt-3 text-lg font-semibold">What may be retained</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Transaction and invoice records are retained for legal, tax and regulatory
                compliance as required by law.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            {done ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto size-14 text-primary" />
                <p className="mt-4 font-medium">
                  Your request has been received. Your account will be deleted within 7 working
                  days. For help, contact{" "}
                  <a href={`mailto:${site.email}`} className="text-primary underline">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  required
                  name="mobile"
                  type="tel"
                  placeholder="Registered Mobile Number"
                  aria-label="Registered Mobile Number"
                  className={inputCls}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Registered Email"
                  aria-label="Registered Email"
                  className={inputCls}
                />
                <select
                  name="reason"
                  defaultValue=""
                  aria-label="Reason for leaving"
                  className={inputCls}
                >
                  <option value="">Reason for leaving (optional)</option>
                  <option>I no longer own an EV</option>
                  <option>I use another charging app</option>
                  <option>Privacy concerns</option>
                  <option>Poor experience</option>
                  <option>Other</option>
                </select>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    required
                    name="confirm"
                    type="checkbox"
                    className="mt-1 size-4 accent-primary"
                  />
                  I understand this action is permanent and cannot be undone.
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#dc2626] px-6 py-3 font-semibold text-secondary shadow-soft transition hover:opacity-90"
                >
                  Request Account Deletion
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
