import { check_year, day_in_month, check_date, date_has_passed, get_current_date_string, date_to_number } from "./DateFunctions";  

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

describe('Tests for the day_in_month function', () => {
    test('correct input returns true', () => {
        expect(day_in_month("01", "01")).toBe(true);
    })

    test('Month out of range returns false', () => {
        expect(day_in_month("13", "01")).toBe(false);
    })

    test('Day not in month returns false', () => {
        expect(day_in_month("02", "30")).toBe(false);
    })

    test('Random strings return false', () => {
        expect(day_in_month("x12kjao9", "pl131")).toBe(false);
    })
})

describe('Tests for the date_has_passed function', () => {
    test('Date of past year returns true', () => {
        expect(date_has_passed("2022-05-05")).toBe(true);
    })

    test('Date of past month and day returns true', () => {
        expect(date_has_passed('2023-01-02')).toBe(true);
    })

    test('Current year and month but past day returns true', () => {
        expect(date_has_passed('2023-02-20')).toBe(true); 
    })

    test('Current date returns false', () => {
        expect(date_has_passed(get_current_date_string())).toBe(false);
    })

    test('Future year returns false', () => {
        expect(date_has_passed("2050-05-05")).toBe(false);
    })
})

describe('Tests for the check_date function', () => {
    test('Correct input returns true', () => {
        const correct_date: string = "2023-05-02";
        expect(check_date(correct_date)).toBe(true);
    })

    test('Date is 29 of feb, leap year returns true', () => {
        const leap_year_date: string = "2024-02-29"
        expect(check_date(leap_year_date)).toBe(true); 
    })

    test('Wrong format date returns false', () => {
        const incorrect_date: string = "20230502";
        expect(check_date(incorrect_date)).toBe(false);
    })

    test('Wrong lenth string returns false', () => {
        const to_short: string = "2025-5-5";
        expect(check_date(to_short)).toBe(false);
    })

    test('Random string returns false', () => {
        const ran_string: string = "i191i09-1i-019";
        expect(check_date(ran_string)).toBe(false);
    })
})

describe('Tests for date_to_number function', () => {
    test('Input date turns into correct number', () => {
        expect(date_to_number("2023-02-02")).toBe(20230202)
    })
})