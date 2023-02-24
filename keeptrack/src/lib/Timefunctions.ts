import { NumericLiteral } from "typescript";
import { is_number, get_todays_date } from "./DateFunctions";

export function check_hours(hours: string): boolean {
    return is_number(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}

export function check_minutes(minutes: string): boolean {
    return is_number(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}

export function time_to_number(time: string): number {
    const split_time: Array<string> = time.split(":", 2);
    const hours: string = split_time[0];
    const minutes: string = split_time[1];
    const time_string: string = hours + minutes;
    return Number(time_string);
}

function get_current_hours(): number {
    return get_todays_date().getHours();
}

function get_current_minutes(): number {
    return get_todays_date().getMinutes();
}

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

export function time_has_passed(time: string) {
    const hour_minute_arr: Array<string> = time.split(":", 2);
    const hours: string = hour_minute_arr[0];
    const minutes: string = hour_minute_arr[1];
    const time_string = hours + minutes
    const time_number: number = Number(time_string);
    return time_number < get_current_time_number();
}

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