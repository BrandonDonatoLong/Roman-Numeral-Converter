import { configure, fireEvent, render, screen } from "@testing-library/react";
import RomanConverter from "./RomanConverter";

configure({ testIdAttribute: "data-test-id" });

describe("integration Tests for calculator component", () => {
  it("renders decimal text field to verify the component is being rendered", () => {
    const { getByTestId } = render(<RomanConverter />);

    expect(getByTestId("decimal-text-field")).toBeInTheDocument();
  });

  it("Inputs a number into the decimal field and convert", () => {
    const { getByTestId } = render(<RomanConverter />);

    fireEvent.change(screen.getByLabelText("Decimal Number"), {
      target: { value: "123" },
    });
    fireEvent.click(getByTestId("decimal-convert-button"));
    expect(screen.getByLabelText("Roman Numeral").value).toBe("CXXIII");
  });

  it("Inputs a number into the roman numeral field and convert", () => {
    const { getByTestId } = render(<RomanConverter />);

    fireEvent.change(screen.getByLabelText("Roman Numeral"), {
      target: { value: "MCCXXXIV" },
    });
    fireEvent.click(getByTestId("roman-convert-button"));
    expect(screen.getByLabelText("Decimal Number").value).toBe("1234");
  });
});
