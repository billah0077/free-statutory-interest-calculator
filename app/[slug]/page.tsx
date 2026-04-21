import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { calculatorPath, siteUrl } from "@/lib/site";
import { getSeoPage, seoPages } from "@/lib/seo-pages";

type SeoContentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: SeoContentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  const canonicalUrl = `${siteUrl}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function SeoContentPage({ params }: SeoContentPageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const canonicalUrl = `${siteUrl}/${page.slug}`;

  return (
    <>
      <JsonLdSchema canonicalUrl={canonicalUrl} faqs={page.faqs} />
      <Header />
      <main>
        <section className="border-b border-slate-900/10 bg-[linear-gradient(180deg,rgba(247,244,238,0.9),rgba(255,255,255,1))]">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={calculatorPath}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Use the free calculator
              </Link>
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-950"
              >
                Join early access
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-16">
          <article className="space-y-6">
            {page.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-[0_24px_80px_rgba(20,33,61,0.08)]"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                Common questions
              </h2>
              <div className="mt-6 space-y-4">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <aside className="h-fit rounded-[2rem] border border-slate-900/10 bg-slate-950 p-6 text-slate-100 shadow-[0_24px_80px_rgba(20,33,61,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Calculate now
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Turn this into a claim value.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Use the free calculator to estimate overdue days, statutory
              interest, fixed compensation, and the total commercial debt claim.
            </p>
            <Link
              href={calculatorPath}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Open calculator
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
