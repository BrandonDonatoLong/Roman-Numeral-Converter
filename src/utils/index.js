export class RomanNumerals {
  static romanToDecimalMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  static toRoman = (digit) => {
    let romanNumeral = "";
    let counter = digit;
    for (const key in this.romanToDecimalMap) {
      while (counter >= this.romanToDecimalMap[key]) {
        counter -= this.romanToDecimalMap[key];
        romanNumeral += key;
      }
    }

    return romanNumeral;
  };

  static fromRoman = (romanNumeral) => {
    let decimal = 0;
    // force an upper case just in case the input is not kosher
    let tempRomanNumeral = romanNumeral.toUpperCase();

    // need this top loop to handle removal if the sting isn't a part of roman decimal library
    while (tempRomanNumeral.length !== 0) {
      let found = false;
      for (const key in this.romanToDecimalMap) {
        while (tempRomanNumeral.indexOf(key) === 0) {
          found = true;
          tempRomanNumeral = tempRomanNumeral.replace(key, "");
          decimal += this.romanToDecimalMap[key];
        }
      }
      if (!found) {
        tempRomanNumeral = tempRomanNumeral.substr(
          1,
          tempRomanNumeral.length - 1
        );
      }
    }

    return decimal;
  };
}
