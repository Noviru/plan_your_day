import { check_hours, check_minutes, check_time, time_has_passed, time_to_number, get_current_time_string, get_current_hours, get_current_minutes } from "./Timefunctions";

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

describe("Test for the time_to_number function", () => {
    test("Input returns correct number", () => {
        expect(time_to_number("17:32")).toBe(1732);
    })
})

describe("Tests for the time has passed function", () => {
    function past_hour(): string {
        const past_hour: number = get_current_hours() - 1; 
        const current_minutes: number = get_current_minutes();
        let current_hours_string: string = past_hour.toString();
        let current_minutes_string: string = current_minutes.toString();
    
        if (past_hour < 10) {
            current_hours_string = "0" + current_hours_string;
        }
    
        if (current_minutes < 10) {
            current_minutes_string = "0" + current_minutes_string; 
        } 
        const past_hour_string: string = current_hours_string + ":" + current_minutes_string;
        return past_hour_string;
    }

    function past_minute(): string {
        const current_hours: number = get_current_hours();
        const past_minute: number = get_current_minutes() - 1;
        let current_hours_string: string = current_hours.toString();
        let past_minute_string: string = past_minute.toString();
    
        if (current_hours < 10) {
            current_hours_string = "0" + current_hours_string;
        }
    
        if (past_minute < 10) {
            past_minute_string = "0" + past_minute_string; 
        } 
        const past_minute_s: string = current_hours_string + ":" + past_minute_string;
        return past_minute_s;
    }
    console.log(past_hour());
    console.log(past_minute());
    test("Current time returns false", () => {
        expect(time_has_passed(get_current_time_string())).toBe(false);
    })

    test("Past hour returns true", () => {
        expect(time_has_passed(past_hour())).toBe(true);
    })

    test("Past minute returns true", () => {
        expect(time_has_passed(past_minute())).toBe(true);
    })   
})