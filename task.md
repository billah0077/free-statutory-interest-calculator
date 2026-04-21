# Task List: Free Statutory Interest Calculator
## PayForce Implementation Tasks

> Reference: `planning.md`
> Owner: Rafi
> Target completion: 3 to 5 days
> Scope: Single-page calculator MVP only

---

## Phase 0: Project Setup

### TASK-001: Initialize the app
- [ ] Create a new Next.js app with TypeScript, Tailwind CSS, and App Router
- [ ] Remove starter boilerplate
- [ ] Confirm the app runs locally before building features

### TASK-002: Create the base structure
- [ ] Create `app/statutory-interest-calculator/page.tsx`
- [ ] Create `components/calculator/`
- [ ] Create `components/layout/`
- [ ] Create `components/seo/`
- [ ] Create `lib/`, `constants/`, `types/`, and `__tests__/`

### TASK-003: Set up test tooling
- [ ] Install and configure the chosen test runner
- [ ] Confirm unit tests can run locally before writing calculator tests

---

## Phase 1: Calculation Engine

### TASK-004: Define calculator types
- [ ] Create `types/calculator.ts`
- [ ] Define input and result types for the calculator
- [ ] Include a result flag for overdue vs not overdue

### TASK-005: Define constants
- [ ] Create `constants/rates.ts`
- [ ] Add the Bank of England base rate constant for MVP: `3.75%`
- [ ] Add the statutory addition: `8%`
- [ ] Add the total annual statutory rate
- [ ] Add the compensation thresholds: 40 / 70 / 100 GBP
- [ ] Add a visible `last updated` label value for the UI

### TASK-006: Implement pure calculation utilities
- [ ] Create `lib/date.ts` for safe day-based date normalization
- [ ] Create `lib/calculations.ts`
- [ ] Implement:
  - [ ] `getDaysOverdue()`
  - [ ] `getDailyInterest()`
  - [ ] `getInterestAccrued()`
  - [ ] `getFixedCompensation()`
  - [ ] `calculateStatutoryInterest()`
- [ ] Ensure time-of-day does not affect overdue day counts
- [ ] Return a `not overdue` result state when the due date is today or in the future
- [ ] Keep internal precision and round only display values in the UI layer

### TASK-007: Add calculation tests
- [ ] Create `__tests__/calculations.test.ts`
- [ ] Cover compensation boundaries:
  - [ ] `999.99 => 40`
  - [ ] `1000 => 70`
  - [ ] `9999.99 => 70`
  - [ ] `10000 => 100`
- [ ] Cover the brief example:
  - [ ] `22000`, `45 days overdue` => `22419.11 total legal claim`
- [ ] Cover date cases:
  - [ ] due date is today
  - [ ] due date is in the future
  - [ ] date normalization behaves correctly across local timezone boundaries
- [ ] Cover decimal invoice amounts and large values
- [ ] Run tests and fix calculation issues before moving on

---

## Phase 2: Calculator UI

### TASK-008: Build the input form
- [ ] Create `components/calculator/InputForm.tsx`
- [ ] Add fields for:
  - [ ] invoice amount
  - [ ] due date
  - [ ] today's date
- [ ] Provide labels and inline validation states
- [ ] Default today's date on first render
- [ ] Update results live as inputs change

### TASK-009: Build the results panel
- [ ] Create `components/calculator/ResultsDisplay.tsx`
- [ ] Show an empty state before valid inputs exist
- [ ] Show a clear `not yet overdue` state when applicable
- [ ] Show when overdue:
  - [ ] days overdue
  - [ ] daily interest
  - [ ] accrued interest
  - [ ] fixed compensation
  - [ ] total legal claim
- [ ] Format all currency values in `en-GB` GBP
- [ ] Surface the annual rate and rate last-updated label

### TASK-010: Build the PayForce CTA block
- [ ] Create `components/calculator/CTABanner.tsx`
- [ ] Position it close to the results
- [ ] Connect the message to PayForce automation
- [ ] Link to a placeholder signup or waitlist route

### TASK-011: Build the calculator wrapper
- [ ] Create `components/calculator/CalculatorCard.tsx`
- [ ] Manage the three input states here unless a hook becomes clearly necessary
- [ ] Use the pure calculation utilities directly
- [ ] Keep the layout responsive: stacked on mobile, split on wider screens

---

## Phase 3: Page and Content

### TASK-012: Build shared layout pieces
- [ ] Create `components/layout/Header.tsx`
- [ ] Create `components/layout/Footer.tsx`
- [ ] Include a visible legal disclaimer in the footer or lower page content

### TASK-013: Build SEO schema support
- [ ] Create `components/seo/JsonLdSchema.tsx`
- [ ] Add `WebApplication` structured data
- [ ] Add `FAQPage` structured data once FAQ copy exists

### TASK-014: Write the calculator page
- [ ] Build `app/statutory-interest-calculator/page.tsx`
- [ ] Include, in order:
  - [ ] hero
  - [ ] calculator
  - [ ] explainer section
  - [ ] FAQ section
  - [ ] secondary CTA
- [ ] Ensure the H1 targets the primary keyword

### TASK-015: Add metadata
- [ ] Add page title, description, canonical URL, and Open Graph metadata
- [ ] Use a production URL placeholder if the final domain is not decided yet

### TASK-016: Write explainer and FAQ copy
- [ ] Explain what the Act does in plain English
- [ ] State that this applies to late B2B commercial payments
- [ ] Explain the `8% + Bank of England base rate` rule
- [ ] Explain the `40 / 70 / 100 GBP` fixed compensation tiers
- [ ] Include FAQ entries for the highest-intent search questions

---

## Phase 4: Styling, Accessibility, and Polish

### TASK-017: Add page styling
- [ ] Define a clear PayForce visual direction
- [ ] Keep the result card legible and prominent
- [ ] Avoid generic boilerplate styling
- [ ] Make mobile readability a first-class requirement

### TASK-018: Accessibility pass
- [ ] Ensure every input has a label
- [ ] Link validation messages properly
- [ ] Use `aria-live="polite"` for result updates if needed
- [ ] Check color contrast and keyboard order

### TASK-019: Responsive QA
- [ ] Test mobile width around `375px`
- [ ] Test tablet width around `768px`
- [ ] Test desktop width around `1280px`
- [ ] Fix overflow, clipping, and cramped result layouts

---

## Phase 5: Final Verification and Launch Prep

### TASK-020: Manual calculation audit
- [ ] Verify a few calculations by hand
- [ ] Reconfirm the `22000 / 45 days` brief example exactly matches `22419.11`
- [ ] Check that not-overdue invoices show zero interest and zero compensation

### TASK-021: Performance and SEO checks
- [ ] Run Lighthouse locally or on a preview build
- [ ] Check performance, accessibility, and SEO scores
- [ ] Confirm metadata and structured data render correctly

### TASK-022: Deployment prep
- [ ] Decide the production route or domain
- [ ] Confirm CTA targets are valid
- [ ] Deploy to the chosen hosting target
- [ ] Verify the public page after deployment

---

## Definition of Done

The calculator is done when:

- [ ] The calculation engine is correct and tested
- [ ] The page clearly explains the result
- [ ] The legal disclaimer is visible
- [ ] The mobile layout is solid
- [ ] The route is SEO-ready
- [ ] The page includes a working PayForce CTA
- [ ] No backend, auth, or database work was introduced
