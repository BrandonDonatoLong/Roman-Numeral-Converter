import React from "react";
import { Container, Typography } from "@material-ui/core";
import RomanConverter from "./RomanConverter";

// This component is the page component. I copied some text from wikipedia: https://en.wikipedia.org/wiki/Roman_numerals#Description previously I had Lorem Ipsum for mocking
const CalculatorPage = () => {
  return (
    <Container
      maxWidth={"lg"}
      align={"left"}
      style={{
        backgroundColor: "white",
        marginTop: "8px",
        paddingTop: "75px",
        paddingBottom: "10px",
      }}
    >
      <Typography
        gutterBottom
        variant={"h3"}
        style={{ borderBottom: "1px solid" }}
      >
        > History
      </Typography>
      <Typography gutterBottom paragraph variant={"body1"}>
        Roman numerals are essentially a decimal or "base 10" number system, but
        instead of place value notation (in which place-keeping zeros enable a
        digit to represent different powers of ten) it uses a set of symbols
        with fixed values. Tally-like combinations of these fixed symbols
        correspond to the digits of Arabic numerals. This structure allows for
        significant flexibility in notation, and many variant forms are
        attested.
      </Typography>
      <Typography gutterBottom paragraph variant={"body1"}>
        In fact, there has never been an officially binding, or universally
        accepted standard for Roman numerals. Usage in ancient Rome varied
        greatly and became thoroughly chaotic in medieval times. Even the
        post-renaissance restoration of a largely "classical" notation has
        failed to produce total consistency: variant forms are even defended by
        some modern writers as offering improved "flexibility". On the other
        hand, especially where a Roman numeral is considered a legally binding
        expression of a number, as in U.S. Copyright law (where an "incorrect"
        or ambiguous numeral may invalidate a copyright claim, or affect the
        termination date of the copyright period) it is desirable to strictly
        follow the usual style described below.
      </Typography>
      <Typography
        gutterBottom
        variant={"h3"}
        style={{ borderBottom: "1px solid" }}
      >
        > Roman Numeral Converter
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        Enter a Roman numeral or number and press the <i>Convert</i> button:
      </Typography>
      <RomanConverter />
    </Container>
  );
};
export default CalculatorPage;
