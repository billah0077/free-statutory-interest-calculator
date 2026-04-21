import { calculatorPath } from "./site";

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "late-payment-interest-calculator-uk",
    title: "Late Payment Interest Calculator UK | PayForce",
    description:
      "Use a free UK late payment interest calculator for overdue commercial invoices, statutory interest, fixed compensation, and total claim value.",
    eyebrow: "UK late payment interest",
    h1: "Late payment interest calculator for UK commercial invoices",
    intro:
      "Use this guide to understand how statutory interest is calculated on overdue B2B invoices in the UK, then use the calculator to estimate the interest, compensation, and total claim.",
    sections: [
      {
        title: "What the calculator estimates",
        body: [
          "The calculator estimates overdue days, daily statutory interest, accrued interest, fixed statutory compensation, and the total amount that may be claimed on an overdue commercial invoice.",
          "It is designed for UK business-to-business debts, not consumer debts. Contract terms, payment disputes, and industry-specific rules can affect whether a claim is appropriate.",
        ],
      },
      {
        title: "How the interest figure is calculated",
        body: [
          "The standard statutory interest formula is invoice amount multiplied by the annual statutory rate, divided by 365, then multiplied by the number of overdue days.",
          "For this MVP calculator, the annual statutory rate is 11.75%, made up of 8% plus a Bank of England base rate of 3.75%.",
        ],
      },
      {
        title: "What to do after calculating",
        body: [
          `After calculating the claim, go back to the ${calculatorPath} page and use the result as a starting point for a professional payment reminder or recovery workflow.`,
          "Keep a copy of the invoice, payment terms, due date, calculation date, and any communication with the debtor before taking further action.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I charge late payment interest in the UK?",
        answer:
          "UK businesses may be able to charge statutory interest on overdue B2B invoices under the Late Payment of Commercial Debts (Interest) Act 1998, subject to the commercial relationship and contract context.",
      },
      {
        question: "Does the calculator apply to consumer invoices?",
        answer:
          "No. This calculator is intended for commercial debts between businesses. Consumer debts are outside its intended scope.",
      },
    ],
  },
  {
    slug: "how-to-claim-late-payment-interest-uk",
    title: "How to Claim Late Payment Interest in the UK | PayForce",
    description:
      "Learn the practical steps for claiming late payment interest on overdue UK commercial invoices, including calculation, evidence, and next action.",
    eyebrow: "Claim process",
    h1: "How to claim late payment interest in the UK",
    intro:
      "Before escalating an overdue invoice, calculate the statutory interest and compensation, confirm that the invoice is genuinely overdue, and prepare a clear written demand.",
    sections: [
      {
        title: "Step 1: Confirm the debt is overdue",
        body: [
          "Start with the invoice due date and the payment terms agreed with the customer. Interest should only be calculated after the invoice is overdue.",
          "If there is a genuine dispute over the goods, services, or invoice amount, resolve that issue before relying on a statutory interest calculation.",
        ],
      },
      {
        title: "Step 2: Calculate interest and compensation",
        body: [
          "Use the calculator to estimate the number of overdue days, the daily interest amount, accrued interest, fixed compensation, and total claim.",
          "The fixed compensation tier depends on the invoice amount: 40 GBP below 1,000 GBP, 70 GBP from 1,000 GBP to 9,999.99 GBP, and 100 GBP from 10,000 GBP upward.",
        ],
      },
      {
        title: "Step 3: Send a professional demand",
        body: [
          "A clear demand should include the original invoice amount, invoice number, due date, days overdue, interest calculation, compensation amount, and total requested payment.",
          "Avoid vague language. A specific claim value is easier for the debtor to understand and harder to ignore.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a solicitor to claim late payment interest?",
        answer:
          "Not always. Many businesses start with a formal payment reminder. A solicitor may be useful for disputed, high-value, or court-stage claims.",
      },
      {
        question: "Can I add compensation as well as interest?",
        answer:
          "For qualifying commercial debts, fixed statutory compensation may be added alongside statutory interest. The amount depends on the invoice value.",
      },
    ],
  },
  {
    slug: "late-payment-compensation-uk",
    title: "Late Payment Compensation UK | PayForce",
    description:
      "Understand UK late payment compensation tiers for overdue commercial invoices and calculate compensation alongside statutory interest.",
    eyebrow: "Fixed compensation",
    h1: "Late payment compensation in the UK",
    intro:
      "UK businesses may be able to add fixed compensation to an overdue commercial invoice claim. The compensation tier is based on the invoice amount.",
    sections: [
      {
        title: "The compensation tiers",
        body: [
          "For invoices below 1,000 GBP, the fixed compensation amount used by this calculator is 40 GBP.",
          "For invoices from 1,000 GBP to 9,999.99 GBP, the fixed compensation amount used by this calculator is 70 GBP.",
          "For invoices of 10,000 GBP or more, the fixed compensation amount used by this calculator is 100 GBP.",
        ],
      },
      {
        title: "How compensation fits with interest",
        body: [
          "Compensation is separate from statutory interest. Interest grows with the number of overdue days, while compensation is a fixed amount based on invoice value.",
          "The calculator combines invoice principal, accrued interest, and fixed compensation so the total claim is visible in one place.",
        ],
      },
      {
        title: "When to be careful",
        body: [
          "If the invoice is not yet overdue, compensation should not be included in the claim.",
          "If the customer disputes the invoice, treat the calculator result as an estimate and consider professional advice before escalation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is late payment compensation automatic?",
        answer:
          "The calculator can estimate the amount, but whether it should be claimed depends on the commercial debt, payment terms, and dispute context.",
      },
      {
        question: "Does compensation increase every day?",
        answer:
          "No. Fixed compensation is based on the invoice amount. The interest portion increases as the number of overdue days increases.",
      },
    ],
  },
  {
    slug: "commercial-debt-interest-calculator",
    title: "Commercial Debt Interest Calculator UK | PayForce",
    description:
      "Calculate interest on overdue UK commercial debts, including statutory interest, compensation, and the total estimated claim.",
    eyebrow: "Commercial debt",
    h1: "Commercial debt interest calculator for UK invoices",
    intro:
      "Commercial debt interest calculations help turn an overdue invoice into a clear claim value that includes principal, statutory interest, and fixed compensation.",
    sections: [
      {
        title: "Who this is for",
        body: [
          "This calculator is for UK businesses dealing with overdue B2B invoices. It is useful for agencies, consultants, suppliers, contractors, freelancers, and small companies.",
          "It is not intended for consumer debts or personal lending situations.",
        ],
      },
      {
        title: "Why commercial debt needs a precise calculation",
        body: [
          "A debtor can ignore vague reminders more easily than a specific claim showing the invoice amount, daily interest, accrued interest, compensation, and total due.",
          "A repeatable calculation also helps internal teams keep the claim updated as more days pass.",
        ],
      },
      {
        title: "Use the calculator before escalation",
        body: [
          "Calculate the commercial debt interest before sending a demand, involving a collection partner, or deciding whether further legal action is proportionate.",
          "The result is a practical starting point, not a replacement for legal advice in complex disputes.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a commercial debt?",
        answer:
          "A commercial debt is money owed in a business context, such as an unpaid B2B invoice for goods or services.",
      },
      {
        question: "Can statutory interest apply to all commercial debts?",
        answer:
          "Not necessarily. The commercial relationship, contract terms, due date, and dispute context can affect whether statutory interest is appropriate.",
      },
    ],
  },
  {
    slug: "late-payment-of-commercial-debts-act-1998",
    title: "Late Payment of Commercial Debts Act 1998 | PayForce",
    description:
      "A practical overview of the Late Payment of Commercial Debts (Interest) Act 1998 for UK commercial invoice interest and compensation.",
    eyebrow: "Legal framework",
    h1: "Late Payment of Commercial Debts (Interest) Act 1998",
    intro:
      "The Late Payment of Commercial Debts (Interest) Act 1998 gives UK businesses a statutory route to charge interest on qualifying overdue commercial debts.",
    sections: [
      {
        title: "What the Act is used for",
        body: [
          "The Act is commonly used when a business invoice is overdue and the creditor wants to calculate statutory interest and fixed compensation.",
          "It supports a more structured recovery process by turning an unpaid invoice into a clear claim with defined numbers.",
        ],
      },
      {
        title: "The core calculation",
        body: [
          "The calculation starts with the invoice amount, the annual statutory rate, and the number of overdue days.",
          "For this calculator MVP, the annual statutory rate is 11.75%, based on 8% plus a Bank of England base rate of 3.75%.",
        ],
      },
      {
        title: "What the calculator does not decide",
        body: [
          "The calculator does not decide whether your contract overrides or affects the claim, whether the invoice is disputed, or whether legal action is appropriate.",
          "It gives a practical estimate for general information and should be checked against the facts of the specific debt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this page legal advice?",
        answer:
          "No. This page and calculator provide general information only. They are not legal advice and do not replace a qualified solicitor.",
      },
      {
        question: "Why does the calculator use 11.75%?",
        answer:
          "For this MVP, the calculator uses 8% plus a Bank of England base rate of 3.75%, producing an annual statutory rate of 11.75%.",
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}
