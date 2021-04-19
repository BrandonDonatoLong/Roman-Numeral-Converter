import {decimal2RomanConverter, romanToDecimalConverter} from "./index";
const decimalToRomanCases = [
    [-1, ''],[0, ''],[1,'I'],[2,'II'],[4, 'IV'],[5, 'V'],[7, 'VII'],[8, 'VIII'],[9, 'IX']
]

const romanToDecimalCases = [['MDCCCLXXXVIII',1888],['DCC', 700],['D', 500],['CD', 400],['CCC', 300],['C', 100],['XCIX', 99],['XC',90],['LXXXVIII', 88], ['L', 50], ['L', 50], ['XLIX', 49],['XL', 40],['XXI', 21],['XIX', 19],['XI', 11],['X', 10], ['IX', 9], ['VIII', 8], ['V', 5], ['IV', 4], ['III', 3]]
describe('singleDigitConverter', () =>{
    it.each(decimalToRomanCases)('test RomanNumeralization for singles digit: %i To Be %s', (input, expected) => {
        expect(decimal2RomanConverter(input)).toBe(expected);
    })
})

describe('RomanNumeral to Decimal Single Digit Converter', () => {
    it.each(romanToDecimalCases)('test decimalization of roman numerals: %s To Be %d', (input, expected) => {
        expect(romanToDecimalConverter((input))).toBe(expected);
    })
})