import React, { useState } from "react";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { RomanNumerals } from "../utils";

const RomanConverter = () => {
  const [decimal, setDecimal] = useState("");
  const [roman, setRoman] = useState("");

  return (
    <Card
      align="center"
      style={{
        backgroundColor: "lightyellow",
        marginBottom: "20px",
        padding: "15px",
      }}
    >
      <Grid style={{ paddingBottom: "8px" }}>
        <TextField
          variant={"filled"}
          label={"Decimal Number"}
          id={"decimal-number-input"}
          type={"number"}
          value={decimal}
          data-test-id={"decimal-text-field"}
          style={{ paddingRight: "10px", width: "330px" }}
          size={"small"}
          onChange={(e) => setDecimal(e.target.value)}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          size={"large"}
          style={{ width: "306px" }}
          data-test-id={"decimal-convert-button"}
          onClick={() => setRoman(RomanNumerals.toRoman(decimal))}
        >
          Convert To Roman Numerals
        </Button>
      </Grid>
      <Grid style={{ paddingBottom: "8px" }}>
        <TextField
          variant={"filled"}
          label={"Roman Numeral"}
          id={"roman-number-input"}
          data-test-id={"roman-text-field"}
          size={"small"}
          style={{ paddingRight: "10px", width: "330px" }}
          value={roman}
          onChange={(e) => setRoman(e.target.value)}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          data-test-id={"roman-convert-button"}
          size={"large"}
          style={{ width: "306px" }}
          onClick={() => setDecimal(RomanNumerals.fromRoman(roman))}
        >
          Convert From Roman Numerals
        </Button>
      </Grid>
    </Card>
  );
};

export default RomanConverter;
