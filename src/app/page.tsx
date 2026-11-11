import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeIndianRupee,
  BatteryCharging,
  Building2,
  Clock,
  CreditCard,
  Gauge,
  GraduationCap,
  Handshake,
  Headphones,
  Leaf,
  Mail,
  MapPin,
  Network,
  Phone,
  PlugZap,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SITE } from "@/lib/site";

const DESC =
  "CRUZE ev operates and manages a reliable, growing network of public EV charging stations — and partners with location owners and entrepreneurs to expand it.";

export const metadata: Metadata = {
  title: "CRUZE ev | EV Charging Network",
  description: DESC,
  openGraph: {
    title: "CRUZE ev | EV Charging Network",
    description: DESC,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

type Item = { icon: LucideIcon; title: string; text: string };

function Eyebrow({ children, dark }: { children: string; dark?: boolean | undefined }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary" : "text-primary-deep"}`}
    >
      {children}
    </p>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  dark,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean | undefined;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {text && (
        <p className={`mt-4 text-lg ${dark ? "text-navy-muted" : "text-muted-foreground"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

function CardGrid({
  items,
  dark,
  cols = "lg:grid-cols-3",
}: {
  items: Item[];
  dark?: boolean;
  cols?: string;
}) {
  return (
    <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 60}>
          <div
            className={`card-lift h-full rounded-3xl border p-7 ${dark ? "border-navy-border bg-navy-card" : "bg-card"}`}
          >
            <div className="inline-flex rounded-2xl bg-gradient-brand p-3 text-primary-foreground">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
            >
              {it.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Steps({ steps, dark }: { steps: Item[]; dark?: boolean | undefined }) {
  return (
    <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 80}>
          <li className="relative flex flex-col items-center text-center">
            {/* Step Number */}
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary">
              {i + 1}
            </span>

            {/* Icon and Title */}
            <h3 className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold">
              <s.icon className={`h-5 w-5 ${dark ? "text-navy-muted" : "text-muted-foreground"}`} />
              {s.title}
            </h3>

            {/* Description */}
            <p className={`mt-2 text-sm ${dark ? "text-navy-muted" : "text-muted-foreground"}`}>
              {s.text}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

// const STATS = [
//   { v: "50+", l: "Charging Stations" },
//   { v: "10+", l: "Cities Covered" },
//   { v: "24/7", l: "Customer Support" },
//   { v: "99%", l: "Network Uptime" },
// ];

const WHY: Item[] = [
  {
    icon: Activity,
    title: "Reliable & monitored",
    text: "Every charger on our network is monitored in real time so issues are spotted and resolved fast.",
  },
  {
    icon: Smartphone,
    title: "Easy to use",
    text: "Find a charger, plug in and start a session in a few taps — no complicated steps.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent pricing",
    text: "Clear per-unit tariffs shown upfront, with no hidden charges at the end of your session.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    text: "Helping drivers move to cleaner mobility and cutting emissions one charge at a time.",
  },
  {
    icon: Network,
    title: "Scalable network",
    text: "A growing footprint of stations across cities, highways and everyday destinations.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    text: "A real support team on call to help drivers and partners whenever they need it.",
  },
];

const HOW: Item[] = [
  { icon: MapPin, title: "Find a charger", text: "Locate the nearest CRUZE ev station." },
  { icon: PlugZap, title: "Plug in", text: "Connect your vehicle to the charger." },
  {
    icon: BatteryCharging,
    title: "Start charging",
    text: "Begin your session and track progress.",
  },
  { icon: CreditCard, title: "Pay", text: "Pay securely for exactly what you use." },
];

const VALUES: Item[] = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Chargers that work when you arrive — that's the standard we hold ourselves to.",
  },
  {
    icon: Users,
    title: "Customer first",
    text: "Every decision starts with the experience of the driver at the plug.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We grow together with the hosts and entrepreneurs who power our network.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Building infrastructure that makes clean mobility practical for everyone.",
  },
];

const BENEFITS: Item[] = [
  {
    icon: Rocket,
    title: "Low entry barrier",
    text: "Start with a practical setup sized to your location and budget.",
  },
  {
    icon: Zap,
    title: "Brand & network support",
    text: "Your station runs under the CRUZE ev brand and is visible to our drivers.",
  },
  {
    icon: GraduationCap,
    title: "Training & onboarding",
    text: "Hands-on onboarding so you and your team are ready from day one.",
  },
  {
    icon: Smartphone,
    title: "Technology & app",
    text: "Charger management software, driver app and payments — all handled by us.",
  },
  {
    icon: TrendingUp,
    title: "Revenue opportunity",
    text: "Earn from every charging session as EV adoption grows around you.",
  },
  {
    icon: Wrench,
    title: "Ongoing operations",
    text: "Monitoring, maintenance coordination and support continue after launch.",
  },
];

const PARTNER_STEPS: Item[] = [
  { icon: Mail, title: "Enquire", text: "Share your details and location with our team." },
  { icon: Gauge, title: "Evaluation", text: "We assess site feasibility, power and demand." },
  { icon: Handshake, title: "Agreement", text: "Finalise the partnership terms together." },
  {
    icon: Rocket,
    title: "Setup & launch",
    text: "We install, commission and go live on the network.",
  },
];

const WHO = [
  {
    icon: Building2,
    label: "Location & property owners",
    desc: "Monetize parking spaces and boost foot traffic with reliable turnkey chargers.",
  },
  {
    icon: Rocket,
    label: "Entrepreneurs",
    desc: "Launch a high-growth EV charging business with full brand and network support.",
  },
  {
    icon: Store,
    label: "Hotels, malls & retail",
    desc: "Delight visitors and increase dwell time while customers charge on-site.",
  },
  {
    icon: Users,
    label: "Businesses & fleets",
    desc: "Power commercial fleets and workplace charging with central monitoring and billing.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HOME */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-navy text-navy-foreground"
        >
          <Image
            src="/hero-charging.jpg"
            alt="Electric car charging at a CRUZE ev station at dusk"
            width={1600}
            height={1008}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20 md:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-border bg-navy-card px-4 py-1.5 text-xs font-medium backdrop-blur">
                <Zap className="h-3.5 w-3.5 text-primary" /> EV Charging Network Operator
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Charging made <span className="text-gradient-brand">reliable</span>, everywhere you
                go.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-navy-muted">
                CRUZE ev operates and manages a growing network of public EV charging stations —
                built for every driver, monitored around the clock.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                  <a href="#franchise">Become a Franchise Partner</a>
                </Button>
                <Button variant="heroOutline" size="lg" className="h-12 px-8" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            {/* <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-border bg-navy-border md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.l} className="bg-navy/80 p-6 backdrop-blur">
                  <p className="text-3xl font-bold text-primary md:text-4xl">{s.v}</p>
                  <p className="mt-1 text-sm text-navy-muted">{s.l}</p>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        <div className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHead
              eyebrow="Why CRUZE ev"
              title="A charging network you can count on"
              text="Everything a driver needs from a public charger — done properly."
            />
            <CardGrid items={WHY} />
          </div>
        </div>

        <div className="py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHead eyebrow="How it works" title="Charge in four simple steps" />
            <Steps steps={HOW} />
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="bg-navy py-24 text-navy-foreground">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <Eyebrow dark>About Us</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Building India's dependable EV charging network
                </h2>
                <p className="mt-5 text-lg text-navy-muted">
                  CRUZE ev is an EV charging network operator. We started with a simple belief:
                  switching to electric should never mean worrying about where — or whether — you
                  can charge.
                </p>
                <p className="mt-4 text-navy-muted">
                  <strong className="text-navy-foreground">Our mission</strong> is to make public
                  charging reliable, accessible and easy for every driver.{" "}
                  <strong className="text-navy-foreground">Our vision</strong> is a connected
                  network of stations across cities and highways that makes electric mobility the
                  obvious choice.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-3xl border border-navy-border bg-navy-card p-8">
                  <h3 className="text-xl font-semibold">What we do</h3>
                  <ul className="mt-6 space-y-5">
                    {[
                      [
                        PlugZap,
                        "Set up stations",
                        "We plan and deploy charging stations at the right locations.",
                      ],
                      [
                        Network,
                        "Operate the network",
                        "Every station runs on the CRUZE ev network and platform.",
                      ],
                      [
                        Activity,
                        "Monitor & maintain uptime",
                        "Central monitoring keeps chargers online and issues resolved.",
                      ],
                      [
                        Headphones,
                        "Support customers",
                        "Drivers and partners get help from one dedicated team.",
                      ],
                    ].map(([Icon, t, d]) => {
                      const I = Icon as LucideIcon;
                      return (
                        <li key={t as string} className="flex gap-4">
                          <I className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                          <div>
                            <p className="font-medium">{t as string}</p>
                            <p className="text-sm text-navy-muted">{d as string}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className="mt-24">
              <SectionHead dark eyebrow="Our values" title="What we stand for" />
              <CardGrid dark items={VALUES} cols="lg:grid-cols-4" />
            </div>
          </div>
        </section>

        {/* FRANCHISE */}
        <section id="franchise" className="py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHead
              eyebrow="Franchise"
              title="Grow with the CRUZE ev network"
              text="Host or own charging points that run under the CRUZE ev network. You provide the location — we handle network operations, software and app, payments and customer support."
            />
            <CardGrid items={BENEFITS} />

            <div className="mt-24 rounded-[2rem] bg-surface p-8 md:p-14">
              <SectionHead eyebrow="Process" title="How to become a franchise partner" />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PARTNER_STEPS.map((s, i) => (
                  <Reveal key={s.title} delay={i * 80}>
                    <div className="card-lift relative h-full rounded-3xl border p-7">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex rounded-2xl border p-3 text-primary-foreground">
                          <s.icon className="h-6 w-6" />
                        </div>
                        {/* <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary-deep">
                          0{i + 1}
                        </span> */}
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO CAN APPLY */}
        <section className="bg-navy py-24 text-navy-foreground">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <Eyebrow dark>Franchise Eligibility</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-foreground md:text-4xl">
                Who can apply
              </h2>
              <p className="mt-3 text-lg font-semibold text-primary md:text-xl">
                Partners across every kind of location
              </p>
              <p className="mt-3 text-navy-muted">
                Whether you own commercial real estate, operate retail outlets, or manage a business
                fleet, the CRUZE ev franchise model is built to maximize utilization and revenue for
                your space.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
              {WHO.map((w, i) => (
                <Reveal key={w.label} delay={i * 60}>
                  <div className="card-lift h-full rounded-3xl border border-navy-border bg-navy-card p-7 text-navy-foreground">
                    <div className="inline-flex rounded-2xl bg-gradient-brand p-3 text-primary-foreground">
                      <w.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy-foreground">{w.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-muted">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contact">Talk to our team</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHead
              eyebrow="Contact Us"
              title="We're here to help"
              text="Questions about charging, partnerships or support? Reach out and our team will respond quickly."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div className="grid content-start gap-4">
                {[
                  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:+91${SITE.phone}` },
                  { icon: Clock, label: "Support hours", value: SITE.supportHours },
                ].map((c) => (
                  <Reveal key={c.label}>
                    <div className="card-lift flex items-center gap-4 rounded-3xl border bg-card p-6">
                      <div className="rounded-2xl bg-gradient-brand p-3 text-primary-foreground">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="font-semibold hover:text-primary-deep">
                            {c.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{c.value}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={100}>
                <EnquiryForm
                  submitLabel="Send message"
                  successText="Thanks for reaching out — we'll reply shortly."
                  fields={[
                    { name: "name", label: "Name", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Phone", type: "tel", required: true },
                    {
                      name: "enquiryType",
                      label: "Enquiry type",
                      type: "select",
                      options: ["General", "Franchise", "Support"],
                      required: true,
                    },
                    { name: "message", label: "Message", type: "textarea", required: true },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
