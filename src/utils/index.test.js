import {singleDigitConverter} from "./index";

describe('singleDigitConverter', () =>{
    // it('testSingleDigitConverter', () => {
    //     const value = false;
    //     console.log(singleDigitConverter(1));
    //     expect(value).toBe(true)
    //     }
    // )
    it.each([[0, ''],[1,'I'],[2,'II'],[4, 'IV'],[5, 'V'],[7, 'VII'],[8, 'VIII'],[9, 'IX']])('test RomanNumeralization for singles digit. %i', (input, expected) => {
        expect(singleDigitConverter(input)).toBe(expected);
    })
})