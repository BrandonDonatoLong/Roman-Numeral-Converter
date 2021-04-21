// here I chose a class because it seemed the easiest way to get the requested RomanNumerals.toRoman and
// RomanNumerals.fromRoman format. Made it static for ease of use because there is nothing in here that should be kept
// instanced.
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

  //This looping came fairly naturally. I have that in my commit history and will point it out on the readme.
  // I started out by bruteforcing the singles digit. Then I noticed that so much was reused. I landed on this loop structure.
  // For the toRoman format I don't have any verification because the input is a set of numbers coming from here. If a
  // mix of numbers and letters are passed. It defaults to NaN and the returns 0. So it fails pretty silently.
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

  // This method needed a little more verification. Because the keys I am working with are all capital the first
  // verification was setting the whole string to uppercase. The next part of verification came from the description.
  // "skipping any digit with a value of zero".
  // The easiest way to accomplish that was because I am already looping through all known digits. If it finishes and
  // it doesn't find any known digits. which I track with a boolean then it will skip over that digit. Unfortunately
  // this added another loop to the mix. Making the total number of nested loops be 3. I would have liked to do this
  // another way but the best other solution I could think of was to use another function to "scrub" the input so it
  // would be running the for-in loop to completion anyway so it seemed fitting to just put the check in the main loop
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
