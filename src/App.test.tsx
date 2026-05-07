import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /multi-step operations, approvals, and routing logic in one operator-grade control surface/i
      })
    ).toBeInTheDocument();
  });

  it("renders a workflow rule", () => {
    render(<App />);
    expect(screen.getByText(/enterprise legal escalation/i)).toBeInTheDocument();
  });
});
