# Free Statutory Interest Calculator

This project is a local Next.js app for calculating statutory interest on overdue UK commercial invoices.

It is built as the first public-facing PayForce asset:

- single page
- no login
- no database
- no backend
- formula-driven calculator for late B2B invoice claims

## What it does

The calculator lets a user enter:

- invoice amount
- due date
- today's date

It then calculates:

- days overdue
- daily interest
- accrued interest
- fixed statutory compensation
- total legal claim

## Formula used

This project follows the formula from the planning document:

```text
Statutory annual rate = 8% + Bank of England base rate
Current base rate used in MVP = 3.75%
Total annual rate = 11.75%

Daily interest = (invoice amount * 11.75%) / 365
Accrued interest = daily interest * days overdue

Fixed compensation:
- 40 GBP if invoice amount is below 1,000 GBP
- 70 GBP if invoice amount is 1,000 GBP to 9,999.99 GBP
- 100 GBP if invoice amount is 10,000 GBP or more

Total legal claim = invoice amount + accrued interest + fixed compensation
```

Important:

- The app follows the formula, not the inconsistent worked example in the source brief.
- If an invoice is not overdue yet, the app shows a `not yet overdue` state with zero interest and zero compensation.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Vitest
- Testing Library

## Local setup

From the project root:

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

The root route redirects to:

```text
/statutory-interest-calculator
```

## Useful commands

Run the dev server:

```powershell
npm run dev
```

Run lint:

```powershell
npm run lint
```

Run tests:

```powershell
npm test
```

Create a production build:

```powershell
npm run build
```

Preview the production build (recommended for mobile or cross-device testing):

```powershell
npm run preview
```

## Routes

- `/` -> redirects to `/statutory-interest-calculator`
- `/statutory-interest-calculator` -> main calculator page
- `/signup` -> placeholder CTA destination

## Manual test checklist

### 1. Basic page load

- Open `http://localhost:3000`
- Confirm the app redirects to `/statutory-interest-calculator`
- Confirm the page renders:
  - hero
  - calculator
  - explainer
  - FAQ
  - CTA sections

### 2. Main formula check

Use:

- invoice amount: `22000`
- due date: `2026-02-23`
- today's date: `2026-04-09`

Expected result:

- days overdue: `45`
- daily interest: about `GBP 7.08`
- accrued interest: `GBP 318.70`
- fixed compensation: `GBP 100.00`
- total legal claim: `GBP 22,418.70`

### 3. Not overdue check

Use:

- invoice amount: `1500`
- due date: today
- today's date: today

Expected result:

- not overdue message appears
- no accrued interest
- no fixed compensation

### 4. Compensation boundary checks

Use overdue dates for all of these:

- `999.99` -> compensation should be `GBP 40.00`
- `1000` -> compensation should be `GBP 70.00`
- `9999.99` -> compensation should be `GBP 70.00`
- `10000` -> compensation should be `GBP 100.00`

### 5. CTA checks

- Click calculator CTA buttons
- Confirm they go to `/signup`
- Click `Back to calculator`
- Confirm it returns to the calculator page

### 6. Responsive checks

Use browser dev tools and test:

- `375px`
- `768px`
- desktop width

Confirm:

- no horizontal scroll
- inputs remain usable
- CTA buttons remain visible
- text does not overlap or clip

## Automated verification

These commands should pass:

```powershell
npm run lint
npm test
npm run build
```

## Current limitations

- `/signup` is a placeholder page, not a real waitlist form yet
- no analytics integration
- no public deployment configured in this workspace
- no Bank of England live rate API

## Project structure

```text
app/
  page.tsx
  signup/page.tsx
  statutory-interest-calculator/page.tsx
components/
  calculator/
  layout/
  seo/
constants/
lib/
types/
__tests__/
```

## Notes

This project is intended for local use and validation first. If you want the next step, the most sensible follow-ups are:

1. replace `/signup` with a real waitlist or onboarding form
2. deploy to Vercel
3. connect the page to real PayForce product flow later
