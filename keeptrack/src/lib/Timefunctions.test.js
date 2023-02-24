"use strict";
exports.__esModule = true;
var Timefunctions_1 = require("./Timefunctions");
describe('Tests for check_hours function', function () {
    test("correct input returns true", function () {
        expect((0, Timefunctions_1.check_hours)("15")).toBe(true);
    });
    test("Hours out of range returns false", function () {
        expect((0, Timefunctions_1.check_hours)("25")).toBe(false);
    });
    test("Random string returns false", function () {
        expect((0, Timefunctions_1.check_hours)("dk")).toBe(false);
    });
});
describe("Tests for check_minutes function", function () {
    test("correct input returns true", function () {
        expect((0, Timefunctions_1.check_minutes)("30")).toBe(true);
    });
    test("Minutes out of range returns false", function () {
        expect((0, Timefunctions_1.check_minutes)("60")).toBe(false);
    });
    test("Random string returns false", function () {
        expect((0, Timefunctions_1.check_minutes)("xo")).toBe(false);
    });
});
describe("Tests for check_time functions", function () {
    test('Correct input returns true', function () {
        expect((0, Timefunctions_1.check_time)("17:32")).toBe(true);
    });
    test('Time out of range returns false', function () {
        expect((0, Timefunctions_1.check_time)("24:60")).toBe(false);
    });
    test("Wrong length time returns false", function () {
        expect((0, Timefunctions_1.check_time)("0:17")).toBe(false);
    });
    test('Random string returns false', function () {
        expect((0, Timefunctions_1.check_time)("hadioaj")).toBe(false);
    });
});
