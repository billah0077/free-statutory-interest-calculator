import { render, screen } from "@testing-library/react";

import StatutoryInterestCalculatorPage from "@/app/statutory-interest-calculator/page";

describe("StatutoryInterestCalculatorPage", () => {
  it("renders the primary heading and FAQ section", () => {
    render(<StatutoryInterestCalculatorPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /uk late payment interest calculator for commercial invoices/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /common questions about statutory interest/i,
      }),
    ).toBeInTheDocument();
  });
});
