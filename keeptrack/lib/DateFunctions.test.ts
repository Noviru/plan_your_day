import { is_number, check_year } from "./DateFunctions";  

describe('Tests for the correct_year function', () => {
    test('If year is a year between current year and 2099 return true', () => {
        const in_range_year: string = "2050";
        expect(check_year(in_range_year)).toBe(true);
    })
    
    test('If year is out of range return false', () => {
        const out_of_range: string = "2020";
        expect(check_year(out_of_range)).toBe(false);
    })

    test('If year is not a number return false', () => {
        const incorrect_year: string = "2x90";
        expect(check_year(incorrect_year)).toBe(false);
    })
})