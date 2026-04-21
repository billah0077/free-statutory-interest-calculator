import { render, screen } from "@testing-library/react";

import SignupPage from "@/app/signup/page";

describe("SignupPage", () => {
  it("renders the embedded signup page content", () => {
    render(<SignupPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /join the payforce waitlist/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /back to calculator/i }),
    ).toBeInTheDocument();

    expect(screen.getByTitle(/payforce early access form/i)).toBeInTheDocument();
  });
});
