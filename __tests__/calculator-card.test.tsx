import { fireEvent, render, screen } from "@testing-library/react";

import { CalculatorCard } from "@/components/calculator/CalculatorCard";

describe("CalculatorCard", () => {
  it("shows an empty state before valid inputs are present", () => {
    render(<CalculatorCard />);

    expect(
      screen.getByText(/enter invoice details above to calculate/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("shows the not overdue state when the due date has not passed", () => {
    render(<CalculatorCard />);

    fireEvent.change(screen.getByLabelText(/invoice amount/i), {
      target: { value: "1500" },
    });
    fireEvent.change(screen.getByLabelText(/due date/i), {
      target: { value: "2026-04-09" },
    });
    fireEvent.change(screen.getByLabelText(/today's date/i), {
      target: { value: "2026-04-09" },
    });

    expect(
      screen.getByText(/this invoice is not yet overdue/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/invoice amount/i)).toHaveAttribute(
      "aria-describedby",
      expect.stringContaining("invoiceAmount-help"),
    );
  });

  it("shows the legal claim and CTA when the invoice is overdue", () => {
    render(<CalculatorCard />);

    fireEvent.change(screen.getByLabelText(/invoice amount/i), {
      target: { value: "22000" },
    });
    fireEvent.change(screen.getByLabelText(/due date/i), {
      target: { value: "2026-02-23" },
    });
    fireEvent.change(screen.getByLabelText(/today's date/i), {
      target: { value: "2026-04-09" },
    });

    expect(screen.getByText(/45/)).toBeInTheDocument();
    expect(screen.getByText(/£22,418.70/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /get early access/i }),
    ).toBeInTheDocument();
  });

  it("accepts invoice amounts with mobile-style comma separators", () => {
    render(<CalculatorCard />);

    fireEvent.input(screen.getByLabelText(/invoice amount/i), {
      target: { value: "22,000" },
    });
    fireEvent.input(screen.getByLabelText(/due date/i), {
      target: { value: "2026-02-23" },
    });
    fireEvent.input(screen.getByLabelText(/today's date/i), {
      target: { value: "2026-04-09" },
    });

    expect(screen.queryByText(/enter the invoice amount/i)).not.toBeInTheDocument();
    expect(screen.getByText(/£22,418.70/)).toBeInTheDocument();
  });

  it("accepts day-first date entry for mobile text fallback inputs", () => {
    render(<CalculatorCard />);

    fireEvent.input(screen.getByLabelText(/invoice amount/i), {
      target: { value: "22000" },
    });
    fireEvent.input(screen.getByLabelText(/due date/i), {
      target: { value: "23/02/2026" },
    });
    fireEvent.input(screen.getByLabelText(/today's date/i), {
      target: { value: "09/04/2026" },
    });

    expect(screen.queryByText(/enter a valid due date/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/enter a valid today's date/i)).not.toBeInTheDocument();
    expect(screen.getByText(/£22,418.70/)).toBeInTheDocument();
  });
});
