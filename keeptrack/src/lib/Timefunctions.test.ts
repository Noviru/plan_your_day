import { check_hours, check_minutes, check_time } from "./Timefunctions";

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
        expect(check_hours("30")).toBe(true);
    })

    test("Minutes out of range returns false", () => {
        expect(check_hours("60")).toBe(false);
    })

    test("Random string returns false", () => {
        expect(check_hours("xo")).toBe(false);
    })
})


describe("Tests for check_time functions", () => {
    
})