# Planning: Free Statutory Interest Calculator
## PayForce Lead Magnet and SEO Asset

---

## 1. Goal

Build a public-facing, single-page statutory interest calculator before any PayForce backend work.

This page exists for two reasons:

1. Lead capture from UK businesses already searching for late payment help
2. Organic SEO around "UK late payment interest calculator" style queries

Constraints from the product brief:

- No login
- No database
- No payment flow
- Single page
- Inputs are `invoice amount`, `due date`, and `today's date`

Estimated build time: 3 to 5 days.

---

## 2. MVP Scope

The calculator should let a visitor:

- Enter an invoice amount
- Enter the invoice due date
- Use today's date by default, but allow editing it
- Instantly see the statutory interest calculation
- See the fixed compensation amount
- See the total legal claim
- See a CTA into PayForce

The calculator should also explain, in plain English:

- What the Late Payment of Commercial Debts (Interest) Act 1998 allows
- That this applies to late B2B payments, not general consumer invoices
- That the output is an estimate and not legal advice

---

## 3. Calculation Rules

Use the formula described in the PayForce brief:

```text
Statutory annual rate = 8% + Bank of England base rate
Current base rate for MVP = 3.75%
Total annual rate = 11.75%

Daily interest = (invoice amount * 11.75%) / 365
Total interest = daily interest * days overdue

Fixed compensation:
- 40 GBP if invoice amount is less than 1,000 GBP
- 70 GBP if invoice amount is 1,000 GBP to 9,999.99 GBP
- 100 GBP if invoice amount is 10,000 GBP or more

Total legal claim = invoice amount + accrued interest + fixed compensation
```

Implementation rules:

- Treat the Bank of England base rate as a constant for MVP
- Show the base rate and a visible "last updated" label on the page
- Normalize dates to calendar days before calculating overdue days
- Ignore time-of-day to avoid timezone errors
- Keep calculation precision internally; round only for display
- If the invoice is not overdue yet, show zero interest, zero compensation, and a "not yet overdue" state

Example from the brief:

- Invoice amount: 22,000 GBP
- Days overdue: 45
- Daily interest: 7.09 GBP
- Accrued interest: 319.11 GBP
- Fixed compensation: 100 GBP
- Total legal claim: 22,419.11 GBP

---

## 4. Inputs

| Input | Type | Validation |
|---|---|---|
| Invoice Amount | Number | Required, greater than 0, max 2 decimals |
| Due Date | Date | Required |
| Today's Date | Date | Required, default to current date |

Notes:

- Do not add payment terms to MVP. The brief says the user enters the due date directly.
- A later enhancement can support `invoice date + payment terms`, but it should not shape the first build.

---

## 5. Outputs

| Output | Notes |
|---|---|
| Status | `Overdue` or `Not yet overdue` |
| Days Overdue | Whole calendar days |
| Daily Interest | GBP per day |
| Interest Accrued | Currency value |
| Fixed Compensation | 40 / 70 / 100 GBP |
| Total Legal Claim | Most prominent output |

Display rules:

- Update results live as the user edits inputs
- Use `en-GB` GBP formatting everywhere
- Make the total legal claim visually dominant
- If not overdue, keep the result card useful by explaining why no charge applies yet

---

## 6. Technical Approach

Recommended stack:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Vercel for the first deployment

Implementation principles:

- Keep the calculation engine pure and framework-agnostic
- Put all calculation logic in a small utility module with tests
- Keep most page content server-rendered for SEO
- Use client-side interactivity only for the calculator form and live results
- Avoid over-engineering; this does not need a backend, API routes, or a complex state layer

---

## 7. Page Structure

Recommended page sections:

1. Header with PayForce branding and primary CTA
2. Hero with the core promise
3. Calculator section
4. Short explainer about statutory interest
5. FAQ section
6. Secondary CTA
7. Footer with legal disclaimer

UX goals:

- Fast to understand on first load
- Strong mobile layout
- Clear trust signals
- No unnecessary friction before showing the result

---

## 8. SEO Requirements

Primary target keyword:

- `UK late payment interest calculator`

Secondary targets:

- `statutory interest calculator UK`
- `late payment act calculator`
- `how to calculate late payment interest UK`
- `8% statutory interest calculator`

On-page requirements:

- Primary keyword in the H1
- Clear title and meta description
- Clean route such as `/statutory-interest-calculator`
- FAQ structured data
- Web application structured data
- Indexable explainer copy on the page

---

## 9. Conversion Requirements

This is not just a utility page. It must push qualified visitors toward PayForce.

Minimum conversion elements:

- CTA directly below or beside the results
- Copy that connects the manual calculation to PayForce automation
- A secondary CTA later on the page

Suggested result-to-CTA flow:

```text
Visitor enters invoice details
-> sees what they are legally owed
-> understands this can be claimed professionally
-> sees CTA: "PayForce can handle this automatically"
```

---

## 10. Legal and Content Requirements

The page must state:

- The calculation is based on the Late Payment of Commercial Debts (Interest) Act 1998
- The current Bank of England base rate used in the calculation
- The date that base rate was last updated
- This tool is an estimate and does not constitute legal advice
- The calculator is intended for late commercial payments, not general consumer debt scenarios

The disclaimer should be visible on the page, not buried behind another route.

---

## 11. Suggested Project Structure

```text
app/
  layout.tsx
  page.tsx
  statutory-interest-calculator/
    page.tsx
components/
  calculator/
    CalculatorCard.tsx
    InputForm.tsx
    ResultsDisplay.tsx
    CTABanner.tsx
  layout/
    Header.tsx
    Footer.tsx
  seo/
    JsonLdSchema.tsx
lib/
  calculations.ts
  date.ts
constants/
  rates.ts
types/
  calculator.ts
__tests__/
  calculations.test.ts
```

Notes:

- A dedicated custom hook is optional, not required for MVP
- Add a small `date.ts` helper if needed to normalize dates safely

---

## 12. Testing Requirements

Critical unit tests:

- Compensation threshold boundaries: 999.99, 1,000, 9,999.99, 10,000
- Example from the brief: 22,000 GBP and 45 overdue days
- Due date equals today
- Future due date
- Decimal invoice amount
- Large invoice amount
- Date normalization across local timezone boundaries

Manual checks:

- Mobile layout at small viewport widths
- Desktop layout
- Empty state
- Invalid input state
- Result formatting and copy clarity

---

## 13. Definition of Done

The calculator is ready to build confidence and ship when:

- The calculation logic is correct and covered by tests
- The 22,000 GBP / 45 days example displays 22,419.11 GBP
- The page works well on mobile and desktop
- The legal disclaimer is visible
- The route is SEO-ready
- The page contains at least one working PayForce CTA
- There is no backend or auth dependency

---

## 14. Non-MVP Items

Do not let these expand the first build:

- Email capture flow
- Save/share calculation
- Batch invoice support
- Live Bank of England rate API
- PDF export
- Waitlist system with backend
- Invoice date plus payment terms workflow

These can be added later if the first version proves useful.
