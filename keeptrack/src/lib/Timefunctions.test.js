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
describe("Test for the time_to_number function", function () {
    test("Input returns correct number", function () {
        expect((0, Timefunctions_1.time_to_number)("17:32")).toBe(1732);
    });
});
describe("Tests for the time has passed function", function () {
    function past_hour() {
        var past_hour = (0, Timefunctions_1.get_current_hours)() - 1;
        var current_minutes = (0, Timefunctions_1.get_current_minutes)();
        var current_hours_string = past_hour.toString();
        var current_minutes_string = current_minutes.toString();
        if (past_hour < 10) {
            current_hours_string = "0" + current_hours_string;
        }
        if (current_minutes < 10) {
            current_minutes_string = "0" + current_minutes_string;
        }
        var past_hour_string = current_hours_string + ":" + current_minutes_string;
        return past_hour_string;
    }
    function past_minute() {
        var current_hours = (0, Timefunctions_1.get_current_hours)();
        var past_minute = (0, Timefunctions_1.get_current_minutes)() - 1;
        var current_hours_string = current_hours.toString();
        var past_minute_string = past_minute.toString();
        if (current_hours < 10) {
            current_hours_string = "0" + current_hours_string;
        }
        if (past_minute < 10) {
            past_minute_string = "0" + past_minute_string;
        }
        var past_minute_s = current_hours_string + ":" + past_minute_string;
        return past_minute_s;
    }
    console.log(past_hour());
    console.log(past_minute());
    test("Current time returns false", function () {
        expect((0, Timefunctions_1.time_has_passed)((0, Timefunctions_1.get_current_time_string)())).toBe(false);
    });
    test("Past hour returns true", function () {
        expect((0, Timefunctions_1.time_has_passed)(past_hour())).toBe(true);
    });
    test("Past minute returns true", function () {
        expect((0, Timefunctions_1.time_has_passed)(past_minute())).toBe(true);
    });
});
