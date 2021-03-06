import { RomanNumerals } from "./index";
const decimalToRomanCases = [
  [-1, ""],
  ["abc1", ""],
  [0, ""],
  [2, "II"],
  [4, "IV"],
  [5, "V"],
  [7, "VII"],
  [9, "IX"],
  [10, "X"],
  [14, "XIV"],
  [21, "XXI"],
  [40, "XL"],
  [50, "L"],
  [88, "LXXXVIII"],
  [90, "XC"],
  [100, "C"],
  [300, "CCC"],
  [400, "CD"],
  [500, "D"],
  [700, "DCC"],
  [1888, "MDCCCLXXXVIII"],
];

const romanToDecimalCases = [
  ["MDCCCLXXXVIII", 1888],
  ["DCC", 700],
  ["D", 500],
  ["CD", 400],
  ["CcC", 300],
  ["C", 100],
  ["XCIX", 99],
  ["XC", 90],
  ["LXXXVIII", 88],
  ["L", 50],
  ["XLIX", 49],
  ["XL", 40],
  ["XXI", 21],
  ["XIX", 19],
  ["XAIX", 19],
  ["XAMIX", 1019],
  ["aXIa", 11],
  ["X", 10],
  ["IX", 9],
  ["VIII", 8],
  ["V", 5],
  ["IV", 4],
  ["III", 3],
  ["abefg", 0],
  ["", 0],
];
describe("singleDigitConverter", () => {
  // it("breakout test for failing cases", () => {
  //   expect(decimal2RomanConverter(24)).toBe("XXIV");
  // });
  it.each(decimalToRomanCases)(
    "test RomanNumeralization for singles digit: %i To Be %s",
    (input, expected) => {
      expect(RomanNumerals.toRoman(input)).toBe(expected);
    }
  );
});

describe("RomanNumeral to Decimal Single Digit Converter", () => {
  it.each(romanToDecimalCases)(
    "test decimalization of roman numerals: %s To Be %d",
    (input, expected) => {
      expect(RomanNumerals.fromRoman(input)).toBe(expected);
    }
  );
});
