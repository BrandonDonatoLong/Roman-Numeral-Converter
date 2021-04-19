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
