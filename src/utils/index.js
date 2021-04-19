export const decimal2RomanSingleDigitConverter = (digit) => {
    let romanNumeral = '';
    let counter = digit
    while(counter > 0) {
        if (counter === 9) {
            romanNumeral += 'IX'
            counter -= 9
        } else if (counter >= 5) {
            romanNumeral += 'V'
            counter -= 5;
        }else if ( counter === 4) {
            romanNumeral += 'IV';
            counter -= 4
        } else if (counter >= 1 ){
            romanNumeral += 'I'
            counter--;
        }
    }

    return romanNumeral
}

export const romanToDecimalSingleDigitConverter = (romanNumeral) => {
    let decimal = 0;
    let counter = romanNumeral

    while(counter.length> 0) {
        if( counter.indexOf('XL') === 0) {
            counter = counter.replace('XL', "");
            decimal += 40;
        } else if( counter.indexOf('X') === 0) {
            counter = counter.replace('X', "");
            decimal += 10;
        } else if (counter.indexOf('IX') === 0) {
            counter = counter.replace('IX', "")
            decimal += 9
        } else if (counter.indexOf('V') === 0 ) {
            counter = counter.replace('V', "")
            decimal += 5;
        }else if ( counter.indexOf('IV') === 0 ) {
            counter = counter.replace('IV', "")
            decimal += 4;
        } else if (counter.indexOf('I') === 0 ){
            counter = counter.replace('I', "")
            decimal++;
        }
    }

    return decimal
}