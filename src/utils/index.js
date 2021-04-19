

export const singleDigitConverter = (digit) => {
    let romanNumeral = '';
    let counter = digit
    // if (counter === 9) {
    //     return 'IX'
    // }
    while(counter > 0 ){
        console.log(counter)
        switch (counter){
            case counter === 9:
                console.log('nine break');
                romanNumeral += 'IX';
                counter -= 9;
                break;
            case counter >= 5:
                console.log('5 break');
                romanNumeral += 'V';
                counter -= 5;
                break;
            case counter === 4:
                console.log('4 break');
                romanNumeral += 'IV';
                counter -= 4;
                break;
            case counter >= 1:
                console.log('1 break');
                romanNumeral += 'I';
                counter--;
                break;
        }
    }
    console.log(romanNumeral);
    return romanNumeral
}
