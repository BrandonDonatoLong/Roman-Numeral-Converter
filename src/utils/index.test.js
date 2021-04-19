import {decimal2RomanSingleDigitConverter, romanToDecimalSingleDigitConverter} from "./index";

describe.skip('singleDigitConverter', () =>{
    it.each([[-1, ''],[0, ''],[1,'I'],[2,'II'],[4, 'IV'],[5, 'V'],[7, 'VII'],[8, 'VIII'],[9, 'IX']])('test RomanNumeralization for singles digit. %i', (input, expected) => {
        expect(decimal2RomanSingleDigitConverter(input)).toBe(expected);
    })
})

describe('RomanNumeral to Decimal Single Digit Converter', () => {
    it.each([['XL', 40],['XXI', 21],['XIX', 19],['XI', 11],['X', 10], ['IX', 9], ['VIII', 8], ['V', 5], ['IV', 4], ['III', 3]])('test decimalization of roman numerals: %s', (input, expected) => {
        expect(romanToDecimalSingleDigitConverter((input))).toBe(expected);
    })
})