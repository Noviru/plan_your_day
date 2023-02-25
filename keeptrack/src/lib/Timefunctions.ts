import { NumericLiteral } from "typescript";
import { is_number, get_todays_date } from "./DateFunctions";


/**
 * Checks if input hours is correcly written
 * 
 * @param hours number of hours that you want to check
 * @returns true or false whether the input hours is correctly inputted
 */
export function check_hours(hours: string): boolean {
    return is_number(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}

/**
 * Checks if input minutes is correctly written
 * 
 * @param minutes number of minutes that you want to check
 * @returns true or false whether the input minutes is correctly inputted
 */
export function check_minutes(minutes: string): boolean {
    return is_number(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}

/**
 * Turns a time string into a number in the format HH:MM
 * 
 * @param time the time you want to turn into a number
 * @returns number of the time in the format HHMM 
 */
export function time_to_number(time: string): number {
    const split_time: Array<string> = time.split(":", 2);
    const hours: string = split_time[0];
    const minutes: string = split_time[1];
    const time_string: string = hours + minutes;
    return Number(time_string);
}


/**
 * Gives you the current hours of current time
 * 
 * @returns a number of the current hours
 */
function get_current_hours(): number {
    return get_todays_date().getHours();
}

/**
 * Gives you the current minutes of current time
 * 
 * @returns a number of the current minutes
 */
function get_current_minutes(): number {
    return get_todays_date().getMinutes();
}

/**
 * Gives you the current time as a number of format HHMM
 * 
 * @returns number of the current time
 */
function get_current_time_number(): number {
    const current_hours: string = get_current_hours().toString();
    const current_minutes: number = get_current_minutes();
    let current_minutes_string: string = current_minutes.toString();
    if (current_minutes < 10) {
        current_minutes_string = "0" + current_minutes_string; 
    } 
    const current_time_string: string = current_hours + current_minutes_string;
    return Number(current_time_string)
}

/**
 * Checks if input time has passed or not
 * 
 * @param time time to check if it has passed 
 * @returns true or false whether the time has passed or not
 */
export function time_has_passed(time: string) {
    const hour_minute_arr: Array<string> = time.split(":", 2);
    const hours: string = hour_minute_arr[0];
    const minutes: string = hour_minute_arr[1];
    const time_string = hours + minutes
    const time_number: number = Number(time_string);
    return time_number < get_current_time_number();
}

/**
 * Checks if the input time is correctly formated and checks if input time actually exists
 * 
 * @param time input to check if its correctly inputted
 * @returns true or false whether the time is correctly written or not
 */
export function check_time(time: string): boolean {
    const hour_minute_arr: Array<string> = time.split(":", 2);
    const hours: string = hour_minute_arr[0];
    const minutes: string = hour_minute_arr[1];
    if (check_hours(hours) && check_minutes(minutes) && time.length === 5) {
        return true;
    } else {
        return false;
    }
}