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
    let counter = romanNumeral;

    for (const key in this.romanToDecimalMap) {
      while (counter.indexOf(key) === 0) {
        counter = counter.replace(key, "");
        decimal += this.romanToDecimalMap[key];
      }
    }

    return decimal;
  };
}
export const decimal2RomanConverter = (digit) => {
  let romanNumeral = "";
  let counter = digit;
  for (const key in romanToDecimalMap) {
    while (counter >= romanToDecimalMap[key]) {
      counter -= romanToDecimalMap[key];
      romanNumeral += key;
    }
  }

  return romanNumeral;
};

export const romanToDecimalConverter = (romanNumeral) => {
  let decimal = 0;
  let counter = romanNumeral;

  for (const key in romanToDecimalMap) {
    while (counter.indexOf(key) === 0) {
      counter = counter.replace(key, "");
      decimal += romanToDecimalMap[key];
    }
  }

  return decimal;
};
