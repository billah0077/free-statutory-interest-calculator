type FaqItem = {
  question: string;
  answer: string;
};

type JsonLdSchemaProps = {
  canonicalUrl: string;
  faqs: FaqItem[];
};

export function JsonLdSchema({ canonicalUrl, faqs }: JsonLdSchemaProps) {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free UK Statutory Interest Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description:
      "Calculate statutory interest on overdue commercial invoices in the UK under the Late Payment of Commercial Debts (Interest) Act 1998.",
    url: canonicalUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
