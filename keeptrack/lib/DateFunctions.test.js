"use strict";
exports.__esModule = true;
var DateFunctions_1 = require("./DateFunctions");
describe('Tests for the correct_year function', function () {
    test('If year is a year between 2023 and 2099 return true', function () {
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
