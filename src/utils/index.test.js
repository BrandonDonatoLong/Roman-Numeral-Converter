import {decimal2RomanSingleDigitConverter} from "./index";

describe('singleDigitConverter', () =>{
    it.each([[-1, ''],[0, ''],[1,'I'],[2,'II'],[4, 'IV'],[5, 'V'],[7, 'VII'],[8, 'VIII'],[9, 'IX']])('test RomanNumeralization for singles digit. %i', (input, expected) => {
        expect(decimal2RomanSingleDigitConverter(input)).toBe(expected);
    })
})