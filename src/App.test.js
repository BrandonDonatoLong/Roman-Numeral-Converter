import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the base app", () => {
  render(<App />);
  const historyHeader = screen.getByText(/History/i);
  expect(historyHeader).toBeInTheDocument();
});
