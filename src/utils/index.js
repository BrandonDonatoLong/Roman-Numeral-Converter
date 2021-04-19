const romanToDecimalMap = {M:1000, CM: 900, D:500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX:9, V:5, IV:4, I:1}

export const decimal2RomanConverter = (digit) => {
    let romanNumeral = '';
    let counter = digit
    while(counter > 0) {
        for (const key in romanToDecimalMap) {
            if (counter >= romanToDecimalMap[key]) {
                counter -= romanToDecimalMap[key];
                romanNumeral += key;
            }
        }
    }

    return romanNumeral
}

export const romanToDecimalConverter = (romanNumeral) => {
    let decimal = 0;
    let counter = romanNumeral

    while(counter.length> 0) {
        for (const key in romanToDecimalMap) {
            if (counter.indexOf(key) === 0) {
                counter = counter.replace(key, "");
                decimal += romanToDecimalMap[key];
            }
        }
    }

    return decimal
}