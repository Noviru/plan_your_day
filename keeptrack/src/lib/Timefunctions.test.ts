import { check_hours, check_minutes, check_time, time_has_passed, time_to_number } from "./Timefunctions";

describe('Tests for check_hours function', () => {
    test("correct input returns true", () => {
        expect(check_hours("15")).toBe(true);
    })

    test("Hours out of range returns false", () => {
        expect(check_hours("25")).toBe(false);
    })

    test("Random string returns false", () => {
        expect(check_hours("dk")).toBe(false);
    })
})


describe("Tests for check_minutes function", () => {
    test("correct input returns true", () => {
        expect(check_minutes("30")).toBe(true);
    })

    test("Minutes out of range returns false", () => {
        expect(check_minutes("60")).toBe(false);
    })

    test("Random string returns false", () => {
        expect(check_minutes("xo")).toBe(false);
    })
})


describe("Tests for check_time functions", () => {
    test('Correct input returns true', () => {
        expect(check_time("17:32")).toBe(true);
    })
    
    test('Time out of range returns false', () => {
        expect(check_time("24:60")).toBe(false);
    })

    test("Wrong length time returns false", () => {
        expect(check_time("0:17")).toBe(false);
    })

    test('Random string returns false', () => {
        expect(check_time("hadioaj")).toBe(false);
    })
})

describe("Test for time time_to_number", () => {
    test("Input returns correct number", () => {
        expect(time_to_number("17:32")).toBe(1732);
    })
})