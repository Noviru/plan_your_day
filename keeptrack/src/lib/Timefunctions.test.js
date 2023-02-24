"use strict";
exports.__esModule = true;
var Timefunctions_1 = require("./Timefunctions");
describe('Tests for check_hours function', function () {
    test("correct inpur returns true", function () {
        expect((0, Timefunctions_1.check_hours)("15")).toBe(true);
    });
    test("Hours out of range returns false", function () {
        expect((0, Timefunctions_1.check_hours)("25")).toBe(false);
    });
    test("Random string returns false", function () {
        expect((0, Timefunctions_1.check_hours)("dk")).toBe(false);
    });
});
