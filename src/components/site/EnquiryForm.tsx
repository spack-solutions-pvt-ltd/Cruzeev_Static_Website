import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "select" | "textarea"; options?: string[]; required?: boolean };

const validators: Record<string, (v: string) => string | null> = {
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Enter a valid email address"),
  tel: (v) => (/^[6-9]\d{9}$/.test(v.replace(/[\s+-]/g, "").replace(/^91/, "")) ? null : "Enter a valid 10-digit mobile number"),
};

/** Front-end only. Hook a backend/email service into onSubmit later. */
export function EnquiryForm({ fields, submitLabel, successText }: { fields: Field[]; submitLabel: string; successText: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = (data[f.name] ?? "").trim();
      if (f.required && !v) errs[f.name] = `${f.label} is required`;
      else if (v && f.type && validators[f.type]) {
        const m = validators[f.type](v);
        if (m) errs[f.name] = m;
      } else if (v.length > 1000) errs[f.name] = "Too long";
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setDone(true);
    toast.success("Thank you!", { description: successText });
    e.currentTarget.reset();
  };

  if (done)
    return (
      <div className="flex flex-col items-center rounded-3xl border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <p className="mt-4 text-lg font-semibold">Message received</p>
        <p className="mt-2 text-muted-foreground">{successText}</p>
        <Button variant="link" onClick={() => setDone(false)}>Send another</Button>
      </div>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 rounded-3xl border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8">
      {fields.map((f) => {
        const id = `f-${submitLabel}-${f.name}`.replace(/\s/g, "");
        const full = f.type === "textarea" || f.type === "select";
        const common = { id, name: f.name, "aria-invalid": !!errors[f.name], className: "rounded-xl" };
        return (
          <div key={f.name} className={full ? "sm:col-span-2" : ""}>
            <Label htmlFor={id} className="mb-2 block">{f.label}{f.required && <span className="text-primary-deep"> *</span>}</Label>
            {f.type === "textarea" ? (
              <Textarea {...common} rows={4} maxLength={1000} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue="" className="h-9 w-full rounded-xl border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="" disabled>Select…</option>
                {f.options!.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <Input {...common} type={f.type ?? "text"} maxLength={120} />
            )}
            {errors[f.name] && <p className="mt-1.5 text-xs text-destructive">{errors[f.name]}</p>}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">{submitLabel}</Button>
      </div>
    </form>
  );
}
