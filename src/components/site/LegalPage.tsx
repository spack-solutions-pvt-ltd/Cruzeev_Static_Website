import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { LegalDoc } from "@/lib/legal-content";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-deep hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: November 10, 2026 · Contact email: <a className="text-primary-deep hover:underline" href="mailto:support@cruzeev.in">support@cruzeev.in</a>
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
            <aside className="hidden lg:block">
              <nav aria-label="Contents" className="sticky top-28 rounded-2xl border bg-card p-5 text-sm">
                <p className="mb-3 font-semibold">Contents</p>
                <ol className="space-y-2 text-muted-foreground">
                  {doc.sections.map((s, i) => (
                    <li key={s.title}><a href={`#${slug(s.title)}`} className="hover:text-primary-deep">{i + 1}. {s.title}</a></li>
                  ))}
                </ol>
              </nav>
            </aside>
            <article className="max-w-3xl rounded-3xl border bg-card p-6 leading-relaxed text-muted-foreground shadow-soft md:p-10">
              {doc.intro.map((p) => <p key={p} className="mb-4">{p}</p>)}
              {doc.sections.map((s, i) => (
                <section key={s.title} id={slug(s.title)} className="mt-10">
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    <span className="text-primary-deep">{i + 1}.</span> {s.title}
                  </h2>
                  {s.body.map((b, j) =>
                    typeof b === "string" ? <p key={j} className="mb-3">{b}</p> : (
                      <ul key={j} className="mb-3 list-disc space-y-1.5 pl-6 marker:text-primary">{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
                    ),
                  )}
                  {s.address && (
                    <address className="mt-4 rounded-2xl bg-primary-soft p-5 not-italic text-foreground">
                      <strong>JCD ELECTRIC PRIVATE LIMITED</strong><br />
                      1-10/ACS/D/2007, Nallagandla Tellapur Road,<br />
                      Hyderabad, Rangareddy, Telangana - 500019<br />
                      Email: <a className="text-primary-deep hover:underline" href="mailto:support@cruzeev.in">support@cruzeev.in</a> | Phone: <a className="text-primary-deep hover:underline" href="tel:+917989048025">7989048025</a>
                    </address>
                  )}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const legalHead = (title: string, path: string, desc: string) => ({
  meta: [
    { title: `${title} | CRUZE ev` },
    { name: "description", content: desc },
    { property: "og:title", content: `${title} | CRUZE ev` },
    { property: "og:description", content: desc },
    { property: "og:type", content: "article" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary" },
  ],
  links: [{ rel: "canonical", href: path }],
});
