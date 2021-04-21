import { configure, fireEvent, render, screen } from "@testing-library/react";
import RomanConverter from "./RomanConverter";

//I prefer to assign data-test-ids to all testable components and then use that for testing in react-testing-library.
// However as I was playing with it. The MaterialUI library I am using for UI elements doesn't provide a nice way to
// select and interact with the text fields. This lead to some problems so I used the less reliable "getByLabelText"
// Which of course means that if you change the label text then it would fail. Same with if you ran a translation
// service through here it would fail.

// One way I could have solved this was by forwarding the data-test-id to the actual input field through the inputProps
// prop offered by materialUI. If I were to design a design system off Material UI I would definitely
// automatically forward the test IDs to the input in the wrapper for the textArea.
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
