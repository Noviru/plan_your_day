"use strict";
exports.__esModule = true;
var DateFunctions_1 = require("./DateFunctions");
describe('Tests for the correct_year function', function () {
    test('If year is a year between current year and 2099 return true', function () {
        var in_range_year = "2050";
        expect((0, DateFunctions_1.check_year)(in_range_year)).toBe(true);
    });
    test('If year is out of range return false', function () {
        var out_of_range = "2020";
        expect((0, DateFunctions_1.check_year)(out_of_range)).toBe(false);
    });
    test('If year is not a number return false', function () {
        var incorrect_year = "2x90";
        expect((0, DateFunctions_1.check_year)(incorrect_year)).toBe(false);
    });
});
describe('Tests for the day_in_month function', function () {
    test('correct input returns true', function () {
        expect((0, DateFunctions_1.day_in_month)("01", "01")).toBe(true);
    });
    test('Month out of range returns false', function () {
        expect((0, DateFunctions_1.day_in_month)("13", "01")).toBe(false);
    });
    test('Day not in month returns false', function () {
        expect((0, DateFunctions_1.day_in_month)("02", "30")).toBe(false);
    });
    test('Random strings return false', function () {
        expect((0, DateFunctions_1.day_in_month)("x12kjao9", "pl131")).toBe(false);
    });
});
describe('Tests for the date_has_passed function', function () {
    test('Date of past year returns true', function () {
        expect((0, DateFunctions_1.date_has_passed)("2022-05-05")).toBe(true);
    });
    test('Date of past month and day returns true', function () {
        expect((0, DateFunctions_1.date_has_passed)('2023-01-02')).toBe(true);
    });
    test('Current year and month but past day returns true', function () {
        expect((0, DateFunctions_1.date_has_passed)('2023-02-20')).toBe(true);
    });
    test('Current date returns false', function () {
        expect((0, DateFunctions_1.date_has_passed)((0, DateFunctions_1.get_current_date_string)())).toBe(false);
    });
    test('Future year returns false', function () {
        expect((0, DateFunctions_1.date_has_passed)("2050-05-05")).toBe(false);
    });
});
describe('Tests for the check_date function', function () {
    test('Correct input returns true', function () {
        var correct_date = "2023-05-02";
        expect((0, DateFunctions_1.check_date)(correct_date)).toBe(true);
    });
    test('Date is 29 of feb, leap year returns true', function () {
        var leap_year_date = "2024-02-29";
        expect((0, DateFunctions_1.check_date)(leap_year_date)).toBe(true);
    });
    test('Wrong format date returns false', function () {
        var incorrect_date = "20230502";
        expect((0, DateFunctions_1.check_date)(incorrect_date)).toBe(false);
    });
    test('Wrong lenth string returns false', function () {
        var to_short = "2025-5-5";
        expect((0, DateFunctions_1.check_date)(to_short)).toBe(false);
    });
    test('Random string returns false', function () {
        var ran_string = "i191i09-1i-019";
        expect((0, DateFunctions_1.check_date)(ran_string)).toBe(false);
    });
});
describe('Test for date_to_number function', function () {
    test('Input date turns into correct number', function () {
        expect((0, DateFunctions_1.date_to_number)("2023-02-02")).toBe(20230202);
    });
});
